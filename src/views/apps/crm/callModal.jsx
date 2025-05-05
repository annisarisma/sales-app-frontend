import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { Disc, Mic, MicOff, Pause, Phone, Settings } from 'lucide-react'

const CallModal = ({ open, closeModal, selectedDeal }) => {
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState)
  }

  // calling
  const [isCalling, setIsCalling] = useState(true)
  const [callDuration, setCallDuration] = useState(0)

  // Format the duration in "MM:SS" format
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  useEffect(() => {
    let callingTimeout
    let timer

    if (open) {
      // Reset the state when the modal opens
      setIsCalling(true)
      setCallDuration(0)

      callingTimeout = setTimeout(() => {
        setIsCalling(false)

        timer = setInterval(() => {
          setCallDuration((prevDuration) => prevDuration + 1)
        }, 1000)
      }, 3000)
    }

    // Cleanup the timeouts and intervals when modal is closed or component unmounts
    return () => {
      clearTimeout(callingTimeout)
      clearInterval(timer)
    }
  }, [open])

  return (
    <React.Fragment>
      <Modal
        isOpen={open}
        onClose={() => closeModal()}
        position="modal-br"
        id="callModal"
        contentClass="modal-content"
        size="modal-xs"
        content={(onClose) => (
          <>
            {selectedDeal && (
              <div>
                <div className="flex items-center gap-2">
                  <div className="p-2 border border-gray-200 rounded-md dark:border-dark-800 size-12 shrink-0">
                    <img
                      src={selectedDeal.userimage}
                      alt="selectedDealImg"
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <h6>{selectedDeal.projectName}</h6>
                    <p className="text-sm text-gray-500 dark:text-dark-500">
                      {isCalling ? 'Calling ...' : formatDuration(callDuration)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
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
                    data-modal-close="callModal"
                    onClick={() => onClose()}
                    className="btn btn-active-red shrink-0 btn-icon-text btn-icon">
                    <Phone className="size-5"></Phone>
                  </button>
                  <button
                    type="button"
                    className="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
                    <Settings className="size-5" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      />
    </React.Fragment>
  )
}

export default CallModal
