import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const LineScatterChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Points',
      type: 'scatter',
      data: [
        {
          x: 1,
          y: 2.14,
        },
        {
          x: 1.2,
          y: 2.19,
        },
        {
          x: 1.8,
          y: 2.43,
        },
        {
          x: 2.3,
          y: 3.8,
        },
        {
          x: 2.6,
          y: 4.14,
        },
        {
          x: 2.9,
          y: 5.4,
        },
        {
          x: 3.2,
          y: 5.8,
        },
        {
          x: 3.8,
          y: 6.04,
        },
        {
          x: 4.55,
          y: 6.77,
        },
        {
          x: 4.9,
          y: 8.1,
        },
        {
          x: 5.1,
          y: 9.4,
        },
        {
          x: 7.1,
          y: 7.14,
        },
        {
          x: 9.18,
          y: 8.4,
        },
      ],
    },
    {
      name: 'Line',
      type: 'line',
      data: [
        {
          x: 1,
          y: 2,
        },
        {
          x: 2,
          y: 3,
        },
        {
          x: 3,
          y: 4,
        },
        {
          x: 4,
          y: 5,
        },
        {
          x: 5,
          y: 6,
        },
        {
          x: 6,
          y: 7,
        },
        {
          x: 7,
          y: 8,
        },
        {
          x: 8,
          y: 9,
        },
        {
          x: 9,
          y: 10,
        },
        {
          x: 10,
          y: 11,
        },
      ],
    },
  ]

  const options = {
    chart: {
      height: 300,
      type: 'line',
    },
    fill: {
      type: 'solid',
    },
    markers: {
      size: [6, 0],
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    colors: chartsColor,
    legend: {
      show: false,
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 12,
      tickAmount: 12,
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

export default LineScatterChart
