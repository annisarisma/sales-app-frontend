import React from 'react'

import useChartColors from '@src/hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const InvitationStatusCharts = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [87]

  const labels = ['Accept Invitation']

  const options = {
    labels: labels,
    chart: {
      height: 257,
      type: 'radialBar',
    },
    colors: chartsColor,
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        dataLabels: {
          show: true,
          name: {
            fontWeight: '600',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [`${chartsColor[1]}`, `${chartsColor[2]}`],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-pink-500, bg-primary-500]"
        type="radialBar"
        id={chartId}
        height={257}
        width="100%"
      />
    </React.Fragment>
  )
}

export default InvitationStatusCharts
