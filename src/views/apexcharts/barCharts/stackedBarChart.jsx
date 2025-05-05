import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const StackedBarChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    { name: 'Marine Sprite', data: [44, 55, 41, 37, 22, 43, 21] },
    { name: 'Striking Calf', data: [53, 32, 33, 52, 13, 43, 32] },
    { name: 'Tank Picture', data: [12, 17, 11, 9, 15, 11, 20] },
    { name: 'Bucket Slope', data: [9, 7, 5, 8, 6, 9, 4] },
    { name: 'Reborn Kid', data: [25, 12, 19, 32, 25, 24, 10] },
  ]
  const options = {
    chart: {
      height: 300,
      type: 'bar',
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    title: {
      text: 'Fiction Books Sales',
    },
    xaxis: {
      categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
      labels: {
        formatter: (val) => `${val}K`,
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}K`,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: chartsColor,
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
    grid: {
      padding: {
        right: 0,
        bottom: -10,
      },
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-500, bg-green-500, bg-red-500, bg-purple-500, bg-sky-500]"
        type="bar"
        id={chartId}
        height={315}
        width="100%"
      />
    </React.Fragment>
  )
}

export default StackedBarChart
