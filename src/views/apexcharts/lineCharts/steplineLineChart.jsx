import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const SteplineLineChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const values = [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]

  const series = [
    {
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
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Stepline Chart',
      align: 'left',
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
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
        data-chart-colors="[bg-green-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default SteplineLineChart
