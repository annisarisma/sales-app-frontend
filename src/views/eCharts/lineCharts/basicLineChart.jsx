import React from 'react'

import ReactEcharts from 'echarts-for-react'

const BasicLineChart = () => {
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
    grid: {
      top: '5%',
      left: '6%',
      right: '0%',
      bottom: '8%',
    },
  }
  return (
    <React.Fragment>
      <ReactEcharts style={{ height: '350px' }} option={option} />
    </React.Fragment>
  )
}

export default BasicLineChart
