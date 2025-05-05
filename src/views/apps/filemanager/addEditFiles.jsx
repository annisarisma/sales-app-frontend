import React, { useEffect } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { editFileRecordData } from '@src/slices/thunk'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const AddEditFiles = ({ closeModal, editMode = false, currentFile }) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (editMode && currentFile) {
      clearErrors()
      Object.keys(currentFile).forEach((key) => {
        setValue(key, currentFile[key])
      })
    } else {
      reset()
    }
  }, [editMode, currentFile, setValue, reset, clearErrors])

  const submitForm = (data, onClose) => {
    if (editMode && currentFile) {
      const updatedFile = { ...data }
      dispatch(editFileRecordData(updatedFile))
    }
    onClose()
    clearErrors()
    reset()
  }
  return (
    <React.Fragment>
      <Modal
        title="Rename Files"
        isOpen={editMode}
        onClose={() =>
          closeModal(editMode ? 'showEditCustomerForm' : 'showAddCustomerForm')
        }
        position="modal-center"
        id={editMode ? 'showEditCustomerForm' : 'showAddCustomerForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div>
                <label htmlFor="renameTitle" className="form-label">
                  Rename Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="renameTitle"
                  className="form-input dark:bg-dark-800 dark:border-dark-500"
                  placeholder="Enter rename file"
                  {...register('documentName', {
                    required: 'This field is required.',
                  })}
                />
                {errors.documentName && (
                  <span className="text-red-500">
                    {errors.documentName.message}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-end gap-2 mt-space">
                <button
                  type="button"
                  className="btn btn-active-red"
                  data-modal-close="renameFileModal"
                  onClick={() => onClose()}>
                  Close <X className="inline-block ltr:ml-1 rtl:mr-1 size-4" />
                </button>
                <button type="submit" className="btn btn-primary">
                  Rename File
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditFiles
