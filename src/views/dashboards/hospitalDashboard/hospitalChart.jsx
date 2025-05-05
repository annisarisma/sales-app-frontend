import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const PatientVisitApp = ({
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
          { name: 'Net Profit', data: [30, 40, 35, 50, 40, 60, 40, 50, 60] },
        ]
      case 'Monthly':
        return [
          { name: 'Net Profit', data: [30, 40, 50, 60, 30, 50, 20, 60, 70] },
        ]
      case 'Yearly':
        return [
          { name: 'Net Profit', data: [53, 67, 43, 30, 40, 62, 50, 45, 85] },
        ]
      default:
        return [
          { name: 'Net Profit', data: [32, 39, 43, 49, 52, 58, 63, 60, 66] },
        ]
    }
  }

  const options = {
    chart: {
      height: 320,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        // endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
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
    fill: {
      opacity: 1,
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: -30,
        right: 0,
        bottom: -12,
        left: 0,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + 'k'
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
        data-chart-colors="[bg-primary-500, bg-green-500, bg-yellow-500]"
        type="bar"
        id={chartId}
        height={320}
        width="100%"
      />
    </React.Fragment>
  )
}

const PatientDepartmentApp = ({
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
        return [80, 40, 35, 50]
      case 'Monthly':
        return [30, 50, 10, 45]
      case 'Yearly':
        return [10, 75, 21, 18]
      default:
        return [44, 55, 41, 18]
    }
  }

  const labels = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics']

  const options = {
    labels: labels,
    chart: {
      height: 150,
      width: '350',
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
            height: 150,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    colors: chartsColor,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={getSeriesData()}
        data-chart-colors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]"
        type="donut"
        id={chartId}
        height={150}
        width="100%"
      />
    </React.Fragment>
  )
}

const PatientsHistoryApp = ({
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
          {
            name: 'Inject Patients',
            data: [30, 40, 35, 50, 70, 60, 40, 50, 60],
          },
          {
            name: 'Surgery Patients',
            data: [50, 70, 30, 80, 40, 84, 33, 45, 75],
          },
        ]
      case 'Monthly':
        return [
          {
            name: 'Inject Patients',
            data: [30, 30, 50, 60, 30, 50, 70, 60, 90],
          },
          {
            name: 'Surgery Patients',
            data: [20, 60, 65, 56, 70, 50, 90, 75, 60],
          },
        ]
      case 'Yearly':
        return [
          {
            name: 'Inject Patients',
            data: [53, 67, 73, 30, 40, 62, 50, 45, 85],
          },
          {
            name: 'Surgery Patients',
            data: [100, 90, 70, 60, 100, 80, 90, 95, 140],
          },
        ]
      default:
        return [
          { name: 'Inject Patients', data: [24, 32, 28, 62, 67, 80, 96, 106] },
          { name: 'Surgery Patients', data: [5, 14, 19, 27, 35, 44, 22, 49] },
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
      defaultLocale: 'en',
      height: 195,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      lineCap: 'butt',
    },
    tooltip: {
      x: {
        show: true,
      },
    },
    grid: {
      strokeDashArray: 4,
      position: 'back',
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
        className="!min-h-full"
        options={options}
        series={getSeriesData()}
        data-chart-colors="[bg-primary-500, bg-purple-500]"
        type="line"
        id={chartId}
        height={195}
        width="100%"
      />
    </React.Fragment>
  )
}

const HospitalBirthDeathApp = ({
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
          { name: 'Birth Case', data: [30, 40, 35, 50, 70, 60] },
          { name: 'Death Case', data: [50, 70, 30, 80, 40, 84] },
          { name: 'Accident Case', data: [10, 40, 70, 90, 30, 24] },
        ]
      case 'Monthly':
        return [
          { name: 'Birth Case', data: [30, 30, 50, 60, 30, 50] },
          { name: 'Death Case', data: [20, 60, 65, 56, 70, 50] },
          { name: 'Accident Case', data: [50, 70, 30, 80, 40, 84] },
        ]
      case 'Yearly':
        return [
          { name: 'Birth Case', data: [53, 67, 73, 30, 40, 62] },
          { name: 'Death Case', data: [20, 50, 70, 60, 40, 80] },
          { name: 'Accident Case', data: [50, 70, 30, 80, 40, 84] },
        ]
      default:
        return [
          { name: 'Birth Case', data: [80, 50, 30, 70, 99, 36] },
          { name: 'Death Case', data: [10, 14, 28, 16, 34, 87] },
          { name: 'Accident Case', data: [44, 98, 54, 46, 34, 22] },
        ]
    }
  }

  const labels = ['2019', '2020', '2021', '2022', '2023', '2024']

  const options = {
    labels: labels,
    chart: {
      height: 340,
      type: 'radar',
    },
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.1,
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
        series={getSeriesData()}
        data-chart-colors="[bg-primary-500, bg-red-500, bg-green-500]"
        type="radar"
        id={chartId}
        height={340}
        width="100%"
      />
    </React.Fragment>
  )
}

export {
  PatientVisitApp,
  PatientDepartmentApp,
  PatientsHistoryApp,
  HospitalBirthDeathApp,
}
