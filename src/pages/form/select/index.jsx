import React, { useEffect, useState } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

function getOptions(count = 10, includeDesc = false) {
  const optionsData = []
  for (let i = 1; i <= count; i += 1) {
    const optionData = { value: i, label: `Option ${i}` }
    if (includeDesc) {
      optionData.description = `Description ${i}`
    }
    optionsData.push(optionData)
  }
  return optionsData
}

const groupedOptions = [
  {
    label: 'Option Group 1',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
      { label: 'Option 6', value: '6' },
      { label: 'Option 7', value: '7' },
      { label: 'Option 8', value: '8' },
    ],
  },
  {
    label: 'Option Group 2',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
      { label: 'Option 6', value: '6' },
      { label: 'Option 7', value: '7' },
      { label: 'Option 8', value: '8' },
    ],
  },
]

// Highlight matched text in search results
const highlightText = (text, search) => {
  if (!search) return text
  const parts = text.split(new RegExp(`(${search})`, 'gi'))
  return parts.map((part, index) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <mark key={index}>{part}</mark>
    ) : (
      part
    )
  )
}

// Custom sorting function to show selected options first
const sortOptions = (options, selectedOptions) => {
  if (!selectedOptions) return options

  const selectedValues = selectedOptions.map((option) => option.value)

  return [...options].sort((a, b) => {
    const aSelected = selectedValues.includes(a.value) ? -1 : 1
    const bSelected = selectedValues.includes(b.value) ? -1 : 1
    return aSelected - bSelected
  })
}

const SelectPage = () => {
  // ----------- default ------------
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    document.title = 'Select | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handleChange = (selected) => {
    setSelectedOption(selected)
  }

  // ------------- search ---------------
  const [selectedSearchOption, setSelectedSearchOption] = useState(null)

  const handleSearchChange = (selected) => {
    setSelectedSearchOption(selected)
  }

  // ------------ multi ------------
  const [selectedMultiOption, setSelectedMultiOption] = useState(null)

  const handleMultiChange = (selected) => {
    setSelectedMultiOption(selected)
  }

  // --------------Native  select -------------

  // Define the native select options
  const nativeOptions = [
    { value: '1', label: 'Option 1', isDisabled: true },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
  ]
  const [selectedNativeOption, setSelectedNativeOption] = useState(
    nativeOptions.find((option) => option.value === '4') || null // Default selected value
  )

  const handleNativeChange = (selected) => {
    setSelectedNativeOption(selected)
  }

  // ------------ multi without search ------------
  const [selectedMultiWithoutOption, setSelectedMultiWithoutOption] =
    useState(null)

  const handleMultiWithoutChange = (selected) => {
    setSelectedMultiWithoutOption(selected)
  }

  // ----------- disable ------------
  const [selectedDisableOption, setSelectedDisableOption] = useState(null)

  const handleDisableChange = (selected) => {
    setSelectedDisableOption(selected)
  }

  const disabledOptions = [2, 6, 8]

  const isOptionDisabled = (option) => {
    return disabledOptions.includes(option.value)
  }

  // ----------- option group ------------
  const [selectedGroupOption, setSelectedGroupOption] = useState([])

  const handleGroupChange = (selected) => {
    setSelectedGroupOption(selected)
  }

  // ------------- preselect -----------
  const selectedOptions = [3]

  const [selectedPresetOption, setSelectedPresetOption] = useState(
    getOptions(8).filter((option) => selectedOptions.includes(option.value))
  )

  const isOptionSelected = (option) => {
    return selectedOptions.includes(option.value)
  }

  const handlePresetChange = (selected) => {
    setSelectedPresetOption(selected)
  }

  // ------------- preselect Multi -----------
  const selectedMultiOptions = [3, 4]

  const [selectedPresetMultiOption, setSelectedPresetMultiOption] = useState(
    getOptions(8).filter((option) =>
      selectedMultiOptions.includes(option.value)
    )
  )

  const isOptionMultiSelected = (option) => {
    return selectedOptions.includes(option.value)
  }

  const handlePresetMultiChange = (selected) => {
    setSelectedPresetMultiOption(selected)
  }

  // ------------ hide clear button ------------
  const [selectedHideOption, setSelectedHideOption] = useState(null)

  const handleHideChange = (selected) => {
    setSelectedHideOption(selected)
  }

  // ------------ custom width -------------
  const [selectedWidthOption, setSelectedWidthOption] = useState(null)

  const handleWidthChange = (selected) => {
    setSelectedWidthOption(selected)
  }

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      width: '130px',
    }),
    control: (provided) => ({
      ...provided,
      width: 'auto',
    }),
  }

  // ------------ allow to add new -------------
  const [selectedNewOption, setSelectedNewOption] = useState(null)

  const [options, setOptions] = useState(getOptions(8))

  const handleNewChange = (selected) => {
    setSelectedNewOption(selected)
  }

  const handleCreate = (inputValue) => {
    const newOption = { label: inputValue, value: inputValue }
    setOptions((prevOptions) => [...prevOptions, newOption])
    setSelectedNewOption(newOption)
  }

  // ------------- Mark matched -------------
  const [selectedMarkOption, setSelectedMarkOption] = useState(null)

  const handleMarkChange = (selected) => {
    setSelectedMarkOption(selected)
  }

  // ----------- show selected ---------------
  const [selectedShowOption, setSelectedShowOption] = useState(null)

  const handleShowChange = (selected) => {
    setSelectedShowOption(selected)
  }

  // ----------- alias for search -------------
  const aliasOptions = [
    { label: 'Colors', value: 'colors', alias: 'Orange, Red' },
    { label: 'Fruits', value: 'fruits', alias: ['Orange', 'Apple'] },
    { label: 'Months', value: 'months', alias: 'January' },
    { label: 'Others', value: 'others' },
  ]

  // ------------ maximum option -------------
  const [selectedOptionsData, setSelectedOptionsData] = useState(null)

  const MAX_SELECTION = 4

  const handleOptionsChange = (selected) => {
    if (selected && selected.length > MAX_SELECTION) {
      // Optionally show an alert or a message if needed
      alert(`You can select a maximum of ${MAX_SELECTION} options.`)
      return
    }
    setSelectedOptionsData(selected)
  }

  // ----------- description -----------
  const [selectedDescriptionOption, setSelectedDescriptionOption] =
    useState(null)

  const handleDescriptionChange = (selected) => {
    setSelectedDescriptionOption(selected)
  }

  // ----------- show on search ------------
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const customFilterOption = (option, searchInput) => {
    return searchInput.length > 0 || option.data.value === 0
  }

  const handleInputChange = (newValue) => {
    setMenuIsOpen(true)
    return newValue
  }

  const handleMenuOpen = () => {
    setMenuIsOpen(true)
  }

  const handleMenuClose = () => {
    setMenuIsOpen(false)
  }

  // ----------- sample image ------------
  const ImageOptions = [
    {
      label: 'Options 1',
      value: '1',
      description: 'Description 1',
      classNames: 'fo',
    },
    {
      label: 'Options 2',
      value: '2',
      description: 'Description 2',
      classNames: 'nz',
    },
    {
      label: 'Options 3',
      value: '3',
      description: 'Description 3',
      classNames: 'bi',
    },
  ]

  const formatOptionLabel = ({ label, classNames }) => (
    <div className="custom-option">
      {classNames && (
        <i className={`flag flag-${classNames} ltr:mr-2 rtl:ml-2`} />
      )}
      {label}
    </div>
  )

  // -------- value as tag -----------
  const [selectedValueOptions, setSelectedValueOptions] = useState(null)

  const handleValueChange = (selected) => {
    setSelectedValueOptions(selected)
  }

  const customStylesValue = {
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: 'none',
        border: '1px solid #ddd',
        borderRadius: '20px',
        padding: '1px 3px 1px 3px',
      }
    },
    multiValueRemove: (styles) => ({
      ...styles,
      color: '#9ca3af',
      backgroundColor: 'none',
      ':hover': {
        backgroundColor: 'none',
        color: '#9ca3af',
      },
    }),
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Select" subTitle="Forms" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Default Select</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(3)}
              value={selectedOption}
              onChange={handleChange}
              placeholder="Select"
              id="sampleSelect"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">With search box</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(3)}
              value={selectedSearchOption}
              onChange={handleSearchChange}
              isSearchable={true}
              placeholder="Select"
              id="searchBoxSelect"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Multiple Select</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(3)}
              value={selectedMultiOption}
              onChange={handleMultiChange}
              isMulti={true}
              isSearchable={true}
              placeholder="Select"
              id="multipleSelect"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Multiple Select without Search</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              value={selectedMultiWithoutOption}
              onChange={handleMultiWithoutChange}
              isMulti={true}
              placeholder="Select"
              id="multipleWithoutSearchSelect"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Disabled options</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              value={selectedDisableOption}
              onChange={handleDisableChange}
              isMulti={true}
              isOptionDisabled={isOptionDisabled}
              placeholder="Select"
              id="disabledOptionSelect"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Option Group</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={groupedOptions}
              value={selectedGroupOption}
              onChange={handleGroupChange}
              placeholder="Select"
              id="optionGroupSelect"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Preselect value</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              value={selectedPresetOption}
              onChange={handlePresetChange}
              isOptionSelected={isOptionSelected}
              placeholder="Select"
              id="preselectValue"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Preselect multiple values</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              value={selectedPresetMultiOption}
              onChange={handlePresetMultiChange}
              isOptionSelected={isOptionMultiSelected}
              isMulti={true}
              placeholder="Select"
              id="preselectMultipleValue"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Hide Clear Button</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              value={selectedHideOption}
              onChange={handleHideChange}
              isClearable={false}
              placeholder="Select"
              id="hideClearButton"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Custom width for dropbox</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              value={selectedWidthOption}
              onChange={handleWidthChange}
              placeholder="Select"
              id="customWidthDropbox"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Allow to add new option</h6>
          </div>
          <div className="card-body">
            <CreatableSelect
              options={options}
              value={selectedNewOption}
              onChange={handleNewChange}
              onCreateOption={handleCreate}
              placeholder="Select or create new..."
              id="allowNewOption"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Mark matched term in label</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              value={selectedMarkOption}
              onChange={handleMarkChange}
              isSearchable={true}
              formatOptionLabel={(option, { inputValue }) => {
                const highlightedLabel = highlightText(option.label, inputValue)
                return <div>{highlightedLabel}</div>
              }}
              placeholder="Select"
              id="markMatchedLabel"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Showing selected options first</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={sortOptions(getOptions(8), selectedShowOption)}
              value={selectedShowOption}
              onChange={handleShowChange}
              isMulti={true}
              placeholder="Select"
              id="showingSelectedOption"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Using alias for searching</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={aliasOptions}
              filterOption={customFilterOption}
              placeholder="Select an option"
              id="aliasForSearching"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Maximum Values</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              value={selectedOptionsData}
              onChange={handleOptionsChange}
              isMulti={true}
              placeholder="Select"
              id="maximumValues"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Label with description</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(3)}
              value={selectedDescriptionOption}
              onChange={handleDescriptionChange}
              placeholder="Select"
              id="labelDescription"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Show options only on search</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(8)}
              onInputChange={handleInputChange}
              filterOption={customFilterOption}
              menuIsOpen={menuIsOpen}
              onMenuOpen={handleMenuOpen}
              onMenuClose={handleMenuClose}
              placeholder="Select"
              id="showOptionOnlyOnSearch"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">
              Initialize from native select element (not recommended)
            </h6>
          </div>
          <div className="card-body">
            <Select
              options={nativeOptions}
              value={selectedNativeOption}
              classNamePrefix="select"
              onChange={(e) => handleNativeChange(e)}
              isOptionDisabled={(option) => option?.isDisabled || false}
              placeholder="Select"
              id="nativeSelectReactSelect"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Image/Icon</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={ImageOptions}
              formatOptionLabel={formatOptionLabel}
              placeholder="Select"
              id="sample-image"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Show values as tags</h6>
          </div>
          <div className="card-body">
            <Select
              classNamePrefix="select"
              options={getOptions(5)}
              value={selectedValueOptions}
              onChange={handleValueChange}
              placeholder="Select"
              id="value-tag"
              isMulti={true}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SelectPage
