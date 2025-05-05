import React, { useEffect } from 'react'

import SuccessfulPasswordBasic from '@views/auth/successfulPassword/successfulPasswordBasic'

const SuccessfulPasswordBasicPage = () => {
  useEffect(() => {
    document.title =
      'Successful Password | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SuccessfulPasswordBasic />
    </React.Fragment>
  )
}

export default SuccessfulPasswordBasicPage
