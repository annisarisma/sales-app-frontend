import React, { useState } from 'react'

import { designCardData } from '@data/index'
import { BriefcaseBusiness, Star, Users } from 'lucide-react'

const DesignCard = () => {
  const [loadingButtons, setLoadingButtons] = useState(
    new Array(designCardData.length).fill(false)
  )
  const [isActiveButtons, setIsActiveButtons] = useState(
    new Array(designCardData.length).fill(false)
  )

  const handleButtonClick = (index) => {
    const newLoadingButtons = [...loadingButtons]
    const newIsActiveButtons = [...isActiveButtons]
    newLoadingButtons[index] = true
    setLoadingButtons(newLoadingButtons)

    setTimeout(() => {
      newLoadingButtons[index] = false
      newIsActiveButtons[index] = !newIsActiveButtons[index]
      setLoadingButtons(newLoadingButtons)
      setIsActiveButtons(newIsActiveButtons)
    }, 2000)
  }

  return (
    <React.Fragment>
      {designCardData.map((item, index) => {
        return (
          <div key={index} className="col-span-12 sm:col-span-6 xl:col-span-3">
            <div className="card">
              <div className="h-32 overflow-hidden rounded-t-md">
                <img
                  className="object-cover object-center w-full"
                  src={item.image}
                  alt="Gallery"
                />
              </div>
              <div className="relative mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full dark:border-dark-900 size-32">
                <img
                  className="object-cover object-center size-32"
                  src={item.userImage}
                  alt={item.name}
                />
              </div>
              <div className="mt-2 text-center">
                <h5 className="text-16">{item.name}</h5>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  {item.designation}
                </p>
              </div>
              <ul className="flex items-center justify-around py-4 mt-2">
                <li className="flex flex-col items-center justify-around">
                  <Star className="block mb-2 text-yellow-500 size-5" />
                  <h6>{item.number}</h6>
                </li>
                <li className="flex flex-col items-center justify-between">
                  <Users className="block mb-2 text-primary-500 size-5" />
                  <h6>{item.userNumber}</h6>
                </li>
                <li className="flex flex-col items-center justify-around">
                  <BriefcaseBusiness className="block mb-2 text-green-500 size-5" />
                  <div>{item.businessNumber}</div>
                </li>
              </ul>
              <div className="mx-8 mt-2 card-footer">
                <button
                  onClick={() => handleButtonClick(index)}
                  className="flex items-center gap-2 mx-auto text-white bg-pink-500 border-pink-500 btn hover:bg-pink-600 hover:text-white hover:border-pink-600 focus:bg-pink-600 focus:text-white focus:border-pink-600">
                  {loadingButtons[index] ? (
                    <>
                      <i className="ri-user-unfollow-line"></i>
                      <span>UnFollow</span>
                      <svg
                        className="text-white size-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-0"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      {isActiveButtons[index] ? (
                        <>
                          <i className="ri-user-unfollow-line"></i>
                          <span>UnFollow</span>
                        </>
                      ) : (
                        <>
                          <i className="ri-user-add-line"></i>
                          <span>Follow</span>
                        </>
                      )}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default DesignCard
