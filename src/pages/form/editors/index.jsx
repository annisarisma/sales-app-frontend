import React, { useEffect, useState } from 'react'

import BreadCrumb from '@common//BreadCrumb'
// Import ReactQuill normally in a React project
import ReactQuill from 'react-quill'

const initialContent = `
    <h2>Hello World!</h2>
    <p>Some initial <strong>bold</strong> text</p>
    <p><br /></p>
`

const EditorsPage = () => {
  const [editorHtml, setEditorHtml] = useState(initialContent)

  useEffect(() => {
    document.title = 'Editors | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handleChange = (html) => {
    setEditorHtml(html)
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Editors" subTitle="Forms & Tables" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Snow Theme Editors</h6>
          </div>
          <div className="card-body">
            <ReactQuill value={editorHtml} onChange={handleChange} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditorsPage
