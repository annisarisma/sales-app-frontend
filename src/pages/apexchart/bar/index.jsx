import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicBarChart from '@views/apexcharts/barCharts/basicBarChart'
import GroupedBarChart from '@views/apexcharts/barCharts/groupedBarChart'
import GroupedStackedBarChart from '@views/apexcharts/barCharts/groupedStackedBarChart'
import MarkersBarChart from '@views/apexcharts/barCharts/markersBarChart'
import NegativeValuesBarChart from '@views/apexcharts/barCharts/negativeValuesBarChart'
import PatternedBarChart from '@views/apexcharts/barCharts/patternedBarChart'
import ReversedBarChart from '@views/apexcharts/barCharts/reversedBarChart'
import StackedBarChart from '@views/apexcharts/barCharts/stackedBarChart'
import StackedBars100 from '@views/apexcharts/barCharts/stackedBars100'

const BarCharts = () => {
  useEffect(() => {
    document.title = 'Bar Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Bar Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicBarChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId="basicBarChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Grouped</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <GroupedBarChart
                chartColors={`[bg-primary-500, bg-sky-500]`}
                chartDarkColors={''}
                chartId="groupedBarChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Stacked Bar</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <StackedBarChart
                chartColors={
                  '[bg-primary-500, bg-green-500, bg-red-500, bg-purple-500, bg-sky-500]'
                }
                chartDarkColors={''}
                chartId={'stackedBarChart'}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Stacked Bars 100</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <StackedBars100
                chartColors="[bg-primary-500, bg-orange-500, bg-green-500, bg-indigo-500, bg-sky-500]"
                chartDarkColors={''}
                chartId="stackedBar100Chart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Grouped Stacked Bars</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <GroupedStackedBarChart
                chartColors="[bg-primary-500, bg-green-500, bg-primary-300, bg-green-400]"
                chartDarkColors={''}
                chartId="groupedStackedBarChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Bar with Negative Values</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <NegativeValuesBarChart
                chartColors="[bg-sky-500, bg-indigo-500]"
                chartDarkColors={''}
                chartId="negativeValueBarChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Bar with Markers</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MarkersBarChart
                chartColors="[bg-green-500]"
                chartDarkColors={''}
                chartId="markersBarChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Reversed Bar Chart</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <ReversedBarChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId="reversedBarChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Patterned</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <PatternedBarChart
                chartColors="[bg-primary-500, bg-green-500, bg-red-500, bg-purple-500]"
                chartDarkColors={''}
                chartId="patternedBarChart"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BarCharts
