import React, { useEffect } from 'react'

import welcome from '@assets/images/email/templates/welcome.png'
import BreadCrumb from '@src/components/Common/BreadCrumb'

const EmailWelcome = () => {
  useEffect(() => {
    document.title = 'Welcome | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Welcome " subTitle="Templates" />
      <div className="mb-space">
        <div
          style={{
            width: '550px',
            margin: '0 auto',
            border: '1px solid #e5e7eb',
            borderRadius: '0.375rem',

            backgroundColor: '#fff',
          }}>
          <div
            style={{
              textAlign: 'center',
              padding: '1.30rem 1.30rem 0',
              borderRadius: '0.375rem 0.375rem 0 0',
            }}
            className="bg-gradient-to-tr from-purple-400 to-emerald-300 via-pink-300">
            <h4
              style={{ fontSize: '22px', marginBottom: '10px', color: '#fff' }}>
              Welcome to Domiex
            </h4>
            <p
              style={{
                color: 'rgba(255,255,255,0.80)',
                marginBottom: '15px',
                fontSize: '15px',
              }}>
              Payroll, benefits, taxes & sustainability for your global team.
            </p>
            <img src={welcome} alt="welcomeImg" style={{ margin: '0 auto' }} />
          </div>
          <div style={{ padding: '1.30rem' }}>
            <h6
              style={{
                fontSize: '18px',
                marginBottom: '10px',
                color: '#1f2937',
              }}>
              The Admin & Dashboards Templates use globally
            </h6>
            <p
              style={{
                color: '#6b7280',
                fontSize: '15px',
                marginBottom: '16px',
              }}>
              with dozens of functional designs to help you get started quickly.
              With a wide range of beautiful and a full-screen layout, it's a
              perfect fit for admin dashboards, CRM, CMS panels & etc.
            </p>
            <button
              type="button"
              style={{
                width: '100%',
                display: 'block',
                backgroundColor: '#358ffc',
                color: '#fff',
                cursor: 'pointer',
                padding: '0.5625rem 1.5rem',
                fontSize: '0.875rem',
                borderRadius: '0.375rem',
              }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Dark Mode Section */}
      <div className="mb-space">
        <h6 className="underline my-3">Dark Mode</h6>
        <div className="max-w-[550px] mx-auto border border-[#1d293d] rounded-md bg-[#020618]">
          <div className="text-center p-8 bg-gradient-to-tr from-purple-400 via-pink-300 to-emerald-300 rounded-t-md">
            <h4 className="text-white text-[22px] mb-2">Welcome to Domiex</h4>
            <p className="text-white/80 mb-4 text-[15px]">
              Payroll, benefits, taxes & sustainability for your global team.
            </p>
            <img src={welcome} alt="Welcome Dark" className="mx-auto" />
          </div>
          <div className="p-8">
            <h6 className="text-[18px] mb-2 text-white">
              The Admin & Dashboards Templates use globally
            </h6>
            <p className="text-[#62748e] text-[15px] mb-4">
              Domiex is a powerful admin dashboard template built with Tailwind
              CSS. Domiex comes with dozens of functional designs to help you
              get started quickly. With a wide range of beautiful and a
              full-screen layout, it&apos;s a perfect fit for admin dashboards,
              CRM, CMS panels & etc.
            </p>
            <button
              type="button"
              className="w-full block bg-[#358ffc] text-white py-2 px-6 text-sm rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EmailWelcome
