import React from 'react'

import useChartColors from '@src/hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const TestMarksSubjectChat = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Performance',
      data: [69, 78, 49, 63, 54, 87],
    },
  ]

  const labels = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'CS',
    'English',
  ]

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
        columnWidth: '20%',
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
      formatter: function (val) {
        return val + '%'
      },
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
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + '%'
        },
      },
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
        data-chart-colors="[bg-primary-300, bg-purple-300, bg-sky-300, bg-green-300, bg-red-200, bg-orange-200]"
        type="bar"
        id={chartId}
        height={260}
        width="100%"
      />
    </React.Fragment>
  )
}

export default TestMarksSubjectChat
