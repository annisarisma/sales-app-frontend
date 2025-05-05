// App.tsx
import React, { useState } from 'react'

import { Drawer } from '@custom/Drawer/Drawer'

const BasicDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <React.Fragment>
      <div>
        <button onClick={openDrawer} className="btn btn-primary">
          Default Drawer
        </button>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          position="right"
          title="Drawer Heading"
          content={
            <>
              <h6 className="mb-4 text-15">Drawer Content</h6>
              <p className="text-gray-500">
                They all have something to say beyond the words on the page.
                They can come across as casual or neutral, exotic or graphic.
              </p>
            </>
          }
          footer={<h6>Drawer Footer</h6>}
        />
      </div>
    </React.Fragment>
  )
}

export default BasicDrawer
