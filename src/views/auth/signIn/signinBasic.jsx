import { useState } from 'react'

import logoWhite from '@assets/images/logo-white.png'
import LogoMain from '@assets/images/main-logo.png'
import Google from '@assets/images/others/google.png'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const SignInBasic = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const [alert, setAlert] = useState({
    isVisible: false,
    message: '',
    type: 'bg-red-100 text-red-500',
  })

  const navigate = useNavigate()

  const allowedCredentials = {
    adminEmail: 'admin@example.com',
    adminPassword: 'admin@123',
    userEmail: 'user@example.com',
    userPassword: 'user@123',
  }

  const showAlert = (message, type) => {
    setAlert({ isVisible: true, message, type })
  }

  const validateForm = (e) => {
    e.preventDefault()
    setAlert({ ...alert, isVisible: false, message: '' })
    const isAdminValid =
      formData.email === allowedCredentials.adminEmail &&
      formData.password === allowedCredentials.adminPassword
    const isUserValid =
      formData.email === allowedCredentials.userEmail &&
      formData.password === allowedCredentials.userPassword

    if (!isAdminValid && !isUserValid) {
      showAlert('Invalid email or password', 'bg-red-100 text-red-500')
      return
    }
    showAlert(
      `You've successfully signed in to Domiex!`,
      'bg-green-100 text-green-500'
    )
    setTimeout(() => {
      navigate('/dashboards/ecommerce')
    }, 1000)
  }

  // handle admin login
  const handleAdminLogin = () => {
    setFormData({ email: 'admin@example.com', password: 'admin@123' })
  }

  // handle user login
  const handleGuestLogin = () => {
    setFormData({ email: 'user@example.com', password: 'user@123' })
  }

  // handle input
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen py-12 from-sky-100 dark:from-sky-500/15 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-50 dark:via-green-500/10 to-pink-50 dark:to-pink-500/10">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mb-0 md:col-span-10 lg:col-span-6 xl:col-span-4 md:col-start-2 lg:col-start-4 xl:col-start-5 card">
            <div className="md:p-10 card-body">
              <div className="mb-5 text-center">
                <Link to="#">
                  <img
                    src={LogoMain}
                    alt="LogoMain"
                    className="h-8 mx-auto dark:hidden"
                    width={175}
                    height={32}
                  />
                  <img
                    src={logoWhite}
                    alt="logoWhite"
                    className="hidden h-8 mx-auto dark:inline-block"
                  />
                </Link>
              </div>
              <h4 className="mb-2 font-bold leading-relaxed text-center text-transparent drop-shadow-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text">
                Welcome Back, Sofia!
              </h4>
              <p className="mb-5 text-center text-gray-500 dark:text-dark-500">
                Don't have an account?{' '}
                <Link
                  to="/auth/signup-basic"
                  className="font-medium link link-primary">
                  Sign Up
                </Link>
              </p>
              {alert.isVisible && (
                <div
                  className={`relative py-3 text-sm rounded-md ltr:pl-5 rtl:pr-5 ltr:pr-7 rtl:pl-7 ${alert.type}`}>
                  <span>{alert.message}</span>
                  <button
                    onClick={() => setAlert({ ...alert, isVisible: false })}
                    className="absolute text-lg transition duration-200 ease-linear ltr:right-5 rtl:left-5 top-2">
                    <i className="ri-close-fill"></i>
                  </button>
                </div>
              )}
              <form onSubmit={validateForm}>
                <div className="grid grid-cols-12 gap-5 mt-5">
                  <div className="col-span-12">
                    <label htmlFor="emailOrUsername" className="form-label">
                      Email Or Username
                    </label>
                    <input
                      type="text"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full form-input"
                      placeholder="Enter your email or username"
                    />
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="password" className="block mb-2 text-sm">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full ltr:pr-8 rtl:pl-8 form-input"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 flex items-center text-gray-500 ltr:right-3 rtl:left-3 focus:outline-hidden dark:text-dark-500">
                        {showPassword ? (
                          <Eye className="size-5" />
                        ) : (
                          <EyeOff className="size-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="flex items-center">
                      <div className="input-check-group grow">
                        <input
                          id="checkboxBasic1"
                          className="input-check input-check-primary"
                          type="checkbox"
                        />
                        <label
                          htmlFor="checkboxBasic1"
                          className="input-check-label">
                          Remember me
                        </label>
                      </div>
                      <Link
                        to="/auth/forgot-password-basic"
                        className="block text-sm font-medium underline transition duration-300 ease-linear ltr:text-right rtl:text-left shrink-0 text-primary-500 hover:text-primary-600">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <button type="submit" className="w-full btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>

              <div className="relative my-5 text-center text-gray-500 dark:text-dark-500 before:absolute before:border-gray-200 dark:before:border-dark-800 before:border-dashed before:w-full ltr:before:left-0 rtl:before:right-0 before:top-2.5 before:border-b">
                <p className="relative inline-block px-2 bg-white dark:bg-dark-900">
                  OR
                </p>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full border-gray-200 btn hover:bg-gray-50 dark:border-dark-800 dark:hover:bg-dark-850 hover:text-primary-500">
                  <img
                    src={Google}
                    alt="GoogleImg"
                    className="inline-block h-4 ltr:mr-1 rtl:ml-1"
                    width={16}
                    height={16}
                  />{' '}
                  Sign In Via Google
                </button>
                <button
                  type="button"
                  className="w-full border-gray-200 btn hover:bg-gray-50 dark:border-dark-800 dark:hover:bg-dark-850 hover:text-primary-500">
                  <i className="ri-facebook-fill text-[20px] inline-block ltr:mr-1 rtl:ml-1 size-4 text-primary-500"></i>
                  Sign In Via Facebook
                </button>
              </div>

              <div className="flex items-center gap-3 mt-5">
                <div className="grow">
                  <h6 className="mb-1">Admin</h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    Email: admin@example.com
                  </p>
                  <p className="text-gray-500 dark:text-dark-500">
                    Password: admin@123
                  </p>
                </div>
                <button
                  className="shrink-0 btn btn-sub-gray"
                  onClick={handleAdminLogin}>
                  Login
                </button>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="grow">
                  <h6 className="mb-1">Users</h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    Email: user@example.com
                  </p>
                  <p className="text-gray-500 dark:text-dark-500">
                    Password: user@123
                  </p>
                </div>
                <button
                  className="shrink-0 btn btn-sub-gray"
                  onClick={handleGuestLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInBasic
