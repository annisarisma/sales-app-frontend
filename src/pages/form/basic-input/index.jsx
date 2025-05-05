import React, { useEffect, useState } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import { Eye, EyeOff, Mail } from 'lucide-react'

const BasicInput = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [textAreaValue, setTextAreaValue] = useState(
    'Admin dashboard is a single screen that includes all crucial information. In contrast, an admin or control panel allows for certain actions.'
  )

  useEffect(() => {
    document.title =
      'Basic Input | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Basic Input" subTitle="Forms" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Default</h6>
          </div>
          <div className="card-body">
            <label htmlFor="basicInput1" className="form-label">
              Default Input
            </label>
            <input type="text" id="basicInput1" className="form-input" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Float Label</h6>
          </div>
          <div className="card-body">
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="pt-4 form-input peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-gray-500 dark:text-dark-500 duration-300 transform z-10 origin-[0] bg-white dark:bg-dark-900 px-2 peer-focus:px-2 scale-100 -translate-y-1/2 top-1/2 peer-focus:top-2 peer-focus:scale-[0.85] peer-focus:-translate-y-4 start-1">
                Float Label
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Placeholder</h6>
          </div>
          <div className="card-body">
            <label htmlFor="placeholderInput" className="form-label">
              Input
            </label>
            <input
              type="text"
              id="placeholderInput"
              className="form-input"
              placeholder="Placeholder"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Value</h6>
          </div>
          <div className="card-body">
            <label htmlFor="valueInput1" className="form-label">
              Input
            </label>
            <input
              type="text"
              id="valueInput1"
              className="form-input"
              placeholder="Placeholder"
              defaultValue="Input value"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Disabled</h6>
          </div>
          <div className="card-body">
            <label htmlFor="disabledInput" className="form-label">
              Input
            </label>
            <input
              type="text"
              id="disabledInput"
              className="form-input"
              placeholder="Placeholder"
              defaultValue="Disabled Input"
              disabled
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Valid Field</h6>
          </div>
          <div className="card-body">
            <label htmlFor="validInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="validInput"
              className="form-input invalid:border-red-500 valid:border-green-500"
              placeholder="Placeholder"
              defaultValue="example@gmail.com"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Invalid Field</h6>
          </div>
          <div className="card-body">
            <label htmlFor="invalidInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="invalidInput"
              className="form-input invalid:border-red-500 valid:border-green-500"
              placeholder="Placeholder"
              defaultValue="example.com"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Password Input</h6>
          </div>
          <div className="card-body">
            <div>
              <label htmlFor="iconWithInput" className="form-label">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="iconWithInput"
                  className="ltr:pr-8 rtl:pl-8 form-input"
                  placeholder="Placeholder"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-hidden">
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Textarea</h6>
          </div>
          <div className="card-body">
            <label htmlFor="textareaInput" className="form-label">
              Textarea Input
            </label>
            <textarea
              name="textareaInput"
              id="textareaInput"
              rows={3}
              className="h-auto form-input"></textarea>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Textarea Placeholder</h6>
          </div>
          <div className="card-body">
            <label htmlFor="textareaInput2" className="form-label">
              Textarea Placeholder
            </label>
            <textarea
              name="textareaInput2"
              id="textareaInput2"
              rows={3}
              className="h-auto form-input"
              placeholder="Enter your description"></textarea>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Textarea Placeholder</h6>
          </div>
          <div className="card-body">
            <label htmlFor="textareaInput3" className="form-label">
              Textarea Placeholder
            </label>
            <textarea
              name="textareaInput3"
              id="textareaInput3"
              rows={3}
              className="h-auto form-input"
              placeholder="Enter your description"
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)}></textarea>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Icon with Input</h6>
          </div>
          <div className="card-body">
            <div>
              <label htmlFor="iconWithInput" className="form-label">
                Email
              </label>
              <div className="relative group/form">
                <input
                  type="email"
                  id="iconWithInput"
                  className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                  placeholder="Placeholder"
                />
                <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                  <Mail className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Icon with Input (Right)</h6>
          </div>
          <div className="card-body">
            <div>
              <label htmlFor="iconWithInput" className="form-label">
                Email
              </label>
              <div className="relative group/form right">
                <input
                  type="email"
                  id="iconWithInput"
                  className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                  placeholder="Placeholder"
                />
                <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                  <Mail className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Input Sizes</h6>
          </div>
          <div className="card-body">
            <div className="grid items-center grid-cols-12 gap-5">
              <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                <label htmlFor="basicInput1" className="form-label">
                  Small Input
                </label>
                <input
                  type="text"
                  id="basicInput1"
                  className="form-input input-sm"
                />
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                <label htmlFor="basicInput1" className="form-label">
                  Medium Input
                </label>
                <input
                  type="text"
                  id="basicInput1"
                  className="form-input input-md"
                />
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                <label htmlFor="basicInput1" className="form-label">
                  Default Input
                </label>
                <input type="text" id="basicInput1" className="form-input" />
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                <label htmlFor="basicInput1" className="form-label">
                  Large Input
                </label>
                <input
                  type="text"
                  id="basicInput1"
                  className="form-input input-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BasicInput
