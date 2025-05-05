import React from 'react'

const SquareBadge = () => {
  const squareBadgeData = [
    { text: '2', color: 'badge-sub-primary' },
    { text: '3', color: 'badge-sub-purple' },
    { text: '5', color: 'badge-outline-green' },
    { text: '4', color: 'badge-sub-red' },
    { text: '3', color: 'badge-solid-primary' },
    { text: '2', color: 'badge-primary' },
    { text: '1', color: 'badge-sub-pink' },
    {
      text: '2',
      color:
        'bg-gray-200 text-gray-800 border-gray-200 dark:bg-dark-850 dark:border-dark-800 dark:text-dark-50',
    },
    { text: '3', color: 'badge-sub-gray' },
  ]

  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-4">
          {squareBadgeData.map((badge, index) => (
            <span key={index} className={`${badge.color} badge-square`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default SquareBadge
