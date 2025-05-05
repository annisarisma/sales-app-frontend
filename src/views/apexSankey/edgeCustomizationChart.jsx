import { useEffect, useRef, useState } from 'react'

import useChartColors from '@hooks/useChartColors'
import ApexSankey from 'apexsankey'

const EdgeCustomizationChart = ({ chartColors, chartDarkColors }) => {
  const apexSankeyContainerRef = useRef(null)
  const [data, setData] = useState(null)
  const colors = useChartColors({ chartColors, chartDarkColors })

  // Initialize data once
  useEffect(() => {
    const initialData = {
      nodes: [
        { id: 'England', title: 'england' },
        { id: 'Wales', title: 'wales' },
        { id: 'Level 4', title: 'level 4' },
        { id: 'Level 3', title: 'level 3' },
        { id: 'Level 2', title: 'level 2' },
        { id: 'Level 1 and entry level', title: 'level 1 and entry level' },
        { id: 'No qualifications', title: 'no qualifications' },
        { id: 'Other', title: 'other' },
        { id: 'Wholesale & retail', title: 'wholesale & retail' },
        { id: 'Health & social work', title: 'health & social work' },
        { id: 'Education', title: 'education' },
        { id: 'Construction', title: 'construction' },
        { id: 'Manufacturing', title: 'manufacturing' },
        { id: 'Transport & storage', title: 'transport & storage' },
        { id: 'Finance & insurance', title: 'finance & insurance' },
      ],
      edges: [
        { source: 'England', target: 'Level 4', value: 13 },
        { source: 'England', target: 'Level 3', value: 8 },
        { source: 'England', target: 'Level 2', value: 8 },
        { source: 'England', target: 'Level 1 and entry level', value: 6 },
        { source: 'England', target: 'No qualifications', value: 3 },
        // { source: 'England', target: 'Other', value: 4 },
        { source: 'Wales', target: 'Level 4', value: 7 },
        { source: 'Wales', target: 'Level 3', value: 8 },
        { source: 'Wales', target: 'Level 2', value: 4 },
        { source: 'Wales', target: 'Level 1 and entry level', value: 5 },
        { source: 'Wales', target: 'No qualifications', value: 5 },
        // { source: 'Wales', target: 'Other', value: 3 },
        { source: 'Level 4', target: 'Wholesale & retail', value: 4 },
        { source: 'Level 4', target: 'Health & social work', value: 3 },
        { source: 'Level 4', target: 'Education', value: 2 },
        { source: 'Level 4', target: 'Construction', value: 1 },
        { source: 'Level 4', target: 'Manufacturing', value: 2 },
        { source: 'Level 4', target: 'Other', value: 3 },
        { source: 'Level 4', target: 'Transport & storage', value: 2 },
        { source: 'Level 4', target: 'Finance & insurance', value: 3 },
        { source: 'Level 3', target: 'Wholesale & retail', value: 3 },
        { source: 'Level 3', target: 'Health & social work', value: 2 },
        { source: 'Level 3', target: 'Education', value: 1 },
        { source: 'Level 3', target: 'Construction', value: 2 },
        { source: 'Level 3', target: 'Manufacturing', value: 1 },
        { source: 'Level 3', target: 'Other', value: 3 },
        { source: 'Level 3', target: 'Transport & storage', value: 2 },
        { source: 'Level 3', target: 'Finance & insurance', value: 2 },
        { source: 'Level 2', target: 'Wholesale & retail', value: 2 },
        { source: 'Level 2', target: 'Health & social work', value: 1 },
        { source: 'Level 2', target: 'Education', value: 2 },
        { source: 'Level 2', target: 'Construction', value: 1 },
        { source: 'Level 2', target: 'Manufacturing', value: 2 },
        { source: 'Level 2', target: 'Other', value: 2 },
        { source: 'Level 2', target: 'Transport & storage', value: 1 },
        { source: 'Level 2', target: 'Finance & insurance', value: 1 },
        {
          source: 'Level 1 and entry level',
          target: 'Wholesale & retail',
          value: 1,
        },
        {
          source: 'Level 1 and entry level',
          target: 'Health & social work',
          value: 2,
        },
        { source: 'Level 1 and entry level', target: 'Education', value: 1 },
        { source: 'Level 1 and entry level', target: 'Construction', value: 2 },
        {
          source: 'Level 1 and entry level',
          target: 'Manufacturing',
          value: 1,
        },
        { source: 'Level 1 and entry level', target: 'Other', value: 2 },
        {
          source: 'Level 1 and entry level',
          target: 'Transport & storage',
          value: 1,
        },
        {
          source: 'Level 1 and entry level',
          target: 'Finance & insurance',
          value: 1,
        },
        { source: 'No qualifications', target: 'Wholesale & retail', value: 1 },
        {
          source: 'No qualifications',
          target: 'Health & social work',
          value: 1,
        },
        { source: 'No qualifications', target: 'Education', value: 1 },
        { source: 'No qualifications', target: 'Construction', value: 1 },
        { source: 'No qualifications', target: 'Manufacturing', value: 1 },
        { source: 'No qualifications', target: 'Other', value: 1 },
        {
          source: 'No qualifications',
          target: 'Transport & storage',
          value: 1,
        },
        {
          source: 'No qualifications',
          target: 'Finance & insurance',
          value: 1,
        },
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
        nodeBorderColor: colors[2],
        tooltipBGColor: colors[1],
        tooltipBorderColor: colors[2],
        edgeOpacity: 0.2,
        nodeTemplate: (source, target, value) => {
          return `
                         <div class="flex items-center gap-2">
                            <div class="size-3" style='background-color:${source.color}'></div>
                            <h6 class="dark:text-dark-100">${source.title}</h6>
                            <div>=></div>
                            <div class="size-3" style='background-color:${target.color}'></div>
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

export default EdgeCustomizationChart
