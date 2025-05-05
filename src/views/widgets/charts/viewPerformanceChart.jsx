import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const ViewPerformanceChart = ({ chartColors, chartDarkColors, chartId }) => {
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [48, 98]

  const options = {
    // labels: labels,
    chart: {
      height: 200,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 20,
      },
    },
    legend: {
      show: false,
    },
    colors: chartsColor,
    grid: {
      padding: {
        top: -20,
        bottom: -80,
      },
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-500, bg-pink-400]"
        type="donut"
        id={chartId}
        height={250}
        width="100%"
      />
    </React.Fragment>
  )
}

export default ViewPerformanceChart
