import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const SpLineAreaChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]
  const options = {
    chart: {
      defaultLocale: 'en',
      height: 300,
      type: 'area',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2024-06-19T00:00:00.000Z',
        '2024-06-19T01:30:00.000Z',
        '2024-06-19T02:30:00.000Z',
        '2024-06-19T03:30:00.000Z',
        '2024-06-19T04:30:00.000Z',
        '2024-06-19T05:30:00.000Z',
        '2024-06-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    colors: chartsColor,
  }
  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-sky-500, bg-green-500]"
        type="area"
        height={380}
        id={chartId}
        width="100%"
      />
    </React.Fragment>
  )
}

export default SpLineAreaChart
