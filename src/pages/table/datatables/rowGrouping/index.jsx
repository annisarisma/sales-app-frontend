import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DataTablesRowGrouping from '@views/table/dataTables/datatablesRowGrouping'

const RowGrouPing = () => {
  useEffect(() => {
    document.title =
      'Row Grouping Datatables | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Row Grouping" subTitle="Datatables" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Row Grouping</h6>
          </div>
          <div className="card-body">
            <DataTablesRowGrouping />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default RowGrouPing
