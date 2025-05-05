import React from 'react'

const OutlineBadge = () => {
  const outlineBadgeData = [
    { text: 'Primary', color: 'badge-outline-primary' },
    { text: 'Purple', color: 'badge-outline-purple' },
    { text: 'Green', color: 'badge-outline-green' },
    { text: 'Red', color: 'badge-outline-red' },
    { text: 'Yellow', color: 'badge-outline-yellow' },
    { text: 'Sky', color: 'badge-outline-sky' },
    { text: 'Pink', color: 'badge-outline-pink' },
    { text: 'Indigo', color: 'badge-outline-indigo' },
    { text: 'Orange', color: 'badge-outline-orange' },
    { text: 'Dark', color: 'badge-outline-gray' },
    {
      text: 'Light',
      color:
        'bg-transparent text-gray-500 border-gray-200 dark:border-dark-800 dark:text-dark-500',
    },
  ]

  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-4">
          {outlineBadgeData.map((badge, index) => (
            <span key={index} className={`${badge.color} badge`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}
export default OutlineBadge
