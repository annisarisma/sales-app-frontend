import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BottomTopChart from '@views/apexTree/bottomTop/bottomTopChart'

const ApexTreeBottomTopChart = () => {
  useEffect(() => {
    document.title =
      'Bottom to Top | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Bottom to Top" subTitle="ApexTree" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Bottom to Top</h6>
          </div>
          <div className="card-body">
            <BottomTopChart
              chartColors="[bg-gray-200, bg-gray-500, bg-white, bg-primary-500, bg-purple-500, bg-yellow-500, bg-gray-800, bg-orange-500, bg-green-500, bg-pink-500]"
              chartDarkColors="[bg-dark-800, bg-dark-500, bg-dark-900, bg-primary-500, bg-purple-500, bg-yellow-500, bg-dark-800, bg-orange-500, bg-green-500, bg-pink-500]"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ApexTreeBottomTopChart
