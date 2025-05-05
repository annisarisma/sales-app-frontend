import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const BasicRadialBarChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [70]
  const labels = ['Cricket']

  const options = {
    chart: {
      height: 300,
      type: 'radialBar',
    },
    colors: chartsColor,
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
    labels: labels,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="radialBar"
        data-chart-colors="[bg-primary-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default BasicRadialBarChart
