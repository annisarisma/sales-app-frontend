import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import LiveChat from '@views/uiAdvanced/uiAdvanced3d/liveChat'
import ChatBot from '@views/uiAdvanced/uiAdvancedBot/defaultChatBot'

const Boat = () => {
  useEffect(() => {
    document.title = 'Boat | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Bot" subTitle="UI Advanced" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Default ChatBot</h6>
          </div>
          <div className="grid items-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 card-body">
            <div className="flex flex-col rounded-md shadow-lg shadow-gray-200 dark:shadow-dark-800 dark:bg-dark-900">
              <div className="p-4 text-white bg-gradient-to-tr from-primary-500 to-purple-500 rounded-t-md">
                <div>
                  <h6 className="mb-1 text-16">ChatBot</h6>
                  <p className="text-xs text-white/75">Online</p>
                </div>
              </div>
              <ChatBot />
            </div>

            <div className="flex flex-col rounded-md shadow-lg shadow-gray-200 dark:shadow-dark-800 dark:bg-dark-900">
              <div className="p-4 text-white bg-gradient-to-br from-green-500 to-sky-500 rounded-t-md">
                <div>
                  <h6 className="mb-1 text-16">ChatBot</h6>
                  <p className="text-xs text-white/75">Online</p>
                </div>
              </div>
              <ChatBot />
            </div>

            <div className="flex flex-col rounded-md shadow-lg shadow-gray-200 dark:shadow-dark-800 dark:bg-dark-900">
              <div className="p-4 bg-gradient-to-br from-primary-500/20 via-green-500/20 to-purple-500/20 rounded-t-md">
                <div>
                  <h6 className="mb-1 text-16">ChatBot</h6>
                  <p className="text-xs text-gray-500 dark:text-dark-500">
                    Online
                  </p>
                </div>
              </div>
              <ChatBot />
            </div>
          </div>
        </div>
        <LiveChat />
      </div>
    </React.Fragment>
  )
}

export default Boat
