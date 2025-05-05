import React from 'react'

const FontWeight = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Font Weight</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 gap-space sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <div>
              <code className="text-pink-500">.font-thin</code>
              <h6 className="mt-2 font-thin">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
            <div>
              <code className="text-pink-500">.font-extralight</code>
              <h6 className="mt-2 font-extralight">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
            <div>
              <code className="text-pink-500">.font-light</code>
              <h6 className="mt-2 font-light">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
            <div>
              <code className="text-pink-500">.font-normal</code>
              <h6 className="mt-2 font-normal">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
            <div>
              <code className="text-pink-500">.font-medium</code>
              <h6 className="mt-2 font-medium">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
            <div>
              <code className="text-pink-500">.font-semibold</code>
              <h6 className="mt-2 font-semibold">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
            <div>
              <code className="text-pink-500">.font-bold</code>
              <h6 className="mt-2 font-bold">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
            <div>
              <code className="text-pink-500">.font-extrabold</code>
              <h6 className="mt-2 font-extrabold">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
            <div>
              <code className="text-pink-500">.font-black</code>
              <h6 className="mt-2 font-black">
                The quick brown fox jumps over the lazy dog.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default FontWeight
