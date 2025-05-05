import React from 'react'

import InvitationStatusCharts from './invitationStatusChart'

const InvitationStatus = () => {
  return (
    <React.Fragment>
      <div className="mt-5 card">
        <div className="card-header">
          <h6 className="card-title">Invitation Status</h6>
        </div>
        <div className="card-body">
          <div>
            <InvitationStatusCharts
              chartColors="[bg-pink-500, bg-primary-500]"
              chartDarkColors={''}
              chartId="invitationChart"
            />
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-200 rtl:divide-x-reverse dark:divide-dark-800">
            <div className="p-3 text-center">
              <h6 className="mb-1">1800</h6>
              <p className="text-gray-500 dark:text-dark-500">Sent</p>
            </div>
            <div className="p-3 text-center">
              <h6 className="mb-1">1593</h6>
              <p className="text-gray-500 dark:text-dark-500">Accept</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default InvitationStatus
