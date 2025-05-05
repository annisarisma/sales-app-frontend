import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const AnalyticsApp = ({ chartColors, chartDarkColors, chartId, timeFrame }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const getSeriesData = () => {
    switch (timeFrame) {
      case 'Weekly':
        return [{ name: 'Total GB', data: [55, 35, 51, 17, 32] }]
      case 'Last Month':
        return [{ name: 'Total GB', data: [34, 15, 21, 67, 42] }]
      case 'Last Year':
        return [{ name: 'Total GB', data: [64, 75, 31, 47, 72] }]
      default:
        return [{ name: 'Total GB', data: [44, 55, 41, 67, 22] }]
    }
  }

  const labels = ['Dropbox', 'Cloud', 'Mega', 'Google', 'Drive']

  const options = {
    labels: labels,
    chart: {
      height: 315,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    grid: {
      padding: {
        right: -12,
        top: -18,
        bottom: -8,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        // inverseColors: [this.colorCodes[0]],
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
    colors: chartsColor,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={getSeriesData()}
        data-chart-colors="[bg-primary-500, bg-gray-100]"
        type="bar"
        id={chartId}
        height={315}
        width="100%"
      />
    </React.Fragment>
  )
}

const OverviewStorageApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [44, 55, 41, 17, 15]

  const labels = ['Dropbox', 'Cloud', 'Mega', 'Google', 'Drive']

  const options = {
    labels: labels,
    chart: {
      height: 280,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 5,
      },
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    stroke: {
      width: 0,
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      position: 'bottom',
    },
    colors: chartsColor,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-400, bg-green-400, bg-yellow-400, bg-purple-400, bg-red-400]"
        type="donut"
        id={chartId}
        height={280}
        width="100%"
      />
    </React.Fragment>
  )
}

export { AnalyticsApp, OverviewStorageApp }
