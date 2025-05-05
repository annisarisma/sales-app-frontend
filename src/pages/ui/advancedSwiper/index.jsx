import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicSlider from '@views/uiAdvanced/uiAdvancedSwiper/basicSlider'
import GrabCursorSlider from '@views/uiAdvanced/uiAdvancedSwiper/grabcursor'
import PaginationSwiper from '@views/uiAdvanced/uiAdvancedSwiper/pagination'
import PaginationDynamicSlider from '@views/uiAdvanced/uiAdvancedSwiper/paginationDynamic'
import SlidesPreview from '@views/uiAdvanced/uiAdvancedSwiper/slidesPreview'
import VerticalSlider from '@views/uiAdvanced/uiAdvancedSwiper/verticalSwiper'

const SwiperElement = () => {
  useEffect(() => {
    document.title = 'Swiper | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Swiper" subTitle="UI Advanced" />
      <div className="grid grid-cols-12 gap-x-space">
        <BasicSlider />
        <PaginationDynamicSlider />
        <PaginationSwiper />
        <VerticalSlider />
        <GrabCursorSlider />
        <SlidesPreview />
      </div>
    </React.Fragment>
  )
}

export default SwiperElement
