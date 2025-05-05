import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const ColorRangeTreeMapChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      data: [
        {
          x: 'INTC',
          y: 1.2,
        },
        {
          x: 'GS',
          y: 0.4,
        },
        {
          x: 'CVX',
          y: -1.4,
        },
        {
          x: 'GE',
          y: 2.7,
        },
        {
          x: 'CAT',
          y: -0.3,
        },
        {
          x: 'RTX',
          y: 5.1,
        },
        {
          x: 'CSCO',
          y: -2.3,
        },
        {
          x: 'JNJ',
          y: 2.1,
        },
        {
          x: 'PG',
          y: 0.3,
        },
        {
          x: 'TRV',
          y: 0.12,
        },
        {
          x: 'MMM',
          y: -2.31,
        },
        {
          x: 'NKE',
          y: 3.98,
        },
        {
          x: 'IYT',
          y: 1.67,
        },
      ],
    },
  ]

  const options = {
    chart: {
      height: 300,
      type: 'treemap',
    },
    legend: {
      show: false,
    },
    title: {
      text: 'Treemap with Color scale',
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      offsetY: -4,
    },
    colors: chartsColor,
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: '#CD363A',
            },
            {
              from: 0.001,
              to: 6,
              color: '#52B12C',
            },
          ],
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
        type="treemap"
        data-chart-colors="[bg-primary-500, bg-green-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default ColorRangeTreeMapChart
