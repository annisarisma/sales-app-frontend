import React, { useEffect } from 'react'

import SignInModern from '@views/auth/signIn/signinModern'

const SignInModernPage = () => {
  useEffect(() => {
    document.title = 'sign in | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SignInModern />
    </React.Fragment>
  )
}

export default SignInModernPage
