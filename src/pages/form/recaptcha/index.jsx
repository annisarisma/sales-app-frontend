import React, { useEffect, useState } from 'react'

import BreadCrumb from '@common//BreadCrumb'

const Recaptcha = () => {
  useEffect(() => {
    document.title = 'reCAPTCHA | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <React.Fragment>
      <BreadCrumb title="reCAPTCHA" subTitle="Forms" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">reCAPTCHA</h6>
          </div>
          <div className="card-body">
            <p className="mb-4 text-gray-500 dark:text-dark-500">
              reCAPTCHA protects your website from fraud and abuse without
              creating friction.
            </p>
            <div className="max-w-md p-6 mx-auto rounded-md shadow-md shadow-gray-200 dark:shadow-dark-800">
              <form id="submitForm" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="form-input"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="h-auto form-input"></textarea>
                </div>
                <div className="mb-4">
                  {!submitted && (
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LeJWMInAAAAALNEInS0FRjPa6KsvIOYBxFAVci4"></div>
                  )}
                  {submitted && (
                    <p className="font-bold text-green-600">
                      Form submitted successfully!
                    </p>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Recaptcha
