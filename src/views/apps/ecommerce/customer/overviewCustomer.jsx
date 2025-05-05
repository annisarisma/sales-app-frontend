import React from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'

const OverviewCustomer = ({
  currentCustomer = null,
  show,
  handleClose,
  handleEditMode,
}) => {
  const customerData = [
    {
      title: 'Name',
      subTitle:
        currentCustomer !== null
          ? `${currentCustomer?.firstName} ${currentCustomer?.lastName}`
          : '',
    },
    {
      title: 'Email',
      subTitle: currentCustomer !== null ? currentCustomer?.email : '',
    },
    {
      title: 'Phone Number',
      subTitle: currentCustomer !== null ? currentCustomer?.phoneNumber : '',
    },
    {
      title: 'Subscriber',
      subTitle: currentCustomer !== null ? currentCustomer?.subscriber : 'No',
    },
    {
      title: 'Location',
      subTitle: currentCustomer !== null ? currentCustomer?.location : '',
    },
  ]

  return (
    <React.Fragment>
      <Modal
        isOpen={show}
        onClose={handleClose}
        position="modal-center"
        id="overviewCustomerModals"
        contentClass="modal-content p-0"
        content={(onClose) => (
          <>
            <div className="h-20 bg-gray-100 dark:bg-dark-850 rounded-t-md"></div>
            <div className="modal-content">
              <div className="relative inline-block -mt-16 rounded-full">
                <img
                  src={
                    currentCustomer
                      ? currentCustomer.image
                      : 'https://images.kcubeinfotech.com/domiex/images/avatar/user-1.png'
                  }
                  alt="currentCustomerImg"
                  className="rounded-full size-24"
                  height={96}
                  width={96}
                />
                <div className="absolute bottom-1.5 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full size-4 ltr:right-2 rtl:left-2"></div>
              </div>
              <div className="mt-5">
                <div className="overflow-x-auto">
                  <table className="table flush">
                    <tbody>
                      {customerData &&
                        customerData.map((item, index) => {
                          return (
                            <tr className="*:!py-1.5" key={index}>
                              <th className="!border-0 w-40">{item.title}</th>
                              <td>{item.subTitle}</td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-5">
                <button
                  type="button"
                  className="btn btn-sub-gray"
                  onClick={onClose}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    handleEditMode()
                    onClose()
                  }}>
                  Edit Customer
                </button>
              </div>
            </div>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default OverviewCustomer
