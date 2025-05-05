import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const BasicRangeChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'New York Temperature',
      data: [
        {
          x: 'Jan',
          y: [-2, 4],
        },
        {
          x: 'Feb',
          y: [-1, 6],
        },
        {
          x: 'Mar',
          y: [3, 10],
        },
        {
          x: 'Apr',
          y: [8, 16],
        },
        {
          x: 'May',
          y: [13, 22],
        },
        {
          x: 'Jun',
          y: [18, 26],
        },
        {
          x: 'Jul',
          y: [21, 29],
        },
        {
          x: 'Aug',
          y: [21, 28],
        },
        {
          x: 'Sep',
          y: [17, 24],
        },
        {
          x: 'Oct',
          y: [11, 18],
        },
        {
          x: 'Nov',
          y: [6, 12],
        },
        {
          x: 'Dec',
          y: [1, 7],
        },
      ],
    },
  ]
  const options = {
    chart: {
      height: 300,
      type: 'rangeArea',
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'New York Temperature (all year round)',
    },
    markers: {
      hover: {
        sizeOffset: 5,
      },
    },
    colors: chartsColor,
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val + '°C'
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
        type="rangeArea"
        data-chart-colors="[bg-primary-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default BasicRangeChart
