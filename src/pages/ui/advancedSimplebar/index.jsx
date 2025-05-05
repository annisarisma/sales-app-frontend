import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import GreenSimplebar from '@views/uiAdvanced/uiSimplebar/greenSimplebar'
import PinkSimplebar from '@views/uiAdvanced/uiSimplebar/pinkSimplebar'
import PrimarySimplebar from '@views/uiAdvanced/uiSimplebar/primarySimplebar'
import PurpleSimplebar from '@views/uiAdvanced/uiSimplebar/purpleSimplebar'
import RedSimplebar from '@views/uiAdvanced/uiSimplebar/redSimplebar'
import SkySimplebar from '@views/uiAdvanced/uiSimplebar/skySimplebar'
import YellowSimplebar from '@views/uiAdvanced/uiSimplebar/yellowSimplebar'

import DefaultSimpleBar from '../../../views/uiAdvanced/uiSimplebar/defaultSimplebar'

const Simplebar = () => {
  useEffect(() => {
    document.title = 'Simplebar | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Simplebar" subTitle="UI Advanced" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Defualt Simplebar</h6>
          </div>
          <div className="card-body">
            <DefaultSimpleBar />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Primary Simplebar</h6>
          </div>
          <div className="card-body">
            <PrimarySimplebar />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Green Simplebar</h6>
          </div>
          <div className="card-body">
            <GreenSimplebar />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Purple Simplebar</h6>
          </div>
          <div className="card-body">
            <PurpleSimplebar />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Yellow Simplebar</h6>
          </div>
          <div className="card-body">
            <YellowSimplebar />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Red Simplebar</h6>
          </div>
          <div className="card-body">
            <RedSimplebar />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Sky Simplebar</h6>
          </div>
          <div className="card-body">
            <SkySimplebar />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Pink Simplebar</h6>
          </div>
          <div className="card-body">
            <PinkSimplebar />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Simplebar
