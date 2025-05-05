import React, { useEffect, useState } from 'react'

const NotificationButton = ({ position, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let timer
    if (isOpen) {
      timer = setTimeout(() => setIsOpen(false), 1500)
    }
    return () => clearTimeout(timer)
  }, [isOpen])

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <React.Fragment>
      <div className="relative">
        <button onClick={handleClick} className="btn btn-primary">
          {children}
        </button>
        {isOpen && (
          <div
            className={`fixed py-3 text-sm text-white  z-[1055]  ease-in-out transform rounded-md ltr:pl-5 rtl:pr-5 bg-gradient-to-r from-primary-500 to-primary-600 ltr:pr-9 rtl:pl-9 max-w-96 transition ease-out duration-300 transform${position} z-toast`}
            style={position.includes('top') ? { top: '5%' } : { bottom: '5%' }}>
            <span>You have successfully completed this thing!</span>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-lg transition duration-200 ease-linear text-primary-300 hover:text-primary-50 ltr:right-4 rtl:left-4 top-2">
              <i className="ri-close-fill"></i>
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

const PositionNotification = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-2 card-body">
        <NotificationButton position="ltr:left-5 rtl:right-5 top-5">
          Top Left
        </NotificationButton>
        <NotificationButton position="left-1/2 top-5 transform -translate-x-1/2">
          Top Center
        </NotificationButton>
        <NotificationButton position="ltr:right-5 rtl:left-5 top-5">
          Top Right
        </NotificationButton>
        <NotificationButton position="ltr:left-5 rtl:right-5 bottom-5">
          Bottom Left
        </NotificationButton>
        <NotificationButton position="left-1/2 bottom-5 transform -translate-x-1/2">
          Bottom Center
        </NotificationButton>
        <NotificationButton position="ltr:right-5 rtl:left-5 bottom-5">
          Bottom Right
        </NotificationButton>
      </div>
    </React.Fragment>
  )
}

export default PositionNotification
