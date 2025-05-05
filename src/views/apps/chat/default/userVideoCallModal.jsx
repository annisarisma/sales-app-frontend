import React, { useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { Mic, MicOff, PhoneMissed, Video, VideoOff } from 'lucide-react'
import { Link } from 'react-router-dom'

const UserVideoCallModal = ({ open, closeModal, currentContact }) => {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  return (
    <React.Fragment>
      <Modal
        isOpen={open}
        onClose={() => closeModal()}
        position="modal-center"
        id="videoCallModal"
        contentClass="modal-content"
        size="modal-sm"
        content={(onClose) => (
          <>
            {currentContact && (
              <div>
                <div className="relative overflow-hidden rounded-md">
                  {/* main image */}
                  {currentContact.receiverImage ? (
                    <img
                      src={
                        currentContact.receiverImage ||
                        'https://images.kcubeinfotech.com/domiex/images/chat/video-dummy.png'
                      }
                      alt="receiverImage"
                      className="main-image"
                      width={600}
                      height={400}
                    />
                  ) : (
                    <img
                      src={
                        'https://images.kcubeinfotech.com/domiex/images/chat/video-1.png'
                      }
                      alt="receiverImage"
                      className="main-image"
                      width={600}
                      height={400}
                    />
                  )}

                  {/* profile image */}
                  <Link
                    to="#!"
                    className="absolute inline-block right-5 bottom-5">
                    {isVideoOff ? (
                      <img
                        src={
                          'https://images.kcubeinfotech.com/domiex/images/chat/video-dummy.png'
                        }
                        alt="isVideoOffImg"
                        className="h-24 rounded-md"
                        width={144}
                        height={96}
                      />
                    ) : (
                      <img
                        src={
                          currentContact.senderImage ||
                          'https://images.kcubeinfotech.com/domiex/images/avatar/user-6.png'
                        }
                        alt="senderImage"
                        className="h-24 rounded-md"
                        width={144}
                        height={96}
                      />
                    )}
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-2 pt-5">
                  <button
                    className="btn btn-sub-gray btn-icon"
                    onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? (
                      <MicOff className="size-5" />
                    ) : (
                      <Mic className="size-5" />
                    )}
                  </button>
                  <button className="btn btn-red btn-icon" onClick={onClose}>
                    <PhoneMissed className="size-5" />
                  </button>
                  <button
                    className="btn btn-sub-gray btn-icon"
                    onClick={() => {
                      setIsVideoOff(!isVideoOff)
                      onClose()
                    }}>
                    {isVideoOff ? (
                      <VideoOff className="size-5" />
                    ) : (
                      <Video className="size-5" />
                    )}
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

export default UserVideoCallModal
