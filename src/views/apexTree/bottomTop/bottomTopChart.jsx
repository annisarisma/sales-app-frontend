// @ts-ignore
import { useCallback, useEffect, useRef, useState } from 'react'

import useChartColors from '@hooks/useChartColors'
import ApexTree from 'apextree'

import user18 from '../../../assets/images/avatar/user-18.png'
import user19 from '../../../assets/images/avatar/user-19.png'
import user20 from '../../../assets/images/avatar/user-20.png'
import user21 from '../../../assets/images/avatar/user-21.png'
import user22 from '../../../assets/images/avatar/user-22.png'
import user23 from '../../../assets/images/avatar/user-23.png'
import user24 from '../../../assets/images/avatar/user-24.png'
import user25 from '../../../assets/images/avatar/user-25.png'
import user26 from '../../../assets/images/avatar/user-26.png'

const BottomTopChart = ({ chartColors, chartDarkColors }) => {
  const apexTreeContainerRef = useRef(null)
  const [treeData, setTreeData] = useState(null)
  const colors = useChartColors({ chartColors, chartDarkColors })

  const initializeTreeData = useCallback(() => {
    const data = {
      id: 'Lucas_Alex',
      data: {
        name: 'Ezekiel Halvorson',
        imageURL: user18,
        borderColor: colors[3],
      },
      children: [
        {
          id: 'Alex_Lee',
          data: {
            name: 'Erin Dicki',
            imageURL: user19,
            borderColor: colors[4],
          },

          children: [
            {
              id: 'Mia_Patel',
              data: {
                name: 'Norval Murray',
                imageURL: user20,
                borderColor: colors[5],
              },
            },
            {
              id: 'Ryan_Clark',
              data: {
                name: 'Oliver Boehm',
                imageURL: user21,
                borderColor: colors[5],
              },
            },
            {
              id: 'Zoe_Wang',
              data: {
                name: 'Gino Prosacco',
                imageURL: user22,
                borderColor: colors[5],
              },
            },
          ],
        },
        {
          id: 'Leo_Kim',
          data: {
            name: 'Edgardo Kessler',
            imageURL: user23,
            borderColor: colors[6],
          },

          children: [
            {
              id: 'Ava_Jones',
              data: {
                name: 'Marcos Stracke',
                imageURL: user24,
                borderColor: colors[7],
              },
            },
            {
              id: 'Maya_Gupta',
              data: {
                name: 'Waylon Erdman',
                imageURL: user25,
                borderColor: colors[7],
              },
            },
          ],
        },

        {
          id: 'Max_Ruiz',
          data: {
            name: 'Eleanora Hayes',
            imageURL: user26,
            borderColor: colors[6],
          },
        },
      ],
    }
    setTreeData(data)
  }, [colors])

  const renderTree = useCallback(() => {
    if (apexTreeContainerRef.current && treeData) {
      const options = {
        contentKey: 'data',
        width: '100%',
        height: 600,
        nodeWidth: 150,
        nodeHeight: 70,
        childrenSpacing: 70,
        fontSize: '12px',
        siblingSpacing: 30,
        direction: 'bottom',
        nodeBGColor: colors[2],
        nodeBGColorHover: colors[2],
        fontColor: colors[1],
        borderColor: colors[0],
        edgeColor: colors[0],
        edgeColorHover: colors[2],
        tooltipBorderColor: colors[0],
        nodeTemplate: (content) => {
          return `<div class="flex flex-col h-full"><div class="flex gap-2 items-center h-full rounded-t-md shadow-lg px-4">
                        <img class="size-8 rounded-full" src='${content.imageURL}' alt='contentImg'>
                        <h6 class="text-xs text-gray-500 dark:text-dark-500">${content.name}</h6>
                       </div><div class="mt-auto rounded-b" style='border-bottom: 10px solid ${content.borderColor}'></div></div>`
        },
        enableToolbar: true,
      }

      apexTreeContainerRef.current.innerHTML = '' // Clear the container
      const newApexTree = new ApexTree(apexTreeContainerRef.current, options)
      newApexTree.render(treeData)
    }
  }, [colors, treeData])

  useEffect(() => {
    if (colors.length > 0) {
      initializeTreeData() // Initialize tree data when colors are ready
    }
  }, [colors, initializeTreeData])

  useEffect(() => {
    renderTree() // Render the tree whenever treeData changes

    const reloadTree = () => {
      renderTree() // Re-render tree on resize
    }

    window.addEventListener('resize', reloadTree)
    return () => {
      window.removeEventListener('resize', reloadTree)
    }
  }, [treeData, renderTree]) // Depend on treeData

  return (
    <div
      ref={apexTreeContainerRef}
      className="border border-gray-200 rounded-md dark:border-dark-800"></div>
  )
}

export default BottomTopChart
