import React from 'react'

import { ChartColumnBig, House, Settings, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const AnimationNavigation = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-space lg:grid-cols-2">
        <div className="btn-navigation animate-navigation">
          <Link to="#!" className="navigation-animation-purple">
            <House className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-purple active">
            <Zap className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-purple">
            <ChartColumnBig className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-purple">
            <Settings className="mx-auto" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default AnimationNavigation
