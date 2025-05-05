import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicColumnChart from '@views/apexcharts/columnCharts/basicColumnChart'
import DataLabelsColumnChart from '@views/apexcharts/columnCharts/dataLabelsColumnChart'
import DistributedColumnChart from '@views/apexcharts/columnCharts/distributedColumnChart'
import DumbbellColumnChart from '@views/apexcharts/columnCharts/dumbbellColumnChart'
import GroupLabelChart from '@views/apexcharts/columnCharts/groupLabelChart'
import GroupStackedColumnChart from '@views/apexcharts/columnCharts/groupStackedColumnChart'
import MarkersColumnChart from '@views/apexcharts/columnCharts/markersColumnChart'
import NegativeValuesColumnChart from '@views/apexcharts/columnCharts/negativeValuesColumnChart'
import RotatedLabelsColumnChart from '@views/apexcharts/columnCharts/rotatedLabelsColumnChart'
import StackedColumn100Chart from '@views/apexcharts/columnCharts/stackedColumn100Chart'
import StackedColumnChart from '@views/apexcharts/columnCharts/stackedColumnChart'

const ColumnCharts = () => {
  useEffect(() => {
    document.title =
      'Column Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const basicColumnChart = useRef()
  const labelColumnChart = useRef()
  const stackedColumnChart = useRef()
  const stackedColumn100Chart = useRef()
  const groupStackedColumnChart = useRef()
  const dumbbellColumnChart = useRef()
  const markersColumnChart = useRef()
  const groupLabelColumnChart = useRef()
  const rotatedLabelColumnChart = useRef()
  const negativeLabelColumnChart = useRef()
  const distributedColumnChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Column Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicColumnChart
                chartColors="[bg-primary-500, bg-green-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId={basicColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Column with Data Labels</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DataLabelsColumnChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={labelColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Stacked Columns</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <StackedColumnChart
                chartColors="[bg-primary-500, bg-green-500, bg-red-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId={stackedColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Stacked Columns 100</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <StackedColumn100Chart
                chartColors="[bg-primary-500, bg-green-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId={stackedColumn100Chart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Grouped Stacked Columns</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <GroupStackedColumnChart
                chartColors="[bg-primary-500, bg-green-500, bg-primary-200, bg-green-300]"
                chartDarkColors="[bg-primary-500, bg-green-500, bg-primary-800, bg-green-800]"
                chartId={groupStackedColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Dumbbell Chart</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DumbbellColumnChart
                chartColors="[bg-primary-500, bg-pink-500]"
                chartDarkColors={''}
                chartId={dumbbellColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Column with Markers</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MarkersColumnChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={markersColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Column with Group Label</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <GroupLabelChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={groupLabelColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Column with Rotated Labels</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <RotatedLabelsColumnChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={rotatedLabelColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Column with Negative Values</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <NegativeValuesColumnChart
                chartColors="[bg-primary-500, bg-yellow-500, bg-red-500]"
                chartDarkColors={''}
                chartId={negativeLabelColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Distributed Columns</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DistributedColumnChart
                chartColors="[bg-primary-500, bg-pink-500, bg-sky-500, bg-green-300, bg-yellow-500, bg-purple-500, bg-red-500, bg-sky-500]"
                chartDarkColors={''}
                chartId={distributedColumnChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ColumnCharts
