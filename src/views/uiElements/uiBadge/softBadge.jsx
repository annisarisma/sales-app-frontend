import React from 'react'

const SoftBadges = () => {
  const softBadgeData = [
    { text: 'Primary', color: 'badge-sub-primary' },
    { text: 'Purple', color: 'badge-sub-purple' },
    { text: 'Green', color: 'badge-sub-green' },
    { text: 'Red', color: 'badge-sub-red' },
    { text: 'Yellow', color: 'badge-sub-yellow' },
    { text: 'Sky', color: 'badge-sub-sky' },
    { text: 'Pink', color: 'badge-sub-pink' },
    { text: 'Indigo', color: 'badge-sub-indigo' },
    { text: 'Orange', color: 'badge-sub-orange' },
    {
      text: 'Dark',
      color:
        'bg-gray-200 text-gray-800 border-gray-200 dark:border-dark-800 dark:text-dark-50 dark:bg-dark-850',
    },
    { text: 'Light', color: 'badge-sub-gray' },
  ]

  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-4">
          {softBadgeData.map((badge, index) => (
            <span key={index} className={`${badge.color} badge`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default SoftBadges
