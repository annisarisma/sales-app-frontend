import React from 'react'

import { widgets } from '@data/index'
import { Box, Coins, ShoppingBag, UserRound } from 'lucide-react'

const Widgets = () => {
  const getLucideIcon = (icon, className) => {
    const icons = {
      'shopping-bag': <ShoppingBag className={className} />,
      'user-round': <UserRound className={className} />,
      box: <Box className={className} />,
      coins: <Coins className={className} />,
    }
    return icons[icon]
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-space">
        {widgets.map((item, index) => {
          return (
            <div
              key={index}
              className={`card ${item.cardColor && item.cardColor}`}>
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <div className="grow">
                    <p className={`mb-1 text-sm ${item.textClasses}`}>
                      {item.title}
                    </p>
                    <h6 className={item.valueClasses}>{item.value}</h6>
                  </div>
                  <div
                    className={`flex items-center justify-center text-xs border-2 border-white rounded-full dark:border-dark-900 ${item.bgClass} shrink-0 size-12 outline-1 outline-dashed ${item.borderClass}`}>
                    {item.icon && getLucideIcon(item.icon, item.iconClasses)}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Widgets
