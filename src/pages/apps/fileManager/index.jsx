import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import FileManagerMainSection from '@src/views/apps/filemanager/fileManagerMainSection'
import FileStorageSection from '@src/views/apps/filemanager/fileStorageSection'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FileManagerApp = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title =
      'File Manager | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="File Manager" subTitle="Apps" />
      <div className="grid grid-cols-12 gap-x-space">
        <FileManagerMainSection />
        <FileStorageSection />
      </div>

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default FileManagerApp
