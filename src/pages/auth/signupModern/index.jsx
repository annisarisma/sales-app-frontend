import React, { useEffect } from 'react'

import SignupModern from '@views/auth/signup/signupModern'

const SignUpModernPage = () => {
  useEffect(() => {
    document.title = 'sign up | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SignupModern />
    </React.Fragment>
  )
}

export default SignUpModernPage
