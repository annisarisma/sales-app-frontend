import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const EmailCampaignChart = ({
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
          { name: 'Sent', data: [23, 24, 29, 25, 27, 26, 28, 22, 28] },
          { name: 'Opened', data: [15, 17, 16, 18, 19, 10, 11, 10, 14] },
        ]
      case 'Monthly':
        return [
          { name: 'Sent', data: [28, 29, 33, 36, 32, 32, 33] },
          { name: 'Opened', data: [12, 11, 14, 18, 17, 13, 13] },
        ]
      case 'Yearly':
        return [
          { name: 'Sent', data: [35, 20, 18, 25, 30, 27, 24] },
          { name: 'Opened', data: [10, 12, 14, 13, 18, 15, 18] },
        ]
      default:
        return [
          { name: 'Sent', data: [28, 29, 33, 36, 32, 32, 33] },
          { name: 'Opened', data: [12, 11, 14, 18, 17, 13, 13] },
        ]
    }
  }

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

  const options = {
    labels: labels,
    chart: {
      defaultLocale: 'en',
      height: 280,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        right: 0,
        top: -20,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
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
        data-chart-colors="[bg-primary-500, bg-gray-300]"
        type="area"
        id={chartId}
        height={280}
        width="100%"
      />
    </React.Fragment>
  )
}

const GradientDonutApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [33, 57]

  const labels = ['Open Rate', 'Click Rate']

  const options = {
    labels: labels,
    chart: {
      height: 230,
      type: 'donut',
    },
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
    legend: {
      formatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
      },
      position: 'bottom',
    },
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
    colors: chartsColor,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={series}
        data-chart-colors="[bg-primary-500, bg-red-500]"
        type="donut"
        id={chartId}
        height={170}
        width="100%"
      />
    </React.Fragment>
  )
}

const LabelColumnApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Inflation',
      data: [5, 4, 7, 9, 2, 6, 10, 6, 3, 7, 9, 5],
    },
  ]

  const options = {
    chart: {
      height: 130,
      type: 'bar',
      toolbar: {
        show: false,
      },
      sparkline: { enabled: !0 },
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
        data-chart-colors="[bg-primary-200]"
        type="bar"
        id={chartId}
        height={100}
        width="100%"
      />
    </React.Fragment>
  )
}

const MailStatisticApp = ({
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
            name: 'Sent',
            data: [
              {
                x: 'Jan',
                y: 43,
              },
              {
                x: 'Feb',
                y: 58,
              },
            ],
          },
          {
            name: 'Pending',
            data: [
              {
                x: 'Jan',
                y: 33,
              },
              {
                x: 'Feb',
                y: 38,
              },
            ],
          },
          {
            name: 'Cancel',
            data: [
              {
                x: 'Jan',
                y: 55,
              },
              {
                x: 'Feb',
                y: 21,
              },
            ],
          },
        ]
      case 'Monthly':
        return [
          {
            name: 'Sent',
            data: [
              {
                x: 'Jan',
                y: 83,
              },
              {
                x: 'Feb',
                y: 48,
              },
            ],
          },
          {
            name: 'Pending',
            data: [
              {
                x: 'Jan',
                y: 63,
              },
              {
                x: 'Feb',
                y: 28,
              },
            ],
          },
          {
            name: 'Cancel',
            data: [
              {
                x: 'Jan',
                y: 25,
              },
              {
                x: 'Feb',
                y: 91,
              },
            ],
          },
        ]
      case 'Yearly':
        return [
          {
            name: 'Sent',
            data: [
              {
                x: 'Jan',
                y: 83,
              },
              {
                x: 'Feb',
                y: 58,
              },
            ],
          },
          {
            name: 'Pending',
            data: [
              {
                x: 'Jan',
                y: 53,
              },
              {
                x: 'Feb',
                y: 78,
              },
            ],
          },
          {
            name: 'Cancel',
            data: [
              {
                x: 'Jan',
                y: 35,
              },
              {
                x: 'Feb',
                y: 21,
              },
            ],
          },
        ]
      default:
        return [
          {
            name: 'Sent',
            data: [
              {
                x: 'Jan',
                y: 43,
              },
              {
                x: 'Feb',
                y: 58,
              },
            ],
          },
          {
            name: 'Pending',
            data: [
              {
                x: 'Jan',
                y: 33,
              },
              {
                x: 'Feb',
                y: 38,
              },
            ],
          },
          {
            name: 'Cancel',
            data: [
              {
                x: 'Jan',
                y: 55,
              },
              {
                x: 'Feb',
                y: 21,
              },
            ],
          },
        ]
    }
  }

  const options = {
    chart: {
      height: 335,
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      line: {
        isSlopeChart: true,
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    // xaxis: {
    //     axisBorder: {
    //         show: false,
    //     }
    // },
    colors: chartsColor,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full"
        options={options}
        series={getSeriesData()}
        data-chart-colors="[bg-primary-500, bg-green-500, bg-red-500]"
        type="line"
        id={chartId}
        height={335}
        width="100%"
      />
    </React.Fragment>
  )
}

const TimeSpendingApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Total Spend',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: 'Sales',
      data: [62, 69, 91, 54, 10, 41, 35, 51, 49],
    },
  ]

  const options = {
    chart: {
      defaultLocale: 'en',
      height: 120,
      type: 'line',
      zoom: {
        enabled: true,
      },
      sparkline: { enabled: !0 },
    },
    // stroke: {
    //     curve: 'straight'
    // },
    xaxis: {
      title: {
        text: 'Xaxis',
      },
      // categories: labels
    },
    tooltip: {
      x: {
        show: true,
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 8,
    },
    stroke: {
      width: 1,
    },
    grid: {
      padding: {
        top: 0,
        right: 5,
        bottom: 20,
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
        series={series}
        data-chart-colors="[bg-primary-500, bg-green-500, bg-red-500]"
        type="line"
        id={chartId}
        height={120}
        width="100%"
      />
    </React.Fragment>
  )
}

export {
  EmailCampaignChart,
  GradientDonutApp,
  LabelColumnApp,
  MailStatisticApp,
  TimeSpendingApp,
}
