import React, { useState } from 'react'

import { Modal } from '@custom/Modal/Modal'

const ModalPosition = () => {
  const [modalState, setModalState] = useState({
    center: false,
    top: false,
    topLeft: false,
    topRight: false,
    bl: false,
    br: false,
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
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => openModal('center')}
          className="btn btn-sub-gray">
          Center Modal
        </button>
        <button onClick={() => openModal('top')} className="btn btn-sub-gray">
          Top Modal
        </button>
        <button
          onClick={() => openModal('topLeft')}
          className="btn btn-sub-gray">
          Top Left Modal
        </button>
        <button
          onClick={() => openModal('topRight')}
          className="btn btn-sub-gray">
          Top Right Modal
        </button>
        <button onClick={() => openModal('br')} className="btn btn-sub-gray">
          Bottom Right Modal
        </button>
        <button onClick={() => openModal('bl')} className="btn btn-sub-gray">
          Bottom Left Modal
        </button>
      </div>
      <Modal
        isOpen={modalState.center}
        onClose={() => closeModal('center')}
        position="modal-center"
        title="Center Modal"
        content={
          <>
            <h6 className="mb-3">Modal Content</h6>
            <p className="text-gray-500 dark:text-dark-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={
          <div>
            <h6>Modal Footer</h6>
          </div>
        }
      />

      <Modal
        isOpen={modalState.top}
        onClose={() => closeModal('top')}
        position="modal-top"
        title="Top Modal"
        content={
          <>
            <h6 className="mb-3">Modal Content</h6>
            <p className="text-gray-500 dark:text-dark-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={
          <div>
            <h6>Modal Footer</h6>
          </div>
        }
      />

      <Modal
        isOpen={modalState.topLeft}
        onClose={() => closeModal('topLeft')}
        position="modal-tl"
        title="Top Left Modal"
        content={
          <>
            <h6 className="mb-3">Modal Content</h6>
            <p className="text-gray-500 dark:text-dark-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={
          <div>
            <h6>Modal Footer</h6>
          </div>
        }
      />

      <Modal
        isOpen={modalState.topRight}
        onClose={() => closeModal('topRight')}
        position="modal-tr"
        title="Top Right Modal"
        content={
          <>
            <h6 className="mb-3">Modal Content</h6>
            <p className="text-gray-500 dark:text-dark-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={
          <div>
            <h6>Modal Footer</h6>
          </div>
        }
      />

      <Modal
        isOpen={modalState.br}
        onClose={() => closeModal('br')}
        position="modal-br"
        title="Top Right Modal"
        content={
          <>
            <h6 className="mb-3">Modal Content</h6>
            <p className="text-gray-500 dark:text-dark-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={
          <div>
            <h6>Modal Footer</h6>
          </div>
        }
      />

      <Modal
        isOpen={modalState.bl}
        onClose={() => closeModal('bl')}
        position="modal-bl"
        title="Top Right Modal"
        content={
          <>
            <h6 className="mb-3">Modal Content</h6>
            <p className="text-gray-500 dark:text-dark-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={
          <div>
            <h6>Modal Footer</h6>
          </div>
        }
      />
    </React.Fragment>
  )
}
export default ModalPosition
