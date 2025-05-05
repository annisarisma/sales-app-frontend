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

const MultipleColorsChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    { name: 'PE1', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE2', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE3', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE4', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE5', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE6', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE7', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE8', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE9', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE10', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE11', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE12', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE13', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE14', data: generateData(8, { min: 0, max: 90 }) },
    { name: 'PE15', data: generateData(8, { min: 0, max: 90 }) },
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
    colors: chartsColor,
    xaxis: {
      type: 'category',
      categories: [
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '01:00',
        '01:30',
      ],
    },
    title: {
      text: 'HeatMap Chart (Different color shades for each series)',
    },
    grid: {
      padding: {
        right: 20,
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

export default MultipleColorsChart
