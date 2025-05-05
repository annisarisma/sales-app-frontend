import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const generateData = (count, range) => {
  const series = []
  for (let i = 0; i < count; i++) {
    const x = (i + 1).toString()
    const y =
      Math.floor(Math.random() * (range.max - range.min + 1)) + range.min

    series.push({
      x: x,
      y: y,
    })
  }
  return series
}

const MultipleColorsFlippedHeatChart = ({
  chartColors,
  chartDarkColors,
  chartId,
}) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    { name: 'Jan', data: generateData(20, { min: -30, max: 55 }) },
    { name: 'Feb', data: generateData(20, { min: -30, max: 55 }) },
    { name: 'Mar', data: generateData(20, { min: -30, max: 55 }) },
    { name: 'Apr', data: generateData(20, { min: -30, max: 55 }) },
    { name: 'May', data: generateData(20, { min: -30, max: 55 }) },
    { name: 'Jun', data: generateData(20, { min: -30, max: 55 }) },
    { name: 'Jul', data: generateData(20, { min: -30, max: 55 }) },
    { name: 'Aug', data: generateData(20, { min: -30, max: 55 }) },
    { name: 'Sep', data: generateData(20, { min: -30, max: 55 }) },
  ]

  // Chart options
  const options = {
    chart: {
      height: 300,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          inverse: true,
        },
      },
    },
    colors: chartsColor,
    xaxis: {
      type: 'category',
      categories: [
        'P1',
        'P2',
        'P3',
        'P4',
        'P5',
        'P6',
        'P7',
        'P8',
        'P9',
        'P10',
        'P11',
        'P12',
        'P13',
        'P14',
        'P15',
        'P16',
        'P17',
        'P18',
        'P19',
        'P20',
      ],
    },
    title: {
      text: 'Color Scales flipped Vertically',
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
        data-chart-colors="[bg-primary-500, bg-green-500, bg-pink-500, bg-sky-500, bg-indigo-500, bg-purple-500, bg-orange-500, bg-yellow-500]"
        type="heatmap"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default MultipleColorsFlippedHeatChart
