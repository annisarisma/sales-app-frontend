import React from 'react'

const SolidBadges = () => {
  const outlineBadgeData = [
    { text: 'Primary', color: 'badge-solid-primary' },
    { text: 'Purple', color: 'badge-solid-purple' },
    { text: 'Green', color: 'badge-solid-green' },
    { text: 'Red', color: 'badge-solid-red' },
    { text: 'Yellow', color: 'badge-solid-yellow' },
    { text: 'Sky', color: 'badge-solid-sky' },
    { text: 'Pink', color: 'badge-solid-pink' },
    { text: 'Indigo', color: 'badge-solid-indigo' },
    { text: 'Orange', color: 'badge-solid-orange' },
    { text: 'Dark', color: 'badge-solid-gray' },
    {
      text: 'Light',
      color:
        'bg-gray-200 text-gray-500 border-gray-200 dark:bg-dark-850 dark:border-dark-800 dark:text-dark-500',
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

export default SolidBadges
