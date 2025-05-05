import React, { useEffect } from 'react'

import LandingThemeMode from '@common//LandingThemeMode'
import Footer from '@views/landing/landingInvoice/footer'
import Freelancers from '@views/landing/landingInvoice/freelancers'
import GetInTouch from '@views/landing/landingInvoice/getInTouch'
import Header from '@views/landing/landingInvoice/header'
import OnlineInvoicing from '@views/landing/landingInvoice/onlineInvoicing'
import ReadyToGetStarted from '@views/landing/landingInvoice/readyToGetStarted'
import ReadyToGive from '@views/landing/landingInvoice/readyToGive'
import YourInvoicing from '@views/landing/landingInvoice/yourInvoicing'

const Invoice = () => {
  useEffect(() => {
    document.title = 'Invoice | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <Header />
      <YourInvoicing />
      <Freelancers />
      <OnlineInvoicing />
      <ReadyToGive />
      <ReadyToGetStarted />
      <GetInTouch />
      <Footer />
      <LandingThemeMode bgColor="bg-primary-500" />
    </React.Fragment>
  )
}

export default Invoice
