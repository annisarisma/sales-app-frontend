import React from 'react'

import ReactEcharts from 'echarts-for-react'

const StorageChart = () => {
  var options = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d'],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: 'auto',
          },
        },
        grid: {
          top: '0%',
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true,
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4,
          },
        },
        axisLabel: {
          color: 'inherit',
          distance: 25,
          fontSize: 12,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} GB',
          fontSize: 16,
          color: 'inherit',
        },
        data: [
          {
            value: 80,
          },
        ],
      },
    ],
  }

  return (
    <React.Fragment>
      <ReactEcharts style={{ height: '350px' }} option={options} />
    </React.Fragment>
  )
}

export default StorageChart
