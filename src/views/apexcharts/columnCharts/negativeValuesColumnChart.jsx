import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactApexChart from 'react-apexcharts'

const NegativeValuesColumnChart = ({
  chartColors,
  chartDarkColors,
  chartId,
}) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  const series = [
    {
      name: 'Cash Flow',
      data: [
        1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34,
        3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4,
        -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4,
      ],
    },
  ]

  const labels = [
    '2011-01-01',
    '2011-02-01',
    '2011-03-01',
    '2011-04-01',
    '2011-05-01',
    '2011-06-01',
    '2011-07-01',
    '2011-08-01',
    '2011-09-01',
    '2011-10-01',
    '2011-11-01',
    '2011-12-01',
    '2012-01-01',
    '2012-02-01',
    '2012-03-01',
    '2012-04-01',
    '2012-05-01',
    '2012-06-01',
    '2012-07-01',
    '2012-08-01',
    '2012-09-01',
    '2012-10-01',
    '2012-11-01',
    '2012-12-01',
    '2013-01-01',
    '2013-02-01',
    '2013-03-01',
    '2013-04-01',
    '2013-05-01',
    '2013-06-01',
    '2013-07-01',
    '2013-08-01',
    '2013-09-01',
  ]

  const options = {
    chart: {
      height: 300,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: '#F15B46',
            },
            {
              from: -45,
              to: 0,
              color: '#FEB019',
            },
          ],
        },
        columnWidth: '80%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: chartsColor,
    yaxis: {
      title: {
        text: 'Growth',
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + '%'
        },
      },
    },
    xaxis: {
      type: 'datetime',
      categories: labels,
      labels: {
        rotate: -90,
      },
    },
  }

  return (
    <React.Fragment>
      <ReactApexChart
        className="!min-h-full"
        options={options}
        series={series}
        type="bar"
        data-chart-colors="[bg-primary-500, bg-yellow-500, bg-red-500]"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default NegativeValuesColumnChart
