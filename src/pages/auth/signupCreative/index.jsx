import React, { useEffect } from 'react'

import SignupCreative from '@views/auth/signup/signupCreative'

const SignUpCreativePage = () => {
  useEffect(() => {
    document.title = 'sign up | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <SignupCreative />
    </React.Fragment>
  )
}

export default SignUpCreativePage
