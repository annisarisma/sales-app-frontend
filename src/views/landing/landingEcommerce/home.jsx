import React from 'react'

const Home = () => {
  return (
    <React.Fragment>
      <section
        className="relative pb-48 min-h-screen overflow-hidden pt-80 bg-[url('../images/ecommerce/landing/home.jpg')] bg-cover bg-center"
        id="products">
        <div className="container mx-auto px-4 lg:max-w-[1350px] lg:px-20">
          <h1 className="absolute inset-x-0 md:text-[80px] xl:text-[140px] 2xl:text-[11rem] bottom-10 text-white/60 text-center font-bold">
            DOMIEX FASHION
          </h1>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
