import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const GradientLineChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const values = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]

  const series = [
    {
      name: 'Sales',
      data: values,
    },
  ]
  const options = {
    chart: {
      defaultLocale: 'en',
      height: 300,
      type: 'line',
      zoom: {
        enabled: true,
      },
    },
    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
      tickAmount: 10,
      labels: {
        formatter: function (timestamp, _, opts) {
          return opts.dateFormatter(new Date(Number(timestamp)), 'dd MMM')
        },
      },
    },
    title: {
      text: 'Forecast',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: {
      min: -10,
      max: 40,
    },

    colors: chartsColor,
    grid: {
      padding: {
        top: 0,
        right: 5,
        bottom: 0,
      },
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="line"
        data-chart-colors="[bg-orange-500, bg-primary-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default GradientLineChart
