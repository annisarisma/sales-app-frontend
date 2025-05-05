import React from 'react'

import { Modal } from '@custom/Modal/Modal'
import { Trash2 } from 'lucide-react'

const DeleteModal = ({ show, handleHide, deleteModalFunction }) => {
  const HandleOnDelete = (onClose) => {
    deleteModalFunction()
    onClose()
  }
  return (
    <React.Fragment>
      <Modal
        isOpen={show}
        id="deleteModal"
        onClose={handleHide}
        position="modal-center"
        size="modal-xs"
        isFooter="false"
        content={(onClose) => (
          <>
            <div className="text-center modal-content p-7">
              <div className="flex items-center justify-center mx-auto mb-4 text-red-500 rounded-full bg-red-500/10 size-14 backdrop-blur-sm-xl">
                <Trash2 className="size-6" />
              </div>
              <h5 className="mb-4">
                Are you sure you want to delete this Contact ?
              </h5>
              <div className="flex items-center justify-center gap-2">
                <button
                  className="btn btn-red"
                  onClick={() => HandleOnDelete(onClose)}>
                  Delete
                </button>
                <button className="btn link link-primary" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
        footer={() => <></>}
      />
    </React.Fragment>
  )
}

export default DeleteModal
