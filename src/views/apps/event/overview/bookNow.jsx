import React, { useState } from 'react'

import user1 from '@assets/images/avatar/user-1.png'
import user11 from '@assets/images/avatar/user-11.png'
import user12 from '@assets/images/avatar/user-12.png'
import user13 from '@assets/images/avatar/user-13.png'
import overview from '@assets/images/event/overview.jpg'
import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { Link } from 'react-router-dom'

const BookNow = ({ show, closedModal }) => {
  const [totalTickets, setTotalTickets] = useState(0)
  const [pricePerTicket, setPricePerTicket] = useState(599)
  const [totalAmount, setTotalAmount] = useState(0)

  // Function to calculate total amount when totalTickets or pricePerTicket changes
  const calculateTotalAmount = (tickets, price) => {
    const amount = tickets * price
    setTotalAmount(amount)
  }

  const handleTicketChange = (e) => {
    const value = parseInt(e.target.value) || 0
    setTotalTickets(value)
    calculateTotalAmount(value, pricePerTicket)
  }

  const handlePriceChange = (e) => {
    const value = parseFloat(e.target.value) || 0
    setPricePerTicket(value)
    calculateTotalAmount(totalTickets, value)
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={show}
        onClose={closedModal}
        position="modal-center"
        contentClass="p-2"
        title="Tech Innovations Summit"
        size="modal-lg"
        content={(onClose) => (
          <>
            <div className="modal-content">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user1}
                  alt="user1Img"
                  className="rounded-full size-12 shrink-0"
                />
                <div className="grow">
                  <h6 className="mb-1">
                    <Link to="#!">Declan Grieve</Link>
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-dark-500">
                    Fri, 20 Dec 2024, 3:30 pm
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <img
                  src={overview}
                  alt="overviewImg"
                  className="object-cover w-full h-48 rounded-md"
                />
              </div>
              <div className="flex gap-3 mt-5">
                <div>
                  <div className="flex flex-col items-center justify-center mx-auto text-red-500 border rounded-md bg-red-500/15 border-red-500/20 size-16">
                    <p className="mb-0.5">Fri</p>
                    <h3 className="leading-none">20</h3>
                  </div>
                </div>
                <div>
                  <h6 className="mb-1">
                    <Link to="#!" className="text-gray-800 link link-primary">
                      Annual Music Festival!
                    </Link>
                  </h6>
                  <p className="mb-2 text-gray-500 dark:text-dark-500">
                    <span>20 Dec 2024</span>
                    <span className="ltr:pl-2 rtl:pr-2 ltr:ml-1.5 rtl:mr-1.5 ltr:border-l rtl:border-r border-gray-200 dark:border-dark-800">
                      Sydney, Australia
                    </span>
                  </p>
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Contributors
                  </p>
                  <div className="flex -space-x-3 grow">
                    <Link
                      to="#!"
                      className="transition duration-300 ease-linear hover:z-10">
                      <img
                        className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                        src={user11}
                        alt="user11Img"
                      />
                    </Link>
                    <Link
                      to="#!"
                      className="transition duration-300 ease-linear hover:z-10">
                      <img
                        className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                        src={user12}
                        alt="user12Img"
                      />
                    </Link>
                    <Link
                      to="#!"
                      className="transition duration-300 ease-linear hover:z-10">
                      <img
                        className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                        src={user13}
                        alt="user13Img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <form action="#!">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12">
                    <label htmlFor="fullNameInput" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullNameInput"
                      className="form-input"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="totalTicketInput" className="form-label">
                      Total Tickets
                    </label>
                    <input
                      type="number"
                      id="totalTicketInput"
                      className="form-input"
                      placeholder="0"
                      value={totalTickets}
                      onChange={handleTicketChange}
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="pricePerTicketInput" className="form-label">
                      Price per Ticket
                    </label>
                    <input
                      type="number"
                      id="pricePerTicketInput"
                      className="form-input"
                      placeholder="$0.00"
                      value={pricePerTicket}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="totalAmountInput" className="form-label">
                      Total Amount
                    </label>
                    <input
                      type="text"
                      id="totalAmountInput"
                      className="form-input"
                      value={`${totalAmount.toFixed(2)}`}
                      readOnly
                    />
                  </div>
                  <div className="col-span-12 ltr:text-right rtl:text-left">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={onClose}>
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default BookNow
