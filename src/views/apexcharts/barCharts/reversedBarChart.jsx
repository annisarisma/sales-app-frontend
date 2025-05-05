import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const ReversedBarChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690],
    },
  ]
  const options = {
    chart: {
      height: 300,
      type: 'bar',
    },
    annotations: {
      xaxis: [
        {
          x: 500,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'X annotation',
          },
        },
      ],
      yaxis: [
        {
          y: 'July',
          y2: 'September',
          label: {
            text: 'Y annotation',
          },
        },
      ],
    },
    colors: chartsColor,
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: [
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      reversed: true,
      axisTicks: {
        show: true,
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

export default ReversedBarChart
