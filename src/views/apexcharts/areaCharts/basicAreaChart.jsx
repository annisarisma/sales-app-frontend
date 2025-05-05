import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const BasicAreaChart = ({ chartColors, chartDarkColors, chartId }) => {
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
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
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-500]"
        type="area"
        id={chartId}
        height={380}
        width="100%"
      />
    </React.Fragment>
  )
}

export default BasicAreaChart
