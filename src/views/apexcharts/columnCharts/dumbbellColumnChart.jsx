import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const DumbbellColumnChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      data: [
        {
          x: '2008',
          y: [2800, 4500],
        },
        {
          x: '2009',
          y: [3200, 4100],
        },
        {
          x: '2010',
          y: [2950, 7800],
        },
        {
          x: '2011',
          y: [3000, 4600],
        },
        {
          x: '2012',
          y: [3500, 4100],
        },
        {
          x: '2013',
          y: [4500, 6500],
        },
        {
          x: '2014',
          y: [4100, 5600],
        },
      ],
    },
  ]
  const options = {
    chart: {
      height: 290,
      type: 'rangeBar',
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [[chartsColor[0], chartsColor[1]]],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: 'top',
      horizontalAlign: 'left',
      customLegendItems: ['Product A', 'Product B'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: [chartsColor[1]],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    grid: {
      padding: {
        bottom: -10,
        right: 0,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      tickPlacement: 'on',
    },
    colors: chartsColor,
  }
  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="rangeBar"
        data-chart-colors="[bg-primary-500, bg-pink-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default DumbbellColumnChart
