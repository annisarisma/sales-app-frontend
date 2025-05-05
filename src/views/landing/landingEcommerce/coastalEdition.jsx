import React, { useState } from 'react'

import img1 from '@assets/images/ecommerce/landing/img-01.jpg'
import img2 from '@assets/images/ecommerce/landing/img-02.jpg'
import img3 from '@assets/images/ecommerce/landing/img-03.jpg'
import img4 from '@assets/images/ecommerce/landing/img-04.jpg'
import img5 from '@assets/images/ecommerce/landing/img-05.jpg'
import { Link } from 'react-router-dom'

const CoastalEdition = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (dropdownNumber) => {
    setOpenDropdown((prevState) =>
      prevState === dropdownNumber ? null : dropdownNumber
    )
  }

  return (
    <section className="relative py-14 md:py-24">
      <div className="container mx-auto px-4 lg:max-w-[1350px]">
        <div className="grid items-center grid-cols-12 mb-10">
          <div className="col-span-12 text-center lg:col-span-6 lg:col-start-4">
            <h1 className="mb-2 leading-normal capitalize">
              The Coastal Edition
            </h1>
            <p className="text-gray-500 dark:text-dark-500">
              Clothing is practical and preppy, with plenty of
              coverage—it&apos;s perfect for moms and grandmothers who
              aren&apos;t interested in baring it all in a bikini at the beach.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="relative">
              <img src={img1} alt="landingImg" />
              <div className="absolute top-[20%] left-[38%]">
                <button
                  onClick={() => toggleDropdown(1)}
                  title="dropdown-button"
                  aria-expanded={openDropdown === 1}
                  type="button"
                  className="flex">
                  <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-white rounded-full"></div>
                </button>

                {openDropdown === 1 && (
                  <div className="absolute left-0 right-0 z-10 w-48 p-3 mt-1 bg-white rounded-md shadow-md dark:bg-dark-900">
                    <img
                      src={img3}
                      alt="Images 03"
                      className="object-cover w-full"
                    />
                    <h6 className="mt-3 mb-1 font-medium">
                      <Link to="#!">Faded Effect Top</Link>
                    </h6>
                    <p className="text-gray-500 dark:text-dark-500">$34.65</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="relative">
              <img src={img2} alt="landingImg" />
              <div className="absolute bottom-[25%] left-[33%]">
                <button
                  onClick={() => toggleDropdown(2)}
                  title="dropdown-button"
                  aria-expanded={openDropdown === 2}
                  type="button"
                  className="flex">
                  <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-white rounded-full"></div>
                </button>

                {openDropdown === 2 && (
                  <div className="absolute left-0 right-0 z-10 w-48 p-3 mt-1 bg-white rounded-md shadow-md dark:bg-dark-900">
                    <img
                      src={img4}
                      alt="Images 03"
                      className="object-cover w-full"
                    />
                    <h6 className="mt-3 mb-1 font-medium">
                      <Link to="#!">Short sleeve white</Link>
                    </h6>
                    <p className="text-gray-500 dark:text-dark-500">$49.99</p>
                  </div>
                )}
              </div>

              <div className="absolute bottom-[38%] left-[45%]">
                <button
                  onClick={() => toggleDropdown(3)}
                  title="dropdown-button"
                  aria-expanded={openDropdown === 3}
                  type="button"
                  className="flex">
                  <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-white rounded-full"></div>
                </button>

                {openDropdown === 3 && (
                  <div className="absolute left-0 right-0 z-10 w-48 p-3 mt-1 bg-white rounded-md shadow-md dark:bg-dark-900">
                    <img
                      src={img5}
                      alt="Images 03"
                      className="object-cover w-full"
                    />
                    <h6 className="mt-3 mb-1 font-medium">
                      <Link to="#!">Luxury handbag</Link>
                    </h6>
                    <p className="text-gray-500 dark:text-dark-500">$79.99</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoastalEdition
