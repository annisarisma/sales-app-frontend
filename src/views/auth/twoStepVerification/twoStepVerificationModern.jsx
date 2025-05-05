import React, { useEffect, useRef } from 'react'

import backgroundImg from '@assets/images/others/auth.jpg'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import { MailOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TwoStepVerificationModern = ({ formId }) => {
  const formRef = useRef(null)
  const submitButtonRef = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const inputs = Array.from(form.querySelectorAll('input[type=text]'))

    const handleKeyDown = (e) => {
      const target = e.target
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab' &&
        !e.metaKey
      ) {
        e.preventDefault()
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        const index = inputs.indexOf(target)
        if (index > 0) {
          inputs[index - 1].value = ''
          inputs[index - 1].focus()
        }
      }
    }

    const handleInput = (e) => {
      const target = e.target
      const index = inputs.indexOf(target)
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus()
        } else {
          submitButtonRef.current?.focus()
        }
      }
    }

    const handleFocus = (e) => {
      e.target.select()
    }

    const handlePaste = (e) => {
      e.preventDefault()
      const text = e.clipboardData?.getData('text')
      if (!text || !/^[0-9]{6}$/.test(text)) return // Adjust the length based on the number of inputs
      const digits = text.split('')
      inputs.forEach((input, index) => (input.value = digits[index]))
      submitButtonRef.current?.focus()
    }

    inputs.forEach((input) => {
      input.addEventListener('input', handleInput)
      input.addEventListener('keydown', handleKeyDown)
      input.addEventListener('focus', handleFocus)
      input.addEventListener('paste', handlePaste)
    })

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('input', handleInput)
        input.removeEventListener('keydown', handleKeyDown)
        input.removeEventListener('focus', handleFocus)
        input.removeEventListener('paste', handlePaste)
      })
    }
  }, [formId])

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const inputs = Array.from(form.querySelectorAll('input[type=text]'))
    const otp = inputs.map((input) => input.value).join('')

    if (otp.length !== 6) {
      ErrorToast('Please enter a valid OTP')
      return
    } else {
      navigate('/auth/reset-password-modern')
    }
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
              <div className="mb-4 text-center">
                <div className="flex items-center justify-center mx-auto size-14">
                  <MailOpen className="stroke-1 text-white/75 size-10 fill-white/20" />
                </div>
              </div>
              <h4 className="mb-2 leading-relaxed text-center text-white">
                OTP Verification
              </h4>
              <p className="mb-5 text-center text-white/75">
                We're sent a code to <b>sophiamia@example.com</b>
              </p>
              <form
                id={formId}
                action="/auth/reset-password-modern"
                ref={formRef}
                onSubmit={handleSubmit}>
                <div className="flex items-center justify-center gap-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      className="text-2xl font-extrabold text-center text-white border border-transparent rounded-sm outline-hidden appearance-none size-9 sm:size-12 md:size-14 bg-white/10 focus:bg-white/10"
                      pattern="\d*"
                      maxLength={1}
                    />
                  ))}
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                    ref={submitButtonRef}>
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoStepVerificationModern
