import React from 'react'

import ReactApexChart from 'react-apexcharts'

const PyramidChart = ({ chartId }) => {
  // Pass both chartColors and chartDarkColors to the hook

  const series = [
    {
      name: '',
      data: [200, 330, 548, 740, 880, 990, 1100, 1380],
    },
  ]

  const labels = [
    'Sweets',
    'Processed Foods',
    'Healthy Fats',
    'Meat',
    'Beans & Legumes',
    'Dairy',
    'Fruits & Vegetables',
    'Grains',
  ]

  const options = {
    chart: {
      height: 300,
      type: 'bar',
      animations: {
        speed: 500,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    colors: [
      '#F44F5E',
      '#E55A89',
      '#D863B1',
      '#CA6CD8',
      '#B57BED',
      '#8D95EB',
      '#62ACEA',
      '#4BC3E6',
    ],
    dataLabels: {
      enabled: true,
      formatter: (val, opt) => {
        return `${labels[opt.dataPointIndex]}: ${val}`
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Pyramid Chart',
      align: 'center',
    },
    xaxis: {
      categories: labels,
    },
    legend: {
      show: false,
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
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
        data-chart-colors="[bg-primary-500]"
        type="bar"
        id={chartId}
        height={300}
        width="100%"
      />
    </React.Fragment>
  )
}

export default PyramidChart
