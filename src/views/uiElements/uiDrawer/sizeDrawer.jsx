// App.tsx (or any component where you want to use the drawer)
import React, { useState } from 'react'

import user4 from '@assets/images/avatar/user-4.png'
import user5 from '@assets/images/avatar/user-5.png'
import user6 from '@assets/images/avatar/user-6.png'
import user8 from '@assets/images/avatar/user-8.png'
import user11 from '@assets/images/avatar/user-11.png'
import user12 from '@assets/images/avatar/user-12.png'
import user13 from '@assets/images/avatar/user-13.png'
import user14 from '@assets/images/avatar/user-14.png'
import user15 from '@assets/images/avatar/user-15.png'
import user17 from '@assets/images/avatar/user-17.png'
import user18 from '@assets/images/avatar/user-18.png'
import user19 from '@assets/images/avatar/user-19.png'
import user20 from '@assets/images/avatar/user-20.png'
import user21 from '@assets/images/avatar/user-21.png'
import user22 from '@assets/images/avatar/user-22.png'
import user24 from '@assets/images/avatar/user-24.png'
import user25 from '@assets/images/avatar/user-25.png'
import { Drawer } from '@custom/Drawer/Drawer'
import { Link } from 'react-router-dom'

const SizeDrawer = () => {
  const [isSmallDrawerOpen, setIsSmallDrawerOpen] = useState(false)
  const [isLargeDrawerOpen, setIsLargeDrawerOpen] = useState(false)
  const [isHalfScreenDrawerOpen, setIsHalfScreenDrawerOpen] = useState(false)

  return (
    <React.Fragment>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsSmallDrawerOpen(true)}
            type="button"
            className="btn btn-sub-gray">
            Extra small
          </button>
          <button
            onClick={() => setIsLargeDrawerOpen(true)}
            type="button"
            className="btn btn-sub-gray">
            Large
          </button>
          <button
            onClick={() => setIsHalfScreenDrawerOpen(true)}
            type="button"
            className="btn btn-sub-gray">
            Half Screen
          </button>
        </div>

        <Drawer
          isOpen={isSmallDrawerOpen}
          onClose={() => setIsSmallDrawerOpen(false)}
          position="right"
          size="small"
          id="smallDrawer"
          isSimpleBar={true}
          content={
            <div className="*:relative *:rounded-full *:block space-y-3">
              <Link to="#!">
                <img
                  src={user4}
                  alt="user4Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user5}
                  alt="user5Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user6}
                  alt="user6Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user11}
                  alt="user11Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user8}
                  alt="user8Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user12}
                  alt="user12Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user13}
                  alt="user13Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user14}
                  alt="user14Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user15}
                  alt="user15Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user17}
                  alt="user17Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user18}
                  alt="user18Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user19}
                  alt="user19Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user20}
                  alt="user20Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user21}
                  alt="user21Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user22}
                  alt="user22Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user24}
                  alt="user24Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
              <Link to="#!">
                <img
                  src={user25}
                  alt="user25Img"
                  className="mx-auto rounded-full size-14"
                />
                <div className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5"></div>
              </Link>
            </div>
          }
        />

        <Drawer
          isOpen={isLargeDrawerOpen}
          onClose={() => setIsLargeDrawerOpen(false)}
          position="right"
          size="large"
          title="Large Drawer"
          content={
            <div>
              <h6 className="mb-3 text-15">Drawer Content</h6>
              <p className="text-slate-500 dark:text-dark-500">
                They all have something to say beyond the words on the page.
                They can come across as casual or neutral, exotic or graphic.
              </p>
            </div>
          }
          footer={<h6>Drawer Footer</h6>}
        />

        <Drawer
          isOpen={isHalfScreenDrawerOpen}
          onClose={() => setIsHalfScreenDrawerOpen(false)}
          position="left"
          size="half-screen"
          title="Half Screen Drawer"
          content={
            <div>
              <h6 className="mb-3 text-15">Drawer Content</h6>
              <p className="text-slate-500 dark:text-dark-500">
                They all have something to say beyond the words on the page.
                They can come across as casual or neutral, exotic or graphic.
              </p>
            </div>
          }
          footer={<h6>Drawer Footer</h6>}
        />
      </div>
    </React.Fragment>
  )
}

export default SizeDrawer
