import React from 'react'

import { Link } from 'react-router-dom'

const SummerFashion = () => {
  return (
    <React.Fragment>
      <Link
        to="#!"
        title="Banner"
        className="relative block overflow-hidden py-60 bg-center bg-[url('../images/ecommerce/landing/cta-01.jpg')]">
        <div className="container mx-auto px-4 lg:max-w-[1350px] relative">
          <h2 className="absolute hidden font-bold uppercase md:flex left-4 lg:text-8xl text-white/70">
            Summer
          </h2>
          <h2 className="absolute font-bold uppercase left-1/2 lg:right-4 lg:text-8xl text-white/70">
            Fashion
          </h2>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default SummerFashion
