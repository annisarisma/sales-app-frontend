import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const PatternedBarChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: 'Bucket Slope',
      data: [9, 7, 5, 8, 6, 9, 4],
    },
  ]
  const options = {
    chart: {
      height: 300,
      type: 'bar',
      stacked: true,
      dropShadow: {
        enabled: true,
        blur: 1,
        opacity: 0.25,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    title: {
      text: 'Compare Sales Strategy',
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    colors: chartsColor,
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val + 'K'
        },
      },
    },
    fill: {
      type: 'pattern',
      opacity: 1,
      pattern: {
        style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'],
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-500, bg-green-500, bg-red-500, bg-purple-500]"
        type="bar"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default PatternedBarChart
