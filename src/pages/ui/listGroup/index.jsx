import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicList from '@views/uiElements/uiListGroup/basicList'
import BorderedList from '@views/uiElements/uiListGroup/borderedList'
import BoxedList from '@views/uiElements/uiListGroup/boxedList'
import CheckboxList from '@views/uiElements/uiListGroup/checkboxList'
import CircleList from '@views/uiElements/uiListGroup/circleList'
import ContentList from '@views/uiElements/uiListGroup/contentList'
import DiscColorList from '@views/uiElements/uiListGroup/discColorList'
import DiscList from '@views/uiElements/uiListGroup/discList'
import FlushList from '@views/uiElements/uiListGroup/flushList'
import HoveredList from '@views/uiElements/uiListGroup/hoveredList'
import ImagesList from '@views/uiElements/uiListGroup/imagesList'
import LinkList from '@views/uiElements/uiListGroup/linkList'
import MarkerColorList from '@views/uiElements/uiListGroup/markerColorList'
import NumberColorList from '@views/uiElements/uiListGroup/numberColorList'
import NumberList from '@views/uiElements/uiListGroup/numberList'
import RadioList from '@views/uiElements/uiListGroup/radioList'
import RomanUpperList from '@views/uiElements/uiListGroup/romanUpperList'
import SquareList from '@views/uiElements/uiListGroup/squareList'

const ListGroups = () => {
  useEffect(() => {
    document.title = 'List Group | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="List Group" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <BasicList />
        <DiscList />
        <NumberList />
        <SquareList />
        <RomanUpperList />
        <CircleList />
        <DiscColorList />
        <MarkerColorList />
        <NumberColorList />
        <ImagesList />
        <FlushList />
        <BorderedList />
        <HoveredList />
        <LinkList />
        <CheckboxList />
        <RadioList />
        <BoxedList />
        <ContentList />
      </div>
    </React.Fragment>
  )
}

export default ListGroups
