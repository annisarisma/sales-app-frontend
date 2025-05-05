import React, { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { defaultContactChat } from '@src/data'
import { getContactChatData } from '@src/slices/chat/contact/thunk'
import { getDefaultChatData, setCurrentChatListRecord } from '@src/slices/thunk'
import AddNewContactModal from '@src/views/apps/chat/default/addNewContactModal'
import CompanyMenu from '@src/views/apps/chat/default/companyMenu'
import UserAudioCallModal from '@src/views/apps/chat/default/userAudioCallModal'
import UserChatBoard from '@src/views/apps/chat/default/userChatBoard'
import UserChatList from '@src/views/apps/chat/default/userChatList'
import UserVideoCallModal from '@src/views/apps/chat/default/userVideoCallModal'
import { useDispatch, useSelector } from 'react-redux'

const DefaultChat = () => {
  const dispatch = useDispatch()

  const { defaultChatList, currentContactChat } = useSelector(
    (state) => state.DefaultChat
  )
  const { contactList } = useSelector((state) => state.ContactChat)
  const [chatContactList, setChatContactList] = useState([])
  const [userFriendList, setUserFriendList] = useState([])
  const [searchContact, setSearchContact] = React.useState('')
  const [searchUserFriend, setSearchUserFriend] = React.useState('')
  const [isAudioCallModalOpen, setIsAudioCallModalOpen] = useState(false)
  const [isVideoCallModalOpen, setIsVideoCallModalOpen] = useState(false)
  const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false)
  const [defaultChatData, setDefaultChatData] = useState({})
  const [isMobileView, setIsMobileView] = useState(false)
  const [currentView, setCurrentView] = useState('chatList')

  useEffect(() => {
    document.title =
      'Default Chat | Domiex - Premium Versatile Admin & Dashboard UI Kit Template'
  }, [])

  // Search contacts
  const handleSearchContacts = (value) => {
    setSearchContact(value)
    if (value.trim() === '') {
      setChatContactList(defaultChatList)
    } else {
      const filterList = defaultChatList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      setChatContactList(filterList)
    }
  }

  // search user friend list
  const handleSearchUserFriendList = (value) => {
    setSearchUserFriend(value)
    if (value.trim() === '') {
      setUserFriendList(contactList)
    } else {
      const filterFriendList = contactList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      setUserFriendList(filterFriendList)
    }
  }

  // open audio call modal
  const handleOpenAudioCallModal = (value) => {
    setIsAudioCallModalOpen(value)
  }

  // open video call modal
  const handleOpenVideoCallModal = (value) => {
    setIsVideoCallModalOpen(value)
  }

  const handleBackToChatList = () => {
    setCurrentView('chatList')
  }

  const handleSelectChat = (chat) => {
    dispatch(setCurrentChatListRecord(chat))
    setCurrentView('chatBoard')
  }

  // handle audio video call
  const handleAudioVideoCall = () => {
    handleOpenAudioCallModal(false)
    handleOpenVideoCallModal(true)
  }

  // handle add new contact
  const handleAddNewContact = (value) => {
    setIsAddContactModalOpen(value)
  }

  // get default chat list
  useEffect(() => {
    if (!defaultChatList) {
      dispatch(getDefaultChatData())
    } else {
      setChatContactList(defaultChatList)
      if (!currentContactChat && defaultChatList.length > 0) {
        dispatch(setCurrentChatListRecord(defaultChatList[0]))
      }
    }
  }, [dispatch, defaultChatList, currentContactChat])

  // get user friend list
  useEffect(() => {
    if (!contactList) {
      dispatch(getContactChatData())
    } else {
      setUserFriendList(contactList)
    }
  }, [contactList, dispatch])

  // set default chat data
  useEffect(() => {
    if (defaultContactChat) {
      setDefaultChatData(defaultContactChat)
    }
  }, [])

  // Detect window resize and set mobile view state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const mobileView = window.innerWidth <= 1024
        setIsMobileView(mobileView)
        if (mobileView) {
          setCurrentView('chatList')
        }
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Default Chat" subTitle="Chats" />
      <div className="grid grid-cols-12 gap-x-space">
        {/* company menu */}
        <CompanyMenu />

        {/* Conditionally render based on mobile or desktop view */}
        {isMobileView ? (
          currentView == 'chatList' ? (
            <UserChatList
              chatMessageList={chatContactList}
              searchValue={searchContact}
              searchContact={(val) => handleSearchContacts(val)}
              handleAddNewContact={() => handleAddNewContact(true)}
              currentChat={currentContactChat}
              onSelectChat={handleSelectChat}
            />
          ) : (
            <UserChatBoard
              currentChat={currentContactChat}
              handleAudioCallModal={() => handleOpenAudioCallModal(true)}
              handleVideoCallModal={() => handleOpenVideoCallModal(true)}
              contactList={userFriendList}
              onBack={handleBackToChatList}
            />
          )
        ) : (
          // If not mobile view, display both components
          <>
            <UserChatList
              chatMessageList={chatContactList}
              searchValue={searchContact}
              searchContact={(val) => handleSearchContacts(val)}
              handleAddNewContact={() => handleAddNewContact(true)}
              currentChat={currentContactChat}
              onSelectChat={handleSelectChat}
            />
            <UserChatBoard
              currentChat={currentContactChat}
              handleAudioCallModal={() => handleOpenAudioCallModal(true)}
              handleVideoCallModal={() => handleOpenVideoCallModal(true)}
              contactList={userFriendList}
              onBack={handleBackToChatList}
            />
          </>
        )}
      </div>

      {/* audio call modal */}
      {isAudioCallModalOpen && (
        <UserAudioCallModal
          open={isAudioCallModalOpen}
          closeModal={() => handleOpenAudioCallModal(false)}
          currentContact={currentContactChat}
          handleAudioVideoCall={handleAudioVideoCall}
        />
      )}

      {/* video call modal */}
      {isVideoCallModalOpen && (
        <UserVideoCallModal
          open={isVideoCallModalOpen}
          closeModal={() => handleOpenVideoCallModal(false)}
          currentContact={currentContactChat}
        />
      )}

      {/* add contact modal */}
      {isAddContactModalOpen && (
        <AddNewContactModal
          open={isAddContactModalOpen}
          closeModal={() => handleAddNewContact(false)}
          friendList={userFriendList}
          searchFriend={searchUserFriend}
          handleSearch={(val) => handleSearchUserFriendList(val)}
          contactList={chatContactList}
          defaultChat={defaultChatData}
        />
      )}
    </React.Fragment>
  )
}

export default DefaultChat
