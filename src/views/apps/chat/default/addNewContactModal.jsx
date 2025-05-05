import React from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import {
  addDefaultChatRecordData,
  deleteDefaultChatRecordData,
} from '@src/slices/thunk'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const AddNewContactModal = ({
  open,
  closeModal,
  friendList,
  handleSearch,
  searchFriend,
  contactList,
  defaultChat,
}) => {
  const dispatch = useDispatch()

  // add new Chat
  const handleNewChatRecord = (contact) => {
    if (defaultChat) {
      const newRecord = {
        ...defaultChat,
        receiverImage: contact.avatar,
        _id: contactList && contactList.length > 0 ? contactList.length + 1 : 1,
        roomId: contact.roomId,
        name: contact.name,
        messages: defaultChat.messages.map((item) => {
          return {
            ...item,
            sender: contact.name,
            avatar:
              item.type === 'sent'
                ? 'https://images.kcubeinfotech.com/domiex/images/avatar/user-17.png'
                : contact.avatar,
          }
        }),
      }
      dispatch(addDefaultChatRecordData(newRecord))
      dispatch(deleteDefaultChatRecordData([contact._id]))
      closeModal()
    }
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={open}
        onClose={() => closeModal()}
        position="modal-center"
        id="addNewChatModals"
        contentClass="modal-content"
        size="modal-sm"
        title="Add New Chat"
        content={(onClose) => (
          <>
            <div className="relative mb-4 group/form">
              <input
                type="text"
                className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                placeholder="Search for ..."
                value={searchFriend}
                onChange={(event) => handleSearch(event.target.value)}
              />
              <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                <Search className="size-4" />
              </button>
            </div>
            {friendList && friendList.length > 0 ? (
              <div>
                <SimpleBar className="max-h-72">
                  <div className="space-y-4">
                    {friendList.map((contact, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <div className="flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 shrink-0 size-6">
                          <img
                            src={contact.avatar}
                            alt="contactImg"
                            className="rounded-full"
                            width={24}
                            height={24}
                          />
                        </div>
                        <h6 className="grow">{contact.name}</h6>
                        <Link
                          to="#!"
                          className="btn-xs btn btn-sub-gray shrink-0"
                          onClick={() => handleNewChatRecord(contact)}>
                          Send{' '}
                          <i className="align-middle ri-send-plane-2-line ltr:ml-1 rtl:mr-1"></i>
                        </Link>
                      </div>
                    ))}
                  </div>
                </SimpleBar>
              </div>
            ) : (
              <>
                <div className="text-center text-gray-500 dark:text-dark-500">
                  <i className="text-lg ri-search-2-line"></i>
                  <p className="mt-2">No contact available</p>
                </div>
              </>
            )}
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddNewContactModal
