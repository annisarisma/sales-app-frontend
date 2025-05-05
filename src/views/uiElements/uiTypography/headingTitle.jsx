import React from 'react'

const HeadingTitle = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Heading Title</h6>
        </div>
        <div className="space-y-4 card-body">
          <h1>The quick brown fox jumps over the lazy dog. (h1)</h1>
          <h2>The quick brown fox jumps over the lazy dog. (h2)</h2>
          <h3>The quick brown fox jumps over the lazy dog. (h3)</h3>
          <h4>The quick brown fox jumps over the lazy dog. (h4)</h4>
          <h5>The quick brown fox jumps over the lazy dog. (h5)</h5>
          <h6>The quick brown fox jumps over the lazy dog. (h6)</h6>
        </div>
      </div>
    </React.Fragment>
  )
}
export default HeadingTitle
