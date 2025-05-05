import { useCallback, useEffect, useRef, useState } from 'react'

import useChartColors from '@hooks/useChartColors'
import ApexTree from 'apextree'

import user4 from '../../../assets/images/avatar/user-4.png'
import user11 from '../../../assets/images/avatar/user-11.png'
import user13 from '../../../assets/images/avatar/user-13.png'
import user14 from '../../../assets/images/avatar/user-14.png'
import user15 from '../../../assets/images/avatar/user-15.png'
import user16 from '../../../assets/images/avatar/user-16.png'
import user17 from '../../../assets/images/avatar/user-17.png'

const TopBottomChart = ({ chartColors, chartDarkColors }) => {
  const apexTreeContainerRef = useRef(null)
  const [treeData, setTreeData] = useState(null)
  const colors = useChartColors({ chartColors, chartDarkColors })

  const initializeTreeData = useCallback(() => {
    const data = {
      id: 'ms',
      data: {
        imageURL: user4,
        name: 'Jordan Davis',
      },
      options: {
        nodeBGColor: colors[2],
        nodeBGColorHover: colors[2],
      },
      children: [
        {
          id: 'mh',
          data: {
            imageURL: user11,
            name: 'Chris Wilson',
          },
          options: {
            nodeBGColor: colors[3],
            nodeBGColorHover: colors[3],
          },
          children: [
            {
              id: 'kb',
              data: {
                imageURL: user13,
                name: 'Alex Lee',
              },
              options: {
                nodeBGColor: colors[4],
                nodeBGColorHover: colors[4],
              },
            },
            {
              id: 'cr',
              data: {
                imageURL: user14,
                name: 'Taylor Wilson',
              },
              options: {
                nodeBGColor: colors[5],
                nodeBGColorHover: colors[5],
              },
            },
          ],
        },
        {
          id: 'cs',
          data: {
            imageURL: user15,
            name: 'Jane Brown',
          },
          options: {
            nodeBGColor: colors[6],
            nodeBGColorHover: colors[6],
          },
          children: [
            {
              id: 'Noah_Chandler',
              data: {
                imageURL: user16,
                name: 'John Garcia',
              },
              options: {
                nodeBGColor: colors[7],
                nodeBGColorHover: colors[7],
              },
            },
            {
              id: 'Felix_Wagner',
              data: {
                imageURL: user17,
                name: 'Cameron Wilson',
              },
              options: {
                nodeBGColor: colors[8],
                nodeBGColorHover: colors[8],
              },
            },
          ],
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
        nodeHeight: 120,
        fontColor: colors[1],
        borderColor: colors[0],
        edgeColor: colors[0],
        edgeColorHover: colors[2],
        tooltipBorderColor: colors[0],
        childrenSpacing: 50,
        siblingSpacing: 20,
        direction: 'top',
        nodeTemplate: (content) => `
                    <div class="flex gap-5 justify-center flex-col items-center p-3">
                        <img class="size-12 rounded-full" src='${content.imageURL}' alt='contentImg' />
                        <h6>${content.name}</h6>
                    </div>`,
        enableToolbar: true,
      }

      apexTreeContainerRef.current.innerHTML = ''
      const newApexTree = new ApexTree(apexTreeContainerRef.current, options)
      newApexTree.render(treeData)
    }
  }, [colors, treeData])

  useEffect(() => {
    if (colors.length > 0) {
      initializeTreeData()
    }
  }, [colors, initializeTreeData])

  useEffect(() => {
    renderTree()

    const reloadTree = () => {
      renderTree()
    }

    window.addEventListener('resize', reloadTree)
    return () => {
      window.removeEventListener('resize', reloadTree)
    }
  }, [treeData, renderTree])

  return (
    <div
      ref={apexTreeContainerRef}
      className="border border-gray-200 rounded-md dark:border-dark-800"></div>
  )
}

export default TopBottomChart
