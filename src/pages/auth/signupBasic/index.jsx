import React, { useEffect } from 'react'

import SignupBasic from '@views/auth/signup/signupBasic'

const SignUpBasicPage = () => {
  useEffect(() => {
    document.title = 'sign up | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SignupBasic />
    </React.Fragment>
  )
}

export default SignUpBasicPage
