import React from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { Trash2 } from 'lucide-react'

const DeleteGroupModal = ({ open, closeModal, deleteGroupChatRecord }) => {
  const handleCloseModal = (onClose) => {
    deleteGroupChatRecord()
    onClose()
  }
  return (
    <React.Fragment>
      <Modal
        isOpen={open}
        onClose={closeModal}
        position="modal-center"
        id="deleteModal"
        contentClass="modal-content"
        size="modal-xs"
        title="New Group"
        content={(onClose) => (
          <>
            <div className="text-center modal-content p-7">
              <div className="flex items-center justify-center mx-auto mb-4 text-red-500 rounded-full bg-red-500/10 size-14 backdrop-blur-sm-xl">
                <Trash2 className="size-6" />
              </div>
              <h5 className="mb-4">
                Are you sure you want to delete this msg ?
              </h5>
              <div className="flex items-center justify-center gap-2">
                <button
                  className="btn btn-red"
                  onClick={() => handleCloseModal(onClose)}>
                  Delete
                </button>
                <button onClick={onClose} className="btn link link-primary">
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default DeleteGroupModal
