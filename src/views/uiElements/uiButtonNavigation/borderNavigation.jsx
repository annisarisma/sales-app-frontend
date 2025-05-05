import React from 'react'

import {
  Bell,
  Box,
  CalendarDays,
  Clapperboard,
  House,
  PencilRuler,
  Settings,
  User,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const BorderNavigation = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-space lg:grid-cols-2">
        <div className="btn-navigation navigation-border">
          <Link to="#!" className="navigation-animation-green">
            <House className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-green active">
            <CalendarDays className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-green">
            <Bell className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-green">
            <Settings className="mx-auto" />
          </Link>
        </div>
        <div className="btn-navigation navigation-border border-top">
          <Link to="#!" className="navigation-animation-sky">
            <User className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-sky active">
            <Box className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-sky">
            <Clapperboard className="mx-auto" />
          </Link>
          <Link to="#!" className="navigation-animation-sky">
            <PencilRuler className="mx-auto" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BorderNavigation
