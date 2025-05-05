import React from 'react'

const VerticalGroup = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-5">
        <div className="btn-group-vertical">
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-primary">Button</button>
        </div>
        <div className="btn-group-vertical">
          <button className="btn btn-outline-primary">Button</button>
          <button className="btn btn-outline-primary">Button</button>
          <button className="btn btn-outline-primary">Button</button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default VerticalGroup
