import { useEffect, useRef, useState } from 'react'

import useChartColors from '@hooks/useChartColors'
import ApexSankey from 'apexsankey'

const BasicSankeyChart = ({ chartColors, chartDarkColors }) => {
  const apexSankeyContainerRef = useRef(null)
  const [data, setData] = useState(null)
  const colors = useChartColors({ chartColors, chartDarkColors })

  // Initialize data once
  useEffect(() => {
    const initialData = {
      nodes: [
        { id: 'Oil', title: 'Oil' },
        { id: 'Natural Gas', title: 'Natural Gas' },
        { id: 'Coal', title: 'Coal' },
        { id: 'Fossil Fuels', title: 'Fossil Fuels' },
        { id: 'Electricity', title: 'Electricity' },
        { id: 'Energy', title: 'Energy' },
      ],
      edges: [
        { source: 'Oil', target: 'Fossil Fuels', value: 15 },
        { source: 'Natural Gas', target: 'Fossil Fuels', value: 20 },
        { source: 'Coal', target: 'Fossil Fuels', value: 25 },
        { source: 'Coal', target: 'Electricity', value: 25 },
        { source: 'Fossil Fuels', target: 'Energy', value: 60 },
        { source: 'Electricity', target: 'Energy', value: 25 },
      ],
    }
    setData(initialData)
  }, [])

  // Render chart when data or colors change
  useEffect(() => {
    if (colors.length === 0 || !data || !apexSankeyContainerRef.current) return

    const renderChart = () => {
      const graphOptions = {
        nodeWidth: 20,
        fontWeight: 500,
        fontSize: '10px',
        height: 300,
        fontColor: colors[0],
        canvasStyle: '',
        tooltipBGColor: colors[1],
        tooltipBorderColor: colors[2],
        nodeTemplate: (source, target, value) => {
          return `
                        <div class="flex items-center gap-2">
                            <div class="size-3" style="background-color:${source.color}"></div>
                            <h6 class="dark:text-dark-100">${source.title}</h6>
                            <div>=></div>
                            <div class="size-3" style="background-color:${target.color}"></div>
                            <h6 class="dark:text-dark-100">${target.title}</h6>
                            <div>: ${value}</div> 
                        </div>
                    `
        },
      }

      // Clear previous chart
      if (apexSankeyContainerRef.current) {
        apexSankeyContainerRef.current.innerHTML = ''
      }

      // Initialize and render new chart
      const newApexSankeyChart = new ApexSankey(
        apexSankeyContainerRef.current,
        graphOptions
      )
      newApexSankeyChart.render(data)
    }

    renderChart()

    // Handle window resize
    const handleResize = () => {
      renderChart()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [data, colors])

  return <div ref={apexSankeyContainerRef}></div>
}

export default BasicSankeyChart
