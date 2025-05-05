import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import FolderStructureTree from '@views/uiAdvanced/uIAdvancedTree/advanceTree'

const Tree = () => {
  useEffect(() => {
    document.title = 'Tree | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Tree" subTitle="UI Advanced" />
      <FolderStructureTree />
    </React.Fragment>
  )
}

export default Tree
