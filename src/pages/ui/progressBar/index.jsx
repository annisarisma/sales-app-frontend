import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import AnimationProgress from '@views/uiElements/uiProgressBar/animationProgress'
import BasicProgress from '@views/uiElements/uiProgressBar/basicProgress'
import ContentProgress from '@views/uiElements/uiProgressBar/contentProgress'
import GradientProgress from '@views/uiElements/uiProgressBar/gradientProgress'
import SizesProgress from '@views/uiElements/uiProgressBar/sizesProgress'
import SoftProgress from '@views/uiElements/uiProgressBar/softProgress'

const ProgressBars = () => {
  useEffect(() => {
    document.title =
      'Progress Bar | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Progress Bar" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic Progress Bar</h6>
          </div>
          <div className="card-body">
            <BasicProgress />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Soft Progress Bar</h6>
          </div>
          <div className="card-body">
            <SoftProgress />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Animation Progress Bar</h6>
          </div>
          <div className="card-body">
            <AnimationProgress />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Gradient Progress Bar</h6>
          </div>
          <div className="card-body">
            <GradientProgress />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Sizes Progress Bar</h6>
          </div>
          <div className="card-body">
            <SizesProgress />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Content Progress Bar</h6>
          </div>
          <div className="card-body">
            <ContentProgress />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProgressBars
