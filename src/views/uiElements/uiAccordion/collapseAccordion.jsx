import React, { useState } from 'react'

import Accordion from '@custom/Accordion/Accordion'

const CollapseAccrdion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <React.Fragment>
      <Accordion
        title="Buttons Collapse"
        isOpen={openIndex === 6}
        onToggle={() => handleToggle(6)}
        headerColor="bg-primary-500 text-white"
        isButtonAccordion={true}>
        <div className="pt-3">
          <p>
            Tailwind CSS is an open-source project, available for free usage and
            utility-first CSS framework that provides responsiveness.
          </p>
        </div>
      </Accordion>
    </React.Fragment>
  )
}
export default CollapseAccrdion
