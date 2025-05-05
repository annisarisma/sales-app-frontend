import React from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { PartyPopper } from 'lucide-react'

const PaymentSuccessModal = ({ show, handleClose }) => {
  return (
    <React.Fragment>
      <Modal
        isOpen={show}
        onClose={handleClose}
        position="modal-center"
        id="paymentSuccessModal"
        contentClass={`text-center success-modal p-8 bg-cover bg-center`}
        content={(onClose) => (
          <>
            <div className="flex items-center justify-center mx-auto mt-20 mb-4 text-green-500 rounded-full bg-green-500/10 size-14 backdrop-blur-sm-xl">
              <PartyPopper className="size-8" />
            </div>
            <h5 className="mb-1">Thank you for your purchase.</h5>
            <p className="mb-4 text-gray-500 dark:text-dark-500">
              Your payment has been processed successfully!
            </p>
            <div className="flex items-center justify-center gap-2">
              <button className="btn btn-green" onClick={onClose}>
                Continue Shopping!
              </button>
            </div>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default PaymentSuccessModal
