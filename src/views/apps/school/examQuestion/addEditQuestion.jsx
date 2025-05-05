import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addQuestionListData, editQuestionListData } from '@src/slices/thunk'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const difficult = [
  { label: 'Normal', value: 'Normal' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Hard', value: 'Hard' },
]

const questionTypee = [
  { label: 'MCQ', value: 'MCQ' },
  { label: 'Q & A', value: 'Q & A' },
]

const statusOptions = [
  { label: 'New', value: 'New' },
  { label: 'Old', value: 'Old' },
]

const AddEditQuestion = ({
  modalState,
  closeModal,
  questionList,
  editMode,
  currentQuestion,
}) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm()

  const [questionType, setQuestionType] = useState(null)
  const [questionDifficute, setQuestionDifficute] = useState(null)
  const [questionStatus, setQuestionStatus] = useState(null)

  const handleQuestionChange = (selectedOption) => {
    setQuestionType(selectedOption)
    setValue('type', selectedOption?.value || '')
    clearErrors('type')
  }

  const handleQuestionDifficuteChange = (selectedOption) => {
    setQuestionDifficute(selectedOption)
    setValue('difficulty', selectedOption?.value || '')
    clearErrors('difficulty')
  }

  const handleQuestionStatusChange = (selectedOption) => {
    setQuestionStatus(selectedOption)
    setValue('status', selectedOption?.value || '')
    clearErrors('status')
  }

  useEffect(() => {
    clearErrors()
    if (editMode && currentQuestion) {
      Object.keys(currentQuestion).forEach((key) => {
        setValue(key, currentQuestion[key])
        // Set selected values for Select components
        if (key === 'type') {
          setQuestionType(
            questionTypee.find(
              (option) => option.value === currentQuestion.type
            ) || null
          )
        }
        if (key === 'difficulty') {
          setQuestionDifficute(
            difficult.find(
              (option) => option.value === currentQuestion.difficulty
            ) || null
          )
        }
        if (key === 'status') {
          setQuestionStatus(
            statusOptions.find(
              (option) => option.value === currentQuestion.status
            ) || null
          )
        }
      })
    } else {
      reset({
        _id: 0,
        question: '',
        options: ['', '', '', ''],
        type: '',
        difficulty: '',
        status: '',
      })
      setQuestionType(null)
      setQuestionDifficute(null)
      setQuestionStatus(null)
    }
  }, [editMode, currentQuestion, setValue, reset, clearErrors])

  const submitForm = (data, onClose) => {
    clearErrors()
    if (editMode && currentQuestion) {
      const updatedQuestionList = { ...data }
      dispatch(editQuestionListData(updatedQuestionList))
    } else {
      const newQuestion = {
        ...data,
        _id: questionList[questionList.length - 1]._id + 1,
      }
      dispatch(addQuestionListData(newQuestion))
    }
    reset()
    onClose()
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
            ? modalState.showEditStaffForm
            : modalState.showAddStaffForm)
        }
        onClose={() =>
          handleCloseModal(editMode ? 'showEditStaffForm' : 'showAddStaffForm')
        }
        position="modal-center"
        title={editMode ? 'Edit Question' : 'Add Question'}
        id={editMode ? 'showEditStaffForm' : 'showAddStaffForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <label htmlFor="questionInput" className="form-label">
                    Question
                  </label>
                  <input
                    type="text"
                    id="questionInput"
                    className="form-input"
                    placeholder="Enter question"
                    {...register('question', {
                      required: 'Question is required.',
                    })}
                  />
                  {errors.question && (
                    <span className="text-red-500">
                      {errors.question.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="option1Input" className="form-label">
                    Option 1
                  </label>
                  <input
                    type="text"
                    id="option1Input"
                    className="form-input"
                    placeholder="Option one"
                    {...register('options.0', {
                      required: 'Option is required.',
                    })}
                  />
                  {errors.options?.[0] && (
                    <span className="text-red-500">
                      {errors.options[0].message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="option2Input" className="form-label">
                    Option 2
                  </label>
                  <input
                    type="text"
                    id="option2Input"
                    className="form-input"
                    placeholder="Option two"
                    {...register('options.1', {
                      required: 'Option is required.',
                    })}
                  />
                  {errors.options?.[1] && (
                    <span className="text-red-500">
                      {errors.options[1].message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="option3Input" className="form-label">
                    Option 3
                  </label>
                  <input
                    type="text"
                    id="option3Input"
                    className="form-input"
                    placeholder="Option three"
                    {...register('options.2', {
                      required: 'Option is required.',
                    })}
                  />
                  {errors.options?.[2] && (
                    <span className="text-red-500">
                      {errors.options[2].message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="option4Input" className="form-label">
                    Option 4
                  </label>
                  <input
                    type="text"
                    id="option4Input"
                    className="form-input"
                    placeholder="Option four"
                    {...register('options.3', {
                      required: 'Option is required.',
                    })}
                  />
                  {errors.options?.[3] && (
                    <span className="text-red-500">
                      {errors.options[3].message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="itemTypeSelect" className="form-label">
                    Item Type
                  </label>
                  <Select
                    classNamePrefix="select"
                    options={questionTypee}
                    value={questionType}
                    onChange={handleQuestionChange}
                    placeholder="Enter type"
                  />
                  <input
                    type="hidden"
                    {...register('type', {
                      required: 'Item Type is required.',
                    })}
                  />
                  {errors.type && (
                    <span className="text-red-500">{errors.type.message}</span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="difficultLevelSelect" className="form-label">
                    Difficult Level
                  </label>
                  <Select
                    classNamePrefix="select"
                    options={difficult}
                    value={questionDifficute}
                    onChange={handleQuestionDifficuteChange}
                    placeholder="Difficulty Level"
                  />
                  <input
                    type="hidden"
                    {...register('difficulty', {
                      required: 'Add difficulty level.',
                    })}
                  />
                  {errors.difficulty && (
                    <span className="text-red-500">
                      {errors.difficulty.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="statusSelect" className="form-label">
                    Status
                  </label>
                  <Select
                    classNamePrefix="select"
                    options={statusOptions}
                    value={questionStatus}
                    onChange={handleQuestionStatusChange}
                    placeholder="Question status"
                  />
                  <input
                    type="hidden"
                    {...register('status', { required: 'status is required' })}
                  />
                  {errors.status && (
                    <span className="text-red-500">
                      {errors.status.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-5">
                <button
                  type="button"
                  className="btn btn-active-red"
                  onClick={() => onClose()}>
                  <X className="inline-block size-4" />
                  <span className="align-baseline">Close</span>
                </button>
                <button type="submit" className="btn btn-primary">
                  {editMode ? 'Edit Question' : 'Add Question'}
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditQuestion
