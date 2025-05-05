import React, { useEffect, useRef, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { ChevronLeft, Phone, SendHorizontal } from 'lucide-react'
import SimpleBar from 'simplebar-react'

const MessageModal = ({
  messageOpen,
  closeModal,
  selectedDeal,
  handleOpenModal,
}) => {
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])

  const messageRef = useRef(null)

  useEffect(() => {
    if (selectedDeal) {
      setMessages(selectedDeal.messages)
    }
  }, [selectedDeal])

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessageObject = {
        id: new Date.now(),
        text: newMessage,
        sender: 'user',
      }
      setMessages([...messages, newMessageObject])
      setNewMessage('')
    }
  }

  // Scroll to bottom function
  const scrollToBottom = () => {
    setTimeout(() => {
      if (messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 200)
  }

  // Call scrollToBottom when key moments are added
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <React.Fragment>
      <Modal
        isOpen={messageOpen}
        onClose={() => closeModal()}
        position="modal-br"
        id="callModal"
        contentClass="modal-content"
        size="modal-sm"
        content={(onClose) => (
          <>
            {selectedDeal && (
              <>
                <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-md dark:bg-dark-850">
                  <button
                    data-modal-close="messageModal"
                    className="p-0 text-gray-500 dark:text-dark-500 btn btn-icon-text size-10 hover:text-gray-800 dark:hover:text-dark-50 shrink-0">
                    <ChevronLeft></ChevronLeft>
                  </button>
                  <img
                    src={selectedDeal.userimage}
                    height={40}
                    width={40}
                    alt="selectedDealImg"
                    className="rounded-full size-10"
                  />
                  <div className="grow">
                    <h6>Sophia Mia</h6>
                    <p className="text-xs text-gray-500 dark:text-dark-500">
                      {' '}
                      <span className="inline-block bg-green-500 size-1.5 rounded-full ltr:mr-0.5 rtl:ml-0.5 align-middle"></span>
                      Active
                    </p>
                  </div>
                  <button
                    type="button"
                    data-modal-close="messageModal"
                    data-modal-target="callModal"
                    onClick={() => handleOpenModal(selectedDeal)}
                    className="p-0 btn btn-sub-red shrink-0 btn-icon-text size-10">
                    <Phone className="size-5" />
                  </button>
                </div>
                <SimpleBar className="px-5 mt-4 -mx-5 min-h-72 max-h-72">
                  <div className="space-y-3">
                    {messages.map((message) => (
                      <div key={message.id}>
                        {message.sender === 'user' ? (
                          <div className="flex gap-2 group [&.right]:justify-end">
                            <div className="rounded-full size-9 group-[&.right]:order-2">
                              <img
                                src={selectedDeal.userimage}
                                height={36}
                                width={36}
                                alt="selectedDealImg"
                                className="rounded-full"
                              />
                            </div>
                            <div className="py-2 px-3 text-sm font-medium rounded-md bg-gray-100 dark:bg-dark-850 max-w-64 text-gray-500 dark:text-dark-500 ltr:rounded-bl-none rtl:rounded-br-none group-[&.right]:bg-primary-100 group-[&.right]:text-primary-500 group-[&.right]:order-1 ltr:group-[&.right]:rounded-br-none rtl:group-[&.right]:rounded-bl-none ltr:group-[&.right]:rounded-bl-md rtl:group-[&.right]:rounded-br-md">
                              {message.text}
                            </div>
                          </div>
                        ) : (
                          <div className="flex gap-2 right group [&.right]:justify-end">
                            <div className="rounded-full size-9 group-[&.right]:order-2">
                              <img
                                src="https://images.kcubeinfotech.com/domiex/images/avatar/user-14.png"
                                height={36}
                                width={36}
                                alt="selectedDealImg"
                                className="rounded-full"
                              />
                            </div>
                            <div className="py-2 px-3 text-sm font-medium rounded-md bg-gray-100 dark:bg-dark-850 max-w-64 text-gray-500 dark:text-dark-500 ltr:rounded-bl-none rtl:rounded-br-none group-[&.right]:bg-primary-100 group-[&.right]:text-primary-500 group-[&.right]:order-1 ltr:group-[&.right]:rounded-br-none rtl:group-[&.right]:rounded-bl-none ltr:group-[&.right]:rounded-bl-md rtl:group-[&.right]:rounded-br-md">
                              {message.text}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div ref={messageRef}></div>
                </SimpleBar>
                <div className="relative flex mt-4">
                  <input
                    type="text"
                    placeholder="Say something..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    autoComplete="off"
                    autoFocus
                    className="ltr:pr-12 rtl:pl-12 form-input"
                  />
                  <div className="absolute inset-y-0 items-center hidden ltr:right-1 rtl:left-1 sm:flex">
                    <button
                      type="button"
                      onClick={sendMessage}
                      className="inline-flex items-center justify-center text-white transition duration-200 ease-in-out rounded-md size-8 bg-primary-500 hover:bg-primary-600 focus:outline-hidden">
                      <SendHorizontal className="size-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      />
    </React.Fragment>
  )
}

export default MessageModal
