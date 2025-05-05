import React, { useEffect, useState } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import { Camera, CircleCheckBig, Home, MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const WizardBasic = () => {
  const defaultImage =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QBCRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAkAAAAMAAAABAAAAAEABAAEAAAABAAAAAAAAAAAAAP/bAEMACwkJBwkJBwkJCQkLCQkJCQkJCwkLCwwLCwsMDRAMEQ4NDgwSGRIlGh0lHRkfHCkpFiU3NTYaKjI+LSkwGTshE//bAEMBBwgICwkLFQsLFSwdGR0sLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLP/AABEIAdoB2gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APTmZsnmk3N60N1NJTELub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lJQA7c3rSbm9aSigBdzetG4+tJRQAZPrRuPrSUUALub1/lRub1pKSgBdzUbm9aSigBdzetG5vX+VJSUALub1/lUu5qhqXj1oAG6mkpW6mkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKSiigAooo+lACUZoooAKKKSgAo/rRSUALUlRVJz60AObqaSlbqaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkoooAKKKKACiikoAKSlooASiiigA+lHpRQaACkoooATmilpPegBP/ANdS5HrUdSfL7UAObqaSlbqaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSiigAooooAKKKKAEooooASij60UAFFFHpQAUmaKPxoAKSlpPWgA/wAmk/pS/Sk47dqADpUvPvUXrUn4H8qAHt1NJSt1NJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFISFBJIAHUk4FAC0VTlv4EyEBc+3C/nVSS9uX6MEHonX8zQBrEqvLEAe5A/nUTXVqvWVfwyf5VjFmY5Ykn3JP86SmBrG/tB3c/RTTf7QtvST8hWXRQBqi/te+8f8AAc09by0b/loB/vAiseigDeV43+66t9CDTq5/p04+lTJdXMfSQkej/MP1oA2qKoR6gpwJUK/7Scj8utXEkjkG5GDD2P8AMUgH0UUUAFFFJQAUUUUAFFFJQAtJRRQAUlFFABR2oo+lAB1pKKP60AFFFFACUHjNH/66KAEpaSj/APVQAc0/I9KZUufpQA5uppKVuppKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACimsyopZiAo5JNZlxePLlI8rH0J/ib60AWp72KLKph3/wDHR9TWdLNNMcuxPoOij6Co6KYBRRRQAUUUUAFFFFABRRRQAUUUUAFKruhDIxUjuDikooA0IL/os4/4Gv8AUVfBVgCpBB6Ecg1gVLBcSwH5eUP3lPQ/SgDaoqOKaOZdyH/eB6qfepKQBRRRQAlFFFABSUUUAFFFFABRRSf5NABxR6e1FJQAcUUUnP6UALSf5/GjvRz+FAB06d6KT6UGgA96kyf8mo//ANdP59P1oAlbqaSlbqaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmu6RqzucKvJNKSACScADJJ7Csi6uDO2BkRqflHr7mgBLi5edu4QH5V/qagoopgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUUUAPjkkiYOhwR+RHoa14J0nTI4YffX0NYtPileJ1dDyOoPQj0NAG7SUyKVJkDr36juD6U+kAUhoooAKKKKACij/JpKACj/PNFFABScUelFACUdqP8mj+dABn9KMjij60d+tACf5FH5Uf59qOOlACfhUn40zmn4oAlbqaSlbqaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKhuJhDEz/xfdQerGgCpfXGT5CHgf6w+/8AdqhQSSSScknJPqTRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkoooAKKKKACiiigCe2nMEnP+rbhx6e9bHoQevT3zXP1p2M+9DE33k5X/AHf/AK1AF2koNFIAoopKAFpKKPSgApPX0pf8mkoAKKTPP1paAE+lFFIT/ntQAelHAoz0oz/hQAd6T155oooAKk2+wqLPt/8AWqTj1P5GgCZuppKVuppKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArJvpd8uwH5Y+P+BHrWnK4jjkc/wAKkj69qwiSSSepJJ+ppgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUUUAFFFFABRRSUAFFFFABT4pDFIkg/hPPuO4plFAG8CGAYchgCD7HmlqpYy74dp6xnH4HkVapALSUUUAH+NFFJQAc0f5+tHFJQAUUUepoAP/r0nP/1sUH1ozQAUnOaPwo9OlAAcd6T60tJQAHn+lSZPotR/55qTJ/yKAJm6mkpW6mkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKWoPiNE/vtk/RazKt6g2Zgv9xB+Z5qpTAKKKKACiiigAooooAKKKKA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' // replace with the actual path or import
  const [step, setStep] = useState(1)
  const [formComplete, setFormComplete] = useState(false)
  const [togglePassword, setTogglePassword] = useState(false)
  const [passwordStrengthText, setPasswordStrengthText] = useState('')
  const [form, setForm] = useState({
    firstname: '',
    imageForm: defaultImage,
    email: '',
    passwords: '',
    profession: '',
    gender: '',
  })
  const [errors, setErrors] = useState({
    firstname: '',
    email: '',
    imageForm: '',
    passwords: '',
    profession: '',
    gender: '',
  })

  useEffect(() => {
    document.title =
      'Wizard Basic | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const checkPasswordStrength = () => {
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    )
    const mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    )
    const value = form.passwords

    if (strongRegex.test(value)) {
      setPasswordStrengthText('Strong password')
    } else if (mediumRegex.test(value)) {
      setPasswordStrengthText('Could be stronger')
    } else {
      setPasswordStrengthText('Too weak')
    }

    clearError('passwords')
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setForm((prev) => ({ ...prev, imageForm: reader.result }))
        if (reader.result === defaultImage) {
          setErrors((prev) => ({
            ...prev,
            imageForm: 'Please upload a profile picture.',
          }))
        } else {
          setErrors((prev) => ({ ...prev, imageForm: '' }))
        }
      }
      reader.readAsDataURL(file)
    } else {
      setForm((prev) => ({ ...prev, imageForm: defaultImage }))
      setErrors((prev) => ({ ...prev, imageForm: '' }))
    }
  }

  const clearErrors = () => {
    setErrors({
      firstname: '',
      email: '',
      imageForm: '',
      passwords: '',
      profession: '',
      gender: '',
    })
  }
  const clearError = (field) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }))
  }

  const validateStep = () => {
    clearErrors()
    if (step === 1) {
      if (!form.firstname)
        setErrors((prev) => ({ ...prev, firstname: 'First name is required' }))
      if (form.imageForm === defaultImage)
        setErrors((prev) => ({ ...prev, imageForm: 'Image is required' }))
      if (!form.email)
        setErrors((prev) => ({ ...prev, email: 'Email is required' }))
      if (!form.firstname || !form.email || form.imageForm === defaultImage)
        return false
    } else if (step === 2) {
      if (!form.passwords)
        setErrors((prev) => ({ ...prev, passwords: 'Password is required' }))
      if (!form.passwords || passwordStrengthText !== 'Strong password')
        return false
    } else if (step === 3) {
      if (!form.profession)
        setErrors((prev) => ({
          ...prev,
          profession: 'Profession is required',
        }))
      if (!form.gender)
        setErrors((prev) => ({ ...prev, gender: 'Gender is required' }))
      if (!form.profession || !form.gender) return false
      setFormComplete(true)
      return complete()
    }
    next()
  }

  const next = () => setStep((prev) => prev + 1)
  const prev = () => setStep((prev) => prev - 1)
  const complete = () => setStep('complete')

  const resetForm = () => {
    setStep(1)
    setFormComplete(false)
    setPasswordStrengthText('')
    setForm({
      firstname: '',
      imageForm: defaultImage,
      email: '',
      passwords: '',
      profession: '',
      gender: '',
    })
    setErrors({
      firstname: '',
      email: '',
      imageForm: '',
      passwords: '',
      profession: '',
      gender: '',
    })
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Basic Wizard" subTitle="Forms & Tables" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Multi Step Form</h6>
          </div>
          <div className="card-body">
            <div>
              <div className="w-full lg:max-w-[600px] mx-auto">
                <div className="card">
                  <div className="card-body">
                    {/* success message */}
                    {formComplete === true ? (
                      <div>
                        <div className="flex items-center justify-between text-center">
                          <div>
                            <CircleCheckBig className="mx-auto my-4 text-green-500 fill-green-500/10 size-8" />
                            <h4 className="mb-2">Registration Success</h4>
                            <div className="mb-8 text-gray-500 md:mx-10 dark:text-dark-500">
                              Thank you. We have sent you an email to
                              info@example.com. Please click the link in the
                              message to activate your account.
                            </div>
                            <button
                              onClick={resetForm}
                              className="btn btn-sub-gray">
                              <Home className="inline-block -mt-1 ltr:mr-1 rtl:ml-1 size-4" />{' '}
                              Back to home
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="py-4 border-b border-gray-200 dark:border-dark-800">
                          <h6 className="mb-1 text-xs text-gray-500 uppercase dark:text-dark-500">
                            Step: {step} of 3
                          </h6>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex-1">
                              {step === 1 && <h5>Your Profile</h5>}
                              {step === 2 && <h5>Your Password</h5>}
                              {step === 3 && <h5>Tell me about yourself</h5>}
                            </div>
                            <div className="flex items-center md:w-64">
                              <div className="w-full bg-gray-200 rounded-full dark:bg-dark-800 rtl:ml-2 ltr:mr-2">
                                <div
                                  className="h-2 text-xs leading-none text-center text-white bg-green-500 rounded-full"
                                  style={{ width: `${(step / 3) * 100}%` }}
                                />
                              </div>
                              <h6 className="w-10 text-xs text-gray-500 dark:text-dark-500">
                                {Math.round((step / 3) * 100)}%
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="pt-10 pb-5">
                          {/* step 1 */}
                          {step === 1 && (
                            <>
                              <div className="mb-5 text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4 bg-gray-500 border rounded-full shadow-inset dark:border-dark-800">
                                  <img
                                    id="image"
                                    className="object-cover w-full h-32 rounded-full"
                                    src={form.imageForm}
                                    alt="Profile"
                                    width={45}
                                    height={45}
                                  />
                                </div>
                                <label
                                  htmlFor="fileInput"
                                  className="inline-flex items-center justify-between inline-block px-4 py-2 font-medium text-left text-gray-500 border border-gray-200 rounded-lg shadow-xs cursor-pointer dark:border-dark-800 dark:text-dark-500 focus:outline-hidden hover:bg-gray-100 dark:hover:bg-dark-850">
                                  <Camera className="inline-flex shrink-0 -mt-1 ltr:mr-1 rtl:ml-1 size-5" />
                                  Browse Photo
                                </label>
                                <div className="mt-1 text-xs text-center text-gray-500 dark:text-dark-500">
                                  Click to add profile picture
                                </div>
                                <p className="mt-1 text-xs text-red-500">
                                  {errors.imageForm}
                                </p>
                                <input
                                  name="photo"
                                  id="fileInput"
                                  accept="image/*"
                                  className="hidden"
                                  type="file"
                                  onChange={handleImageChange}
                                />
                              </div>
                              <div className="mb-5">
                                <label
                                  htmlFor="firstname"
                                  className="form-label">
                                  Firstname
                                </label>
                                <input
                                  type="text"
                                  className="form-input"
                                  id="firstname"
                                  required
                                  value={form.firstname}
                                  placeholder="Enter your firstname..."
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      firstname: e.target.value,
                                    })
                                  }
                                  onInput={() => clearError('firstname')}
                                />
                                <p className="mt-1 text-xs text-red-500">
                                  {errors.firstname}
                                </p>
                              </div>
                              <div className="mb-5">
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-input"
                                  id="email"
                                  required
                                  value={form.email}
                                  placeholder="Enter your email address..."
                                  onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                  }
                                  onInput={() => clearError('email')}
                                />
                                <p className="mt-1 text-xs text-red-500">
                                  {errors.email}
                                </p>
                              </div>
                            </>
                          )}
                          {/* step 2 */}
                          {step === 2 && (
                            <>
                              <div className="mb-5">
                                <label
                                  htmlFor="password"
                                  className="font-bold form-label">
                                  Set up password
                                </label>
                                <div className="mt-2 mb-4 text-gray-500 dark:text-dark-500">
                                  Please create a secure password including the
                                  following criteria below.
                                  <ul className="mt-2 text-sm list-disc list-inside">
                                    <li>lowercase letters</li>
                                    <li>numbers</li>
                                    <li>capital letters</li>
                                    <li>special characters</li>
                                  </ul>
                                </div>
                                <div className="relative">
                                  <input
                                    type={togglePassword ? 'text' : 'password'}
                                    id="password"
                                    onInput={checkPasswordStrength}
                                    value={form.passwords}
                                    className="form-input"
                                    placeholder="Your strong password..."
                                    onChange={(e) =>
                                      setForm({
                                        ...form,
                                        passwords: e.target.value,
                                      })
                                    }
                                  />
                                  <p className="mt-1 text-xs text-red-500">
                                    {errors.passwords}
                                  </p>
                                  <div
                                    className="absolute top-0 bottom-0 px-3 py-2 cursor-pointer ltr:right-0 rtl:left-0"
                                    onClick={() =>
                                      setTogglePassword(!togglePassword)
                                    }>
                                    <svg
                                      className={`text-gray-500 fill-current size-6 dark:text-dark-500 ${
                                        !togglePassword ? 'block' : 'hidden'
                                      }`}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24">
                                      <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5zM16.972 15.558l-2.28-2.28C14.882 12.888 15 12.459 15 12c0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501C9.796 7.193 10.814 7 12 7c5.351 0 7.424 3.846 7.926 5C19.624 12.692 18.76 14.342 16.972 15.558z" />
                                    </svg>
                                    <svg
                                      className={`text-gray-500 fill-current size-6 dark:text-dark-500 ${
                                        togglePassword ? 'block' : 'hidden'
                                      }`}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24">
                                      <path d="M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z" />
                                      <path d="M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex items-center h-3 mt-4">
                                  <div className="flex justify-between w-2/3 h-2">
                                    <div
                                      className={`w-1/3 h-2 rounded-full ltr:mr-1 rtl:ml-1 dark:bg-dark-800 ${
                                        passwordStrengthText === 'Too weak' ||
                                        passwordStrengthText ===
                                          'Could be stronger' ||
                                        passwordStrengthText ===
                                          'Strong password'
                                          ? 'bg-red-400 dark:bg-red-400'
                                          : 'bg-gray-300'
                                      }`}></div>
                                    <div
                                      className={`w-1/3 h-2 rounded-full ltr:mr-1 rtl:ml-1 dark:bg-dark-800 ${
                                        passwordStrengthText ===
                                          'Could be stronger' ||
                                        passwordStrengthText ===
                                          'Strong password'
                                          ? 'bg-orange-400 dark:bg-orange-400'
                                          : 'bg-gray-300'
                                      }`}></div>
                                    <div
                                      className={`w-1/3 h-2 rounded-full dark:bg-dark-800 ${
                                        passwordStrengthText ===
                                        'Strong password'
                                          ? 'bg-green-400 dark:bg-green-400'
                                          : 'bg-gray-300'
                                      }`}></div>
                                  </div>
                                  <div className="text-sm font-medium leading-none text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-dark-500">
                                    {passwordStrengthText}
                                  </div>
                                </div>
                                <p className="mt-5 text-gray-500 dark:text-dark-500">
                                  Exploration for a password strength meter by{' '}
                                  <Link to="#!" className="text-primary-500">
                                    SRBThemes
                                  </Link>
                                  .
                                </p>
                              </div>
                            </>
                          )}
                          {/* step 3 */}
                          {step === 3 && (
                            <>
                              <div className="mb-5">
                                <label htmlFor="gender" className="block mb-2">
                                  Gender
                                </label>
                                <div className="flex gap-5">
                                  <div className="input-radio-group">
                                    <input
                                      id="genderMale"
                                      value="Male"
                                      checked={form.gender === 'Male'}
                                      className="input-radio input-radio-primary"
                                      type="radio"
                                      onChange={() => {
                                        setForm({ ...form, gender: 'Male' })
                                        clearError('gender')
                                      }}
                                    />
                                    <label
                                      htmlFor="genderMale"
                                      className="input-radio-label">
                                      Male
                                    </label>
                                  </div>
                                  <div className="input-radio-group">
                                    <input
                                      id="genderFemale"
                                      value="Female"
                                      checked={form.gender === 'Female'}
                                      className="input-radio input-radio-primary"
                                      type="radio"
                                      onChange={() => {
                                        setForm({ ...form, gender: 'Female' })
                                        clearError('gender')
                                      }}
                                    />
                                    <label
                                      htmlFor="genderFemale"
                                      className="input-radio-label">
                                      Female
                                    </label>
                                  </div>
                                </div>
                                <p className="mt-1 text-xs text-red-500">
                                  {errors.gender}
                                </p>
                              </div>
                              <div className="mb-5">
                                <label
                                  htmlFor="profession"
                                  className="block mb-2 text-sm">
                                  Profession
                                </label>
                                <input
                                  type="text"
                                  id="profession"
                                  className="form-input"
                                  value={form.profession}
                                  placeholder="eg. Web Developer"
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      profession: e.target.value,
                                    })
                                  }
                                  onInput={() => clearError('profession')}
                                />
                                <p className="mt-1 text-xs text-red-500">
                                  {errors.profession}
                                </p>
                              </div>
                            </>
                          )}
                        </div>

                        {/* bottom navigation */}
                        <div className="max-w-3xl">
                          <div className="flex justify-between">
                            <div className="w-1/2">
                              {step > 1 && (
                                <button
                                  onClick={prev}
                                  className="btn btn-sub-gray">
                                  {' '}
                                  <MoveLeft className="mr-1 ltr:inline-block rtl:hidden size-4" />{' '}
                                  <MoveRight className="ml-1 rtl:inline-block ltr:hidden size-4" />
                                  Previous
                                </button>
                              )}
                            </div>
                            <div className="w-1/2 ltr:text-right rtl:text-left">
                              {step < 3 && (
                                <button
                                  onClick={() => validateStep()}
                                  className="btn btn-primary">
                                  Next{' '}
                                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />{' '}
                                  <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
                                </button>
                              )}
                              {step === 3 && (
                                <button
                                  onClick={() => validateStep()}
                                  className="btn btn-green">
                                  Complete
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default WizardBasic
