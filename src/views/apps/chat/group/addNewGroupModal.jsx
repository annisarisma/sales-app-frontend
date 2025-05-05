import React, { useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { defaultGroupChatMessages, groupChatMemberList } from '@src/data'
import { addGroupChatRecordData } from '@src/slices/thunk'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const AddNewGroupModal = ({ open, closeModal, groupChatList }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm()
  const [groupName, setGroupName] = React.useState('')
  const [selectedMembersList, setSelectedMembersList] = useState([])
  const [membersError, setMembersError] = useState(null)

  const dispatch = useDispatch()

  const handleSizeChange = (selected, onChange) => {
    const selectedMembers = selected.map((option) => ({
      _id: option.id,
      roomId: option.roomId,
      avatar: option.avatar,
      name: option.name,
      value: option.value,
      role: option.role,
    }))
    setSelectedMembersList(selectedMembers)
    setMembersError(null)
    onChange(selectedMembers)
  }

  // Format time
  const formatTime = (date) => {
    const today = new Date()
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
    const timeString = new Intl.DateTimeFormat('en-US', timeOptions).format(
      date
    )
    return isToday
      ? `Today, ${timeString}`
      : `${date.toLocaleDateString()}, ${timeString}`
  }

  const submitForm = (onClose) => {
    if (selectedMembersList.length === 0) {
      setMembersError('Please select at least one member.')
      return
    }
    if (selectedMembersList.length <= 2) {
      setMembersError('Please select at least 3 members.')
      return
    }
    const newGroup = {
      ...defaultGroupChatMessages,
      _id:
        groupChatList && groupChatList.length > 0
          ? groupChatList.length + 1
          : 1,
      roomId: 2,
      name: groupName,
      image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-27.png',
      message:
        'Wait, what’s the presentation about again? Asking for a friend… 👀📊',
      time: '09:42 AM',
      unread: false,
      active: false,
      members: selectedMembersList.map((member, index) => ({
        _id: index + 1,
        name: member.value,
        avatar: member.avatar,
        role: member.role,
      })),
      messages: defaultGroupChatMessages.messages.map((message, index) => ({
        ...message,
        user: {
          ...message.user,
          name: selectedMembersList[index]?.name,
          avatar: selectedMembersList[index]?.avatar,
        },
        timestamp: formatTime(new Date()),
      })),
    }
    dispatch(addGroupChatRecordData(newGroup))
    reset()
    onClose()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={open}
        onClose={closeModal}
        position="modal-center"
        id="createGroupModal"
        contentClass="modal-content"
        size="modal-md"
        title="New Group"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit(() => submitForm(onClose))}>
              <div className="mb-5">
                <label htmlFor="basicInput1" className="form-label">
                  Group Name
                </label>
                <input
                  type="text"
                  id="basicInput1"
                  className="form-input"
                  placeholder="Enter group title"
                  value={groupName}
                  {...register('name', {
                    required: 'Group Name is required.',
                    onChange: (e) => setGroupName(e.target.value),
                  })}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="mb-5">
                <label htmlFor="memberSelect" className="form-label">
                  Select Members
                </label>
                <Controller
                  name="members"
                  control={control}
                  render={({ field }) => (
                    <Select
                      classNamePrefix="select"
                      id="memberSelect"
                      options={groupChatMemberList}
                      isMulti
                      onChange={(selected) =>
                        handleSizeChange(selected, field.onChange)
                      }
                      getOptionLabel={(option) => option.value}
                      getOptionValue={(option) => option.value}
                    />
                  )}
                />
                {membersError && (
                  <span className="text-red-500">{membersError}</span>
                )}
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="btn btn-sub-gray"
                  onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Group
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddNewGroupModal
