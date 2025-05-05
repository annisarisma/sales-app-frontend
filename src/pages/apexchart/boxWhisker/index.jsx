import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicBoxChart from '@views/apexcharts/boxWhisker/basicBoxChart'
import BoxPlotScatterChart from '@views/apexcharts/boxWhisker/boxPlotScatterChart'
import HorizontalBoxPlot from '@views/apexcharts/boxWhisker/horizontalBoxPlot'

const BoxWhisker = () => {
  useEffect(() => {
    document.title =
      'Box-whisker Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Box-whisker Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicBoxChart chartId="boxWhiskerBasicChart" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Boxplot-Scatter</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BoxPlotScatterChart chartId="boxplotScatterChart" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Horizontal BoxPlot</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <HorizontalBoxPlot chartId="boxplotHorizontalChart" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BoxWhisker
