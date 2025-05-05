import React, { useCallback, useEffect, useState } from 'react'

import ReactEcharts from 'echarts-for-react'

const StackedBorderRadiusBarChart = () => {
  const initialSeries = [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      stack: 'a',
      name: 'a',
    },
    {
      data: [10, 46, 64, '-', 0, '-', 0],
      type: 'bar',
      stack: 'a',
      name: 'b',
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0],
      type: 'bar',
      stack: 'a',
      name: 'c',
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0],
      type: 'bar',
      stack: 'b',
      name: 'd',
    },
    {
      data: [10, 20, 150, 0, '-', 50, 10],
      type: 'bar',
      stack: 'b',
      name: 'e',
    },
  ]

  const [series, setSeries] = useState(initialSeries)

  // Memoize the calculateStackInfo function using useCallback
  const calculateStackInfo = useCallback(() => {
    const stackInfo = {}
    for (let i = 0; i < series[0].data.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack
        if (!stackName) {
          continue
        }
        if (!stackInfo[stackName]) {
          stackInfo[stackName] = {
            stackStart: [],
            stackEnd: [],
          }
        }
        const info = stackInfo[stackName]
        const data = series[j].data[i]
        if (data && data !== '-') {
          if (info.stackStart[i] == null) {
            info.stackStart[i] = j
          }
          info.stackEnd[i] = j
        }
      }
    }

    return series.map((serie, i) => {
      const data = serie.data.map((value, j) => {
        const info = stackInfo[serie.stack]
        const isEnd = info.stackEnd[j] === i
        const topBorder = isEnd ? 20 : 0
        const bottomBorder = 0
        return {
          value,
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
          },
        }
      })
      return { ...serie, data }
    })
  }, [series])

  useEffect(() => {
    const updatedSeries = calculateStackInfo()
    setSeries(updatedSeries)
  }, [calculateStackInfo])

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    grid: {
      top: '3%',
      left: '3%',
      right: '0%',
      bottom: '3%',
      containLabel: true,
    },
    yAxis: {
      type: 'value',
    },
    series: series,
  }

  return (
    <React.Fragment>
      <ReactEcharts style={{ height: '350px' }} option={option} />
    </React.Fragment>
  )
}

export default StackedBorderRadiusBarChart
