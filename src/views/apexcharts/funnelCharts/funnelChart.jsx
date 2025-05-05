import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const FunnelChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: '',
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ]

  const labels = [
    'Sourced',
    'Screened',
    'Assessed',
    'HR Interview',
    'Technical',
    'Verify',
    'Offered',
    'Hired',
  ]

  const options = {
    chart: {
      height: 300,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opt) => {
        return `${labels[opt.dataPointIndex]}: ${val}`
      },
      dropShadow: {
        enabled: true,
      },
    },
    colors: chartsColor,
    title: {
      text: 'Recruitment Funnel',
      align: 'center',
    },
    xaxis: {
      categories: labels,
    },
    legend: {
      show: false,
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
        type="bar"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default FunnelChart
