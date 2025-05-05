import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import WordCounter from '@views/uiAdvanced/uiAdvancedWordCounter/wordCounter'

const WordCounters = () => {
  useEffect(() => {
    document.title =
      'Word Counter | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Word Counter" subTitle="UI Advanced" />
      <WordCounter />
    </React.Fragment>
  )
}

export default WordCounters
