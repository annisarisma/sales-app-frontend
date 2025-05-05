import React from 'react'

import ReactCompareImage from 'react-compare-image'

const OurCollection = () => {
  return (
    <React.Fragment>
      <section className="relative pt-8 pb-14 md:pb-24" id="cta">
        <div className="container mx-auto px-4 lg:max-w-[1350px]">
          <div className="grid items-center grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6">
              <div
                style={{
                  maxWidth: '600px',
                  margin: 'auto',
                  position: 'relative',
                }}>
                <ReactCompareImage
                  leftImage="/assets/images/ecommerce/landing/cta-03.jpg"
                  rightImage="/assets/images/ecommerce/landing/cta-02.jpg"
                />
                <div className="absolute top-0 left-0 p-2">
                  <span className="text-gray-500 bg-white badge text-13 border-transparent">
                    After
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <span className="text-gray-500 bg-white badge text-13 border-transparent">
                    Before
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 text-center md:col-span-6 2xl:col-span-4 2xl:col-start-8">
              <h1 className="relative mb-3 leading-normal capitalize ltr:pl-5 rtl:pr-5 before:rounded-full drop-shadow-lg before:absolute before:w-1 before:bg-primary-500 before:h-1/2 ltr:before:left-0 rtl:before:right-0">
                Layer Up with Expertly Designed Pieces
              </h1>
              <p className="mb-5 text-gray-500">
                Discover our collection of meticulously crafted pieces that are
                perfect for layering. Each item is designed to complement your
                style and keep you comfortable, no matter the season.
              </p>
              <button
                type="button"
                title="shop now"
                className="font-medium border-gray-200 dark:border-dark-800 btn btn-outline-gray">
                Shop Now
                <i className="ml-1 align-baseline ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
                <i className="mr-1 align-baseline ri-arrow-left-line ltr:hidden rtl:inline-block"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default OurCollection
