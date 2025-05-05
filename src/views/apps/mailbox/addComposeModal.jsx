import React, { useCallback } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addEmailListRecordData } from '@src/slices/thunk'
import { ImagePlus, Link2, Pencil, Smile } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const AddComposeModal = ({ isModalOpen, onClose, mailList }) => {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    onClose()
    resetForm()
  }

  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const time = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
    return `${day} ${month}, ${time}`
  }

  // Initialize the default email values for the form
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      _id: mailList && mailList.length > 0 ? mailList.length + 1 : 1,
      sender: '',
      email: '',
      date: formatDate(new Date()),
      subject: '',
      message: '',
      avatarText: '',
      avatarColor: 'bg-red-500/10',
      badges: ['Inbox'],
      type: 'sent',
      replies: [],
    },
  })

  const validateEmailField = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      return 'Email is required.'
    } else if (!emailPattern.test(email)) {
      return 'Invalid email format.'
    }
    return true
  }

  const submitForm = (data, onClose) => {
    let isValid = true

    const emailValidation = validateEmailField(data.email || '')
    if (emailValidation !== true) {
      setError('email', { type: 'manual', message: emailValidation })
      isValid = false
    } else {
      clearErrors('email')
    }

    if (!data.subject) {
      setError('subject', { type: 'manual', message: 'Subject is required.' })
      isValid = false
    } else {
      clearErrors('subject')
    }

    if (!data.message) {
      setError('message', { type: 'manual', message: 'Message is required.' })
      isValid = false
    } else {
      clearErrors('message')
    }

    if (isValid) {
      const newRecord = {
        ...data,
        _id: mailList && mailList.length > 0 ? mailList.length + 1 : 1,
        date: formatDate(new Date()),
        sender: data.email.split('@')[0],
        avatarText: data.email.split('@')[0].slice(0, 2).toUpperCase(),
      }
      dispatch(addEmailListRecordData(newRecord))
      resetForm()
      onClose()
    }
  }

  const resetForm = useCallback(() => {
    reset()
  }, [reset])

  return (
    <React.Fragment>
      <Modal
        isOpen={isModalOpen}
        onClose={() => handleCloseModal()}
        position="modal-top"
        id={'addComposeModals'}
        contentClass="modal-content"
        size="modal-lg"
        content={(onClose) => (
          <>
            <form
              action="#!"
              onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 dark:text-dark-500">To:</p>
                  <input
                    type="text"
                    className="h-auto px-0 border-0 form-input"
                    placeholder="Type email"
                    {...register('email', { required: 'Email is required.' })}
                  />
                  <Link to="#!" className="link link-primary">
                    Cc
                  </Link>
                  <Link to="#!" className="link link-primary">
                    Bcc
                  </Link>
                </div>
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>

              <div className="py-2 border-gray-200 dark:border-dark-800 border-y">
                <input
                  type="text"
                  className="h-auto p-0 border-0 form-input"
                  placeholder="Subject"
                  {...register('subject', { required: 'Subject is required.' })}
                />
                {errors.subject && (
                  <p className="text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <div>
                  <textarea
                    className="h-auto px-0 border-0 resize-none form-input"
                    rows={3}
                    placeholder="Type something ..."
                    {...register('message', {
                      required: 'Message is required.',
                    })}></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div className="shrink-0">
                    <label
                      htmlFor="sendImages"
                      className="btn btn-active-gray btn-icon">
                      <ImagePlus className="size-5" />
                    </label>
                    <input type="file" id="sendImages" className="hidden" />
                  </div>
                  <button type="button" className="link link-primary shrink-0">
                    <Link2 className="size-5" />
                  </button>
                  <button type="button" className="link link-primary shrink-0">
                    <Pencil className="size-5" />
                  </button>
                  <button
                    type="button"
                    className="mr-auto link link-yellow shrink-0">
                    <Smile className="size-5" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-sub-gray shrink-0"
                    onClick={onClose}>
                    Draft
                  </button>
                  <button type="submit" className="btn btn-primary shrink-0">
                    Send Now
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddComposeModal
