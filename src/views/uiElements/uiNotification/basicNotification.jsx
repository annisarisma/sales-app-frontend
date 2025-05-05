import React, { useCallback, useEffect, useState } from 'react'

const BasicNotification = () => {
  const [notices, setNotices] = useState([])
  const [visible, setVisible] = useState([])

  const generateUniqueId = () => {
    return Date.now() + Math.floor(Math.random() * 1000)
  }

  const removeNotice = useCallback((id) => {
    setVisible((prev) => prev.filter((notice) => notice.id !== id))
    setTimeout(() => {
      setNotices((prev) => prev.filter((notice) => notice.id !== id))
    }, 200)
  }, [])

  const addNotice = useCallback(
    (notice) => {
      const newNotice = { id: generateUniqueId(), ...notice }
      setNotices((prev) => [...prev, newNotice])
      setVisible((prev) => [...prev, newNotice])
      setTimeout(() => {
        removeNotice(newNotice.id)
      }, 3000)
    },
    [removeNotice]
  )

  useEffect(() => {
    const handleNotice = (event) => {
      addNotice(event.detail)
    }
    window.addEventListener('notice', handleNotice)
    return () => {
      window.removeEventListener('notice', handleNotice)
    }
  }, [addNotice])

  const dispatchNotice = (type, text) => {
    window.dispatchEvent(
      new CustomEvent('notice', {
        detail: { type, text },
      })
    )
  }

  const getAlertClass = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white'
      case 'info':
        return 'bg-blue-500 text-white'
      case 'warning':
        return 'bg-yellow-500 text-black'
      case 'error':
        return 'bg-red-500 text-white'
      default:
        return ''
    }
  }

  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() =>
            dispatchNotice('success', '🔥 Your success message - make it short')
          }
          className="btn btn-green">
          Success
        </button>
        <button
          onClick={() =>
            dispatchNotice('info', 'Your Info message - make it short')
          }
          className="btn btn-sky">
          Info
        </button>
        <button
          onClick={() =>
            dispatchNotice('warning', '🪄 Your Warning message - make it short')
          }
          className="btn btn-yellow">
          Warning
        </button>
        <button
          onClick={() =>
            dispatchNotice('error', '😵 Your critical message - make it short!')
          }
          className="btn btn-red">
          Error
        </button>
      </div>

      <div
        className="fixed flex flex-col-reverse items-end justify-start w-screen h-screen gap-3 bottom-10 right-10 z-drawer"
        style={{ pointerEvents: 'none' }}>
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`cursor-pointer alert w-82 transition-opacity duration-300 ${getAlertClass(notice.type)} ${visible.includes(notice) ? 'opacity-100' : 'opacity-0'}`}
            style={{ pointerEvents: 'all' }}
            onClick={() => removeNotice(notice.id)}>
            {notice.text}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default BasicNotification
