import React, { useState } from 'react'

import { Modal } from '@custom/Modal/Modal'

const SizeModal = () => {
  const [modalState, setModalState] = useState({
    xs: false,
    sm: false,
    lg: false,
    xl: false,
    '2xl': false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-2">
        <button onClick={() => openModal('xs')} className="btn btn-sub-gray">
          Extra small
        </button>
        <button onClick={() => openModal('sm')} className="btn btn-sub-gray">
          Small
        </button>
        <button onClick={() => openModal('lg')} className="btn btn-sub-gray">
          Large
        </button>
        <button onClick={() => openModal('xl')} className="btn btn-sub-gray">
          Extra Large
        </button>
        <button onClick={() => openModal('2xl')} className="btn btn-sub-gray">
          Extra Extra Large
        </button>
      </div>

      <Modal
        isOpen={modalState.xs}
        onClose={() => closeModal('xs')}
        position="modal-center"
        title="Extra Small Modal"
        size="modal-xs"
        content={
          <>
            <h6 className="mb-3">Extra Small Modal</h6>
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
        isOpen={modalState.sm}
        onClose={() => closeModal('sm')}
        position="modal-center"
        title="Small Modal"
        size="modal-sm"
        content={
          <>
            <h6 className="mb-3">Small Modal</h6>
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
        isOpen={modalState.lg}
        onClose={() => closeModal('lg')}
        position="modal-center"
        title="Large Modal"
        size="modal-lg"
        content={
          <>
            <h6 className="mb-3">Large Modal</h6>
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
        isOpen={modalState.xl}
        onClose={() => closeModal('xl')}
        position="modal-center"
        title="Extra Large Modal"
        size="modal-xl"
        content={
          <>
            <h6 className="mb-3">Extra Large Modal</h6>
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
        isOpen={modalState['2xl']}
        onClose={() => closeModal('2xl')}
        position="center"
        title="Extra Extra Large Modal"
        size="2xl"
        content={
          <>
            <h6 className="mb-3">Extra Extra Large Modal</h6>
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

export default SizeModal
