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

const BasicHeatmapChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    { name: 'Metric1', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric2', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric3', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric4', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric5', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric6', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric7', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric8', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric9', data: generateData(18, { min: 0, max: 90 }) },
  ]

  const options = {
    chart: {
      height: 300,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false,
    },
    colors: chartsColor,
    title: {
      text: 'HeatMap Chart (Single color)',
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
        data-chart-colors="[bg-primary-500]"
        type="heatmap"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default BasicHeatmapChart
