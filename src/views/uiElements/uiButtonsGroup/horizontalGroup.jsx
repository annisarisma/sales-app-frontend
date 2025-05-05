import React from 'react'

const HorizontalGroup = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-space sm:grid-cols-2">
        <div className="btn-group">
          <button className="btn btn-primary">Left</button>
          <button className="btn btn-primary">Middle</button>
          <button className="btn btn-primary">Right</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-outline-primary">Left</button>
          <button className="btn btn-outline-primary">Middle</button>
          <button className="btn btn-outline-primary">Right</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-sub-purple">Left</button>
          <button className="btn btn-sub-purple">Middle</button>
          <button className="btn btn-sub-purple">Right</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-purple">Left</button>
          <button className="btn btn-green">Middle</button>
          <button className="btn btn-primary">Right</button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default HorizontalGroup
