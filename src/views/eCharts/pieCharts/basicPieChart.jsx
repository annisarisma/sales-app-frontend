import React from 'react'

import ReactEcharts from 'echarts-for-react'

const BasicPieChart = () => {
  var option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    grid: {
      bottom: '0%',
      containLabel: true,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }

  return (
    <React.Fragment>
      <ReactEcharts style={{ height: '350px' }} option={option} />
    </React.Fragment>
  )
}

export default BasicPieChart
