import React, { useEffect } from 'react'

import LandingThemeMode from '@common//LandingThemeMode'
import EmailAutomation from '@src/views/landing/landingEmail/emailAtomation'
import EmailFeatures from '@views/landing/landingEmail/emailFeatures'
import EmailMarketing from '@views/landing/landingEmail/emailMarketing'
import FAQSection from '@views/landing/landingEmail/faqSection'
import Footer from '@views/landing/landingEmail/footer'
import Header from '@views/landing/landingEmail/header'
import NewUpdates from '@views/landing/landingEmail/newUpdates'
import OurBestPlans from '@views/landing/landingEmail/ourBestPlans'
import ServicesSection from '@views/landing/landingEmail/ourServices'

const EmailLanding = () => {
  useEffect(() => {
    document.title = 'Email | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <Header />
      <EmailMarketing />
      <ServicesSection />
      <OurBestPlans />
      <EmailFeatures />
      <EmailAutomation />
      <FAQSection />
      <NewUpdates />
      <Footer />
      <LandingThemeMode bgColor="bg-primary-500" />
    </React.Fragment>
  )
}

export default EmailLanding
