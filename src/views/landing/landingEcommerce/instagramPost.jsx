import React from 'react'

import img1 from '@assets/images/ecommerce/landing/instagram/img-01.jpg'
import img2 from '@assets/images/ecommerce/landing/instagram/img-02.jpg'
import img3 from '@assets/images/ecommerce/landing/instagram/img-03.jpg'
import img4 from '@assets/images/ecommerce/landing/instagram/img-04.jpg'
import img5 from '@assets/images/ecommerce/landing/instagram/img-05.jpg'
import { Link } from 'react-router-dom'

const InstagramPost = () => {
  return (
    <React.Fragment>
      <section className="relative pt-8">
        <div className="container mx-auto px-4 lg:max-w-[1350px]">
          <div className="mb-8 text-center">
            <h1 className="relative leading-normal capitalize drop-shadow-lg">
              Follow us Instagram @domiex
            </h1>
          </div>
        </div>
        <div className="grid items-center grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <Link
            to="#!"
            title="Instagram Post"
            className="relative block group/item">
            <img src={img1} alt="instagramrmg" />
            <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gray-950/15 group-hover/item:opacity-100"></div>
            <i className="ri-instagram-line text-[20px] absolute block text-white transition-all duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 size-8 top-[45%] group-hover/item:top-1/2 group-hover/item:opacity-100 left-1/2"></i>
          </Link>
          <Link
            to="#!"
            title="Instagram Post"
            className="relative block group/item">
            <img src={img2} alt="instagramrmg" />
            <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gray-950/15 group-hover/item:opacity-100"></div>
            <i className="ri-instagram-line text-[20px] absolute block text-white transition-all duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 size-8 top-[45%] group-hover/item:top-1/2 group-hover/item:opacity-100 left-1/2"></i>
          </Link>
          <Link
            to="#!"
            title="Instagram Post"
            className="relative block group/item">
            <img src={img3} alt="instagramrmg" />
            <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gray-950/15 group-hover/item:opacity-100"></div>
            <i className="ri-instagram-line text-[20px] absolute block text-white transition-all duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 size-8 top-[45%] group-hover/item:top-1/2 group-hover/item:opacity-100 left-1/2"></i>
          </Link>
          <Link
            to="#!"
            title="Instagram Post"
            className="relative block group/item">
            <img src={img4} alt="instagramrmg" />
            <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gray-950/15 group-hover/item:opacity-100"></div>
            <i className="ri-instagram-line text-[20px] absolute block text-white transition-all duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 size-8 top-[45%] group-hover/item:top-1/2 group-hover/item:opacity-100 left-1/2"></i>
          </Link>
          <Link
            to="#!"
            title="Instagram Post"
            className="relative block group/item">
            <img src={img5} alt="instagramrmg" />
            <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gray-950/15 group-hover/item:opacity-100"></div>
            <i className="ri-instagram-line text-[20px] absolute block text-white transition-all duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 size-8 top-[45%] group-hover/item:top-1/2 group-hover/item:opacity-100 left-1/2"></i>
          </Link>
        </div>
      </section>
    </React.Fragment>
  )
}

export default InstagramPost
