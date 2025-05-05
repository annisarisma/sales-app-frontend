import React, { useEffect } from 'react'

import SignInBasic from '@views/auth/signIn/signinBasic'

const SignInBasicPage = () => {
  useEffect(() => {
    document.title = 'Sign In | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SignInBasic />
    </React.Fragment>
  )
}

export default SignInBasicPage
