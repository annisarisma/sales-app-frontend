import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const NegativeValuesBarChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Males',
      data: [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5, 3,
      ],
    },
    {
      name: 'Females',
      data: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
        -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
      ],
    },
  ]
  const options = {
    chart: {
      height: 300,
      type: 'bar',
      stacked: true,
    },
    colors: chartsColor,
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        right: 0,
        bottom: -10,
      },
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {
        text: undefined,
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val.toString()
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + '%'
        },
      },
    },
    title: {
      text: 'Mauritius population pyramid 2011',
    },
    xaxis: {
      categories: [
        '85+',
        '80-84',
        '75-79',
        '70-74',
        '65-69',
        '60-64',
        '55-59',
        '50-54',
        '45-49',
        '40-44',
        '35-39',
        '30-34',
        '25-29',
        '20-24',
        '15-19',
        '10-14',
        '5-9',
        '0-4',
      ],
      title: {
        text: 'Percent',
      },
      labels: {
        formatter: function (value) {
          const numericValue = parseFloat(value)
          return Math.abs(Math.round(numericValue)) + '%'
        },
      },
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-sky-500, bg-indigo-500]"
        type="bar"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default NegativeValuesBarChart
