import React from 'react'

const BasicTimeline = () => {
  return (
    <React.Fragment>
      <ul className="timeline">
        <li className="timeline-primary active">
          Dark, Light with RTL Supported
        </li>
        <li className="timeline-primary active">
          Multiple Layouts with Responsive
        </li>
        <li className="timeline-primary active">Fully Responsive Design</li>
        <li className="timeline-primary">W3C Validated HTML Pages</li>
        <li className="timeline-primary">
          Easy to Customize with Tailwind.config & SCSS
        </li>
        <li className="timeline-primary">Unlimited Template Possibilities</li>
      </ul>
    </React.Fragment>
  )
}
export default BasicTimeline
