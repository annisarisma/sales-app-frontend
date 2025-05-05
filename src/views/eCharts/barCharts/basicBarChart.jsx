import React from 'react'

import useChartColors from '@hooks/useChartColors'
import ReactEcharts from 'echarts-for-react'

const BasicBarChart = ({ chartColors, chartDarkColors }) => {
  // Pass both chartColors and chartDarkColors to the hook
  const chartsColor = useChartColors({ chartColors, chartDarkColors })

  var options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    grid: {
      top: '5%',
      left: '5%',
      right: '0%',
      bottom: '6%',
    },
    color: chartsColor,
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  }
  return (
    <React.Fragment>
      <ReactEcharts
        option={options}
        style={{ height: '300px', width: '100%' }}
        className="h-80"
      />
    </React.Fragment>
  )
}

export default BasicBarChart
