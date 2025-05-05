import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DataTablesEnableDisable from '@views/table/dataTables/datatablesEnableDisable'

const EnableDisable = () => {
  useEffect(() => {
    document.title =
      'Enable Datatables | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Basic" subTitle="Datatables" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <DataTablesEnableDisable />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EnableDisable
