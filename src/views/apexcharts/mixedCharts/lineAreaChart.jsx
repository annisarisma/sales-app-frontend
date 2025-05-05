import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const LineAreaChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'TEAM A',
      type: 'area',
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: 'TEAM B',
      type: 'line',
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ]
  const labels = [
    'Dec 01',
    'Dec 02',
    'Dec 03',
    'Dec 04',
    'Dec 05',
    'Dec 06',
    'Dec 07',
    'Dec 08',
    'Dec 09 ',
    'Dec 10',
    'Dec 11',
  ]

  const options = {
    chart: {
      height: 300,
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'solid',
      opacity: [0.35, 1],
    },
    labels: labels,
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: 'Series A',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Series B',
        },
      },
    ],
    colors: chartsColor,
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points'
          }
          return y
        },
      },
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="line"
        data-chart-colors="[bg-sky-500, bg-green-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default LineAreaChart
