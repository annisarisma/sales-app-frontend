import React, { useEffect, useRef, useState } from 'react'

import allLocales from '@fullcalendar/core/locales-all'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import Select from 'react-select'

const localesOptions = [
  { label: 'English (EN-AU)', value: 'en-au' },
  { label: 'Arabic (AR)', value: 'ar' },
  { label: 'German (DE)', value: 'de' },
  { label: 'Russian (RU)', value: 'ru' },
  { label: 'French (FR)', value: 'fr' },
  { label: 'Italian (IT)', value: 'it' },
  { label: 'Danish (DA)', value: 'da' },
  { label: 'Chinese (ZH)', value: 'zh' },
  { label: 'Korean (KO)', value: 'ko' },
  { label: 'Greek (EL)', value: 'el' },
  { label: 'Finnish (FI)', value: 'fi' },
  { label: 'Persian (FA)', value: 'fa' },
  { label: 'Catalan, Valencian (CA)', value: 'ca' },
]

const CalendarLocalize = () => {
  const calendarRef = useRef(null)
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    document.title = 'Localize | Domiex - React JS Admin & Dashboard Template'
  }, [])

  // Handle locale change
  const handleLocaleChange = (event) => {
    const selectedLocale = event
    setLocale(selectedLocale)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocale('en-au')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Localize" subTitle="Calendar" />
      <div className="card">
        <div className="card-header">
          <div id="localizeSelect">
            <div>
              <Select
                id="localizeSelect"
                classNamePrefix="select"
                options={localesOptions}
                getOptionValue={(option) => option.value}
                getOptionLabel={(option) => option.label}
                onChange={(event) => handleLocaleChange(event?.value)}
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div id="localizeCalendar">
            <div>
              <FullCalendar
                ref={calendarRef}
                plugins={[interactionPlugin, dayGridPlugin]}
                initialView="dayGridMonth"
                timeZone="America/New_York"
                locales={allLocales}
                locale={locale}
                weekNumbers={false}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalendarLocalize
