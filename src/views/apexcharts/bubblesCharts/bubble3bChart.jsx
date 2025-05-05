import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const generateData = (baseVal, count, range) => {
  const series = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
    const y =
      Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

    series.push([x, y, z])
    baseVal += 86400000 // Increment date by one day in milliseconds
  }
  return series
}

const ThreeDBubbleChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Product1',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Product2',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Product3',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Product4',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ]
  const options = {
    chart: {
      height: 300,
      type: 'bubble',
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    title: {
      text: '3D Bubble Chart',
    },
    colors: chartsColor,
    xaxis: {
      tickAmount: 12,
      type: 'datetime',
      labels: {
        rotate: 0,
      },
    },
    yaxis: {
      max: 70,
    },
    theme: {
      palette: 'palette2',
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-500, bg-green-500, bg-red-500, bg-yellow-500]"
        type="bubble"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default ThreeDBubbleChart
