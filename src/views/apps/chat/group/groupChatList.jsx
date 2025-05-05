import React from 'react'

import { setCurrentGroupChatListRecord } from '@src/slices/thunk'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const GroupChatList = ({
  groupChatList,
  handleSearchGroups,
  searchGroup,
  currentGroupChat,
  openAddNewGroupModal,
  onSelectChat,
}) => {
  const dispatch = useDispatch()

  const handleCurrentGroupChat = (group) => {
    dispatch(setCurrentGroupChatListRecord(group))
  }

  return (
    <React.Fragment>
      <div className="col-span-12 2xl:col-span-3 card">
        <div className="card-body">
          <button
            type="button"
            title="create group btn"
            className="w-full btn btn-primary"
            onClick={openAddNewGroupModal}>
            Create New Group
          </button>
          <div className="relative my-4 group/form">
            <input
              type="text"
              className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
              placeholder="Search for ..."
              value={searchGroup}
              onChange={(e) => handleSearchGroups(e.target.value)}
            />
            <button
              title="search btn"
              className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
              <Search className="size-4" />
            </button>
          </div>
          <SimpleBar className="max-h-[calc(100vh_-_22.5rem)] -mx-space">
            <ul className="space-y-3">
              {groupChatList &&
                groupChatList.length > 0 &&
                groupChatList.map(
                  (group, index) =>
                    group?._id && (
                      <li key={index} onClick={() => onSelectChat(group)}>
                        <Link
                          to="#!"
                          className={`flex items-center gap-2 px-space py-2.5 hover:bg-gray-50 dark:hover:bg-dark-850 [&.active]:bg-primary-500/10 transition ease-linear duration-300 group/item ${group.unread ? 'unread' : ''} ${currentGroupChat && currentGroupChat?._id === group._id ? 'active' : ''}`}
                          onClick={() => handleCurrentGroupChat(group)}>
                          <div
                            className={`relative flex items-center justify-center p-2 font-semibold transition duration-200 ease-linear bg-green-500/10 [&.active]:bg-white dark:[&.active]:bg-dark-900 rounded-full size-11 shrink-0 group-[&.unread]/item:bg-white dark:group-[&.unread]/item:bg-dark-900 ${currentGroupChat?._id === group._id ? 'active' : ''}`}>
                            <img
                              src={group.image}
                              alt="groupImg"
                              className="rounded-full"
                              width={28}
                              height={28}
                            />
                          </div>
                          <div className="overflow-hidden grow">
                            <h6 className="mb-0.5 truncate">{group.name}</h6>
                            <p
                              className={`text-sm group-[&.unread]/item:font-medium truncate group-[&.unread]/item:text-gray-950 dark:group-[&.unread]/item:text-dark-50 text-gray-500 dark:text-dark-500 ${group.unread ? 'unread' : ''} `}>
                              {group.message}
                            </p>
                          </div>
                          <div className="ltr:text-right rtl:text-left shrink-0">
                            <p className="mb-1 text-xs text-gray-500 dark:text-dark-500">
                              {group.time}
                            </p>
                            {group.badge && (
                              <span className="badge-sub-red badge-square size-5">
                                {group.badge}
                              </span>
                            )}
                          </div>
                        </Link>
                      </li>
                    )
                )}
              {groupChatList.length < 1 && (
                <p className="text-center">No groups found</p>
              )}
            </ul>
          </SimpleBar>
        </div>
      </div>
    </React.Fragment>
  )
}
export default GroupChatList
