import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import CookieCard from '@views/uiElements/uiCookie/cookieCard'
import CookieConsent from '@views/uiElements/uiCookie/cookieConsent'
import CookieHorizontal from '@views/uiElements/uiCookie/cookieHorizontal'
import CookiePolicy from '@views/uiElements/uiCookie/cookiePolicy'

const Cookies = () => {
  useEffect(() => {
    document.title =
      'Cookies Consent | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Cookie Consent" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Cookie Card</h6>
          </div>
          <CookieCard />
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Cookie Horizontal Card</h6>
          </div>
          <CookieHorizontal />
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Cookie Consent Banner</h6>
          </div>
          <CookieConsent />
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Cookie Policy</h6>
          </div>
          <CookiePolicy />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cookies
