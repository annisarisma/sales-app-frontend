import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const BasicRadarChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
  ]
  const labels = ['January', 'February', 'March', 'April', 'May', 'June']

  const options = {
    chart: {
      height: 370,
      type: 'radar',
    },
    colors: chartsColor,
    title: {
      text: 'Basic Radar Chart',
    },
    xaxis: {
      categories: labels,
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="radar"
        data-chart-colors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default BasicRadarChart
