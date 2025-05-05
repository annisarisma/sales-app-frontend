import React from 'react'

import { Download, FileArchive, FileImage, FileText, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const GroupInfo = ({ currentChat }) => {
  return (
    <React.Fragment>
      {currentChat && (
        <div className="col-span-12 2xl:col-span-3 card">
          <div className="card-body">
            <div className="text-center">
              <div className="relative flex items-center justify-center p-4 font-semibold transition duration-200 ease-linear bg-green-500/10 rounded-full size-24 mx-auto shrink-0 group-[&.unread]/item:bg-white dark:group-[&.unread]/item:bg-dark-900">
                <img
                  src={
                    currentChat.image ||
                    'https://images.kcubeinfotech.com/domiex/images/brands/img-27.png'
                  }
                  alt="currentChatImg"
                  className="rounded-full"
                  width={64}
                  height={64}
                />
              </div>
              <h6 className="mt-3">{currentChat.name || 'New Group'}</h6>
              <p className="text-gray-500 dark:text-dark-500">
                Create by admin
              </p>
            </div>
            <div>
              <div className="flex items-center mt-5 mb-1">
                <h6 className="grow">
                  Member (
                  <span>
                    {currentChat.members && currentChat.members.length}
                  </span>
                  )
                </h6>
                <Link to="#!" className="link link-primary">
                  <Plus className="inline-block size-4" /> Add
                </Link>
              </div>

              <SimpleBar className="px-5 -mx-5 max-h-72">
                <div className="space-y-4">
                  {currentChat &&
                    currentChat.members &&
                    currentChat.members.length > 0 &&
                    currentChat.members.map((member, index) => (
                      <Link
                        to="#!"
                        className="flex items-center gap-2"
                        key={index}>
                        <div className="flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 shrink-0 size-6">
                          <img
                            src={member.avatar}
                            alt="currentChatImg"
                            className="rounded-full"
                            width={24}
                            height={24}
                          />
                        </div>
                        <h6 className="grow">{member.name}</h6>
                        <p className="text-gray-500 dark:text-dark-500">
                          {member.role}
                        </p>
                      </Link>
                    ))}
                </div>
              </SimpleBar>

              <div className="mt-5">
                <h6 className="mb-2">Attachments</h6>
                <SimpleBar className="px-5 -mx-5 max-h-36">
                  <div className="space-y-3">
                    <Link
                      to="#!"
                      className="flex items-center gap-2 p-2 transition duration-300 ease-linear border border-gray-200 border-dashed rounded-md dark:border-dark-800 hover:border-gray-300 dark:hover:border-dark-700 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850">
                      <div className="flex items-center justify-center font-semibold text-gray-500 transition duration-200 ease-linear bg-gray-100 rounded-full shrink-0 size-10 dark:bg-dark-850">
                        <FileText className="size-4" />
                      </div>
                      <div className="grow">
                        <h6>shopify-docs.txt</h6>
                        <p className="text-sm text-gray-500 dark:text-dark-500">
                          154 kb
                        </p>
                      </div>
                      <div className="shrink-0">
                        <Download className="text-gray-500 dark:text-dark-500 size-5 fill-gray-200 dark:fill-dark-850" />
                      </div>
                    </Link>
                    <Link
                      to="#!"
                      className="flex items-center gap-2 p-2 transition duration-300 ease-linear border border-gray-200 border-dashed rounded-md dark:border-dark-800 hover:border-gray-300 dark:hover:border-dark-700 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850">
                      <div className="flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 shrink-0 size-10">
                        <FileImage className="size-4" />
                      </div>
                      <div className="grow">
                        <h6>main-logo.png</h6>
                        <p className="text-sm text-gray-500 dark:text-dark-500">
                          467 kb
                        </p>
                      </div>
                      <div className="shrink-0">
                        <Download className="text-gray-500 size-5 dark:text-dark-500 fill-gray-200 dark:fill-dark-800" />
                      </div>
                    </Link>
                    <Link
                      to="#!"
                      className="flex items-center gap-2 p-2 transition duration-300 ease-linear border border-gray-200 border-dashed rounded-md dark:border-dark-800 hover:border-gray-300 dark:hover:border-dark-700 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850">
                      <div className="flex items-center justify-center font-semibold text-gray-500 transition duration-200 ease-linear bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 shrink-0 size-10">
                        <FileArchive className="size-4" />
                      </div>
                      <div className="grow">
                        <h6>chat.zip</h6>
                        <p className="text-sm text-gray-500 dark:text-dark-500">
                          48 mb
                        </p>
                      </div>
                      <div className="shrink-0">
                        <Download className="text-gray-500 dark:text-dark-500 size-5 fill-gray-200 dark:fill-dark-850" />
                      </div>
                    </Link>
                  </div>
                </SimpleBar>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default GroupInfo
