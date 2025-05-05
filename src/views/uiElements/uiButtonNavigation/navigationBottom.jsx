import React from 'react'

import { ChartColumnBig, House, Settings, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavigationBottom = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-space lg:grid-cols-2">
        <div className="btn-navigation">
          <Link to="#!" className="navigation-primary">
            <House className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-primary active">
            <Zap className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-primary">
            <ChartColumnBig className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-primary">
            <Settings className="mx-auto" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default NavigationBottom
