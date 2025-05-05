import React from 'react'

const NumberColorList = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 sm:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Number Color List</h6>
        </div>
        <div className="card-body">
          <ul className="flex flex-col gap-2 list-decimal list-inside marker:text-purple-500">
            <li>Build functional APIs with zero coding.</li>
            <li>Resources with permissions.</li>
            <li>Built in user authentication.</li>
            <li>Easy Integration with existing apps and tools.</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
export default NumberColorList
