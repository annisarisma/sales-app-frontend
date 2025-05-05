import React, { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Layout from '@src/layout/Layout'
import {
  deleteGroupChatRecordData,
  getGroupChatData,
  setCurrentGroupChatListRecord,
} from '@src/slices/thunk'
import AddNewGroupModal from '@src/views/apps/chat/group/addNewGroupModal'
import DeleteGroupModal from '@src/views/apps/chat/group/deleteGroupModal'
import GroupChatBoard from '@src/views/apps/chat/group/groupChatBoard'
import GroupChatList from '@src/views/apps/chat/group/groupChatList'
import GroupInfo from '@src/views/apps/chat/group/groupInfo'
import { useDispatch, useSelector } from 'react-redux'

const Group = () => {
  const { groupChatList, currentGroupChatRecord } = useSelector(
    (state) => state.GroupChat
  )
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'Group Chat | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const [allGroupChatRecords, setGroupChatRecords] = useState([])
  const [searchGroup, setSearchGroup] = useState('')
  const [isOpenAddNewGroupModal, setIsOpenAddNewGroupModal] = useState(false)
  const [isAudioCallModalOpen, setIsAudioCallModalOpen] = useState(false)

  const [isDeleteGroupModalOpen, setIsDeleteGroupModalOpen] = useState(false)

  const [isMobileView, setIsMobileView] = useState(false)
  const [currentView, setCurrentView] = useState('chatList')

  // Handle opening the "Add New Group" modal
  const handleAddNewGroupModal = (val) => {
    setIsOpenAddNewGroupModal(val)
  }

  // Handle audio call modal opening
  const handleOpenAudioCallModal = (value) => {
    setIsAudioCallModalOpen(value)
  }

  // Handle deleting the group chat record
  const handleDeleteGroupModal = () => {
    setIsDeleteGroupModalOpen(false)
    dispatch(deleteGroupChatRecordData([currentGroupChatRecord?._id]))
  }

  // Search groups
  const handleSearchGroups = (value) => {
    setSearchGroup(value)
    if (value.trim() === '') {
      setGroupChatRecords(groupChatList)
    } else {
      const filterList = groupChatList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      setGroupChatRecords(filterList)
    }
  }

  // Set the current group chat
  const handleSelectChat = (chat) => {
    dispatch(setCurrentGroupChatListRecord(chat)) // Set the current chat
    setCurrentView('chatBoard') // Switch to the chat board view on mobile
  }

  // Handle going back to the chat list (for mobile view)
  const handleBackToChatList = () => {
    setCurrentView('chatList')
  }

  // Fetch group chat data
  useEffect(() => {
    if (!groupChatList) {
      dispatch(getGroupChatData())
    } else {
      setGroupChatRecords(groupChatList)
      if (!currentGroupChatRecord && groupChatList.length > 0) {
        dispatch(setCurrentGroupChatListRecord(groupChatList[0]))
      }
    }
  }, [dispatch, groupChatList, currentGroupChatRecord])

  // Handle screen resizing to detect mobile view
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const mobileView = window.innerWidth <= 1024
        setIsMobileView(mobileView)

        // Reset to chat list on small screens when switching from larger screens
        if (mobileView) {
          setCurrentView('chatList')
        }
      }

      // Add event listener for window resize
      window.addEventListener('resize', handleResize)

      // Initial check on component mount
      handleResize()

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Group Chat" subTitle="Chats" />
      <div className="grid grid-cols-12 gap-x-space">
        {isMobileView ? (
          currentView === 'chatList' ? (
            <GroupChatList
              groupChatList={allGroupChatRecords}
              handleSearchGroups={handleSearchGroups}
              searchGroup={searchGroup}
              currentGroupChat={currentGroupChatRecord}
              openAddNewGroupModal={() => handleAddNewGroupModal(true)}
              onSelectChat={handleSelectChat}
            />
          ) : (
            <GroupChatBoard
              handleAudioCallModal={() =>
                handleOpenAudioCallModal(!isAudioCallModalOpen)
              }
              currentGroupChat={currentGroupChatRecord}
              handleDeleteGroupModal={() => setIsDeleteGroupModalOpen(true)}
              onBack={handleBackToChatList}
            />
          )
        ) : (
          <>
            <GroupChatList
              groupChatList={allGroupChatRecords}
              handleSearchGroups={handleSearchGroups}
              searchGroup={searchGroup}
              currentGroupChat={currentGroupChatRecord}
              openAddNewGroupModal={() => handleAddNewGroupModal(true)}
              onSelectChat={handleSelectChat}
            />

            {/* Group chat board */}
            <GroupChatBoard
              handleAudioCallModal={() =>
                handleOpenAudioCallModal(!isAudioCallModalOpen)
              }
              currentGroupChat={currentGroupChatRecord}
              handleDeleteGroupModal={() => setIsDeleteGroupModalOpen(true)}
              onBack={handleBackToChatList}
            />

            {/* Group info */}
            <GroupInfo currentChat={currentGroupChatRecord} />
          </>
        )}
      </div>

      {/* Add New Group Modal */}
      {isOpenAddNewGroupModal && (
        <AddNewGroupModal
          open={isOpenAddNewGroupModal}
          closeModal={() => setIsOpenAddNewGroupModal(false)}
          groupChatList={groupChatList}
        />
      )}

      {/* Delete Group Modal */}
      {isDeleteGroupModalOpen && (
        <DeleteGroupModal
          open={isDeleteGroupModalOpen}
          closeModal={() => setIsDeleteGroupModalOpen(false)}
          deleteGroupChatRecord={handleDeleteGroupModal}
        />
      )}
    </React.Fragment>
  )
}

Group.getLayout = (page) => {
  return <Layout breadcrumbTitle="Group Chat">{page}</Layout>
}

export default Group
