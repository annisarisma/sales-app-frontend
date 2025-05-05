import React from 'react'

const BaseBadge = () => {
  const baseBadgeData = [
    { text: 'Primary', color: 'badge-primary' },
    { text: 'Purple', color: 'badge-purple' },
    { text: 'Green', color: 'badge-green' },
    { text: 'Red', color: 'badge-red' },
    { text: 'Yellow', color: 'badge-yellow' },
    { text: 'Sky', color: 'badge-sky' },
    { text: 'Pink', color: 'badge-pink' },
    { text: 'Indigo', color: 'badge-indigo' },
    { text: 'Orange', color: 'badge-orange' },
    { text: 'Light', color: 'badge-gray' },
  ]

  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-4">
          {baseBadgeData.map((badge, index) => (
            <span key={index} className={`${badge.color} badge`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default BaseBadge
