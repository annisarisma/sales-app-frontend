import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicPagination from '@views/uiElements/uiPagination/basicPagination'
import FlushPagination from '@views/uiElements/uiPagination/flushPagination'
import LightPagination from '@views/uiElements/uiPagination/lightPagination'
import ModernPagination from '@views/uiElements/uiPagination/modernPagination'
import SizePagination from '@views/uiElements/uiPagination/sizePagination'

const Paginations = () => {
  useEffect(() => {
    document.title = 'Pagination | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Pagination" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 xl:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic Pagination</h6>
          </div>
          <div className="card-body">
            <BasicPagination />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Modern Pagination</h6>
          </div>
          <div className="card-body">
            <ModernPagination />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Flush Pagination</h6>
          </div>
          <div className="card-body">
            <FlushPagination />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Size Pagination</h6>
          </div>
          <div className="card-body">
            <SizePagination />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Light Pagination</h6>
          </div>
          <div className="card-body">
            <LightPagination />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Paginations
