import React from 'react'

const ColoredTimeline = () => {
  return (
    <React.Fragment>
      <ul className="timeline-square timeline">
        <li className="timeline-red active">Dark, Light with RTL Supported</li>
        <li className="timeline-red active">
          Multiple Layouts with Responsive
        </li>
        <li className="timeline-red active">Fully Responsive Design</li>
        <li className="timeline-red">W3C Validated HTML Pages</li>
        <li className="timeline-red">
          Easy to Customize with Tailwind.config & SCSS
        </li>
        <li className="timeline-red">Unlimited Template Possibilities</li>
      </ul>
    </React.Fragment>
  )
}
export default ColoredTimeline
