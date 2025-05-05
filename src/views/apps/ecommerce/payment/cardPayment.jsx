import React from 'react'

import { MoveLeft, MoveRight } from 'lucide-react'
import { useForm } from 'react-hook-form'

const CardPayment = ({ handleModalOpen }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  const resetForm = () => {
    reset({
      userName: '',
      cardNumber: '',
      expiryDate: '',
      cvvNumber: '',
      remember: false,
    })
  }

  const submitForm = () => {
    resetForm()
    handleModalOpen()
  }

  return (
    <React.Fragment>
      <div>
        <h6 className="mb-3">Debit / Credit Card</h6>
        <div>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <label htmlFor="cardName" className="form-label">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  id="cardName"
                  className="form-input"
                  placeholder="Enter full name"
                  {...register('userName', { required: 'Name is required.' })}
                />
                {errors.userName &&
                  typeof errors.userName.message === 'string' && (
                    <span className="text-sm text-red-500">
                      {errors.userName.message}
                    </span>
                  )}
              </div>
              <div className="col-span-12">
                <label htmlFor="debitCreditNumber" className="form-label">
                  Debit / Credit Card Number
                </label>
                <input
                  type="text"
                  id="debitCreditNumber"
                  className="form-input"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  {...register('cardNumber', {
                    required: 'Card number is required.',
                    validate: {
                      isValidCardNumber: (value) => {
                        const numericValue = value.replace(/\s+/g, '')
                        return (
                          /^[0-9]{13,16}$/.test(numericValue) ||
                          'Card number must be between 13 and 16 digits.'
                        )
                      },
                    },
                    onChange: (e) => {
                      const formatted = e.target.value
                        .replace(/\D/g, '')
                        .replace(/(.{4})/g, '$1 ')
                        .trim()
                      setValue('cardNumber', formatted)
                    },
                  })}
                />
                {errors.cardNumber &&
                  typeof errors.cardNumber.message === 'string' && (
                    <span className="text-sm text-red-500">
                      {errors.cardNumber.message}
                    </span>
                  )}
              </div>
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="expiryDate" className="form-label">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="form-input"
                  placeholder="MM/YY"
                  maxLength={5}
                  {...register('expiryDate', {
                    required: 'Expiry date is required.',
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                      message: 'Expiry date must be in MM/YY format.',
                    },
                    onChange: (e) => {
                      const formatted = e.target.value
                        .replace(/^(\d{2})(\d{0,2})$/, '$1/$2')
                        .substring(0, 5)
                      setValue('expiryDate', formatted)
                    },
                  })}
                />
                {errors.expiryDate &&
                  typeof errors.expiryDate.message === 'string' && (
                    <span className="text-sm text-red-500">
                      {errors.expiryDate.message}
                    </span>
                  )}
              </div>
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="form-input"
                  placeholder="000"
                  maxLength={3}
                  {...register('cvvNumber', {
                    required: 'CVV number is required.',
                    pattern: {
                      value: /^[0-9]{3}$/,
                      message: 'CVV must be 3 digits.',
                    },
                  })}
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== 'Backspace' &&
                      e.key !== 'Delete' &&
                      e.key !== 'ArrowLeft' &&
                      e.key !== 'ArrowRight' &&
                      e.key !== 'Tab'
                    ) {
                      e.preventDefault()
                    }
                  }}
                />
                {errors.cvvNumber &&
                  typeof errors.cvvNumber.message === 'string' && (
                    <span className="text-sm text-red-500">
                      {errors.cvvNumber.message}
                    </span>
                  )}
              </div>
              <div className="col-span-12">
                <div className="input-check-group">
                  <input
                    id="checkboxBasic1"
                    className="input-check input-check-primary"
                    type="checkbox"
                    {...register('remember')}
                  />
                  <label htmlFor="checkboxBasic1" className="input-check-label">
                    Save my card for future
                  </label>
                </div>
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

export default CardPayment
