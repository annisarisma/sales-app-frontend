import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const ZoomableLineChart = ({ chartColors, chartDarkColors, chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'XYZ MOTORS',
      data: [
        {
          x: new Date('2024-06-12').getTime(),
          y: 140,
        },
        {
          x: new Date('2024-06-13').getTime(),
          y: 147,
        },
        {
          x: new Date('2024-06-14').getTime(),
          y: 150,
        },
        {
          x: new Date('2024-06-15').getTime(),
          y: 154,
        },
        {
          x: new Date('2024-06-16').getTime(),
          y: 160,
        },
        {
          x: new Date('2024-06-17').getTime(),
          y: 165,
        },
        {
          x: new Date('2024-06-18').getTime(),
          y: 162,
        },
        {
          x: new Date('2024-06-20').getTime(),
          y: 159,
        },
        {
          x: new Date('2024-06-21').getTime(),
          y: 164,
        },
        {
          x: new Date('2024-06-22').getTime(),
          y: 160,
        },
        {
          x: new Date('2024-06-23').getTime(),
          y: 165,
        },
        {
          x: new Date('2024-06-24').getTime(),
          y: 169,
        },
        {
          x: new Date('2024-06-25').getTime(),
          y: 172,
        },
        {
          x: new Date('2024-06-26').getTime(),
          y: 177,
        },
        {
          x: new Date('2024-06-27').getTime(),
          y: 173,
        },
        {
          x: new Date('2024-06-28').getTime(),
          y: 169,
        },
        {
          x: new Date('2024-06-29').getTime(),
          y: 163,
        },
        {
          x: new Date('2024-06-30').getTime(),
          y: 158,
        },
        {
          x: new Date('2024-07-01').getTime(),
          y: 153,
        },
        {
          x: new Date('2024-07-02').getTime(),
          y: 149,
        },
        {
          x: new Date('2024-07-03').getTime(),
          y: 144,
        },
        {
          x: new Date('2024-07-05').getTime(),
          y: 150,
        },
        {
          x: new Date('2024-07-06').getTime(),
          y: 155,
        },
        {
          x: new Date('2024-07-07').getTime(),
          y: 159,
        },
        {
          x: new Date('2024-07-08').getTime(),
          y: 163,
        },
        {
          x: new Date('2024-07-09').getTime(),
          y: 156,
        },
        {
          x: new Date('2024-07-11').getTime(),
          y: 151,
        },
        {
          x: new Date('2024-07-12').getTime(),
          y: 157,
        },
        {
          x: new Date('2024-07-13').getTime(),
          y: 161,
        },
        {
          x: new Date('2024-07-14').getTime(),
          y: 150,
        },
        {
          x: new Date('2024-07-15').getTime(),
          y: 154,
        },
        {
          x: new Date('2024-07-16').getTime(),
          y: 160,
        },
        {
          x: new Date('2024-07-17').getTime(),
          y: 165,
        },
        {
          x: new Date('2024-07-18').getTime(),
          y: 162,
        },
        {
          x: new Date('2024-07-20').getTime(),
          y: 159,
        },
        {
          x: new Date('2024-07-21').getTime(),
          y: 164,
        },
        {
          x: new Date('2024-07-22').getTime(),
          y: 160,
        },
        {
          x: new Date('2024-07-23').getTime(),
          y: 165,
        },
        {
          x: new Date('2024-07-24').getTime(),
          y: 169,
        },
        {
          x: new Date('2024-07-25').getTime(),
          y: 172,
        },
        {
          x: new Date('2024-07-26').getTime(),
          y: 177,
        },
        {
          x: new Date('2024-07-27').getTime(),
          y: 173,
        },
        {
          x: new Date('2024-07-28').getTime(),
          y: 169,
        },
        {
          x: new Date('2024-07-29').getTime(),
          y: 163,
        },
        {
          x: new Date('2024-07-30').getTime(),
          y: 162,
        },
        {
          x: new Date('2024-08-01').getTime(),
          y: 158,
        },
        {
          x: new Date('2024-08-02').getTime(),
          y: 152,
        },
        {
          x: new Date('2024-08-03').getTime(),
          y: 147,
        },
        {
          x: new Date('2024-08-05').getTime(),
          y: 142,
        },
        {
          x: new Date('2024-08-06').getTime(),
          y: 147,
        },
        {
          x: new Date('2024-08-07').getTime(),
          y: 151,
        },
        {
          x: new Date('2024-08-08').getTime(),
          y: 155,
        },
        {
          x: new Date('2024-08-09').getTime(),
          y: 159,
        },
        {
          x: new Date('2024-08-11').getTime(),
          y: 162,
        },
        {
          x: new Date('2024-08-12').getTime(),
          y: 157,
        },
        {
          x: new Date('2024-08-13').getTime(),
          y: 161,
        },
        {
          x: new Date('2024-08-14').getTime(),
          y: 166,
        },
        {
          x: new Date('2024-08-15').getTime(),
          y: 169,
        },
        {
          x: new Date('2024-08-16').getTime(),
          y: 172,
        },
        {
          x: new Date('2024-08-17').getTime(),
          y: 177,
        },
        {
          x: new Date('2024-08-18').getTime(),
          y: 181,
        },
        {
          x: new Date('2024-08-20').getTime(),
          y: 178,
        },
        {
          x: new Date('2024-08-21').getTime(),
          y: 173,
        },
        {
          x: new Date('2024-08-22').getTime(),
          y: 169,
        },
        {
          x: new Date('2024-08-23').getTime(),
          y: 163,
        },
        {
          x: new Date('2024-08-24').getTime(),
          y: 159,
        },
        {
          x: new Date('2024-08-25').getTime(),
          y: 164,
        },
        {
          x: new Date('2024-08-26').getTime(),
          y: 168,
        },
        {
          x: new Date('2024-08-27').getTime(),
          y: 172,
        },
        {
          x: new Date('2024-08-28').getTime(),
          y: 169,
        },
        {
          x: new Date('2024-08-29').getTime(),
          y: 163,
        },
        {
          x: new Date('2024-08-30').getTime(),
          y: 162,
        },
        {
          x: new Date('2024-09-01').getTime(),
          y: 158,
        },
        {
          x: new Date('2024-09-02').getTime(),
          y: 152,
        },
        {
          x: new Date('2024-09-03').getTime(),
          y: 147,
        },
        {
          x: new Date('2024-09-05').getTime(),
          y: 142,
        },
        {
          x: new Date('2024-09-06').getTime(),
          y: 147,
        },
        {
          x: new Date('2024-09-07').getTime(),
          y: 151,
        },
        {
          x: new Date('2024-09-08').getTime(),
          y: 155,
        },
        {
          x: new Date('2024-09-09').getTime(),
          y: 159,
        },
        {
          x: new Date('2024-09-11').getTime(),
          y: 162,
        },
        {
          x: new Date('2024-09-12').getTime(),
          y: 157,
        },
        {
          x: new Date('2024-09-13').getTime(),
          y: 161,
        },
        {
          x: new Date('2024-09-14').getTime(),
          y: 166,
        },
        {
          x: new Date('2024-09-15').getTime(),
          y: 169,
        },
        {
          x: new Date('2024-09-16').getTime(),
          y: 172,
        },
        {
          x: new Date('2024-09-17').getTime(),
          y: 177,
        },
        {
          x: new Date('2024-09-18').getTime(),
          y: 181,
        },
        {
          x: new Date('2024-09-20').getTime(),
          y: 178,
        },
        {
          x: new Date('2024-09-21').getTime(),
          y: 173,
        },
      ],
    },
  ]
  const options = {
    chart: {
      defaultLocale: 'en',
      height: 300,
      type: 'area',
      stacked: false,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: chartsColor,
    markers: {
      size: 0,
    },
    title: {
      text: 'Stock Price Movement',
      align: 'left',
    },
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0)
        },
      },
      title: {
        text: 'Price',
      },
    },
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0)
        },
      },
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="area"
        data-chart-colors="[bg-sky-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default ZoomableLineChart
