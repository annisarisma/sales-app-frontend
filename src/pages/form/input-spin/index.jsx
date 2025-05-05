import React, { useEffect, useState } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'

const SpinInputGroup = ({ initialCount = 0, color = '#FFF' }) => {
  const [count, setCount] = useState(initialCount)
  const handleDecrease = () => setCount(count - 1)
  const handleIncrease = () => setCount(count + 1)

  const baseClass = 'input-spin-group'
  const classes = `${baseClass} ${color}`

  return (
    <div className={classes}>
      <button onClick={handleDecrease} className="input-spin-minus">
        <Minus className="size-4" />
      </button>
      <input
        type="text"
        value={count}
        readOnly
        className="input-spin form-input"
      />
      <button onClick={handleIncrease} className="input-spin-plus">
        <Plus className="size-4" />
      </button>
    </div>
  )
}

const BoxedSpinInput = ({ initialCount, color }) => {
  const [count, setCount] = useState(initialCount)
  const handleDecrease = () => setCount(count - 1)
  const handleIncrease = () => setCount(count + 1)

  return (
    <div className="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
      <button
        onClick={handleDecrease}
        className={`flex items-center justify-center ${color} transition duration-200 ease-linear rounded-md minus size-8 shrink-0 hover:text-white`}>
        <Minus className="size-4" />
      </button>
      <input
        type="text"
        value={count}
        readOnly
        className="h-8 p-0 text-center border-0 rounded-none form-input"
      />
      <button
        onClick={handleIncrease}
        className={`flex items-center justify-center ${color} transition duration-200 ease-linear rounded-md plus size-8 shrink-0 hover:text-white`}>
        <Plus className="size-4" />
      </button>
    </div>
  )
}

const SkinSpinRightInput = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)
  const handleDecrease = () => setCount(count - 1)
  const handleIncrease = () => setCount(count + 1)

  return (
    <div className="flex items-center w-20 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
      <div className="flex flex-col">
        <button
          onClick={handleIncrease}
          className="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 plus hover:text-primary-500 dark:hover:text-primary-500">
          <ChevronUp className="size-4" />
        </button>
        <button
          onClick={handleDecrease}
          className="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 minus hover:text-primary-500 dark:hover:text-primary-500">
          <ChevronDown className="size-4" />
        </button>
      </div>
      <input
        type="text"
        value={count}
        readOnly
        className="h-8 p-0 text-center border-0 rounded-none form-input"
      />
    </div>
  )
}
const SkinSpinLiftInput = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)
  const handleDecrease = () => setCount(count - 1)
  const handleIncrease = () => setCount(count + 1)

  return (
    <div className="flex items-center w-20 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
      <input
        type="text"
        value={count}
        readOnly
        className="h-8 p-0 text-center border-0 rounded-none form-input"
      />
      <div className="flex flex-col">
        <button
          onClick={handleIncrease}
          className="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 plus hover:text-primary-500 dark:hover:text-primary-500">
          <ChevronUp className="size-4" />
        </button>
        <button
          onClick={handleDecrease}
          className="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 minus hover:text-primary-500 dark:hover:text-primary-500">
          <ChevronDown className="size-4" />
        </button>
      </div>
    </div>
  )
}

const InputSpin = () => {
  const [count, setCount] = useState(1)
  const handleDecrease = () => setCount(count - 1)
  const handleIncrease = () => setCount(count + 1)
  const [count2, setCount2] = useState(1)
  const handleDecrease2 = () => setCount2(count2 - 1)
  const handleIncrease2 = () => setCount2(count2 + 1)
  const [count3, setCount3] = useState(1)
  const handleDecrease3 = () => setCount3(count3 - 1)
  const handleIncrease3 = () => setCount3(count3 + 1)

  useEffect(() => {
    document.title = 'Input Spin | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Input Spin" subTitle="Form" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div className="flex gap-3 overflow-x-auto">
              <SpinInputGroup initialCount={1} color="input-spin-primary" />
              <SpinInputGroup initialCount={1} color="input-spin-purple" />
              <SpinInputGroup initialCount={1} color="input-spin-green" />
              <SpinInputGroup initialCount={1} color="input-spin-red" />
              <SpinInputGroup initialCount={1} color="input-spin-yellow" />
              <SpinInputGroup initialCount={1} color="input-spin-sky" />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Solid Example</h6>
          </div>
          <div className="card-body">
            <div className="flex gap-3 overflow-x-auto">
              <SpinInputGroup
                initialCount={1}
                color="input-spin-solid-primary"
              />
              <SpinInputGroup
                initialCount={1}
                color="input-spin-solid-purple"
              />
              <SpinInputGroup initialCount={1} color="input-spin-solid-green" />
              <SpinInputGroup
                initialCount={23}
                color="input-spin-solid-orange"
              />
              <SpinInputGroup
                initialCount={10}
                color="input-spin-solid-yellow"
              />
              <SpinInputGroup initialCount={5} color="input-spin-solid-sky" />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Boxed Example</h6>
          </div>
          <div className="card-body">
            <div className="flex gap-3 overflow-x-auto">
              <div>
                <div className="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
                  <button
                    onClick={handleDecrease}
                    className="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 minus size-8 shrink-0 hover:text-primary-500 dark:hover:text-primary-500">
                    <Minus className="size-4" />
                  </button>
                  <input
                    type="text"
                    value={count}
                    readOnly
                    className="h-8 p-0 text-center border-0 rounded-none form-input"
                  />
                  <button
                    onClick={handleIncrease}
                    className="flex items-center justify-center text-gray-500 transition duration-200 ease-linear dark:text-dark-500 plus size-8 shrink-0 hover:text-primary-500 dark:hover:text-primary-500">
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
                  <button
                    onClick={handleDecrease2}
                    className="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 minus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                    <Minus className="size-4" />
                  </button>
                  <input
                    type="text"
                    value={count2}
                    readOnly
                    className="h-8 p-0 text-center border-0 rounded-none form-input"
                  />
                  <button
                    onClick={handleIncrease2}
                    className="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 plus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
                  <button
                    onClick={handleDecrease3}
                    className="flex items-center justify-center text-purple-500 transition duration-200 ease-linear rounded-md bg-purple-500/20 minus size-8 shrink-0 hover:text-purple-700">
                    <Minus className="size-4" />
                  </button>
                  <input
                    type="text"
                    value={count3}
                    readOnly
                    className="h-8 p-0 text-center border-0 rounded-none form-input"
                  />
                  <button
                    onClick={handleIncrease3}
                    className="flex items-center justify-center text-purple-500 transition duration-200 ease-linear rounded-md bg-purple-500/20 plus size-8 shrink-0 hover:text-purple-700">
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
              <BoxedSpinInput
                initialCount={1}
                color="text-green-200 bg-green-500"
              />
              <BoxedSpinInput
                initialCount={1}
                color="text-pink-200 bg-pink-500"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Skin Example</h6>
          </div>
          <div className="card-body">
            <div className="flex gap-3 overflow-x-auto">
              <SkinSpinRightInput initialCount={10} />
              <SkinSpinLiftInput initialCount={20} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default InputSpin
