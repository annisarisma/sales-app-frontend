import React, { useState } from 'react'

const WordCounter = () => {
  const [search, setSearch] = useState("let's try this")
  const [wordCount, setWordCount] = useState(3)
  const [charCount, setCharCount] = useState(12)

  const countWords = (text) => {
    return text.trim().split(/\s+/).length
  }

  const countChars = (text) => {
    return text.replace(/\s+/g, '').length
  }

  const handleChange = (event) => {
    const value = event.target.value
    setSearch(value)
    setWordCount(countWords(value))
    setCharCount(countChars(value))
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Simple Word Counter</h6>
          </div>
          <div className="card-body">
            <textarea
              name="search"
              id="words"
              rows={10}
              value={search}
              onChange={handleChange}
              className="h-auto form-input"
            />
            <p className="mt-4">
              Word counts:{' '}
              <span className="font-semibold text-blue-500">{wordCount}</span>
            </p>
            <p>
              Character count:{' '}
              <span className="font-semibold text-blue-500">{charCount}</span>{' '}
              (without space)
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WordCounter
