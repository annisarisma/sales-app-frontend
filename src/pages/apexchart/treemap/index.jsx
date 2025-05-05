import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicTreeMapChart from '@views/apexcharts/treemapCharts/basicTreepmapChart'
import ColorRangeTreeMapChart from '@views/apexcharts/treemapCharts/colorRangeTreemapChart'
import DistributedTreeMapChart from '@views/apexcharts/treemapCharts/distributedTreemapChart'
import MultipleTreeMapChart from '@views/apexcharts/treemapCharts/multipleTreepmapChart'

const TreeMapCharts = () => {
  useEffect(() => {
    document.title =
      'Treemap Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const basicTreeMapChart = useRef()
  const multipleTreeMapChart = useRef()
  const colorRangeTreeMapChart = useRef()
  const distributedTreeMapChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="TreeMap Charts" subTitle="ApexCharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicTreeMapChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={basicTreeMapChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Treemap Multiple Series</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MultipleTreeMapChart
                chartColors="[bg-primary-500, bg-green-500]"
                chartDarkColors={''}
                chartId={multipleTreeMapChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Color Range</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <ColorRangeTreeMapChart
                chartColors="[bg-primary-500, bg-green-500]"
                chartDarkColors={''}
                chartId={colorRangeTreeMapChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Distributed</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DistributedTreeMapChart
                chartColors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-sky-500, bg-red-500]"
                chartDarkColors={''}
                chartId={distributedTreeMapChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TreeMapCharts
