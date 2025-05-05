import React, { useState } from 'react'

import whiteLogo from '@assets/images/logo-white.png'
import mainLogo from '@assets/images/main-logo.png'
import authCreative from '@assets/images/others/auth-creative.png'
import google from '@assets/images/others/google.png'
import { Eye, EyeOff, Facebook } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const SignupCreative = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(!loading)
    setError(null)

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.confirmPassword
    ) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    // Redirect to login page on success
    navigate('/auth/signin-creative')

    // Clear form data
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    })
    setLoading(false)
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-12">
        <div className="relative col-span-12 py-8 overflow-hidden bg-gray-100 dark:bg-dark-850 lg:min-h-screen lg:col-span-6 md:p-9 xl:p-12">
          <div className="absolute bottom-0 w-32 -rotate-45 -top-64 -right-8 bg-gray-200/20 dark:bg-dark-800/20"></div>
          <div className="p-4">
            <Link to="/">
              <img
                src={mainLogo}
                alt="mainLogo"
                width={175}
                height={32}
                className="inline-block h-8 dark:hidden"
              />
              <img
                src={whiteLogo}
                alt="whiteLogo"
                width={175}
                height={32}
                className="hidden h-8 dark:inline-block"
              />
            </Link>
            <h1 className="max-w-lg mt-8 text-2xl font-normal leading-tight capitalize md:leading-tight md:text-4xl">
              The most straightforward way to manage your projects
            </h1>
            <img
              src={authCreative}
              alt="Auth Creative"
              width={952}
              height={996}
              className="mt-9 xl:mt-0 relative xl:absolute xl:scale-110 rounded-lg shadow-lg xl:top-[315px] xl:left-[115px]"
            />
          </div>
        </div>
        <div className="flex items-center col-span-12 lg:min-h-screen lg:col-span-6 py-9 md:py-12">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-12 mx-4 mb-0 2xl:col-span-8 2xl:col-start-3 md:mx-12 card">
              <div className="md:p-10 card-body">
                <h4 className="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg bg-gradient-to-r from-primary-500 to-pink-500 bg-clip-text">
                  Create a New Account
                </h4>
                <p className="mb-5 text-center text-gray-500">
                  Already have an account?{' '}
                  <Link
                    to="/auth/signin-creative"
                    className="font-medium link link-primary">
                    Sign In
                  </Link>
                </p>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-12 md:col-span-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full form-input"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full form-input"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full form-input"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full form-input"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-span-12">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword.password ? 'text' : 'password'}
                          id="password"
                          name="password"
                          className="ltr:pr-8 rtl:pl-8 form-input"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword({
                              ...showPassword,
                              password: !showPassword.password,
                            })
                          }
                          className="absolute inset-y-0 flex items-center text-gray-500 ltr:right-3 rtl:left-3 focus:outline-hidden">
                          {showPassword.password ? (
                            <Eye className="size-5" />
                          ) : (
                            <EyeOff className="size-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={
                            showPassword.confirmPassword ? 'text' : 'password'
                          }
                          id="confirmPassword"
                          name="confirmPassword"
                          className="ltr:pr-8 rtl:pl-8 form-input"
                          placeholder="Enter your confirm password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword({
                              ...showPassword,
                              confirmPassword: !showPassword.confirmPassword,
                            })
                          }
                          className="absolute inset-y-0 flex items-center text-gray-500 ltr:right-3 rtl:left-3 focus:outline-hidden">
                          {showPassword.confirmPassword ? (
                            <Eye className="size-5" />
                          ) : (
                            <EyeOff className="size-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="items-start input-check-group grow">
                        <input
                          id="agreeToTerms"
                          className="input-check input-check-primary shrink-0"
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                        />
                        <label
                          htmlFor="agreeToTerms"
                          className="leading-normal input-check-label">
                          By creating an account, you agree to all of our terms
                          condition & policies.
                        </label>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <button type="submit" className="w-full btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>

                <div className="relative my-5 text-center text-gray-500 before:absolute dark:text-dark-500 before:border-gray-200 dark:before:border-dark-800 before:border-dashed before:w-full ltr:before:left-0 rtl:before:right-0 before:top-2.5 before:border-b">
                  <p className="relative inline-block px-2 bg-white dark:bg-dark-900">
                    OR
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    type="button"
                    className="w-full border-gray-200 dark:border-dark-800 btn hover:bg-gray-50 dark:hover:bg-dark-850 hover:text-primary-500">
                    <img
                      src={google}
                      alt="Google"
                      width={16}
                      height={16}
                      className="inline-block h-4 ltr:mr-1 rtl:ml-1"
                    />
                    Sign Up Via Google
                  </button>
                  <button
                    type="button"
                    className="w-full border-gray-200 dark:border-dark-800 btn hover:bg-gray-50 dark:hover:bg-dark-850 hover:text-primary-500">
                    <i className="ri-facebook-fill text-[20px] inline-block ltr:mr-1 rtl:ml-1 size-4 text-primary-500"></i>
                    Sign Up Via Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupCreative
