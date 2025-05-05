import React from 'react'

import Layout from '@layout/Layout'
import NonLayout from '@layout/NonLayout'
import { Route, Routes } from 'react-router-dom'

// import { nonAuthRoutes, routes } from './allRoutes'
import { nonAuthRoutes, routes } from './routes'

const Routing = () => {
  return (
    <React.Fragment>
      <Routes>
        {(routes || []).map((item, key) => (
          <Route
            key={key}
            path={item.path}
            element={<Layout>{item.component}</Layout>}
          />
        ))}

        {(nonAuthRoutes || []).map((item, key) => (
          <Route
            key={key}
            path={item.path}
            element={<NonLayout>{item.component}</NonLayout>}
          />
        ))}
      </Routes>
    </React.Fragment>
  )
}

export default Routing
