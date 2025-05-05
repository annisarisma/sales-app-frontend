import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'

const Starter = () => {
  useEffect(() => {
    document.title = 'Starter | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Starter" subTitle="UI" />
    </React.Fragment>
  )
}
export default Starter
