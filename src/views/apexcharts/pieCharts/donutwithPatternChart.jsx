import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const DonutwithPatternChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [44, 55, 41, 17, 15]
  const labels = ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror']

  const options = {
    chart: {
      height: 300,
      type: 'donut',
      dropShadow: {
        enabled: true,
        color: '#111',
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: labels,
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8,
      },
    },
    fill: {
      type: 'pattern',
      opacity: 1,
      pattern: {
        // enabled: true,
        style: [
          'verticalLines',
          'squares',
          'horizontalLines',
          'circles',
          'slantedLines',
        ],
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    theme: {
      palette: 'palette2',
    },
    title: {
      text: 'Favourite Movie Type',
    },
    colors: chartsColor,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="donut"
        data-chart-colors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default DonutwithPatternChart
