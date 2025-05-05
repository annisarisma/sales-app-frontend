import React, { useEffect, useRef, useState } from 'react'

import {
  editEmailListRecordData,
  setCurrentEmailRecordData,
} from '@src/slices/thunk'
import {
  Archive,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  ImageIcon,
  Link2,
  OctagonAlert,
  Pencil,
  Reply,
  Smile,
  Trash2,
} from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const MailSection = ({
  show,
  handleShowMail,
  mail,
  filteredEmails,
  onClickEmailDelete,
}) => {
  const [mailForm, setMailForm] = useState({
    email: mail?.email || '',
    message: '',
  })
  const [currentMail, setCurrentMail] = useState(mail)

  const mailRef = useRef(null)

  const dispatch = useDispatch()

  const scrollToBottom = () => {
    setTimeout(() => {
      if (mailRef.current) {
        mailRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 200)
  }

  useEffect(() => {
    scrollToBottom()
  }, [mail])

  useEffect(() => {
    setCurrentMail(mail)
    if (mail) {
      setMailForm({ email: mail.email, message: '' })
    }
  }, [mail])

  const handleSendReply = (e) => {
    e.preventDefault()

    if (!mailForm.message.trim() || !currentMail) return

    const replies = currentMail.replies ?? []

    const newReply = {
      _id: replies && replies.length > 0 ? replies.length + 1 : 1,
      sender: currentMail.sender,
      email: currentMail.email,
      avatarImage: currentMail.avatarImage,
      date: new Date().toLocaleString(),
      subject: `Re: ${currentMail.subject}`,
      message: mailForm.message,
    }

    const updatedMail = {
      ...currentMail,
      replies: [...replies, newReply],
    }

    if (updatedMail.replies && updatedMail.replies.length > 0) {
      dispatch(editEmailListRecordData(updatedMail))
      dispatch(setCurrentEmailRecordData(updatedMail))
    }
    scrollToBottom()
    setMailForm({ email: currentMail.email, message: '' })
  }

  if (!mail) return null

  const handleIncreaseIndex = () => {
    const currentIndex = filteredEmails.indexOf(currentMail)
    if (currentIndex < filteredEmails.length - 1) {
      const nextMail = filteredEmails[currentIndex + 1]
      dispatch(setCurrentEmailRecordData(nextMail))
    }
  }

  const handleDecreaseIndex = () => {
    const currentIndex = filteredEmails.indexOf(currentMail)
    if (currentIndex > 0) {
      const previousMail = filteredEmails[currentIndex - 1]
      dispatch(setCurrentEmailRecordData(previousMail))
    }
  }

  return (
    <React.Fragment>
      <div
        className="rounded-l-none card grow"
        style={{ display: show === true ? '' : 'none' }}>
        <div className="flex items-center gap-2 card-header">
          <Link
            to="#!"
            className="btn btn-icon btn-active-gray"
            onClick={() => handleShowMail()}>
            <ArrowLeft className="size-4">ds</ArrowLeft>
          </Link>
          <Link to="#!" className="btn btn-icon btn-active-gray">
            <Archive className="size-4"></Archive>
          </Link>
          <Link to="#!" className="btn btn-icon btn-active-gray">
            <OctagonAlert className="size-4"></OctagonAlert>
          </Link>
          <div className="flex items-center gap-1 mx-auto text-gray-500 dark:text-dark-500">
            <Link to="#!" onClick={() => handleDecreaseIndex()}>
              <ChevronLeft className="size-4"></ChevronLeft>
            </Link>
            <p>
              <span>{mail._id}</span> of <span>{filteredEmails.length}</span>
            </p>
            <Link to="#!" onClick={() => handleIncreaseIndex()}>
              <ChevronRight className="size-4"></ChevronRight>
            </Link>
          </div>
          <Link to="#!" className="btn btn-icon btn-active-gray">
            <Reply className="size-4"></Reply>
          </Link>
          <Link to="#!" className="btn btn-icon btn-active-gray">
            <Clock3 className="size-4"></Clock3>
          </Link>
          <Link
            to="#!"
            data-modal-target="deleteModal"
            onClick={(e) => {
              e.preventDefault()
              onClickEmailDelete(mail)
            }}
            className="btn btn-icon btn-active-red">
            {' '}
            <Trash2 className="size-4"></Trash2>
          </Link>
        </div>

        <SimpleBar className="h-[27rem]">
          <div className="card-body">
            <div>
              <div>
                <div className="flex items-center gap-2">
                  <input
                    id="checkboxBasic1"
                    className="input-check input-check-primary"
                    type="checkbox"
                  />
                  <div className="flex items-center justify-center text-red-500 rounded-full bg-red-500/10 shrink-0 size-10">
                    {mail.avatarImage ? (
                      <img
                        src={mail.avatarImage}
                        alt="avatarImage"
                        className="rounded-full"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <span>{mail.avatarText || 'BS'}</span>
                    )}
                  </div>
                  <div className="grow">
                    <h6>{mail.sender}</h6>
                    <Link
                      to={`mailto:${mail.email}`}
                      className="link link-primary">
                      {mail.email}
                    </Link>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-dark-500 shrink-0">
                    {mail.date}
                  </p>
                </div>
                <div className="mt-5">
                  <h6 className="mb-3">{mail.subject}</h6>

                  <div className="space-y-2">
                    <p>{mail.message}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-4">
                    <Link
                      to="#!"
                      className="flex items-center gap-2 p-2 transition duration-300 ease-linear border border-gray-200 border-dashed rounded-md dark:border-dark-800 hover:border-gray-300 dark:hover:border-dark-700 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850">
                      <div className="flex items-center justify-center font-semibold text-gray-500 transition duration-200 ease-linear bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 shrink-0 size-10">
                        <FileText className="size-4"></FileText>
                      </div>
                      <div className="grow">
                        <h6>shopify-docs.txt</h6>
                        <p className="text-sm text-gray-500 dark:text-dark-500">
                          154 kb
                        </p>
                      </div>
                      <div className="shrink-0">
                        <Download className="text-gray-500 dark:text-dark-500 dark:fill-dark-850 size-5 fill-gray-200"></Download>
                      </div>
                    </Link>
                    <Link
                      to="#!"
                      className="flex items-center gap-2 p-2 transition duration-300 ease-linear border border-gray-200 border-dashed rounded-md dark:border-dark-800 hover:border-gray-300 dark:hover:border-dark-700 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850">
                      <div className="flex items-center justify-center font-semibold text-gray-500 transition duration-200 ease-linear bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 shrink-0 size-10">
                        <ImageIcon className="size-4"></ImageIcon>
                      </div>
                      <div className="grow">
                        <h6>main-logo.png</h6>
                        <p className="text-sm text-gray-500">467 kb</p>
                      </div>
                      <div className="shrink-0">
                        <Download className="text-gray-500 size-5 fill-gray-200 dark:text-dark-500 dark:fill-dark-850"></Download>
                      </div>
                    </Link>
                  </div>
                  <p className="mt-4">Best regards,</p>
                  <p>{mail.sender}</p>
                </div>
              </div>
              <div>
                {mail.replies && mail.replies.length > 0 && (
                  <>
                    {mail.replies.map((reply, index) => (
                      <div key={index} className="mt-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center text-green-500 bg-green-100 rounded-full shrink-0 size-10">
                            {reply.avatarImage ? (
                              <img
                                src={reply.avatarImage}
                                alt="replyImg"
                                className="rounded-full"
                                width={40}
                                height={40}
                                onError={(e) => {
                                  e.currentTarget.src =
                                    'https://images.kcubeinfotech.com/domiex/images/avatar/user-18.png'
                                }}
                              />
                            ) : (
                              <span>
                                {reply.sender
                                  .split(' ')
                                  .map((word) => word.charAt(0).toUpperCase())
                                  .join('') || 'BS'}
                              </span>
                            )}
                          </div>
                          <div className="grow">
                            <h6>{reply.sender}</h6>
                            <Link
                              to={`mailto:${reply.email}`}
                              className="link link-primary">
                              {reply.email}
                            </Link>
                          </div>
                          <p className="text-xs text-gray-500 shrink-0">
                            {reply.date}
                          </p>
                        </div>
                        <div className="mt-5">
                          <h6 className="mb-3">{reply.subject}</h6>
                          <div className="space-y-2">
                            <p>{reply.message}</p>
                          </div>
                          <p className="mt-4">Best regards,</p>
                          <p>{reply.sender}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div ref={mailRef} />
            </div>
          </div>
        </SimpleBar>

        <div className="card-body">
          <div className="mb-0 shadow-none card">
            <form action="" onSubmit={handleSendReply}>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 dark:text-dark-500">To:</p>
                  <input
                    type="text"
                    className="h-auto p-0 border-0 form-input"
                    placeholder="Type email"
                    value={mailForm.email}
                    onChange={(e) =>
                      setMailForm({ ...mailForm, email: e.target.value })
                    }
                  />
                  <Link to="#!" className="link link-primary">
                    Cc
                  </Link>
                  <Link to="#!" className="link link-primary">
                    Bcc
                  </Link>
                </div>
              </div>
              <div className="p-4 pt-1 card-body">
                <textarea
                  className="h-auto p-0 border-0 resize-none form-input"
                  rows={3}
                  placeholder="Type something ..."
                  value={mailForm.message}
                  onChange={(e) =>
                    setMailForm({ ...mailForm, message: e.target.value })
                  }
                  onKeyDown={(e) =>
                    e.key === 'Enter' && handleSendReply(e)
                  }></textarea>
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <label
                      htmlFor="sendImages"
                      className="btn btn-active-gray btn-icon">
                      <ImageIcon className="size-5" />
                    </label>
                    <input type="file" id="sendImages" className="hidden" />
                  </div>
                  <button type="button" className="link link-primary shrink-0">
                    <Link2 className="size-5" />
                  </button>
                  <button type="button" className="link link-primary shrink-0">
                    <Pencil className="size-5" />
                  </button>
                  <button type="button" className="link link-yellow shrink-0">
                    <Smile className="size-5" />
                  </button>
                  <button
                    type="button"
                    className="ml-auto btn btn-sub-gray shrink-0">
                    Draft
                  </button>
                  <button type="submit" className="btn btn-primary shrink-0">
                    Send Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MailSection
