import React, { useEffect } from 'react'

import FourZeroFour from '../../../components/Common/fourZeroFour'

const PageNotFoundError = () => {
  useEffect(() => {
    document.title = '404 | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <FourZeroFour />
    </React.Fragment>
  )
}
export default PageNotFoundError
