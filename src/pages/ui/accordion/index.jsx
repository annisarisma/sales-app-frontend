import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicAccordion from '@views/uiElements/uiAccordion/basicAccordion'
import BoxedAccordion from '@views/uiElements/uiAccordion/boxedAccordion'
import CollapseAccrdion from '@views/uiElements/uiAccordion/collapseAccordion'

const Accodion = () => {
  useEffect(() => {
    document.title = 'Accordion | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Accordion & Collapse" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic Accordion</h6>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-5">
              <BasicAccordion />
            </div>
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Boxed Accordion</h6>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-5">
              <BoxedAccordion />
            </div>
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Collapse</h6>
          </div>
          <div className="card-body">
            <div className="relative">
              <CollapseAccrdion />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Accodion
