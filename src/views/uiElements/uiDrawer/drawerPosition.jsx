import React, { useState } from 'react'

import { Drawer } from '@custom/Drawer/Drawer'

const DrawerPosition = () => {
  const [openDrawer, setOpenDrawer] = useState(null)
  const openDrawerHandler = (drawerId) => () => {
    setOpenDrawer(drawerId)
  }
  const closeDrawerHandler = () => {
    setOpenDrawer(null)
  }

  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={openDrawerHandler('drawerEnd')}
          type="button"
          className="btn btn-sub-gray">
          End Drawer
        </button>
        <button
          onClick={openDrawerHandler('drawerStart')}
          type="button"
          className="btn btn-sub-gray">
          Start Drawer
        </button>
        <button
          onClick={openDrawerHandler('drawerTop')}
          type="button"
          className="btn btn-sub-gray">
          Top Drawer
        </button>
        <button
          onClick={openDrawerHandler('drawerBottom')}
          type="button"
          className="btn btn-sub-gray">
          Bottom Drawer
        </button>
      </div>

      <Drawer
        isOpen={openDrawer === 'drawerEnd'}
        onClose={closeDrawerHandler}
        position="right"
        title="End Drawer Heading"
        content={
          <>
            <h6 className="mb-4 text-15">Drawer Content</h6>
            <p className="text-gray-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={<h6>Drawer Footer</h6>}
      />

      <Drawer
        isOpen={openDrawer === 'drawerStart'}
        onClose={closeDrawerHandler}
        position="left"
        title="Start Drawer Heading"
        content={
          <>
            <h6 className="mb-4 text-15">Drawer Content</h6>
            <p className="text-gray-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={<h6>Drawer Footer</h6>}
      />

      <Drawer
        isOpen={openDrawer === 'drawerTop'}
        onClose={closeDrawerHandler}
        position="top"
        id="drawerTop"
        title="Top Drawer Heading"
        content={
          <>
            <h6 className="mb-4 text-15">Drawer Content</h6>
            <p className="text-gray-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={<h6>Drawer Footer</h6>}
      />

      <Drawer
        isOpen={openDrawer === 'drawerBottom'}
        onClose={closeDrawerHandler}
        position="bottom"
        title="Bottom Drawer Heading"
        content={
          <>
            <h6 className="mb-4 text-15">Drawer Content</h6>
            <p className="text-gray-500">
              They all have something to say beyond the words on the page. They
              can come across as casual or neutral, exotic or graphic.
            </p>
          </>
        }
        footer={<h6>Drawer Footer</h6>}
      />
    </React.Fragment>
  )
}

export default DrawerPosition
