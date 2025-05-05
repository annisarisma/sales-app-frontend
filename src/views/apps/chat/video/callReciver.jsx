import React, { useState } from 'react'

import {
  Captions,
  CaptionsOff,
  CirclePlus,
  Mic,
  MicOff,
  PhoneMissed,
  Video,
  VideoOff,
  Volume1,
  Volume2,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CallReceiver = () => {
  const [isMicOffReceiver, setIsMicOffReceiver] = useState(false)
  const [isMicOffSender, setIsMicOffSender] = useState(false)
  const [isSenderVideoOff, setIsSenderVideoOff] = useState(false)
  const [isHideCaptions, setIsHideCaptions] = useState(false)
  const [volume, setVolume] = useState(50)

  const navigate = useNavigate()

  const handleVolume = (value) => {
    setVolume(value)
  }

  const handleVideoCallEnd = () => {
    navigate('/apps/chat/group')
  }

  return (
    <React.Fragment>
      <div className="col-span-12 overflow-hidden lg:col-span-6 xl:col-span-8 card">
        <div className="relative">
          <div className="absolute flex items-center gap-3 top-5 left-4">
            <button
              title="mic btn"
              className={`rounded-full btn bg-gray-900/30 [&.active]:bg-red-500 text-white btn-icon ${isMicOffReceiver ? 'active' : ''}`}
              onClick={() => setIsMicOffReceiver(!isMicOffReceiver)}>
              {isMicOffReceiver ? (
                <MicOff className="size-4" />
              ) : (
                <Mic className="size-4" />
              )}
            </button>
            <div className="px-4 py-3 leading-none text-white rounded-full bg-gray-900/30">
              John Powers
            </div>
          </div>
          <img
            src="https://images.kcubeinfotech.com/domiex/images/chat/video-1.png"
            alt="videoImg"
            className="object-cover w-full"
            width={951}
            height={634}
          />
          {!isHideCaptions && (
            <div className="absolute max-w-2xl px-4 py-2.5 mx-auto font-medium leading-none transform -translate-x-1/2 rounded-full bg-gray-900/15 left-1/2 bottom-5">
              Hello, Shopia Mia
            </div>
          )}
        </div>
        <div className="card-body">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="inline-flex items-center gap-2 px-3 bg-gray-100 dark:bg-dark-850 btn shrink-0">
              <button
                title="volume - btn"
                className="p-1 bg-white rounded-sm dark:bg-dark-900"
                onClick={() => handleVolume(Math.max(0, volume - 10))}>
                <Volume1 className="text-gray-500 size-4 dark:text-dark-500" />
              </button>
              <div className="w-24 bg-white dark:bg-dark-900 progress-bar progress-1">
                <div
                  className="h-2 text-white rounded-sm progress-bar-wrap bg-primary-500"
                  style={{ width: `${volume}%` }}></div>
              </div>
              <button
                title="volume + btn"
                className="p-1 bg-white rounded-sm dark:bg-dark-900"
                onClick={() => handleVolume(Math.min(100, volume + 10))}>
                <Volume2 className="text-gray-500 dark:text-dark-500 size-4" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                title="mic btn"
                className="rounded-full btn btn-sub-gray btn-icon"
                onClick={() => setIsMicOffSender(!isMicOffSender)}>
                {isMicOffSender ? (
                  <MicOff className="size-4" />
                ) : (
                  <Mic className="size-4" />
                )}
              </button>
              <button
                title="video btn"
                className="rounded-full btn btn-sub-gray btn-icon"
                onClick={() => setIsSenderVideoOff(!isSenderVideoOff)}>
                {isSenderVideoOff ? (
                  <VideoOff className="size-4" />
                ) : (
                  <Video className="size-4" />
                )}
              </button>
              <button
                title="captions btn"
                className="rounded-full btn btn-sub-gray btn-icon"
                onClick={() => setIsHideCaptions(!isHideCaptions)}>
                {isHideCaptions ? (
                  <CaptionsOff className="size-4" />
                ) : (
                  <Captions className="size-4" />
                )}
              </button>
              <button
                title="added btn"
                className="rounded-full btn btn-sub-gray btn-icon">
                <CirclePlus className="size-4" />
              </button>
            </div>
            <button
              title="leave call"
              className="btn btn-red"
              onClick={handleVideoCallEnd}>
              <PhoneMissed className="inline-block mr-1 size-4" /> Leave Call
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CallReceiver
