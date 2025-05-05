import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const AdsRevenueApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Total Revenue',
      data: [31, 77, 44, 31, 63, 94, 109],
    },
  ]

  const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']

  const options = {
    labels: labels,
    chart: {
      defaultLocale: 'en',
      height: 140,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      dashArray: [10],
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
        sizeOffset: 5,
      },
    },
    grid: {
      // borderColor: this.colorCodes[1],
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
        left: 7,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      show: false,
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
        data-chart-colors="[bg-red-500, bg-red-100, bg-red-50, bg-red-300]"
        type="line"
        id={chartId}
        height={140}
        width="100%"
      />
    </React.Fragment>
  )
}

export default AdsRevenueApp
