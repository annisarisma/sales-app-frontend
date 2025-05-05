import React from 'react'

import TestMarksSubjectChat from './testMarksChart'

const TestMarks = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Test Marks (Subject)</h6>
        </div>
        <div className="card-body">
          <div dir="ltr">
            <TestMarksSubjectChat
              chartColors="[bg-primary-300, bg-purple-300, bg-sky-300, bg-green-300, bg-red-200, bg-orange-200]"
              chartDarkColors={''}
              chartId="testMarksSubjectChart"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TestMarks
