import React, { useEffect } from 'react'

import Advertisement from '@views/landing/landingEcommerce/advertisement'
import ClientBenefits from '@views/landing/landingEcommerce/clientBenefits'
import CoastalEdition from '@views/landing/landingEcommerce/coastalEdition'
import Footer from '@views/landing/landingEcommerce/footer'
import Header from '@views/landing/landingEcommerce/header'
import Home from '@views/landing/landingEcommerce/home'
import InstagramPost from '@views/landing/landingEcommerce/instagramPost'
import NewSeasonProducts from '@views/landing/landingEcommerce/newSeasonProducts'
import OurCollection from '@views/landing/landingEcommerce/ourCollection'
import Products from '@views/landing/landingEcommerce/products'
import SummerFashion from '@views/landing/landingEcommerce/summerFashion'

import LandingThemeMode from '../../../components/Common/LandingThemeMode'

const Ecommerce = () => {
  useEffect(() => {
    document.title = 'E-Commerce | Domiex - React JS Admin & Dashboard Template'
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Products />
      <Advertisement />
      <NewSeasonProducts />
      <SummerFashion />
      <CoastalEdition />
      <ClientBenefits />
      <OurCollection />
      <InstagramPost />
      <Footer />
      <LandingThemeMode bgColor="bg-primary-500" />
    </React.Fragment>
  )
}

export default Ecommerce
