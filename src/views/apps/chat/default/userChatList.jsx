import React from 'react'

import MessageComponent from '@src/components/Common/MessageComponent'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const UserChatList = ({
  chatMessageList,
  searchContact,
  searchValue,
  handleAddNewContact,
  currentChat,
  onSelectChat,
}) => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-4 2xl:col-span-3 card">
        <div className="card-body">
          <div className="relative group/form">
            <input
              type="text"
              className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
              placeholder="Search for ..."
              value={searchValue}
              onChange={(e) => searchContact(e.target.value)}
            />
            <button
              title="search btn"
              className="absolute inset-y-0 flex items-center text-gray-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
              <Search className="size-4" />
            </button>
          </div>
          <div className="py-4">
            <button
              type="button"
              data-modal-target="addNewChatModals"
              className="w-full btn btn-primary"
              onClick={handleAddNewContact}>
              Start New Chat
            </button>
          </div>
          <SimpleBar className="max-h-[calc(100vh_-_22.5rem)] -mx-space">
            <ul className="space-y-3">
              {chatMessageList && chatMessageList.length > 0 ? (
                chatMessageList.map((item, index) => (
                  <li key={index} onClick={() => onSelectChat(item)}>
                    <Link
                      to="#!"
                      className={`${currentChat && currentChat._id === item._id ? ' active' : ''} flex items-center gap-2 px-space py-2.5 hover:bg-gray-50 dark:hover:bg-dark-850 [&.active]:bg-primary-500/10 transition ease-linear duration-300 group/item ${item.unread > 0 ? 'unread' : ''} `}>
                      <div className="relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 size-10 shrink-0">
                        {item.receiverImage ? (
                          <img
                            src={item.receiverImage}
                            alt="receiverImage"
                            className="rounded-full"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <span>{item.name[0]}</span>
                        )}
                        <span className="absolute bottom-0 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full ltr:right-0.5 rtl:left-0.5 size-2.5"></span>
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="mb-0.5">{item.name}</h6>
                        <p
                          className={`text-sm group-[&.unread]/item:font-medium truncate group-[&.unread]/item:text-gray-950 text-gray-500 dark:text-dark-500 dark:group-[&.unread]/item:text-gray-50 ${item.unread > 0 ? 'unread' : ''}`}>
                          {item.lastMessage && (
                            <MessageComponent message={item.lastMessage} />
                          )}
                        </p>
                      </div>
                      <div className="ltr:text-right rtl:text-left shrink-0">
                        <p className="mb-1 text-xs text-gray-500 dark:text-dark-500"></p>
                        {item.unread > 0 && (
                          <span className="badge-sub-red badge-square size-5">
                            {item.unread}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="mx-auto size-12"
                    viewBox="0 0 48 48">
                    <linearGradient
                      id="SVGID_1__h35ynqzIJzH4_gr1"
                      x1="34.598"
                      x2="15.982"
                      y1="15.982"
                      y2="34.598"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#60e8fe"></stop>
                      <stop offset=".033" stopColor="#6ae9fe"></stop>
                      <stop offset=".197" stopColor="#97f0fe"></stop>
                      <stop offset=".362" stopColor="#bdf5ff"></stop>
                      <stop offset=".525" stopColor="#dafaff"></stop>
                      <stop offset=".687" stopColor="#eefdff"></stop>
                      <stop offset=".846" stopColor="#fbfeff"></stop>
                      <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGID_1__h35ynqzIJzH4_gr1)"
                      d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164	S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331	c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
                    <path
                      fill="none"
                      stroke="#10cfe3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="3"
                      d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0	l-4.331-4.331"></path>
                    <path
                      fill="none"
                      stroke="#10cfe3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="3"
                      d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
                    <path
                      fill="none"
                      stroke="#10cfe3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="3"
                      d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
                  </svg>
                  <p className="mt-2 text-center text-gray-500 dark:text-dark-500">
                    No matching records found
                  </p>
                </li>
              )}
            </ul>
          </SimpleBar>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserChatList
