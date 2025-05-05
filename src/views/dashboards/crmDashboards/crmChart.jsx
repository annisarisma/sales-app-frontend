import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const EmailCampaignChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Visitor',
      data: [154, 137, 41, 67, 43, 20, 41, 67, 20, 41, 32, 98],
    },
    {
      name: 'Add Cart',
      data: [13, 23, 20, 35, 27, 16, 8, 13, 20, 41, 44, 67],
    },
    {
      name: 'Check Out',
      data: [11, 54, 15, 21, 14, 24, 15, 21, 20, 41, 54, 35],
    },
    {
      name: 'Favorite',
      data: [21, 19, 25, 22, 8, 19, 13, 22, 20, 41, 49, 33],
    },
  ]

  const labels = [
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
  ]

  const options = {
    labels: labels,
    chart: {
      height: 300,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
      },
    },

    xaxis: {
      categories: labels,
      axisBorder: {
        show: false,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -5,
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 2,
      position: 'back',
      padding: {
        top: 10,
        right: 0,
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
    fill: {
      opacity: 1,
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
        data-chart-colors="[bg-primary-500, bg-pink-300, bg-sky-300, bg-slate-600]"
        type="bar"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

const BasicRadialBarApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [87.6]

  const labels = ['This Month']

  const options = {
    labels: labels,
    chart: {
      height: 180,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 10,
            opacity: 0.02,
          },
        },
        dataLabels: {
          name: {
            fontSize: '15px',
          },
          value: {
            show: true,
            fontSize: '14px',
            fontWeight: 700,
            offsetY: 10,
            formatter: function (val) {
              return '$' + val + 'k'
            },
          },
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
        data-chart-colors="[bg-slate-600, bg-slate-100]"
        type="radialBar"
        id={chartId}
        height={180}
        width="100%"
      />
    </React.Fragment>
  )
}

export { EmailCampaignChart, BasicRadialBarApp }
