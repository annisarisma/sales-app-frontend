import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const GradientDonutApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [44, 55]

  // const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'];

  const options = {
    // labels: labels,
    chart: {
      height: 180,
      type: 'donut',
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: ['Process', 'In Process'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
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
        data-chart-colors="[bg-gray-200, bg-primary-500]"
        type="donut"
        id={chartId}
        height={180}
        width="100%"
      />
    </React.Fragment>
  )
}

const DumbbellColumnApp = ({
  chartColors,
  chartDarkColors,
  chartId,
  timeFrame,
}) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const getSeriesData = () => {
    switch (timeFrame) {
      case 'Weekly':
        return [
          {
            data: [
              {
                x: '2018',
                y: [241, 100],
              },
              {
                x: '2019',
                y: [150, 41],
              },
              {
                x: '2020',
                y: [210, 100],
              },
              {
                x: '2021',
                y: [200, 10],
              },
              {
                x: '2022',
                y: [100, 10],
              },
              {
                x: '2023',
                y: [190, 120],
              },
              {
                x: '2024',
                y: [154, 241],
              },
            ],
          },
        ]
      case 'Monthly':
        return [
          {
            data: [
              {
                x: '2018',
                y: [141, 90],
              },
              {
                x: '2019',
                y: [90, 21],
              },
              {
                x: '2020',
                y: [60, 120],
              },
              {
                x: '2021',
                y: [100, 50],
              },
              {
                x: '2022',
                y: [90, 30],
              },
              {
                x: '2023',
                y: [110, 70],
              },
              {
                x: '2024',
                y: [114, 141],
              },
            ],
          },
        ]
      case 'Yearly':
        return [
          {
            data: [
              {
                x: '2018',
                y: [141, 180],
              },
              {
                x: '2019',
                y: [190, 61],
              },
              {
                x: '2020',
                y: [120, 50],
              },
              {
                x: '2021',
                y: [190, 90],
              },
              {
                x: '2022',
                y: [120, 85],
              },
              {
                x: '2023',
                y: [90, 170],
              },
              {
                x: '2024',
                y: [54, 241],
              },
            ],
          },
        ]
      default:
        return [
          {
            data: [
              {
                x: '2018',
                y: [241, 100],
              },
              {
                x: '2019',
                y: [150, 41],
              },
              {
                x: '2020',
                y: [210, 100],
              },
              {
                x: '2021',
                y: [200, 10],
              },
              {
                x: '2022',
                y: [100, 10],
              },
              {
                x: '2023',
                y: [190, 120],
              },
              {
                x: '2024',
                y: [154, 241],
              },
            ],
          },
        ]
    }
  }

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
        dumbbellColors: [[chartsColor[1], chartsColor[0]]],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: 'top',
      horizontalAlign: 'center',
      customLegendItems: ['New Students', 'Leave Students'],
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
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={getSeriesData()}
        data-chart-colors="[bg-primary-500, bg-red-500]"
        type="rangeBar"
        id={chartId}
        height={290}
        width="100%"
      />
    </React.Fragment>
  )
}

export { GradientDonutApp, DumbbellColumnApp }
