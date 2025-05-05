import React, { useEffect } from 'react'

import news from '@assets/images/email/templates/news.png'
import Darklogo from '@assets/images/logo-white.png'
import logo from '@assets/images/main-logo.png'
import BreadCrumb from '@src/components/Common/BreadCrumb'

const EmailNewsletter = () => {
  useEffect(() => {
    document.title = 'NewsLetter | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="NewsLetter Email Template" subTitle="Templates" />
      <div className="mb-space">
        <div
          style={{
            width: '500px',
            margin: '0 auto',
            borderRadius: '0.375rem',
            backgroundImage:
              'linear-gradient(to top,rgba(240,177,0,.1),rgba(255,255,255,0))',
            border: '1px solid #e5e7eb',
            backgroundColor: '#fff',
          }}
          className="bg-gradient-to-t from-yellow-50">
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '15px' }}>
              <img
                src={logo}
                alt="logo"
                style={{ margin: '0 auto', height: '1.2rem', width: '105px' }}
              />
            </div>
            <h6
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
                maxWidth: '300px',
                margin: '0 auto 20px',
              }}
              className="dark:text-black">
              Shout our with a{' '}
              <span style={{ color: '#358ffc' }}>NewsLetter Projects</span>
            </h6>
            <img
              src={news}
              alt="newsImg"
              style={{ margin: '0 auto', display: 'block' }}
            />
            <p
              style={{
                color: '#6b7280',
                fontSize: '15px',
                textAlign: 'center',
                maxWidth: '400px',
                margin: '20px auto 16px',
              }}>
              Working with an easy-to-use editor will ne a domiex. Your future
              you will thank you.
            </p>
            <div className="text-center">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#358ffc] text-white cursor-pointer py-[0.5625rem] px-6 text-sm rounded-md">
                Start a Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Dark Mode */}
      <div className="mb-space">
        <h6 className="underline my-3">Dark Mode</h6>
        <div className="max-w-[500px] mx-auto border border-[#1d293d] rounded-md bg-[#020618] bg-gradient-to-t from-[rgba(240,177,0,0.10)] to-transparent">
          <div className="p-8">
            <div className="mb-4">
              <img src={Darklogo} alt="Logo Dark" className="h-5 mx-auto" />
            </div>
            <h6 className="text-[24px] font-bold text-center text-white max-w-[300px] mx-auto mb-5">
              Shout out with a{' '}
              <span className="text-[#358ffc]">NewsLetter Projects</span>
            </h6>
            <img src={news} alt="Newsletter Dark" className="mx-auto block" />
            <p className="text-[#62748e] text-[15px] text-center max-w-[400px] mx-auto my-5">
              Working with an easy-to-use editor will be a domiex. Your future
              you will thank you.
            </p>
            <div className="text-center">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#358ffc] text-white cursor-pointer py-[0.5625rem] px-6 text-sm rounded-md">
                Start a Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EmailNewsletter
