import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import VideoGallery from '@views/uiElements/uiVideo/videoGallery'

const Videos = () => {
  useEffect(() => {
    document.title = 'Video | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Video" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <VideoGallery />
      </div>
    </React.Fragment>
  )
}

export default Videos
