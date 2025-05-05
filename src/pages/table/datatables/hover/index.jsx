import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import TableHover from '@views/table/dataTables/datatablesHover'

const Hover = () => {
  useEffect(() => {
    document.title =
      'Hover Datatables | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Hover" subTitle="Datatables" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Hover Effect</h6>
          </div>
          <div className="card-body">
            <TableHover />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Hover
