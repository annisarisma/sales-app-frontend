import React, { useState } from 'react'

import { Modal } from '@custom/Modal/Modal'

const BasicModal = () => {
  const [modalState, setModalState] = useState({
    center: false,
    top: false,
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
    left: false,
    right: false,
    extraSmall: false,
    small: false,
    medium: false,
    large: false,
    extraLarge: false,
    extraExtraLarge: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  return (
    <React.Fragment>
      <div>
        <button onClick={() => openModal('center')} className="btn btn-primary">
          Default Modal
        </button>

        <Modal
          isOpen={modalState.center}
          onClose={() => closeModal('center')}
          position="modal-center"
          title="Center Modal"
          content={
            <>
              <h6 className="mb-3">Modal Content</h6>
              <p className="text-gray-500 dark:text-dark-500">
                They all have something to say beyond the words on the page.
                They can come across as casual or neutral, exotic or graphic.
              </p>
            </>
          }
          footer={
            <div>
              <h6>Modal Footer</h6>
            </div>
          }
        />
      </div>
    </React.Fragment>
  )
}

export default BasicModal
