import React, { useMemo } from 'react'

const LeaveInformation = ({ leaves }) => {
  const availableLeaveCount = useMemo(
    () => leaves.filter((leave) => leave.status === 'Available').length,
    [leaves]
  )
  const usedLeaveCount = useMemo(
    () => leaves.filter((leave) => leave.status === 'Approved').length,
    [leaves]
  )
  const pendingLeaveCount = useMemo(
    () => leaves.filter((leave) => leave.status === 'Pending').length,
    [leaves]
  )
  const rejectedLeaveCount = useMemo(
    () => leaves.filter((leave) => leave.status === 'Rejected').length,
    [leaves]
  )
  const totalLeaveCount = useMemo(
    () =>
      availableLeaveCount +
      usedLeaveCount +
      pendingLeaveCount +
      rejectedLeaveCount,
    [availableLeaveCount, usedLeaveCount, pendingLeaveCount, rejectedLeaveCount]
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-x-space">
      <div className="card">
        <div className="flex items-center gap-4 card-body">
          <div className="flex items-center justify-center text-xl font-medium text-green-500 rounded-md bg-green-500/10 size-14">
            {availableLeaveCount}
          </div>
          <p className="text-gray-500 dark:text-dark-500">Available Leaves</p>
        </div>
      </div>
      <div className="card">
        <div className="flex items-center gap-4 card-body">
          <div className="flex items-center justify-center text-xl font-medium text-purple-500 rounded-md bg-purple-500/10 size-14">
            {usedLeaveCount}
          </div>
          <p className="text-gray-500 dark:text-dark-500">Used Leaves</p>
        </div>
      </div>
      <div className="card">
        <div className="flex items-center gap-4 card-body">
          <div className="flex items-center justify-center text-xl font-medium text-yellow-500 rounded-md bg-yellow-500/10 size-14">
            {pendingLeaveCount}
          </div>
          <p className="text-gray-500 dark:text-dark-500">
            Pending Leaves Request
          </p>
        </div>
      </div>
      <div className="card">
        <div className="flex items-center gap-4 card-body">
          <div className="flex items-center justify-center text-xl font-medium text-red-500 rounded-md bg-red-500/10 size-14">
            {rejectedLeaveCount}
          </div>
          <p className="text-gray-500 dark:text-dark-500">Rejected Leaves</p>
        </div>
      </div>
      <div className="card">
        <div className="flex items-center gap-4 card-body">
          <div className="flex items-center justify-center text-xl font-medium rounded-md size-14 bg-sky-500/10 text-sky-500">
            {totalLeaveCount}
          </div>
          <p className="text-gray-500 dark:text-dark-500">Total Leaves</p>
        </div>
      </div>
    </div>
  )
}

export default LeaveInformation
