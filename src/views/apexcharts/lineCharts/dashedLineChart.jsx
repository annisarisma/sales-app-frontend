import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const DashedLineChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: 'Page Views',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ]

  const options = {
    chart: {
      defaultLocale: 'en',
      height: 300,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5],
    },
    title: {
      text: 'Page Statistics',
      align: 'left',
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          ' - <strong>' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          '</strong>'
        )
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + ' (mins)'
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + ' per session'
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val
            },
          },
        },
      ],
    },
    colors: chartsColor,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="line"
        data-chart-colors="[bg-primary-500, bg-green-500, bg-gray-200]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default DashedLineChart
