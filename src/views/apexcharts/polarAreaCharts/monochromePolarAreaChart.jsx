import React from 'react'

import ReactApexChart from 'react-apexcharts'

const MonochromePolarAreaChart = ({ chartId }) => {
  const series = [42, 47, 52, 58, 65]
  const labels = ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E']

  const options = {
    chart: {
      height: 300,
      type: 'polarArea',
    },
    labels: labels,
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6,
      },
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="polarArea"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default MonochromePolarAreaChart
