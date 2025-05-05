import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const GroupStackedColumnChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Q1 Budget',
      group: 'budget',
      data: [44000, 55000, 41000, 67000, 22000, 43000],
    },
    {
      name: 'Q1 Actual',
      group: 'actual',
      data: [48000, 50000, 40000, 65000, 25000, 40000],
    },
    {
      name: 'Q2 Budget',
      group: 'budget',
      data: [13000, 36000, 20000, 8000, 13000, 27000],
    },
    {
      name: 'Q2 Actual',
      group: 'actual',
      data: [20000, 40000, 25000, 10000, 12000, 28000],
    },
  ]

  const options = {
    chart: {
      height: 300,
      type: 'bar',
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    dataLabels: {
      formatter: (val) => {
        return val / 1000 + 'K'
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: [
        'Online advertising',
        'Sales Training',
        'Print advertising',
        'Catalogs',
        'Meetings',
        'Public relations',
      ],
    },
    fill: {
      opacity: 1,
    },
    colors: chartsColor,
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1000 + 'K'
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="bar"
        data-chart-colors="[bg-primary-500, bg-green-500, bg-primary-200, bg-green-300]"
        data-chart-dark-colors="[bg-primary-500, bg-green-500, bg-primary-800, bg-green-800]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default GroupStackedColumnChart
