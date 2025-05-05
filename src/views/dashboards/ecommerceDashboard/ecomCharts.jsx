import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const SimpleDonutApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })
  const series = [44, 55, 41, 17, 15]
  const options = {
    chart: {
      height: 75,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      position: 'bottom',
    },
    grid: {
      padding: {
        top: -6,
        right: 0,
        bottom: -10,
        left: 0,
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
        data-chart-colors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-red-500, bg-purple-500]"
        type="donut"
        id={chartId}
        height={75}
        width="100%"
      />
    </React.Fragment>
  )
}

const BasicColumnApp = ({
  chartColors,
  chartDarkColors,
  chartId,
  timeFrame,
}) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const getSeriesData = () => {
    switch (timeFrame) {
      case 'Weekly':
        return [
          { name: 'Net Profit', data: [30, 40, 35, 50, 70, 60, 80, 20, 80] },
          { name: 'Revenue', data: [50, 70, 60, 80, 90, 100, 110, 100, 140] },
        ]
      case 'Monthly':
        return [
          {
            name: 'Net Profit',
            data: [100, 120, 140, 130, 110, 150, 180, 100, 140],
          },
          {
            name: 'Revenue',
            data: [200, 220, 240, 230, 210, 250, 280, 200, 240],
          },
        ]
      case 'Yearly':
        return [
          {
            name: 'Net Profit',
            data: [500, 600, 700, 300, 400, 620, 500, 600, 700],
          },
          {
            name: 'Revenue',
            data: [1000, 1200, 1400, 1300, 1100, 1500, 1800, 1000, 1400],
          },
        ]
      default:
        return [
          { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
          { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
        ]
    }
  }

  const options = {
    chart: {
      height: 280,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      lineCap: 'round',
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$' + val + 'k'
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
        series={getSeriesData()}
        type="bar"
        id={chartId}
        height={280}
        width="100%"
      />
    </React.Fragment>
  )
}

const NetProfitApp = ({ chartColors, chartDarkColors, chartId }) => {
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Profit',
      data: [5, 4, 7, 2, 8, 6, 3],
    },
  ]

  const options = {
    chart: {
      height: 130,
      type: 'bar',
      toolbar: {
        show: false,
      },
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    grid: {
      padding: {
        top: 0,
        right: -10,
        bottom: 0,
        left: -10,
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
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
        data-chart-colors="[bg-red-200, bg-sky-500]"
        type="bar"
        id={chartId}
        height={130}
        width="100%"
      />
    </React.Fragment>
  )
}

const TrafficApp = ({ chartColors, chartDarkColors, chartId, timeFrame }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })
  const getSeriesData = () => {
    switch (timeFrame) {
      case 'Weekly':
        return [
          {
            name: 'Sales',
            data: [
              3.5, 3.9, 4.5, 4.2, 4.1, 4.3, 4, 4.2, 3.9, 3.8, 2.9, 2.1, 1.5,
              0.88, 0.76, 0.65, 0.4,
            ], // Example data for 7 days
          },
          {
            name: 'Visit',
            data: [
              -3.1, -3.4, -4.1, -4, -4.1, -4.4, -4.3, -4.22, -3.96, -3.7, -2.85,
              -2.2, -1.4, -1.18, -1.06, -1.05, -0.8,
            ], // Example data for 7 days
          },
        ]
      case 'Monthly':
        return [
          {
            name: 'Sales',
            data: [4.0, 4.5, 5.0, 5.8, 6.5, 7.1, 7.5, 3.0, 4.3, 2.6, 2.0, 3.5], // Example data for 12 months
          },
          {
            name: 'Visit',
            data: [
              -4.0, -1.2, -3.5, -2.7, -5.0, -5.5, -6.0, -3.5, -1.8, -2.0, -6.2,
              -4.5,
            ], // Example data for 12 months
          },
        ]
      case 'Yearly':
        return [
          {
            name: 'Sales',
            data: [5.5, 5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.2],
          },
          {
            name: 'Visit',
            data: [
              -5.5, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5,
              -0.2,
            ],
          },
        ]
      default:
        return [
          {
            name: 'Sales',
            data: [
              0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1,
              4.2, 4.5, 3.9, 3.5,
            ],
          },
          {
            name: 'Visit',
            data: [
              -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
              -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1,
            ],
          },
        ]
    }
  }
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
      height: 320,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: -20,
        bottom: 0,
      },
      row: {
        opacity: 0,
      },
    },
    yaxis: {
      min: -5,
      max: 5,
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + '%'
        },
      },
    },
    xaxis: {
      categories: labels,
      labels: {
        formatter: (val) => {
          return Math.abs(Math.round(val)) + '%'
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
        series={getSeriesData()}
        data-chart-colors="[bg-sky-500, bg-indigo-500]"
        type="bar"
        id={chartId}
        height={320}
        width="100%"
      />
    </React.Fragment>
  )
}

export { SimpleDonutApp, BasicColumnApp, NetProfitApp, TrafficApp }
