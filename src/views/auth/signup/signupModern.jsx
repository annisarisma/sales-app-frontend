import React, { useState } from 'react'

import whiteLogo from '@assets/images/logo-white.png'
import backgroundImg from '@assets/images/others/auth.jpg'
import google from '@assets/images/others/google.png'
import { Eye, EyeOff } from 'lucide-react'
import { FaFacebookF } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const SignupModern = () => {
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

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    })
  }

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
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
    navigate('/auth/signin-modern')

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
    setLoading(!loading)
  }

  return (
    <div
      className="relative flex items-center justify-center min-h-screen py-12 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="absolute inset-0 bg-gray-950/50"></div>
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mb-0 border-none shadow-none md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card bg-white/10 backdrop-blur-md">
            <div className="p-10 card-body">
              <div className="mb-5 text-center">
                <Link to="#!">
                  <img
                    src={whiteLogo}
                    alt="whiteLogo"
                    width={175}
                    height={32}
                    className="h-8 mx-auto"
                  />
                </Link>
              </div>
              <h4 className="mb-2 leading-relaxed text-center text-white">
                Create a New Account
              </h4>
              <p className="mb-5 text-center text-white/75">
                Already have an account?{' '}
                <Link
                  to="/auth/signin-modern"
                  className="font-medium text-white">
                  Sign In
                </Link>
              </p>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-4 mt-5">
                  <div className="col-span-6">
                    <label
                      htmlFor="firstName"
                      className="form-label text-white/75">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="lastName"
                      className="form-label text-white/75">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="username"
                      className="form-label text-white/75">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="email" className="form-label text-white/75">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="text-white border-none form-input bg-white/10 placeholder:text-white/75"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="password"
                      className="form-label text-white/75">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword.password ? 'text' : 'password'}
                        id="password"
                        className="text-white border-none ltr:pr-8 rtl:pl-8 form-input bg-white/10 placeholder:text-white/75"
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
                    <label
                      htmlFor="confirmPassword"
                      className="form-label text-white/75">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={
                          showPassword.confirmPassword ? 'text' : 'password'
                        }
                        id="confirmPassword"
                        className="text-white border-none ltr:pr-8 rtl:pl-8 form-input bg-white/10 placeholder:text-white/75"
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
                        className="border-0 input-check bg-white/10 shrink-0"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="agreeToTerms"
                        className="input-check-label text-white/75">
                        By creating an account, you agree to all of our terms
                        conditions & policies.
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

              <div className="relative my-5 text-center text-white/75">
                <p>OR</p>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full border-white/10 text-white/75 btn hover:bg-white/10 hover:text-white">
                  <img
                    src={google}
                    alt="Google logo"
                    width={16}
                    height={16}
                    className="inline-block h-4 mx-2"
                  />
                  SignIn Via Google
                </button>
                <button
                  type="button"
                  className="w-full border-white/10 text-white/75 btn hover:bg-white/10 hover:text-white">
                  <FaFacebookF className="inline-block mx-2 size-4 text-primary-500" />
                  SignIn Via Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupModern
