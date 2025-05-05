import React from 'react'

import {
  Apple,
  Bell,
  Building2,
  CalendarDays,
  Heart,
  ShoppingBag,
  ShoppingCart,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const DuotuneIcons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Duotune Icons</h6>
        </div>
        <div className="card-body">
          <div className="flex items-center gap-5">
            <div>
              <Apple className="size-6 text-primary-500 fill-primary-500/20" />
            </div>
            <div>
              <Heart className="text-red-500 size-6 fill-red-500/20" />
            </div>
            <div>
              <ShoppingCart className="text-green-500 size-6 fill-green-500/20" />
            </div>
            <div>
              <Bell className="size-6 text-sky-500 fill-sky-500/20" />
            </div>
            <div>
              <ShoppingBag className="text-purple-500 size-6 fill-purple-500/20" />
            </div>
            <div>
              <CalendarDays className="text-yellow-500 size-6 fill-yellow-500/20" />
            </div>
            <div>
              <Building2 className="text-pink-500 size-6 fill-pink-500/20" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Hover Duotune Icons</h6>
        </div>
        <div className="card-body">
          <div className="flex items-center gap-5">
            <Link to="#!">
              <Apple className="transition duration-300 ease-linear size-6 text-primary-500 hover:fill-primary-500/20" />
            </Link>
            <Link to="#!">
              <Heart className="text-red-500 transition duration-300 ease-linear size-6 hover:fill-red-500/20" />
            </Link>
            <Link to="#!">
              <ShoppingCart className="text-green-500 transition duration-300 ease-linear size-6 hover:fill-green-500/20" />
            </Link>
            <Link to="#!">
              <Bell className="transition duration-300 ease-linear size-6 text-sky-500 hover:fill-sky-500/20" />
            </Link>
            <Link to="#!">
              <ShoppingBag className="text-purple-500 transition duration-300 ease-linear size-6 hover:fill-purple-500/20" />
            </Link>
            <Link to="#!">
              <CalendarDays className="text-yellow-500 transition duration-300 ease-linear size-6 hover:fill-yellow-500/20" />
            </Link>
            <Link to="#!">
              <Building2 className="text-pink-500 transition duration-300 ease-linear size-6 hover:fill-pink-500/20" />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default DuotuneIcons
