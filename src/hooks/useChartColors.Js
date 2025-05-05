import { useEffect, useMemo, useState } from 'react'

import { getColorCodes } from '@common//colorCodes'
import { useSelector } from 'react-redux'

const useChartColors = (dataset) => {
  const [chartColors, setChartColors] = useState([])
  const { layoutDataColor, layoutMode } = useSelector((state) => state.Layout)

  // Memoize the dataset to avoid unnecessary re-renders
  const stableDataset = useMemo(
    () => ({
      chartColors: dataset.chartColors,
      chartDarkColors: dataset.chartDarkColors,
    }),
    [dataset.chartColors, dataset.chartDarkColors]
  )

  useEffect(() => {
    const colors = getColorCodes(stableDataset)
    setChartColors(colors)
  }, [layoutDataColor, stableDataset, layoutMode])

  return chartColors
}

export default useChartColors
