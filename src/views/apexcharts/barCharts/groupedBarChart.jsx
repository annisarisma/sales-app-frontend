import React, { useEffect, useRef } from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const GroupedBarChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const chartRef = useRef(null)

  const series = [
    {
      data: [44, 55, 41, 64, 22, 43, 21],
    },
    {
      data: [53, 32, 33, 52, 13, 44, 32],
    },
  ]
  const options = {
    chart: {
      height: 300,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff'],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    colors: chartsColor,
    xaxis: {
      categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    },
    grid: {
      padding: {
        right: 0,
        bottom: -10,
      },
    },
  }

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options)
      chart.render()
      return () => {
        chart.destroy()
      }
    }
  })

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-500, bg-sky-500]"
        type="bar"
        id={chartId}
        height={315}
        width="100%"
      />
    </React.Fragment>
  )
}

export default GroupedBarChart
