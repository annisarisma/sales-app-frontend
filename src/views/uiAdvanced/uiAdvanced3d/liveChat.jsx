import React, { useState } from 'react'

import ChatBot from '../uiAdvancedBot/defaultChatBot'

const LiveChat = () => {
  const [showBot, setShowBot] = useState(false)

  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Live ChatBot</h6>
        </div>
        <div className="flex items-center gap-5 card-body">
          <button
            type="button"
            className="text-white btn bg-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600"
            onClick={() => {
              setShowBot(!showBot)
            }}>
            Live Chatbox
          </button>
          {showBot && (
            <div className="fixed z-drawer ltr:right-5 rtl:left-5 ltr:md:right-8 rtl:md:left-8 bottom-8 md:w-96">
              <div className="flex flex-col bg-white rounded-md shadow-lg shadow-gray-200 dark:shadow-dark-800 dark:bg-dark-900">
                <div className="p-4 text-white bg-gradient-to-tr from-primary-500 to-purple-500 rounded-t-md">
                  <div>
                    <h6 className="mb-1 text-16">ChatBot</h6>
                    <p className="text-xs text-white/75">Online</p>
                  </div>
                </div>
                <ChatBot />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default LiveChat
