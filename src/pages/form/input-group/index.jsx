import React, { useEffect } from 'react'

import master from '@assets/images/payment/mastercard.png'
import BreadCrumb from '@common//BreadCrumb'

const InputGroup = () => {
  useEffect(() => {
    document.title =
      'Input Group | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Group Input" subTitle="Forms" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-6">
                <div className="flex group">
                  <label htmlFor="basicInput1" className="input-label-group">
                    @
                  </label>
                  <input
                    type="text"
                    id="basicInput1"
                    className="ltr:rounded-l-none rtl:rounded-r-none form-input"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex group right">
                  <input
                    type="text"
                    id="basicInput2"
                    className="ltr:rounded-r-none rtl:rounded-l-none form-input"
                  />
                  <label htmlFor="basicInput2" className="input-label-group">
                    @
                  </label>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex group">
                  <label htmlFor="basicInput3" className="input-label-group">
                    $
                  </label>
                  <input
                    type="number"
                    id="basicInput3"
                    className="ltr:rounded-l-none rtl:rounded-r-none form-input"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex group right">
                  <input
                    type="number"
                    id="basicInput4"
                    className="ltr:rounded-r-none rtl:rounded-l-none form-input"
                  />
                  <label htmlFor="basicInput4" className="input-label-group">
                    $
                  </label>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex group">
                  <label htmlFor="basicInput5" className="input-label-group">
                    Label
                  </label>
                  <input
                    type="text"
                    id="basicInput5"
                    className="ltr:rounded-l-none rtl:rounded-r-none form-input"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex group right">
                  <input
                    type="text"
                    id="basicInput6"
                    className="ltr:rounded-r-none rtl:rounded-l-none form-input"
                  />
                  <label htmlFor="basicInput6" className="input-label-group">
                    Label
                  </label>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex group">
                  <label
                    htmlFor="basicInput7"
                    className="ltr:rounded-r-none rtl:rounded-l-none input-label-group">
                    https://
                  </label>
                  <input
                    type="text"
                    id="basicInput7"
                    className="ltr:rounded-r-none rtl:rounded-l-none ltr:rounded-l-none rtl:rounded-r-none form-input"
                  />
                  <label
                    htmlFor="basicInput7"
                    className="ltr:border-l-0 rtl:border-r-0 ltr:border-r rtl:border-l input-label-group ltr:rounded-r-md rtl:rounded-l-md ltr:rounded-l-none rtl:rounded-r-none">
                    .com
                  </label>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex group right">
                  <input
                    type="text"
                    id="basicInput8"
                    className="ltr:rounded-r-none rtl:rounded-l-none form-input"
                  />
                  <label htmlFor="basicInput8" className="input-label-group">
                    @gmail.com
                  </label>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex group">
                  <label htmlFor="basicInput9" className="input-label-group">
                    <img src={master} alt="" className="h-[23px] w-[35px]" />
                  </label>
                  <input
                    type="text"
                    id="basicInput9"
                    className="ltr:rounded-l-none rtl:rounded-r-none form-input"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Button with Input Group</h6>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-6">
                <div className="flex">
                  <button
                    type="button"
                    className="ltr:rounded-r-none rtl:rounded-l-none btn btn-primary">
                    Button
                  </button>
                  <input
                    type="text"
                    id="basicInput1"
                    className="ltr:rounded-l-none rtl:rounded-r-none form-input"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex">
                  <input
                    type="text"
                    id="basicInput1"
                    className="ltr:rounded-r-none rtl:rounded-l-none form-input"
                  />
                  <button
                    type="button"
                    className="ltr:rounded-l-none rtl:rounded-r-none btn btn-primary">
                    Button
                  </button>
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex">
                  <button
                    type="button"
                    className="ltr:rounded-r-none rtl:rounded-l-none btn btn-primary">
                    Button
                  </button>
                  <input
                    type="text"
                    id="basicInput1"
                    className="ltr:rounded-l-none rtl:rounded-r-none ltr:rounded-r-none rtl:rounded-l-none form-input"
                  />
                  <button
                    type="button"
                    className="ltr:rounded-l-none rtl:rounded-r-none btn btn-primary">
                    Button
                  </button>
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex">
                  <button
                    type="button"
                    className="ltr:rounded-r-none rtl:rounded-l-none btn btn-primary">
                    Button
                  </button>
                  <input
                    type="text"
                    id="basicInput1"
                    className="ltr:rounded-l-none rtl:rounded-r-none ltr:rounded-r-none rtl:rounded-l-none form-input"
                  />
                  <button
                    type="button"
                    className="ltr:rounded-l-none rtl:rounded-r-none ltr:rounded-r-none rtl:rounded-l-none btn btn-primary">
                    Button
                  </button>
                  <input
                    type="text"
                    id="basicInput1"
                    className="ltr:rounded-l-none rtl:rounded-r-none form-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default InputGroup
