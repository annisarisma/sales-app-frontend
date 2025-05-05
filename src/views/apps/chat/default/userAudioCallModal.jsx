import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { Disc, Mic, MicOff, Pause, Phone, Settings, Video } from 'lucide-react'

const UserAudioCallModal = ({
  open,
  closeModal,
  currentContact,
  handleAudioVideoCall,
}) => {
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState)
  }

  const [isCalling, setIsCalling] = useState(true)
  const [callDuration, setCallDuration] = useState(0)

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  useEffect(() => {
    let callingTimeout
    let timer

    if (open) {
      setIsCalling(true)
      setCallDuration(0)

      callingTimeout = setTimeout(() => {
        setIsCalling(false)

        timer = setInterval(() => {
          setCallDuration((prevDuration) => prevDuration + 1)
        }, 1000)
      }, 3000)
    }
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
        isFooter={false}
        content={(onClose) => (
          <>
            {currentContact && (
              <div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full size-10 shrink-0">
                    {currentContact.receiverImage ? (
                      <img
                        src={currentContact.receiverImage}
                        alt="currentContactImg"
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center text-xl rounded-full size-10">
                        <p>{currentContact.receiverName}</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <h6>{currentContact.name}</h6>
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
                    onClick={onClose}
                    className="btn btn-active-red shrink-0 btn-icon-text btn-icon">
                    <Phone className="size-5" />
                  </button>
                  <button
                    type="button"
                    data-modal-close="callModal"
                    onClick={handleAudioVideoCall}
                    className="btn btn-active-purple shrink-0 btn-icon-text btn-icon">
                    <Video />
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

export default UserAudioCallModal
