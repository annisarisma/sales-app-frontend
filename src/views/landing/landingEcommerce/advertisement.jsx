import React from 'react'

const Advertisement = () => {
  return (
    <React.Fragment>
      <div className="relative flex items-center h-40 max-w-full overflow-x-hidden">
        <div className="absolute animate-marquee whitespace-nowrap will-change-transform">
          <h1 className="font-bold uppercase text-gray-500/10 dark:text-dark-500/20 text-8xl">
            &nbsp;Mens Fashion Winter Deal || Girls Fashion || Brand Clothes
            Fashion || Up to 50% Discount in Domiex Fashion
          </h1>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Advertisement
