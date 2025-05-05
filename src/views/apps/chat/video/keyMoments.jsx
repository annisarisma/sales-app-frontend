import React, { useEffect, useRef, useState } from 'react'

import { groupVideoKeyMoments } from '@src/data'
import { Pin } from 'lucide-react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const KeyMoments = () => {
  const [keyMoments, setKeyMoments] = useState([])
  const [currentTime, setCurrentTime] = useState(0)
  const [formattedTime, setFormattedTime] = useState('00:00:00')
  const [newPinText, setNewPinText] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (groupVideoKeyMoments) {
      setKeyMoments(groupVideoKeyMoments)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setFormattedTime(formatTime(currentTime))
  }, [currentTime])

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
    const s = String(seconds % 60).padStart(2, '0')
    return `${h}:${m}:${s}`
  }

  const addPin = () => {
    if (newPinText.trim() === '') return
    setKeyMoments((prevPins) => [
      ...prevPins,
      { id: prevPins.length + 1, time: formattedTime, text: newPinText },
    ])
    setNewPinText('')
  }
  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 200)
  }

  // Call scrollToBottom when key moments are added
  useEffect(() => {
    scrollToBottom()
  }, [keyMoments])
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Key Moments</h6>
        </div>
        <div className="card-body">
          <SimpleBar className="overflow-y-auto max-h-28 -mx-space px-space">
            <div className="space-y-2">
              {keyMoments.map((item, index) => (
                <Link
                  to="#!"
                  title="text pin"
                  className="flex items-center gap-3 text-gray-500 dark:text-dark-500"
                  key={index}>
                  <p className="w-28">{item.time}</p>
                  <p>{item.text}</p>
                </Link>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </SimpleBar>

          <div className="flex items-center gap-2 mt-5">
            <p className="font-medium text-green-500 shrink-0">
              {formattedTime}
            </p>
            <input
              type="text"
              className="form-input"
              value={newPinText}
              onChange={(e) => setNewPinText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addPin()}
            />
            <button
              className="btn btn-sub-red btn-icon shrink-0"
              onClick={addPin}>
              <Pin className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default KeyMoments
