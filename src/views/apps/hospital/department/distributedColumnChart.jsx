import React from 'react'

import useChartColors from '@src/hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const DistributedColumnChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Employee',
      data: [21, 22, 19, 10, 10, 28, 16],
    },
  ]

  const labels = [
    'Radiology',
    'Orthopedics',
    'Neurology',
    'Cardiology',
    'Pediatrics',
    'Nurse',
    'Others',
  ]

  const options = {
    labels: labels,
    chart: {
      height: 300,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '25%',
        distributed: true,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.2,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 30],
        colorStops: [],
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: labels,
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
        data-chart-colors="[bg-primary-500, bg-pink-500, bg-sky-500, bg-green-300, bg-yellow-200, bg-orange-200, bg-purple-500, bg-red-500]"
        type="bar"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default DistributedColumnChart
