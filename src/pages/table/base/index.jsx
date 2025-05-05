import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicStyling from '@views/table/base/basicStyling'
import BorderSpacingTable from '@views/table/base/borderSpacingTable'
import BorderStyling from '@views/table/base/borderStyling'
import BorderedTable from '@views/table/base/borderedTable'
import CaptionSide from '@views/table/base/captionSide'
import ColoredBorderTable from '@views/table/base/coloredBorderTable'
import HeadingLightTable from '@views/table/base/headingLight'
import HoveredTable from '@views/table/base/hoveredTable'
import LoadingTable from '@views/table/base/loadingTable'
import SeparateTable from '@views/table/base/separateTable'
import SortingTables from '@views/table/base/sortingTables'
import StripedColoredTable from '@views/table/base/stripedColoredTable'
import StripedEvenTable from '@views/table/base/stripedEvenTable'
import StripedOddTable from '@views/table/base/stripedOddTable'

const BaseTables = () => {
  useEffect(() => {
    document.title = 'Base Table | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Base Table" subTitle="Tables" />
      <div className="grid grid-cols-12 gap-x-space">
        <BasicStyling />
        <BorderStyling />
        <BorderedTable />
        <SeparateTable />
        <BorderSpacingTable />
        <CaptionSide />
        <HeadingLightTable />
        <HoveredTable />
        <StripedEvenTable />
        <StripedOddTable />
        <ColoredBorderTable />
        <StripedColoredTable />
        <LoadingTable />
        <SortingTables />
      </div>
    </React.Fragment>
  )
}
export default BaseTables
