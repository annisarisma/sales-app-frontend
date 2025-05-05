import { useCallback, useEffect, useRef, useState } from 'react'

import useChartColors from '@hooks/useChartColors'
import ApexTree from 'apextree'

import user1 from '../../../assets/images/avatar/user-1.png'
import user2 from '../../../assets/images/avatar/user-2.png'
import user3 from '../../../assets/images/avatar/user-3.png'
import user4 from '../../../assets/images/avatar/user-4.png'
import user5 from '../../../assets/images/avatar/user-5.png'
import user6 from '../../../assets/images/avatar/user-6.png'
import user7 from '../../../assets/images/avatar/user-7.png'
import user8 from '../../../assets/images/avatar/user-8.png'
import user9 from '../../../assets/images/avatar/user-9.png'
import user10 from '../../../assets/images/avatar/user-10.png'
import user11 from '../../../assets/images/avatar/user-11.png'

const LeftAndRightCharts = ({
  chartColors,
  chartDarkColors,
  direction,
  collapse,
}) => {
  const apexTreeContainerRef = useRef(null)
  const [treeData, setTreeData] = useState(null)
  const colors = useChartColors({ chartColors, chartDarkColors })

  const initializeTreeData = useCallback(() => {
    const data = {
      id: 'Lucas_Alex',
      data: {
        name: 'Omer Sporer',
        imageURL: user1,
      },
      options: {
        nodeBGColor: colors[3],
        nodeBGColorHover: colors[3],
      },
      children: [
        {
          id: 'Alex_Lee',
          data: {
            name: 'Reva Botsford',
            imageURL: user2,
          },
          options: {
            nodeBGColor: colors[4],
            nodeBGColorHover: colors[4],
          },
          children: [
            {
              id: 'Mia_Patel',
              data: {
                name: 'Tyshawn Marquardt',
                imageURL: user3,
              },
              options: {
                nodeBGColor: colors[5],
                nodeBGColorHover: colors[5],
              },
            },
            {
              id: 'Ryan_Clark',
              data: {
                name: 'Kailey Corkery',
                imageURL: user4,
              },
              options: {
                nodeBGColor: colors[5],
                nodeBGColorHover: colors[5],
              },
            },
            {
              id: 'Zoe_Wang',
              data: {
                name: 'Zoe Wang',
                imageURL: user5,
              },
              options: {
                nodeBGColor: colors[5],
                nodeBGColorHover: colors[5],
              },
            },
          ],
        },
        {
          id: 'Leo_Kim',
          data: {
            name: 'Hardy Maggio',
            imageURL: user6,
          },
          options: {
            nodeBGColor: colors[6],
            nodeBGColorHover: colors[6],
          },
          children: [
            {
              id: 'Ava_Jones',
              data: {
                name: 'Adelle Abbott',
                imageURL: user7,
              },
              options: {
                nodeBGColor: colors[7],
                nodeBGColorHover: colors[7],
              },
            },
            {
              id: 'Maya_Gupta',
              data: {
                name: 'Vincenzo Hirthe',
                imageURL: user8,
              },
              options: {
                nodeBGColor: colors[7],
                nodeBGColorHover: colors[7],
              },
            },
          ],
        },

        {
          id: 'Lily_Chen',
          data: {
            name: 'Idella Heaney',
            imageURL: user9,
          },
          options: {
            nodeBGColor: colors[8],
            nodeBGColorHover: colors[8],
          },
          children: [
            {
              id: 'Jake_Scott',
              data: {
                name: 'Lambert Schoen',
                imageURL: user10,
              },
              options: {
                nodeBGColor: colors[9],
                nodeBGColorHover: colors[9],
              },
            },
          ],
        },
        {
          id: 'Max_Ruiz',
          data: {
            name: 'Cornelius Harris',
            imageURL: user11,
          },
          options: {
            nodeBGColor: colors[10],
            nodeBGColorHover: colors[10],
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
        height: 700,
        nodeWidth: 150,
        nodeHeight: 70,
        childrenSpacing: 70,
        siblingSpacing: 30,
        fontSize: '12px',
        direction: direction,
        borderRadius: 0,
        nodeBGColor: colors[2],
        nodeBGColorHover: colors[2],
        fontColor: colors[1],
        borderColor: colors[0],
        edgeColor: colors[0],
        edgeColorHover: colors[0],
        tooltipBorderColor: colors[0],
        enableExpandCollapse: collapse,
        nodeTemplate: (content) => {
          return `<div class="flex gap-2 items-center h-full rounded-t-md shadow-lg px-4">
                        <img class="size-8 rounded-full" src='${content.imageURL}' alt='contentImg'>
                        <h6 class="text-xs text-gray-500 dark:text-dark-100">${content.name}</h6>
                       </div>`
        },
        enableToolbar: true,
      }

      apexTreeContainerRef.current.innerHTML = '' // Clear the container
      const newApexTree = new ApexTree(apexTreeContainerRef.current, options)
      newApexTree.render(treeData)
    }
  }, [colors, collapse, direction, treeData])

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

export default LeftAndRightCharts
