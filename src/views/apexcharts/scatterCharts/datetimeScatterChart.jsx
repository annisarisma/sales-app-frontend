import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

function generateDayWiseTimeSeries(baseVal, count, range) {
  var i = 0
  var series = []
  while (i < count) {
    var y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min

    series.push([baseVal, y])
    baseVal += 86400000
    i++
  }
  return series
}

const DatetimeScatterChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'TEAM 1',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'TEAM 2',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'TEAM 3',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'TEAM 4',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        10,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'TEAM 5',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ]

  const options = {
    chart: {
      height: 300,
      type: 'scatter',
      zoom: {
        type: 'xy',
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: chartsColor,
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      max: 70,
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="scatter"
        data-chart-colors="[bg-primary-500, bg-green-500, bg-purple-500, bg-orange-500, bg-red-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default DatetimeScatterChart
