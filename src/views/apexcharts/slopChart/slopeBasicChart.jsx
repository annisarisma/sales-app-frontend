import React from 'react'

import ReactApexChart from 'react-apexcharts'

const SlopeBasicChart = ({ chartId }) => {
  const series = [
    {
      name: 'Blue',
      data: [
        {
          x: 'Jan',
          y: 43,
        },
        {
          x: 'Feb',
          y: 58,
        },
      ],
    },
    {
      name: 'Green',
      data: [
        {
          x: 'Jan',
          y: 33,
        },
        {
          x: 'Feb',
          y: 38,
        },
      ],
    },
    {
      name: 'Red',
      data: [
        {
          x: 'Jan',
          y: 55,
        },
        {
          x: 'Feb',
          y: 21,
        },
      ],
    },
  ]

  const options = {
    chart: {
      height: 300,
      type: 'line',
    },
    plotOptions: {
      line: {
        isSlopeChart: true,
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
        data-chart-colors="[bg-primary-500, bg-purple-500, bg-red-500, bg-green-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default SlopeBasicChart
