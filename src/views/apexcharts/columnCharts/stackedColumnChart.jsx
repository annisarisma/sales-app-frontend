import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const StackedColumnChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: 'PRODUCT D',
      data: [21, 7, 25, 13, 22, 8],
    },
  ]
  const labels = [
    '01/01/2024 GMT',
    '01/02/2024 GMT',
    '01/03/2024 GMT',
    '01/04/2024 GMT',
    '01/05/2024 GMT',
    '01/06/2024 GMT',
  ]

  const options = {
    chart: {
      height: 300,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    colors: chartsColor,
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },

    xaxis: {
      categories: labels,
      type: 'datetime',
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="bar"
        data-chart-colors="[bg-primary-500, bg-green-500, bg-red-500, bg-yellow-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default StackedColumnChart
