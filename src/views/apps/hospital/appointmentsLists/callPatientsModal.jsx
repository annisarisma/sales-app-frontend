import React, { useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { Disc, Mic, MicOff, Pause, Phone, Settings } from 'lucide-react'

// Ensure you have the icons imported

const CallPatientsModal = ({ show, patients, handleHide }) => {
  const [isMuted, setIsMuted] = useState(false)
  // const [isCalling, setIsCalling] = useState(true); // Example state, adjust as needed
  let isCalling = true
  const callDuration = 0 // Example duration, replace with actual duration or state
  const formatDuration = (duration) => `${duration} sec` // Replace with your duration formatting logic

  // Function to toggle mute state
  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={show}
        onClose={handleHide}
        position="modal-br"
        size="modal-xs"
        contentClass="modal-content"
        content={(onClose) => (
          <>
            <div>
              <div className="flex items-center gap-2">
                <div className="relative items-center justify-center overflow-hidden text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500 size-12 shrink-0">
                  <img src={patients.image} alt="patientsImg" />
                  {!patients.image && (
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500">
                      {patients.avatarText}
                    </span>
                  )}
                </div>
                <div>
                  <h6>{patients.patientName}</h6>
                  <p className="text-sm text-gray-500 dark:text-dark-500">
                    {isCalling ? 'Calling ...' : formatDuration(callDuration)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <button
                  type="button"
                  className="btn btn-active-gray shrink-0 btn-icon-text btn-icon"
                  onClick={toggleMute}>
                  {isMuted ? (
                    <MicOff className="size-5" />
                  ) : (
                    <Mic className="size-5" />
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
                  <Pause className="size-5" />
                </button>
                <button
                  type="button"
                  className="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
                  <Disc className="size-5" />
                </button>
                <button
                  type="button"
                  className="btn btn-active-red shrink-0 btn-icon-text btn-icon"
                  onClick={onClose}>
                  <Phone className="size-5" />
                </button>
                <button
                  type="button"
                  className="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
                  <Settings className="size-5" />
                </button>
              </div>
            </div>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default CallPatientsModal
