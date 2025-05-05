import React from 'react'

import useChartColors from '@src/hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const StatusChart = ({ chartColors, chartDarkColors, chartId, timeFrame }) => {
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const getSeriesData = () => {
    switch (timeFrame) {
      case 'Last Week':
        return [16, 8, 12, 9]
      case 'Last Month':
        return [1, 12, 14, 5]
      case 'Last Year':
        return [8, 18, 3, 10]
      default:
        return [16, 8, 12, 9]
    }
  }

  // const series = [16, 8, 12, 9];

  const labels = ['Paid', 'Unpaid', 'Pending', 'Overdue']

  const options = {
    labels: labels,
    chart: {
      height: 110,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: '60%',
        },
      },
    },
    legend: {
      offsetY: -10,
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
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={getSeriesData()}
        data-chart-colors="[bg-green-500, bg-sky-500, bg-yellow-500, bg-red-500, bg-purple-500]"
        type="donut"
        id={chartId}
        height={110}
        width="100%"
      />
    </React.Fragment>
  )
}

export default StatusChart
