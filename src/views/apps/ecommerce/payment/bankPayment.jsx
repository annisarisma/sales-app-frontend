import React from 'react'

import { MoveLeft, MoveRight } from 'lucide-react'
import { useForm } from 'react-hook-form'

const BankPayment = ({ handleModalOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  const resetForm = () => {
    reset({
      accHolderName: '',
      accountNumber: '',
      confirmAccountNumber: '',
      ifscCode: '',
      bankName: '',
    })
  }

  const handleAccountNumberChange = (e) => {
    const formatted = e.target.value.replace(/\D/g, '').trim()
    setValue('accountNumber', formatted)

    if (formatted.length < 12) {
      setError('accountNumber', {
        type: 'manual',
        message: 'Account number must be 12 digits.',
      })
    } else {
      clearErrors('accountNumber')
    }
  }

  const validateConfirmAccountNumber = (e) => {
    const formatted = e.target.value.replace(/\D/g, '').trim()
    setValue('confirmAccountNumber', formatted)

    const accountNumber = getValues('accountNumber') // Retrieve the current account number

    if (formatted.length < 12) {
      setError('confirmAccountNumber', {
        type: 'manual',
        message: 'Account number must be 12 digits.',
      })
    } else if (formatted !== accountNumber) {
      setError('confirmAccountNumber', {
        type: 'manual',
        message: 'Account numbers do not match.',
      })
    } else {
      clearErrors('confirmAccountNumber')
    }
  }

  const handleIfscCodeChange = (e) => {
    const value = e.target.value.toUpperCase()
    setValue('ifscCode', value)

    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/

    if (!ifscRegex.test(value)) {
      setError('ifscCode', {
        type: 'manual',
        message:
          'Invalid IFSC code. It should be 4 alphabetic characters, followed by 0, and 6 alphanumeric characters.',
      })
    } else {
      clearErrors('ifscCode')
    }
  }

  const submitForm = () => {
    const accountNumber = getValues('accountNumber')
    const confirmAccountNumber = getValues('confirmAccountNumber')

    // Perform final validation before allowing form submission
    if (accountNumber !== confirmAccountNumber) {
      setError('confirmAccountNumber', {
        type: 'manual',
        message: 'Account numbers do not match.',
      })
      return
    }

    resetForm()
    handleModalOpen()
  }
  return (
    <React.Fragment>
      <div>
        <h6 className="mb-3">Bank Transfer</h6>
        <div>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <label htmlFor="accHolderName" className="form-label">
                  Bank Holder Name
                </label>
                <input
                  type="text"
                  id="accHolderName"
                  className="w-full p-2 border rounded-sm form-input"
                  placeholder="Enter full name"
                  {...register('accHolderName', {
                    required: 'Account holder name is required.',
                  })}
                />
                {errors.accHolderName && (
                  <span className="text-sm text-red-500">
                    {errors.accHolderName.message}
                  </span>
                )}
              </div>

              {/* Account Number */}
              <div className="col-span-6">
                <label htmlFor="accountNumber" className="form-label">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  className="w-full p-2 border rounded-sm form-input"
                  inputMode="numeric"
                  placeholder="Enter account number"
                  maxLength={12}
                  {...register('accountNumber', {
                    required: 'Account number is required.',
                    minLength: {
                      value: 12,
                      message: 'Account number must be 12 digits.',
                    },
                  })}
                  onChange={handleAccountNumberChange}
                />
                {errors.accountNumber && (
                  <span className="text-sm text-red-500">
                    {errors.accountNumber.message}
                  </span>
                )}
              </div>

              {/* Confirm Account Number */}
              <div className="col-span-6">
                <label htmlFor="confirmAccountNumber" className="form-label">
                  Confirm Account Number
                </label>
                <input
                  type="text"
                  id="confirmAccountNumber"
                  className="w-full p-2 border rounded-sm form-input"
                  inputMode="numeric"
                  placeholder="Enter confirm account number"
                  maxLength={12}
                  {...register('confirmAccountNumber', {
                    required: 'Confirm account number is required.',
                    minLength: {
                      value: 12,
                      message: 'Confirm account number must be 12 digits.',
                    },
                  })}
                  onChange={validateConfirmAccountNumber}
                />
                {errors.confirmAccountNumber && (
                  <span className="text-sm text-red-500">
                    {errors.confirmAccountNumber.message}
                  </span>
                )}
              </div>

              {/* IFSC Code */}
              <div className="col-span-6">
                <label htmlFor="ifscCode" className="form-label">
                  IFSC Code
                </label>
                <input
                  type="text"
                  id="ifscCode"
                  className="w-full p-2 border rounded-sm form-input"
                  placeholder="IFSC Code"
                  maxLength={11}
                  {...register('ifscCode', {
                    required: 'IFSC code is required.',
                  })}
                  onChange={handleIfscCodeChange}
                />
                {errors.ifscCode && (
                  <span className="text-sm text-red-500">
                    {errors.ifscCode.message}
                  </span>
                )}
              </div>

              {/* Bank Name */}
              <div className="col-span-6">
                <label htmlFor="bankName" className="form-label">
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  className="w-full p-2 border rounded-sm form-input"
                  placeholder="Bank name"
                  {...register('bankName', {
                    required: 'Bank name is required.',
                  })}
                />
                {errors.bankName && (
                  <span className="text-sm text-red-500">
                    {errors.bankName.message}
                  </span>
                )}
              </div>

              <div className="col-span-12 ltr:text-right rtl:text-left">
                <button type="submit" className="btn btn-primary">
                  Pay Now
                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BankPayment
