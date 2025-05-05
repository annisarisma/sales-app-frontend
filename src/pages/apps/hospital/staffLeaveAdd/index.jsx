import { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

const leaveTypeOptions = [
  { label: 'Casual Leave', value: 'casual' },
  { label: 'Sick Leave', value: 'sick' },
  { label: 'Maternity Leave', value: 'maternity' },
  { label: 'Emergency Leave', value: 'emergency' },
  { label: 'Vacation Leave', value: 'vacation' },
]

const StaffLeaveAdd = () => {
  const [leaves, setLeaves] = useState({
    casual: 11,
    sick: 1,
    maternity: 1,
    emergency: 2,
    vacation: 3,
  })

  useEffect(() => {
    document.title = 'Add Leave | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    control,
    clearErrors,
    setError,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      leaveType: undefined,
      contactNumber: '',
      emergencyNumber: '',
      startDate: null,
      endDate: null,
      reason: '',
      totalDays: 0,
    },
  })

  const handleLeaveTypeChange = (selected) => {
    if (selected) {
      setValue('leaveType', selected.value)
    }
  }

  const totalLeave = () => {
    return Object.values(leaves).reduce((a, b) => a + b, 0)
  }

  const calculateTotalDays = (startDate, endDate) => {
    if (startDate && endDate) {
      const differenceInTime = endDate.getTime() - startDate.getTime()
      return differenceInTime >= 0
        ? Math.ceil(differenceInTime / (1000 * 3600 * 24)) + 1
        : 0
    }
    return 0
  }

  const onSubmit = (data) => {
    const totalDays = calculateTotalDays(data.startDate, data.endDate)

    const updatedLeaves = {
      ...leaves,
      [data.leaveType]: leaves[data.leaveType] + 1,
    }

    setLeaves(updatedLeaves)
    setValue('totalDays', totalDays)
    reset()
  }

  const validatePhoneNumber = (value) => {
    const phoneNumberPattern = /^\d{10}$/ // Only 10 digits
    return (
      phoneNumberPattern.test(value) ||
      'Phone number must be exactly 10 digits.'
    )
  }

  return (
    <>
      <BreadCrumb title="Add Leave" subTitle="Staff" />
      <div className="grid grid-cols-12 gap-space">
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9 card">
          <div className="card-header">
            <h6 className="card-title">Create Leave Request</h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-12 gap-space">
                <div className="col-span-12">
                  <label htmlFor="leaveTypeSelect" className="form-label">
                    Leave Type <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="leaveType"
                    control={control}
                    rules={{ required: 'Leave type is required.' }}
                    render={({ field }) => (
                      <Select
                        classNamePrefix="select"
                        {...field}
                        id="leaveTypeSelect"
                        options={leaveTypeOptions}
                        onChange={(option) => {
                          field.onChange(option ? option.value : null)
                          handleLeaveTypeChange(option)
                        }}
                        placeholder="Select Leave Type"
                        value={
                          leaveTypeOptions.find(
                            (option) => option.value === field.value
                          ) || null
                        }
                      />
                    )}
                  />
                  {errors.leaveType && (
                    <span className="text-red-500">
                      {errors.leaveType.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 md:col-span-6">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="contactNumber"
                    className="form-input"
                    {...register('contactNumber', {
                      required: 'Contact number is required.',
                      validate: (value) => {
                        const isValid = validatePhoneNumber(value)
                        if (typeof isValid === 'string') {
                          setError('contactNumber', {
                            type: 'manual',
                            message: isValid,
                          })
                        } else {
                          clearErrors('contactNumber')
                        }
                        return isValid
                      },
                    })}
                    placeholder="Enter your contact number"
                  />
                  {errors.contactNumber && (
                    <span className="text-red-500">
                      {errors.contactNumber.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 md:col-span-6">
                  <label htmlFor="emergencyNumber" className="form-label">
                    Emergency Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="emergencyNumber"
                    className="form-input"
                    {...register('emergencyNumber', {
                      required: 'Emergency number is required.',
                      validate: (value) => {
                        const isValid = validatePhoneNumber(value)
                        if (typeof isValid === 'string') {
                          setError('emergencyNumber', {
                            type: 'manual',
                            message: isValid,
                          })
                        } else {
                          clearErrors('emergencyNumber')
                        }
                        return isValid
                      },
                    })}
                    placeholder="Enter your emergency number"
                  />
                  {errors.emergencyNumber && (
                    <span className="text-red-500">
                      {errors.emergencyNumber.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 md:col-span-4">
                  <label htmlFor="startDateInput" className="form-label">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <Flatpickr
                    id="startDateInput"
                    className="form-input"
                    placeholder="Enter start date"
                    value={watch('startDate') || undefined}
                    onChange={(date) => {
                      setValue('startDate', date[0])
                      const endDate = watch('endDate')
                      setValue(
                        'totalDays',
                        calculateTotalDays(date[0], endDate)
                      )
                      clearErrors('startDate')
                    }}
                  />
                  <input
                    type="hidden"
                    {...register('startDate', {
                      required: 'Start date is required.',
                    })}
                  />
                  {errors.startDate && (
                    <span className="text-red-500">
                      {errors.startDate.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 md:col-span-4">
                  <label htmlFor="endDateInput" className="form-label">
                    End Date <span className="text-red-500">*</span>
                  </label>
                  <Flatpickr
                    id="endDateInput"
                    className="form-input"
                    placeholder="Enter end date"
                    value={watch('endDate') || undefined}
                    onChange={(date) => {
                      setValue('endDate', date[0])
                      const startDate = watch('startDate')
                      setValue(
                        'totalDays',
                        calculateTotalDays(startDate, date[0])
                      )
                      clearErrors('endDate')
                    }}
                  />
                  <input
                    type="hidden"
                    {...register('endDate', {
                      required: 'end date is required.',
                    })}
                  />
                  {errors.endDate && (
                    <span className="text-red-500">
                      {errors.endDate.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 md:col-span-4">
                  <label htmlFor="totalDays" className="form-label">
                    Total Days <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="totalDays"
                    className="form-input"
                    value={watch('totalDays')}
                    readOnly
                  />
                </div>

                <div className="col-span-12">
                  <label htmlFor="reasonsInput" className="form-label">
                    Reason <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="reasonsInput"
                    rows={3}
                    className="h-auto form-input"
                    {...register('reason', { required: 'Reason is required.' })}
                    placeholder="Enter reasons"
                  />
                  {errors.reason && (
                    <span className="text-red-500">
                      {errors.reason.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="reset"
                      onClick={() => reset()}
                      className="btn btn-sub-gray">
                      Reset
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Apply Leave Request
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Leave Summary</h6>
            </div>
            <div className="card-body">
              <table className="table flush table-sm">
                <tbody>
                  <tr>
                    <td className="text-gray-500 dark:text-dark-500">
                      Casual Leave
                    </td>
                    <td className="font-medium">{leaves.casual}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 dark:text-dark-500">
                      Sick Leave
                    </td>
                    <td className="font-medium">{leaves.sick}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 dark:text-dark-500">
                      Maternity Leave
                    </td>
                    <td className="font-medium">{leaves.maternity}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 dark:text-dark-500">
                      Emergency Leave
                    </td>
                    <td className="font-medium">{leaves.emergency}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 dark:text-dark-500">
                      Vacation Leave
                    </td>
                    <td className="font-medium">{leaves.vacation}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 dark:text-dark-500">
                      Total Leave
                    </td>
                    <td className="font-medium">{totalLeave()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StaffLeaveAdd
