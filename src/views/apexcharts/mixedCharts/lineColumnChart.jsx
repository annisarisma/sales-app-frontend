import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const LineColumnChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ]
  const labels = [
    '01 Jan 2001',
    '02 Jan 2001',
    '03 Jan 2001',
    '04 Jan 2001',
    '05 Jan 2001',
    '06 Jan 2001',
    '07 Jan 2001',
    '08 Jan 2001',
    '09 Jan 2001',
    '10 Jan 2001',
    '11 Jan 2001',
    '12 Jan 2001',
  ]

  const options = {
    chart: {
      height: 300,
      type: 'line',
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: 'Traffic Sources',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    colors: chartsColor,
    labels: labels,
    xaxis: {
      type: 'datetime',
    },
    yaxis: [
      {
        title: {
          text: 'Website Blog',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Social Media',
        },
      },
    ],
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
        data-chart-colors="[bg-primary-500, bg-green-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default LineColumnChart
