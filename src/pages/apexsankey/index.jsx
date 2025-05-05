import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicSankeyChart from '@views/apexSankey/basicSankeyChart'
import EdgeCustomizationChart from '@views/apexSankey/edgeCustomizationChart'
import FontOptionsChart from '@views/apexSankey/fontOptionsChart'
import NodeCustomizationChart from '@views/apexSankey/nodeCustomizationChart'

const ApexSankeyChart = () => {
  useEffect(() => {
    document.title = 'ApexSankey | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Apex-Sankey" subTitle="Charts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <BasicSankeyChart
              chartColors="bg-gray-800, bg-white, bg-gray-200"
              chartDarkColors="bg-dark-100, bg-dark-900, bg-dark-800"
            />
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Node Customization</h6>
          </div>
          <div className="card-body">
            <NodeCustomizationChart
              chartColors="bg-gray-800, bg-white, bg-gray-200"
              chartDarkColors="bg-dark-100, bg-dark-900, bg-dark-800"
            />
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Edge Customization</h6>
          </div>
          <div className="card-body">
            <EdgeCustomizationChart
              chartColors="bg-gray-800, bg-white, bg-gray-200"
              chartDarkColors="bg-dark-100, bg-dark-900, bg-dark-800"
            />
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Font Options</h6>
          </div>
          <div className="card-body">
            <FontOptionsChart
              chartColors="bg-gray-800, bg-white, bg-gray-200"
              chartDarkColors="bg-dark-100, bg-dark-900, bg-dark-800"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ApexSankeyChart
