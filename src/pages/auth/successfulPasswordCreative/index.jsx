import React, { useEffect } from 'react'

import SuccessfulPasswordCreative from '@views/auth/successfulPassword/successfulPasswordCreative'

const SuccessfulPasswordCreativePage = () => {
  useEffect(() => {
    document.title =
      'Successful Password | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SuccessfulPasswordCreative />
    </React.Fragment>
  )
}

export default SuccessfulPasswordCreativePage
