import React from 'react'

const NonLayout = ({ children, breadcrumbTitle }) => {
  const title = breadcrumbTitle
    ? ` ${breadcrumbTitle} | Domiex - React JS Admin & Dashboard Template `
    : 'Domiex - Admin & Dashboard Template'


  return (
    <React.Fragment>
      <title>{title}</title>

      <main>{children}</main>
    </React.Fragment>
  )
}

export default NonLayout
