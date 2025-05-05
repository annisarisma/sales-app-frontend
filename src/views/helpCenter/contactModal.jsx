import React from 'react'

import mainLogo from '@assets/images/main-logo.png'
import mail from '@assets/images/others/mail.png'
import { Modal } from '@custom/Modal/Modal'
import { X } from 'lucide-react'

const ContactModal = ({ showContactModal, handleContactModal }) => {
  return (
    <React.Fragment>
      <Modal
        isOpen={showContactModal}
        onClose={handleContactModal}
        position="modal-center"
        size="modal-2xl"
        contentClass="p-0"
        content={(onClose) => (
          <div className="grid grid-cols-12">
            <div className="relative flex flex-col justify-end col-span-4 p-8 bg-gray-50 h-100 rounded-l-md">
              <img
                src={mail}
                alt="mailImg"
                className="absolute left-0 top-10"
              />
              <div>
                <img
                  src={mainLogo}
                  alt="mainLogo"
                  className="h-8"
                  width={175}
                  height={32}
                />
                <p className="mt-3 text-gray-500">
                  Whether you need help with customization, troubleshooting, or
                  general inquiries, don't hesitate to reach out to us.
                </p>
              </div>
            </div>
            <div className="col-span-8 p-8">
              <button
                data-modal-close="contactModal"
                className="link link-red float-end"
                onClick={handleContactModal}>
                <X className="size-5" />
              </button>
              <h5 className="mb-1">Feel free to connect with us.</h5>
              <p className="text-gray-500">
                Our team is here to assist you with any questions or issues you
                may encounter while using our admin template.
              </p>
              <form>
                <div className="grid grid-cols-12 gap-5 mt-5">
                  <div className="col-span-6">
                    <label
                      htmlFor="firstNameInput"
                      className="block mb-2 text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstNameInput"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="lastNameInput"
                      className="block mb-2 text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastNameInput"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="emailInput"
                      className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="emailInput"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="phomenoInput"
                      className="block mb-2 text-sm font-medium">
                      Phone No
                    </label>
                    <input
                      type="tel"
                      id="phomenoInput"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="descriptionInput"
                      className="block mb-2 text-sm font-medium">
                      Description
                    </label>
                    <textarea
                      name="descriptionInput"
                      id="descriptionInput"
                      rows={3}
                      className="h-auto form-input"
                      required></textarea>
                  </div>
                  <div className="col-span-12">
                    <div className="text-right">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={onClose}>
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      />
    </React.Fragment>
  )
}

export default ContactModal
