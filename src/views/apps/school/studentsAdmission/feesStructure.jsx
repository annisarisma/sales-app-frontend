import React from 'react'

import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

const statusOptions = [
  { label: 'Paid', value: 'Paid' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Unpaid', value: 'Unpaid' },
]

const FeesStructure = () => {
  const {
    control,
    formState: { errors },
  } = useForm()

  const handleStatusChange = (selected, onChange) => {
    onChange(selected ? selected.value : null) // Use selected value
  }

  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Fees Structure</h6>
          </div>
          <div className="card-body">
            <div className="mb-4 alert-red alert">
              <span>
                If the fees are not paid before 01 Aug, 2024, the application
                will be automatically rejected
              </span>
            </div>
            <form action="#!">
              <div className="grid items-center grid-cols-12 gap-3">
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="courseFrees" className="mb-0 form-label">
                    Course Frees
                  </label>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <input
                    type="number"
                    id="courseFrees"
                    className="form-input"
                    placeholder="$0"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="paidAmount" className="mb-0 form-label">
                    Paid Amount
                  </label>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <input
                    type="number"
                    id="paidAmount"
                    className="form-input"
                    placeholder="$0"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="statuSelect" className="mb-0 form-label">
                    Status
                  </label>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: 'Status is required.' }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        classNamePrefix="select"
                        options={statusOptions}
                        value={
                          statusOptions.find(
                            (option) => option.value === value
                          ) || null
                        } // Map value to option
                        onChange={(selected) =>
                          handleStatusChange(selected, onChange)
                        }
                        placeholder="Select Status"
                        id="statusSelect2"
                      />
                    )}
                  />
                  {errors.status && (
                    <span className="text-red-500">
                      {errors.status.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="paidVia" className="mb-0 form-label">
                    Paid Via
                  </label>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <input
                    type="text"
                    id="paidVia"
                    className="form-input"
                    placeholder="N/A"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                <button className="btn btn-sub-gray">View Receive</button>
                <button className="btn btn-primary">Add Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FeesStructure
