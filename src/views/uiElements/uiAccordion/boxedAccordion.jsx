import React, { useState } from 'react'

import Accordion from '@custom/Accordion/Accordion'

const BoxedAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  const [openIndex2, setOpenIndex2] = useState(3)

  const handleToggle2 = (index) => {
    setOpenIndex2((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6">
        <div className="flex flex-col gap-3">
          <Accordion
            accordionclass="accordion-boxed"
            headerColor="accordion-green"
            arrowcolor="green"
            title="Why do we use Tailwind CSS?"
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}>
            <div className="content">
              <p>
                Tailwind CSS is used to design and style web pages fast and
                Responsive. Rapid Development, Highly Customizable, Reduced CSS
                File Size, Great Documentation, and Community Support are the
                main reasons for using Tailwind CSS.
              </p>
            </div>
          </Accordion>
          <Accordion
            accordionclass="accordion-boxed"
            headerColor="accordion-green"
            arrowcolor="green"
            title="Can we change the base font-family in Tailwind config?"
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}>
            <div className="content">
              <p>
                Yes, we can change the base{' '}
                <code className="text-pink-500">font-family</code> in Tailwind{' '}
                <code className="text-pink-500">config.</code> To adjust the
                main font style in Tailwind CSS, you can modify it by making
                changes in the “theme” part of your configuration file (
                <code className="text-pink-500">tailwind.config.js</code>). Just
                open that file, find the theme section, and add or update the
                fontFamily setting. We can also Change the font-family in the
                Tailwind config with different techniques Changing base
                font-family, Adding a new font family, Removing font family.
              </p>
            </div>
          </Accordion>
          <Accordion
            accordionclass="accordion-boxed"
            headerColor="accordion-green"
            arrowcolor="green"
            title="How to create a form with Tailwind CSS?"
            isOpen={openIndex === 2}
            onToggle={() => handleToggle(2)}>
            <div className="content">
              <p>
                Tailwind CSS, offers Tailwind forms as plugins that provide a
                foundational reset for form styles. Install TailwindCSS by
                writing the following command. We can also use utility classes
                to make a form with Tailwind CSS, use the easy-to-apply classes
                for backgrounds, borders, shadows, etc. Start by creating the
                form element and use the space-y-{`n`} class to add vertical
                spacing between the form controls.”
              </p>
            </div>
          </Accordion>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="flex flex-col gap-3">
          <Accordion
            accordionclass="accordion-boxed"
            headerColor="accordion-solid-purple"
            arrowcolor="white"
            title="Why do we use Tailwind CSS?"
            isOpen={openIndex2 === 3}
            onToggle={() => handleToggle2(3)}>
            <div className="content">
              <p>
                Tailwind CSS is used to design and style web pages fast and
                Responsive. Rapid Development, Highly Customizable, Reduced CSS
                File Size, Great Documentation, and Community Support are the
                main reasons for using Tailwind CSS.
              </p>
            </div>
          </Accordion>
          <Accordion
            accordionclass="accordion-boxed"
            headerColor="accordion-solid-purple"
            arrowcolor="white"
            title="Can we change the base font-family in Tailwind config?"
            isOpen={openIndex2 === 4}
            onToggle={() => handleToggle2(4)}>
            <div className="content">
              <p>
                Yes, we can change the base{' '}
                <code className="text-pink-500">font-family</code> in Tailwind{' '}
                <code className="text-pink-500">config.</code> To adjust the
                main font style in Tailwind CSS, you can modify it by making
                changes in the “theme” part of your configuration file (
                <code className="text-pink-500">tailwind.config.js</code>). Just
                open that file, find the theme section, and add or update the
                fontFamily setting. We can also Change the font-family in the
                Tailwind config with different techniques Changing base
                font-family, Adding a new font family, Removing font family.
              </p>
            </div>
          </Accordion>
          <Accordion
            accordionclass="accordion-boxed"
            headerColor="accordion-solid-purple"
            arrowcolor="white"
            title="How to create a form with Tailwind CSS?"
            isOpen={openIndex2 === 5}
            onToggle={() => handleToggle2(5)}>
            <div className="content">
              <p>
                Tailwind CSS, offers Tailwind forms as plugins that provide a
                foundational reset for form styles. Install TailwindCSS by
                writing the following command. We can also use utility classes
                to make a form with Tailwind CSS, use the easy-to-apply classes
                for backgrounds, borders, shadows, etc. Start by creating the
                form element and use the space-y-{`n`} class to add vertical
                spacing between the form controls.”
              </p>
            </div>
          </Accordion>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BoxedAccordion
