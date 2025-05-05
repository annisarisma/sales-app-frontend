import React, { useState } from 'react'

import gallery1 from '@assets/images/gallery/img-01.jpg'
import gallery2 from '@assets/images/gallery/img-02.jpg'
import gallery3 from '@assets/images/gallery/img-03.jpg'
import gallery4 from '@assets/images/gallery/img-04.jpg'
import gallery5 from '@assets/images/gallery/img-05.jpg'
import gallery6 from '@assets/images/gallery/img-06.jpg'
import gallery11 from '@assets/images/gallery/long/img-01.jpg'
import { X } from 'lucide-react'
import Masonry from 'react-masonry-css'

// Component
const MasonryWithLightboxGallery = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState('')
  const openLightbox = (src) => {
    setImageSrc(src)
    setIsOpen(true)
  }
  const closeLightbox = () => {
    setIsOpen(false)
  }

  const images = [
    { src: gallery1, height: 'h-64' },
    { src: gallery2, height: 'h-[25rem]' },
    { src: gallery4, height: 'h-72' },
    { src: gallery5, height: 'h-48' },
    { src: gallery6, height: 'h-80' },
    { src: gallery3, height: 'h-80' },
    { src: gallery11, height: 'h-96' },
  ]

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <React.Fragment>
      <div className="card-body">
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-900/60 z-drawer"
            onClick={closeLightbox}>
            <div
              className="relative max-w-3xl mx-auto overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute top-0 right-0 p-1.5 m-4 text-white rounded-full bg-gray-900 hover:text-red-500 transition ease-linear duration-200">
                <X />
              </button>
              <img
                src={imageSrc}
                alt="imageSrc"
                className="object-contain rounded"
              />
            </div>
          </div>
        )}

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          columnClassName="!w-full">
          {images.map((image, index) => (
            <div key={index} className={`${image.height}`}>
              <img
                src={image.src}
                alt="image"
                className="object-cover object-center !w-full h-full rounded-sm cursor-pointer pb-5"
                onClick={() => {
                  setIsOpen(true)
                  setImageSrc(image.src)
                }}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </React.Fragment>
  )
}

export default MasonryWithLightboxGallery
