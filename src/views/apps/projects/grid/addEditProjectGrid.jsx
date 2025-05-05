import React, { useCallback, useEffect, useState } from 'react'

import user12 from '@assets/images/avatar/user-12.png'
import user14 from '@assets/images/avatar/user-14.png'
import user15 from '@assets/images/avatar/user-15.png'
import user16 from '@assets/images/avatar/user-16.png'
import user17 from '@assets/images/avatar/user-17.png'
import user18 from '@assets/images/avatar/user-18.png'
import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addProjectGridData, editProjectGridData } from '@src/slices/thunk'
import { X } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Pending', value: 'Pending' },
  { label: 'On Hold', value: 'On Hold' },
  { label: 'Completed', value: 'Completed' },
]

const assigneeOptions = [
  { value: 'Max Boucaut', label: 'Max Boucaut' },
  { value: 'Poppy Dalley', label: 'Poppy Dalley' },
  { value: 'Ethan Zahel', label: 'Ethan Zahel' },
  { value: 'Lucas Griffin', label: 'Lucas Griffin' },
  { value: 'Ryan Frazer', label: 'Ryan Frazer' },
  { value: 'Natasha Tegg', label: 'Natasha Tegg' },
]

const assigneeImages = {
  'Max Boucaut': user14,
  'Poppy Dalley': user17,
  'Ethan Zahel': user16,
  'Lucas Griffin': user12,
  'Ryan Frazer': user18,
  'Natasha Tegg': user15,
}

const AddEditProjectGrid = ({
  modalState,
  closeModal,
  projectGrid,
  editMode = false,
  currentProjectGrid = null,
}) => {
  const dispatch = useDispatch()

  const [preview, setPreview] = useState(null)
  const [dueDate, setDueDate] = useState(null)
  const [progress, setProgress] = useState(100)
  const [status, setStatus] = useState(null)
  const [selectedAssignees, setSelectedAssignees] = useState([])

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    setError,
    control,
    formState: { errors },
  } = useForm()

  // Reset the form when opening the modal in "Add" mode
  const resetForm = useCallback(() => {
    reset({
      image: '',
      projectName: '',
      projectImage:
        'https://images.kcubeinfotech.com/domiex/images/brands/img-01.png',
      clientName: '',
      dueDate: '',
      totalAmount: '',
      progress: '',
      assignees: [{ image: '', name: '' }],
      status: '',
    })
    setPreview(null)
    setDueDate(null)
    setProgress(0)
    setStatus(null)
    setSelectedAssignees([])
    clearErrors()
  }, [reset, clearErrors])

  useEffect(() => {
    if (editMode && currentProjectGrid) {
      clearErrors()
      Object.keys(currentProjectGrid).forEach((key) => {
        setValue(key, currentProjectGrid[key])
      })
      setPreview(currentProjectGrid.image)
      if (currentProjectGrid.dueDate) {
        const parsedDate = new Date(currentProjectGrid.dueDate)
        setDueDate(parsedDate)
      }
      if (currentProjectGrid.progress) {
        setProgress(Number(currentProjectGrid.progress))
      }
      if (currentProjectGrid.status) {
        setStatus({
          label: currentProjectGrid.status,
          value: currentProjectGrid.status,
        })
      }
      const assignees = currentProjectGrid.assignees.map((assignee) => ({
        value: assignee.name,
        label: assignee.name,
      }))
      setSelectedAssignees(assignees)
    } else {
      resetForm()
      setSelectedAssignees([])
    }
  }, [editMode, currentProjectGrid, setValue, reset, clearErrors, resetForm])

  const generateId = (length) => {
    const uniqueNumber = ((length + 1) % 100).toString().padStart(2, '0')
    return `PEP-227${uniqueNumber}`
  }

  const submitForm = (data) => {
    const statusValue = status ? status.value : ''
    const assigneesImagesArray = selectedAssignees.map((option) => ({
      image: assigneeImages[option.value],
      name: option.value,
    }))

    if (editMode && currentProjectGrid) {
      const updatedProjectList = {
        ...data,
        image: preview || '',
        status: statusValue,
        assignees: assigneesImagesArray,
      }
      dispatch(editProjectGridData(updatedProjectList))
    } else {
      const newProjectList = {
        ...data,
        status: statusValue,
        projectId: generateId(projectGrid.length),
        image: preview || '',
        assignees: assigneesImagesArray,
      }
      dispatch(addProjectGridData(newProjectList))
      resetForm()
    }
    onClose()
  }

  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
  }

  const handleStatusChange = (selected, onChange) => {
    setStatus(selected)
    onChange(selected)
  }

  const handleProgressChange = (e) => {
    const value = e.target.value
    const numericValue = Number(value)

    setProgress(numericValue)

    if (isNaN(numericValue) || numericValue < 0 || numericValue > 100) {
      setError('progress', {
        type: 'manual',
        message: 'Progress must be between 0 and 100.',
      })
    } else {
      clearErrors('progress')
    }
  }

  const handleAssigneeChange = (selected, onChange) => {
    setSelectedAssignees(selected || [])
    onChange(selected)
  }

  const customStylesValue = {
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: 'none',
        border: '1px solid #ddd',
        borderRadius: '20px',
        padding: '1px 3px 1px 3px',
      }
    },
    multiValueRemove: (styles) => ({
      ...styles,
      color: '#9ca3af',
      backgroundColor: 'none',
      ':hover': {
        backgroundColor: 'none',
        color: '#9ca3af',
      },
    }),
  }

  const handleCloseModal = (modal) => {
    closeModal(modal)
    clearErrors()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          modalState &&
          (editMode == true
            ? modalState.showEditProjectForm
            : modalState.showAddProjectForm)
        }
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEditProjectForm' : 'showAddProjectForm'
          )
        }
        position="modal-center"
        title={editMode ? 'Edit project' : 'Add project'}
        id={editMode ? 'showEditProjectForm' : 'showAddProjectForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <label htmlFor="projectTitleInput" className="form-label">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="projectTitleInput"
                    className="form-input"
                    placeholder="Project title"
                    {...register('projectName', {
                      required: 'Project name is required.',
                    })}
                  />
                  {errors.projectName && (
                    <span className="text-red-500">
                      {errors.projectName.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="clientName" className="form-label">
                    Client Name
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    className="form-input"
                    placeholder="Enter name"
                    {...register('clientName', {
                      required: 'Client name is required.',
                    })}
                  />
                  {errors.clientName && (
                    <span className="text-red-500">
                      {errors.clientName.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="dueDateInput" className="form-label">
                    Due Date
                  </label>
                  <Flatpickr
                    id="dueDateInput"
                    className="form-input"
                    placeholder="Select due date"
                    value={dueDate || undefined}
                    options={{
                      mode: 'single',
                      dateFormat: 'd M, Y',
                    }}
                    onChange={(date) => {
                      const formattedDate = formatDate(date[0])
                      setValue('dueDate', formattedDate)
                      clearErrors('dueDate')
                    }}
                  />
                  <input
                    type="hidden"
                    {...register('dueDate', {
                      required: 'Due date is required.',
                    })}
                  />
                  {errors.dueDate && (
                    <span className="text-red-500">
                      {errors.dueDate.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="totalAmountInput" className="form-label">
                    Total Amount ($)
                  </label>
                  <input
                    type="text"
                    id="totalAmountInput"
                    className="form-input"
                    placeholder="$00.00"
                    {...register('totalAmount', {
                      required: 'Total amount is required.',
                    })}
                  />
                  {errors.totalAmount && (
                    <span className="text-red-500">
                      {errors.totalAmount.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="progressInput" className="form-label">
                    % Complete
                  </label>
                  <input
                    type="text"
                    id="progressInput"
                    className="form-input"
                    placeholder="0"
                    {...register('progress', {
                      required: 'Progress is required.',
                    })}
                    onChange={handleProgressChange} // Use the updated handler
                  />
                  {errors.progress && (
                    <span className="text-red-500">
                      {errors.progress.message}
                    </span>
                  )}
                  <div className="mt-3 progress-bar progress-1">
                    <div
                      className="text-white progress-bar-wrap bg-gradient-to-r from-primary-500 to-pink-500 via-purple-500"
                      style={{
                        width: `${progress >= 100 ? 100 : progress}%`,
                      }}></div>
                  </div>
                </div>
                <div className="col-span-12">
                  <label htmlFor="assignedSelect" className="form-label">
                    Assignee To
                  </label>
                  <Controller
                    name="assignees"
                    control={control}
                    rules={{ required: 'Assignee is required' }}
                    render={({ field: { onChange } }) => (
                      <Select
                        classNamePrefix="select"
                        id="assignedSelect"
                        options={assigneeOptions}
                        isMulti
                        value={selectedAssignees}
                        onChange={(selected) =>
                          handleAssigneeChange(selected, onChange)
                        }
                        placeholder="Select Assignee To"
                      />
                    )}
                  />
                  {errors.assignees && (
                    <span className="text-red-500">
                      {errors.assignees.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="statusSelect2" className="form-label">
                    Status
                  </label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Select
                        classNamePrefix="select"
                        options={statusOptions}
                        value={status}
                        onChange={(selected) =>
                          handleStatusChange(selected, onChange)
                        }
                        placeholder="Select Status"
                        id="statusSelect2"
                      />
                    )}
                  />
                  {errors.status && (
                    <span className="text-red-500">Status is required</span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-5">
                <button
                  type="button"
                  className="btn btn-active-red"
                  data-modal-close="addProjectModal"
                  onClick={() => onClose()}>
                  <X className="inline-block size-4"></X>
                  <span className="align-baseline">Close</span>
                </button>
                <button className="btn btn-primary" type="submit">
                  {editMode ? 'Update project' : 'Add project'}
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditProjectGrid
