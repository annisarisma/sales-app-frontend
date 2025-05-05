import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BorderedTable from '@views/table/dataTables/borderedTable'

const Bordered = () => {
  useEffect(() => {
    document.title =
      'Bordered DataTables | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Bordered" subTitle="Datatables" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Bordered</h6>
          </div>
          <div className="card-body">
            <BorderedTable />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Bordered
