import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Card from '@views/uiElements/uiCard/card'
import CardFooter from '@views/uiElements/uiCard/cardFooter'
import CreadHeader from '@views/uiElements/uiCard/cardHeader'
import ColoredCard from '@views/uiElements/uiCard/coloredCard'
import DesignCard from '@views/uiElements/uiCard/designCard'
import EditCards from '@views/uiElements/uiCard/editCards'
import FancyCard from '@views/uiElements/uiCard/fancyCard'
import HoverCard from '@views/uiElements/uiCard/hoverCard'
import OverlayCard from '@views/uiElements/uiCard/overlayCard'

const Cards = () => {
  useEffect(() => {
    document.title = 'Cards | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Cards" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <Card />
        <CreadHeader />
        <CardFooter />
      </div>
      <div className="grid grid-cols-12 gap-x-space">
        <DesignCard />
      </div>

      <h5 className="mt-2 mb-5 underline">Card Hover Effect:</h5>

      <div className="grid grid-cols-12 gap-x-space">
        <HoverCard />
      </div>

      <h5 className="mt-2 mb-5 underline">Card Colored:</h5>
      <div className="grid grid-cols-12 gap-x-space">
        <ColoredCard />
      </div>
      <h5 className="mt-2 mb-5 underline">Fancy Card:</h5>
      <div className="grid grid-cols-12 gap-x-space">
        <FancyCard />
      </div>

      <h5 className="mt-2 mb-5 underline">Overlay Card:</h5>
      <div className="grid grid-cols-12 gap-x-space">
        <OverlayCard />
      </div>

      <EditCards />
    </React.Fragment>
  )
}

export default Cards
