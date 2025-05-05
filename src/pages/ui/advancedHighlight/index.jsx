import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import HighlightCode from '@views/uiAdvanced/uIAdvancedHighlightCode/highlightCode'

const Highlight = () => {
  useEffect(() => {
    document.title =
      'Highlight Code | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Highlight Code" subTitle="UI Advanced" />
      <HighlightCode />
    </React.Fragment>
  )
}

export default Highlight
