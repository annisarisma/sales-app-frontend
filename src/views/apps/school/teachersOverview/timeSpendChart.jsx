import React from 'react'

import useChartColors from '@src/hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const TimeSpendLectureApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Total Hours',
      data: [142, 139, 159, 149, 162, 187, 160, 154, 122],
    },
  ]

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']

  const options = {
    labels: labels,
    chart: {
      height: 260,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
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
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
    colors: chartsColor,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full -ml-4"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-400]"
        type="bar"
        id={chartId}
        height={260}
        width="100%"
      />
    </React.Fragment>
  )
}

export default TimeSpendLectureApp
