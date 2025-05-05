import React, { useEffect, useRef, useState } from 'react'

import { videoGroupChat } from '@src/data'
import { SendHorizontal } from 'lucide-react'
import SimpleBar from 'simplebar-react'

const GroupVideoChat = () => {
  const [chatMessageList, setChatMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (videoGroupChat) {
      setChatMessageList(videoGroupChat)
    }
  }, [])

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return
    const newChatMessage = {
      id:
        chatMessageList && chatMessageList.length > 0
          ? chatMessageList.length + 1
          : 1,
      roomId: 3,
      avatar:
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-17.png',
      name: 'Sophia Mia',
      message: newMessage,
      time: new Date().toLocaleTimeString([], {
        minute: '2-digit',
        second: '2-digit',
      }),
    }
    setChatMessageList([...chatMessageList, newChatMessage])
    setNewMessage('')
  }
  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 200)
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessageList])
  // Scroll to bottom function

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Group Chat</h6>
        </div>
        <div className="card-body">
          <SimpleBar className="max-h-64 -mx-space px-space">
            <div className="space-y-2" id="chat-messages">
              {chatMessageList &&
                chatMessageList.length > 0 &&
                chatMessageList.map((message, index) => (
                  <div className="flex gap-2" key={index}>
                    <div className="relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 dark:bg-dark-850 rounded-full size-10 shrink-0 group-[&.right]/chat:order-2">
                      <img
                        src={message.avatar}
                        alt="chatMessageListImg"
                        className="rounded-full"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="grow">
                      <h6 className="mb-1">{message.name}</h6>
                      <p className="text-gray-500 dark:text-dark-500">
                        {message.message}
                      </p>
                    </div>
                    <div className="self-end ml-3 text-gray-500 dark:text-dark-500 shrink-0">
                      {message.time}
                    </div>
                  </div>
                ))}
              <div ref={messagesEndRef} />
            </div>
          </SimpleBar>
        </div>
        <div className="flex items-center gap-2 pt-0 card-body">
          <label htmlFor="sendMessage" className="hidden">
            sendMessage
          </label>
          <input
            type="text"
            id="sendMessage"
            className="form-input"
            placeholder="Type something ..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            title="send btn"
            className="btn btn-primary btn-icon shrink-0"
            onClick={handleSendMessage}>
            <SendHorizontal className="size-4" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default GroupVideoChat
