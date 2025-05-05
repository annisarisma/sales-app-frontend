import React, { useEffect, useRef, useState } from 'react'

import BreadCrumb from '@common//BreadCrumb'

const Autosize = () => {
  const [text, setText] = useState('')
  const [charCount, setCharCount] = useState(0)
  const textareaRef = useRef(null)

  useEffect(() => {
    document.title = 'Autosize | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    // Autosize textarea
    const handleInput = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }

    handleInput()
    window.addEventListener('resize', handleInput)

    return () => {
      window.removeEventListener('resize', handleInput)
    }
  }, [text])

  const handleChange = (e) => {
    const value = e.target.value
    setText(value)
    setCharCount(value.length)
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Autosize" subTitle="Forms" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Autosize Textarea</h6>
          </div>
          <div className="card-body">
            <div>
              <textarea
                className="h-auto form-input"
                rows={3}
                placeholder="Message..."
                maxLength={255}
                value={text}
                onChange={handleChange}
                ref={textareaRef}
              />
            </div>
            <div className="mt-1 leading-none ltr:text-right rtl:text-left">
              <span className="text-xs text-gray-500 dark:text-dark-500">
                {charCount} / 255
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Autosize
