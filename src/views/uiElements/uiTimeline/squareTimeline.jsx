import React from 'react'

const SquareTimeline = () => {
  return (
    <React.Fragment>
      <ul className="timeline-square timeline">
        <li className="timeline-purple active">
          Dark, Light with RTL Supported
        </li>
        <li className="timeline-purple active">
          Multiple Layouts with Responsive
        </li>
        <li className="timeline-purple active">Fully Responsive Design</li>
        <li className="timeline-purple">W3C Validated HTML Pages</li>
        <li className="timeline-purple">
          Easy to Customize with Tailwind.config & SCSS
        </li>
        <li className="timeline-purple">Unlimited Template Possibilities</li>
      </ul>
    </React.Fragment>
  )
}
export default SquareTimeline
