import React, { useEffect } from 'react'

import SuccessfulPasswordModern from '@views/auth/successfulPassword/successfulPasswordModern'

const SuccessfulPasswordModernPage = () => {
  useEffect(() => {
    document.title =
      'Successful Password | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SuccessfulPasswordModern />
    </React.Fragment>
  )
}

export default SuccessfulPasswordModernPage
