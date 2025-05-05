import React from 'react'

import ReactApexChart from 'react-apexcharts'

// Dynamically import the ReactApexChart component

const InvoicedChart = ({ chartId }) => {
  const series = [
    {
      name: 'Series name',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]

  const options = {
    chart: {
      defaultLocale: 'en',
      height: 350,
      type: 'line',
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        formatter: (val) => {
          return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        },
      },
    },
    colors: ['#8E2DE2'],
    grid: {
      strokeDashArray: 2,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
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
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-500, bg-green-500, bg-purple-500]"
        type="line"
        id={chartId}
        height={315}
        width="100%"
      />
    </React.Fragment>
  )
}

export { InvoicedChart }
