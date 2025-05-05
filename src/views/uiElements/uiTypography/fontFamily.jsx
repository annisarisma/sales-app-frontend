import React from 'react'

const FontFamily = () => {
  return (
    <React.Fragment>
      <div className="grid gap-space lg:grid-cols-6">
        <div>
          <h6 className="mb-2 font-body">Base Font Family</h6>
          <code className="text-pink-500">.font-body</code>
        </div>
        <div>
          <h6 className="mb-2 font-heading">Heading Font Family</h6>
          <code className="text-pink-500">.font-heading</code>
        </div>
      </div>
    </React.Fragment>
  )
}
export default FontFamily
