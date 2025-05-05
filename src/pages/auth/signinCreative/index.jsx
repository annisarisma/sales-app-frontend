import React, { useEffect } from 'react'

import SigninCreative from '@views/auth/signIn/signinCreative'

const SignInCreativePage = () => {
  useEffect(() => {
    document.title = 'sign in | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SigninCreative />
    </React.Fragment>
  )
}

export default SignInCreativePage
