import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const SalesRevenueChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Total Revenue',
      data: [31, 40, 28, 51, 42, 119, 100],
    },
  ]

  const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']

  const options = {
    labels: labels,
    chart: {
      defaultLocale: 'en',
      height: 140,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      dashArray: [10],
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          ' - <strong>' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          '</strong>'
        )
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 5,
      },
    },
    grid: {
      // borderColor: this.colorCodes[1],
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
        left: 7,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      show: false,
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
        data-chart-colors="[bg-primary-500, bg-primary-100, bg-primary-50, bg-primary-300]"
        type="line"
        id={chartId}
        height={140}
        width="100%"
      />
    </React.Fragment>
  )
}

const AdsRevenueChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Total Revenue',
      data: [31, 77, 44, 31, 63, 94, 109],
    },
  ]

  const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']

  const options = {
    labels: labels,
    chart: {
      defaultLocale: 'en',
      height: 140,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      dashArray: [10],
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          ' - <strong>' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          '</strong>'
        )
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 5,
      },
    },
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
        left: 7,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      show: false,
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
        data-chart-colors="[bg-red-500, bg-red-100, bg-red-50, bg-red-300]"
        type="line"
        id={chartId}
        height={140}
        width="100%"
      />
    </React.Fragment>
  )
}

const OnlineSalesChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Total Sales',
      data: [44, 55, 41, 67, 22, 43, 21, 33],
    },
  ]

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Pears']

  const options = {
    labels: labels,
    chart: {
      height: 160,
      type: 'bar',
      sparkline: { enabled: !0 },
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
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: [],
        inverseColors: true,
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
        series={series}
        data-chart-colors="[bg-sky-500]"
        type="bar"
        id={chartId}
        height={160}
        width="100%"
      />
    </React.Fragment>
  )
}

const OnlineWeeklyApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Total Sales',
      data: [22, 43, 21, 44, 55, 33, 41],
    },
  ]

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Pears']

  const options = {
    labels: labels,
    chart: {
      height: 160,
      type: 'bar',
      sparkline: { enabled: !0 },
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
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
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
        series={series}
        data-chart-colors="[bg-sky-500]"
        type="bar"
        id={chartId}
        height={160}
        width="100%"
      />
    </React.Fragment>
  )
}

const WebAnalyticsApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Referral',
      data: [
        {
          x: 'Aug',
          y: 43,
        },
        {
          x: 'Sep',
          y: 58,
        },
        {
          x: 'Oct',
          y: 66,
        },
        {
          x: 'Nov',
          y: 44,
        },
      ],
    },
    {
      name: 'Direct',
      data: [
        {
          x: 'Aug',
          y: 33,
        },
        {
          x: 'Sep',
          y: 43,
        },
        {
          x: 'Oct',
          y: 34,
        },
        {
          x: 'Nov',
          y: 53,
        },
      ],
    },
    {
      name: 'Ads',
      data: [
        {
          x: 'Jan',
          y: 55,
        },
        {
          x: 'Feb',
          y: 33,
        },
        {
          x: 'Oct',
          y: 54,
        },
        {
          x: 'Nov',
          y: 65,
        },
      ],
    },
  ]

  const options = {
    // labels: labels,
    chart: {
      height: 315,
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    plotOptions: {
      line: {
        isSlopeChart: true,
      },
    },
    dataLabels: {
      background: {
        enabled: true,
      },
      formatter(val, opts) {
        const seriesName = opts.w.config.series[opts.seriesIndex].name
        return val !== null ? seriesName : ''
      },
    },
    legend: {
      show: false,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    grid: {
      padding: {
        bottom: -15,
        right: 0,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
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
        data-chart-colors="[bg-primary-500, bg-green-500, bg-purple-500]"
        type="line"
        id={chartId}
        height={315}
        width="100%"
      />
    </React.Fragment>
  )
}

const FollowersApp = ({ chartColors, chartDarkColors, chartId, timeFrame }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const getSeriesData = () => {
    switch (timeFrame) {
      case 'Weekly':
        return [
          { name: 'Men', data: [30, 40, 35, 50, 70, 60] },
          { name: 'Woman', data: [50, 70, 60, 80, 90, 100] },
        ]
      case 'Monthly':
        return [
          { name: 'Men', data: [100, 120, 140, 130, 110, 150] },
          { name: 'Woman', data: [200, 220, 240, 230, 210, 250] },
        ]
      case 'Yearly':
        return [
          { name: 'Men', data: [50, 60, 70, 30, 40, 62] },
          { name: 'Woman', data: [100, 120, 140, 130, 110, 150] },
        ]
      default:
        return [
          { name: 'Men', data: [44, 55, 41, 67, 22, 43] },
          { name: 'Woman', data: [13, 23, 20, 8, 13, 27] },
        ]
    }
  }

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

  const options = {
    labels: labels,
    chart: {
      height: 360,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        horizontal: false,
        borderRadius: 13,
      },
    },
    legend: {
      position: 'bottom',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
    colors: chartsColor,
  }

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        className="!min-h-full -ml-space"
        options={options}
        series={getSeriesData()}
        data-chart-colors="[bg-primary-500, bg-primary-200]"
        type="bar"
        id={chartId}
        height={360}
        width="100%"
      />
    </React.Fragment>
  )
}

const VisitBrowsersApp = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [44, 55]

  const labels = ['Cash', 'Qris']

  const options = {
    labels: labels,
    chart: {
      height: 160,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },

    fill: {
      type: 'gradient',
    },
    grid: {
      padding: {
        bottom: -80,
      },
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
        data-chart-colors="[bg-primary-500, bg-orange-500, bg-yellow-500]"
        type="donut"
        id={chartId}
        height={160}
        width="100%"
      />
    </React.Fragment>
  )
}

const TrafficSourceApp = ({
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
            name: 'Direct Traffic',
            data: [30, 40, 35, 50, 70, 60, 40, 50, 60],
          },
          {
            name: 'Search Engine Traffic',
            data: [50, 70, 30, 80, 40, 84, 33, 45, 75],
          },
        ]
      case 'Monthly':
        return [
          {
            name: 'Direct Traffic',
            data: [30, 30, 50, 60, 30, 50, 70, 60, 90],
          },
          {
            name: 'Search Engine Traffic',
            data: [20, 60, 65, 56, 70, 50, 90, 75, 60],
          },
        ]
      case 'Yearly':
        return [
          {
            name: 'Direct Traffic',
            data: [53, 67, 73, 30, 40, 62, 50, 45, 85],
          },
          {
            name: 'Search Engine Traffic',
            data: [100, 90, 70, 60, 100, 80, 90, 95, 140],
          },
        ]
      default:
        return [
          {
            name: 'Direct Traffic',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: 'Search Engine Traffic',
            data: [76, 85, 100, 98, 87, 105, 91, 114, 94],
          },
        ]
    }
  }

  const options = {
    // labels: labels,
    chart: {
      height: 145,
      type: 'bar',
      sparkline: { enabled: !0 },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadiusApplication: 'around',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      offsetY: -3,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    grid: {
      padding: {
        top: 4,
        right: 0,
        left: 0,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$' + val + 'k'
        },
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
        data-chart-colors="[bg-primary-500, bg-gray-200]"
        type="bar"
        id={chartId}
        height={145}
        width="100%"
      />
    </React.Fragment>
  )
}

export {
  SalesRevenueChart,
  AdsRevenueChart,
  OnlineSalesChart,
  OnlineWeeklyApp,
  WebAnalyticsApp,
  FollowersApp,
  VisitBrowsersApp,
  TrafficSourceApp,
}
