import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicGallery from '@views/uiElements/uiGallery/basicGallery'
import MasonryWithLightboxGallery from '@views/uiElements/uiGallery/masonary'

const Gallerys = () => {
  useEffect(() => {
    document.title = 'Gallery | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Gallery" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic Gallery</h6>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-5">
              <BasicGallery />
            </div>
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Masonry With Lightbox Gallery</h6>
          </div>
          <MasonryWithLightboxGallery />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Gallerys
