import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import CallReceiver from '@src/views/apps/chat/video/callReciver'
import GroupVideoChat from '@src/views/apps/chat/video/groupChat'
import GroupVideoCall from '@src/views/apps/chat/video/groupVideoCall'
import KeyMoments from '@src/views/apps/chat/video/keyMoments'

const Video = () => {
  useEffect(() => {
    document.title =
      'Group Video | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Group Video" subTitle="Charts" />
      <GroupVideoCall />

      <div className="grid grid-cols-12 gap-x-space">
        {/* Call Reciver */}
        <CallReceiver />

        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          {/* Key Moments */}
          <KeyMoments />

          {/* group chat */}
          <GroupVideoChat />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Video
