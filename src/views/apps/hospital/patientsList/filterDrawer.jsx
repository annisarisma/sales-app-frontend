import React, { useState } from 'react'

import { Drawer } from '@src/components/CustomComponents/Drawer/Drawer'
import { MoveLeft, MoveRight, Search, X } from 'lucide-react'
import Select from 'react-select'

const doctorsOptions = [
  { label: 'Dr. Michael', value: 'Dr. Michael' },
  { label: 'Dr. Sarah', value: 'Dr. Sarah' },
  { label: 'Dr. Robert', value: 'Dr. Robert' },
  { label: 'Dr. Emily', value: 'Dr. Emily' },
  { label: 'Dr. James', value: 'Dr. James' },
  { label: 'Dr. Olivia', value: 'Dr. Olivia' },
  { label: 'Dr. David', value: 'Dr. David' },
  { label: 'Dr. Sophia', value: 'Dr. Sophia' },
  { label: 'Dr. William', value: 'Dr. William' },
  { label: 'Dr. Charlotte', value: 'Dr. Charlotte' },
]

const statusOptions = [
  { label: 'New', value: 'New' },
  { label: 'Follow Up', value: 'Follow Up' },
  { label: 'Old', value: 'Old' },
]

const insuranceOptions = [
  { label: 'Yes', value: 'Yes' },
  { label: 'No', value: 'No' },
]

const cityOptions = [
  { label: 'Algeria', value: 'Algeria' },
  { label: 'Argentina', value: 'Argentina' },
  { label: 'Belgium', value: 'Belgium' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Russia', value: 'Russia' },
  { label: 'Denmark', value: 'Denmark' },
  { label: 'Sudan', value: 'Sudan' },
  { label: 'Spain', value: 'Spain' },
  { label: 'Germany', value: 'Germany' },
  { label: 'Israel', value: 'Israel' },
  { label: 'Namibia', value: 'Namibia' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Poland', value: 'Poland' },
  { label: 'Serbia', value: 'Serbia' },
  { label: 'Malaysia', value: 'Malaysia' },
  { label: 'Norway', value: 'Norway' },
  { label: 'Romania', value: 'Romania' },
  { label: 'USA', value: 'USA' },
  { label: 'Canada', value: 'Canada' },
]

const genderOptions = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Others', value: 'Others' },
]

const FilterDrawer = ({ isDrawerOpen, closeDrawer, onFilterChange }) => {
  const [selectedDoctors, setSelectedDoctors] = useState(null)
  const [selectedStatus, setSelectedStatus] = useState(null)
  const [insuranceType, setInsuranceType] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedGender, setSelectedGender] = useState(null)

  const handleApplyFilters = () => {
    onFilterChange({
      doctor: selectedDoctors?.value,
      status: selectedStatus?.value,
      insurance: insuranceType?.value,
      city: selectedCity?.value,
      gender: selectedGender?.value,
    })
    closeDrawer()
  }
  const darkSelectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: '#0f172a',
      borderColor: state.isFocused ? '#3b82f6' : '#334155',
      color: '#f1f5f9',
      borderRadius: '0.5rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#3b82f6',
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#0f172a',
      borderRadius: '0.5rem',
      marginTop: '0.25rem',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#1e293b' : '#0f172a',
      color: '#f1f5f9',
      cursor: 'pointer',
    }),
    singleValue: (base) => ({
      ...base,
      color: '#f1f5f9',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#64748b',
    }),
  }
  const isDarkMode =
    typeof window !== 'undefined' &&
    document.documentElement.getAttribute('data-mode') === 'dark'

  return (
    <Drawer
      isOpen={isDrawerOpen}
      onClose={closeDrawer}
      position="right"
      title="Patients Filters"
      customContentClass="none"
      content={
        <div className="drawer">
          <div className="drawer-header">
            <h6>Patients Filters</h6>
            <button data-drawer-close="basicEnd">
              <X className="link link-red" onClick={closeDrawer}></X>
            </button>
          </div>
          <div className="drawer-content">
            <div className="relative mb-5 group/form">
              <input
                type="text"
                className="ltr:pl-9 rtl:pr-9 form-input"
                placeholder="Search for patients..."
                x-model="searchQuery"
              />
              <div className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-hidden">
                <Search className="size-4" />
              </div>
            </div>
            <div className="mb-5">
              <label>Doctor</label>
              <div className="mt-2">
                <Select
                  classNamePrefix="select"
                  value={selectedDoctors}
                  onChange={setSelectedDoctors}
                  options={doctorsOptions}
                  placeholder="Select Doctor"
                  styles={isDarkMode ? darkSelectStyles : undefined}
                />
              </div>
            </div>
            <div className="mb-5">
              <label>Status</label>
              <div className="mt-2"></div>
              <Select
                classNamePrefix="select"
                value={selectedStatus}
                onChange={setSelectedStatus}
                options={statusOptions}
                placeholder="Select Status"
                styles={isDarkMode ? darkSelectStyles : undefined}
              />
            </div>
            <div className="mb-5">
              <label>Insurance</label>
              <div className="mt-2"></div>
              <Select
                classNamePrefix="select"
                value={insuranceType}
                onChange={setInsuranceType}
                options={insuranceOptions}
                placeholder="Select Insurance"
                styles={isDarkMode ? darkSelectStyles : undefined}
              />
            </div>
            <div className="mb-5">
              <label>City</label>
              <div className="mt-2">
                <Select
                  classNamePrefix="select"
                  value={selectedCity}
                  onChange={setSelectedCity}
                  options={cityOptions}
                  placeholder="Select City"
                  styles={isDarkMode ? darkSelectStyles : undefined}
                />
              </div>
            </div>
            <div className="mb-5">
              <label>Gender</label>
              <div className="mt-2">
                <Select
                  classNamePrefix="select"
                  value={selectedGender}
                  onChange={setSelectedGender}
                  options={genderOptions}
                  placeholder="Select Gender"
                  styles={isDarkMode ? darkSelectStyles : undefined}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 p-4 border-t border-gray-200 dark:border-dark-800">
              <button
                type="button"
                className="btn btn-sub-gray"
                onClick={() => {
                  setSelectedDoctors(null)
                  setSelectedStatus(null)
                  setInsuranceType(null)
                  setSelectedCity(null)
                  setSelectedGender(null)
                }}>
                Reset
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-drawer-close="filterSidebar"
                onClick={handleApplyFilters}>
                Filters
                <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
              </button>
            </div>
          </div>
        </div>
      }
      footer={<></>}
    />
  )
}

export default FilterDrawer
