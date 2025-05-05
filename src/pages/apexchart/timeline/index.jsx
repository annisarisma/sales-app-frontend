import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import AdvancedTimelineChart from '@views/apexcharts/timelineCharts/advancedTimelineChart'
import BasicTimelineChart from '@views/apexcharts/timelineCharts/basicTimelineChart'
import DumbbellTimelineChart from '@views/apexcharts/timelineCharts/dumbbellTimelineChart'
import MultipleGroupTimelineChart from '@views/apexcharts/timelineCharts/multipleGroupTimelineChart'

const TimelineChart = () => {
  useEffect(() => {
    document.title =
      'Timeline Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const basicChart = useRef()
  const advancedTimelineChart = useRef()
  const multipleGroupTimelineChart = useRef()
  const dumbbellTimelineChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Timeline Charts" subTitle="ApexCharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicTimelineChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={basicChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Advanced</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <AdvancedTimelineChart
                chartColors="[bg-primary-500, bg-yellow-500, bg-green-500]"
                chartDarkColors={''}
                chartId={advancedTimelineChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Multiple Series – Group Rows</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MultipleGroupTimelineChart
                chartId={multipleGroupTimelineChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Dumbbell Chart (Horizontal)</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DumbbellTimelineChart
                chartColors="[bg-primary-500, bg-green-500]"
                chartDarkColors={''}
                chartId={dumbbellTimelineChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TimelineChart
