import React from 'react'

import gallery1 from '@assets/images/gallery/img-01.jpg'
import gallery5 from '@assets/images/gallery/img-05.jpg'
import gallery6 from '@assets/images/gallery/img-06.jpg'
import gallery2 from '@assets/images/gallery/long/img-02.jpg'
import gallery3 from '@assets/images/gallery/long/img-03.jpg'

const BasicGallery = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <div className="relative overflow-hidden rounded-md group/item h-80">
          <img
            src={gallery1}
            alt="gallery1Img"
            className="object-cover w-full h-full transition duration-800s ease-effect group-hover/item:scale-125"
          />
          <div className="absolute inset-0 flex items-end p-5 text-white bg-gradient-to-t from-gray-900/50">
            <div>
              <h5 className="mb-1">Gallery Title</h5>
              <p className="text-white/75">Subtitle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-8">
        <div className="relative overflow-hidden rounded-md h-80 group/item">
          <img
            src={gallery2}
            alt="gallery2Img"
            className="object-cover w-full h-full transition duration-800s ease-effect group-hover/item:scale-125"
          />
          <div className="absolute inset-0 flex items-end p-5 text-white bg-gradient-to-t from-gray-900/50">
            <div>
              <h5 className="mb-1">Gallery Title</h5>
              <p className="text-white/75">Subtitle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6">
        <div className="relative overflow-hidden rounded-md h-80 group/item">
          <img
            src={gallery3}
            alt="gallery3Img"
            className="object-cover w-full h-full transition duration-800s ease-effect group-hover/item:scale-125"
          />
          <div className="absolute inset-0 flex items-end p-5 text-white bg-gradient-to-t from-gray-900/50">
            <div>
              <h5 className="mb-1">Gallery Title</h5>
              <p className="text-white/75">Subtitle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
        <div className="relative overflow-hidden rounded-md group/item h-80">
          <img
            src={gallery5}
            alt="gallery5Img"
            className="object-cover w-full h-full transition duration-800s ease-effect group-hover/item:scale-125"
          />
          <div className="absolute inset-0 flex items-end p-5 text-white bg-gradient-to-t from-gray-900/50">
            <div>
              <h5 className="mb-1">Gallery Title</h5>
              <p className="text-white/75">Subtitle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
        <div className="relative overflow-hidden rounded-md group/item h-80">
          <img
            src={gallery6}
            alt="gallery6Img"
            className="object-cover w-full h-full transition duration-800s ease-effect group-hover/item:scale-125"
          />
          <div className="absolute inset-0 flex items-end p-5 text-white bg-gradient-to-t from-gray-900/50">
            <div>
              <h5 className="mb-1">Gallery Title</h5>
              <p className="text-white/75">Subtitle</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BasicGallery
