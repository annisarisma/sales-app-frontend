import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

import user17 from '@assets/images/avatar/user-17.png'
import { Tab, Tabs } from '@custom/Tabs/Tab'
import {
  Bell,
  Gem,
  ListTree,
  LogOut,
  ShieldCheck,
  Upload,
  UserRound,
} from 'lucide-react'
import Select from 'react-select'

import CommonAccount from '../../../components/Common/commonAccount'

const AccountSettings = () => {
  const [photoPreview, setPhotoPreview] = useState(null)
  const [formData, setFormData] = useState({
    firstName: 'Sophia',
    lastName: 'Mia',
    role: 'UI / UX Designer',
    birthDate: '',
    joiningDate: '',
    email: 'sophia@example.com',
    phoneNumber: '+(245) 01234 56789',
    location: 'Argentina',
    objective: '',
  })

  const fileInputRef = useRef(null)

  useEffect(() => {
    document.title =
      'Account Settings | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      setPhotoPreview(URL.createObjectURL(file))
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const languageOptions = [
    { label: 'English', value: '1' },
    { label: 'German', value: '2' },
    { label: 'French', value: '3' },
    { label: 'Russian', value: '4' },
  ]

  const currencyOptions = [
    { label: 'USD ($)', value: '1' },
    { label: 'Euro (€)', value: '2' },
    { label: 'Pound (£)', value: '3' },
    { label: 'JPY (¥)', value: '4' },
  ]

  return (
    <React.Fragment>
      <CommonAccount />

      {/* tabs */}
      <Tabs
        ulProps="pb-2 overflow-x-auto tabs-pills lg:pb-0"
        activeTabClass="active"
        contentProps="mt-5"
        otherClass="nav-item text-gray-500 dark:text-dark-500 [&.active]:bg-primary-500 [&.active]:text-primary-50"
        spanProps="align-middle whitespace-nowrap">
        <Tab
          icon={<UserRound className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Account"
          path="/page/account-settings">
          <>
            <div className="mt-5 card">
              <div className="card-body">
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12 xl:col-span-3">
                    <h6 className="card-title">Personal Information</h6>
                  </div>
                  <div className="col-span-12 xl:col-span-9">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12">
                          <div>
                            <div className="shrink-0">
                              {photoPreview ? (
                                <img
                                  className="object-cover rounded-md size-20"
                                  src={photoPreview}
                                  alt="Selected profile photo"
                                />
                              ) : (
                                <img
                                  className="object-cover rounded-md size-20"
                                  src={user17}
                                  alt="Current profile photo"
                                />
                              )}
                            </div>
                            <label className="block mt-4">
                              <span className="sr-only">
                                Choose profile photo
                              </span>
                              <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                              />
                              <span
                                className="btn btn-sub-primary"
                                onClick={() => fileInputRef.current?.click()}>
                                <Upload className="inline-block size-4 me-1"></Upload>
                                <span className="align-middle">
                                  Upload Profile
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <label
                            htmlFor="firstNameInput"
                            className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstNameInput"
                            name="firstName"
                            className="form-input"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="lastNameInput" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastNameInput"
                            name="lastName"
                            className="form-input"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                          <label htmlFor="roleInput" className="form-label">
                            Role
                          </label>
                          <input
                            type="text"
                            id="roleInput"
                            name="role"
                            className="form-input"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="Enter your role"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                          <label
                            htmlFor="birthDateInput"
                            className="form-label">
                            Birth of Date
                          </label>
                          <input
                            type="date"
                            id="birthDateInput"
                            name="birthDate"
                            className="form-input"
                            value={formData.birthDate}
                            onChange={handleChange}
                            placeholder="Select date"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                          <label
                            htmlFor="joiningDateInput"
                            className="form-label">
                            Joining Date
                          </label>
                          <input
                            type="date"
                            id="joiningDateInput"
                            name="joiningDate"
                            className="form-input"
                            value={formData.joiningDate}
                            onChange={handleChange}
                            placeholder="Select date"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                          <label htmlFor="emailInput" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="emailInput"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@example.com"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                          <label
                            htmlFor="phoneNumberInput"
                            className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="phoneNumberInput"
                            name="phoneNumber"
                            className="form-input"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="+(00) 00000 00000"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                          <label htmlFor="locationInput" className="form-label">
                            Location
                          </label>
                          <input
                            type="text"
                            id="locationInput"
                            name="location"
                            className="form-input"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter location"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <label
                            htmlFor="languageSelect"
                            className="form-label">
                            Language
                          </label>
                          <Select
                            classNamePrefix="select"
                            id="languageSelect"
                            isMulti={true}
                            options={languageOptions}
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <label
                            htmlFor="currencySelect"
                            className="form-label">
                            Currency
                          </label>
                          <Select
                            classNamePrefix="select"
                            id="currencySelect"
                            isMulti={true}
                            options={currencyOptions}
                          />
                        </div>
                        <div className="col-span-12">
                          <label
                            htmlFor="textareaInput2"
                            className="form-label">
                            Objective
                          </label>
                          <textarea
                            name="objective"
                            id="textareaInput2"
                            rows={3}
                            className="h-auto form-input"
                            value={formData.objective}
                            onChange={handleChange}
                            placeholder="Write your objective"></textarea>
                        </div>
                        <div className="col-span-12 text-right">
                          <button type="submit" className="btn btn-primary">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="grid grid-cols-12 gap-3 lg:gap-0 ">
                  <div className="col-span-12 xl:col-span-3">
                    <h6 className="card-title">Public Account</h6>
                  </div>
                  <div className="col-span-12 xl:col-span-9">
                    <div className="items-center gap-3 md:flex">
                      <div className="grow">
                        <h6 className="mb-1">
                          Publish your contact information publicly.
                        </h6>
                        <p className="text-gray-500 dark:text-dark-500">
                          Allow anyone viewing your profile to access your
                          contact information.
                        </p>
                      </div>
                      <label htmlFor="publicProfile" className="switch-group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="publicProfile"
                            className="sr-only peer"
                          />
                          <div className="switch-wrapper"></div>
                          <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                        </div>
                      </label>
                    </div>
                    <div className="items-center gap-3 mt-4 md:flex">
                      <div className="grow">
                        <h6 className="mb-1">Make Contact Info Public</h6>
                        <p className="text-gray-500 dark:text-dark-500">
                          Allow anyone viewing your profile to access your
                          contact information.
                        </p>
                      </div>
                      <label htmlFor="publicProfile2" className="switch-group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="publicProfile2"
                            className="sr-only peer"
                          />
                          <div className="switch-wrapper"></div>
                          <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Delete Account</h6>
              </div>
              <div className="card-body">
                <p className="mb-3 text-gray-500 dark:text-dark-500">
                  Please proceed with caution, as deleting your account and all
                  associated data from our organization is a permanent action
                  and cannot be undone.
                </p>
                <button className="btn btn-red">Delete Account</button>
              </div>
            </div>
          </>
        </Tab>
        <Tab
          icon={
            <ShieldCheck className="inline-block size-4 ltr:mr-2 rtl:ml-2" />
          }
          label="Security"
          path="/page/account-security">
          <div>Security Content</div>
        </Tab>
        <Tab
          icon={<Gem className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Billing & Plans"
          path="/page/account-billing-plan">
          <div>Billing & Plans Content</div>
        </Tab>
        <Tab
          icon={<Bell className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Notification"
          path="/page/account-notification">
          <div>Notification Content</div>
        </Tab>
        <Tab
          icon={<ListTree className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Statements"
          path="/page/account-statements">
          <div>Statements Content</div>
        </Tab>
        <Tab
          icon={<LogOut className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Logs"
          path="/page/account-logs">
          <div>Logs Content</div>
        </Tab>
      </Tabs>
    </React.Fragment>
  )
}
export default AccountSettings
