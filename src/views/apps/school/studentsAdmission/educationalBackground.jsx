import React from 'react'

import { MoveLeft, MoveRight } from 'lucide-react'

const EducationalBackground = () => {
  return (
    <React.Fragment>
      <form
        action="#!"
        id="educationalBackgroundForm"
        x-ref="educationalBackgroundForm">
        <h6 className="mb-3">High School</h6>
        <div className="grid grid-cols-12 gap-space">
          <div className="col-span-12 sm:col-span-4">
            <label htmlFor="highSchoolNameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="highSchoolNameInput"
              className="form-input"
              placeholder="High school name"
              required
            />
          </div>
          <div className="col-span-12 sm:col-span-4">
            <label htmlFor="graduationYearInput" className="form-label">
              Graduation Year
            </label>
            <input
              type="text"
              id="graduationYearInput"
              className="form-input"
              placeholder="Years"
              required
            />
          </div>
          <div className="col-span-12 sm:col-span-4">
            <label htmlFor="gpaInput" className="form-label">
              GPA
            </label>
            <input
              type="text"
              id="gpaInput"
              className="form-input"
              placeholder="GPA"
              required
            />
          </div>
          <div className="col-span-12">
            <label htmlFor="majorFocusInput" className="form-label">
              Major/Focus
            </label>
            <input
              type="text"
              id="majorFocusInput"
              className="form-input"
              placeholder="Major/Focus"
              required
            />
          </div>
        </div>
        <h6 className="mt-5 mb-3">Undergraduate Institution</h6>
        <div className="grid grid-cols-12 gap-space">
          <div className="col-span-12 sm:col-span-4">
            <label htmlFor="instituteNameInput" className="form-label">
              Institute Name
            </label>
            <input
              type="text"
              id="instituteNameInput"
              className="form-input"
              placeholder="Institute name"
              required
            />
          </div>
          <div className="col-span-12 sm:col-span-4">
            <label htmlFor="underGraduationYearInput" className="form-label">
              Graduation Year
            </label>
            <input
              type="text"
              id="underGraduationYearInput"
              className="form-input"
              placeholder="Years"
              required
            />
          </div>
          <div className="col-span-12 sm:col-span-4">
            <label htmlFor="underGpaInput" className="form-label">
              GPA
            </label>
            <input
              type="text"
              id="underGpaInput"
              className="form-input"
              placeholder="GPA"
              required
            />
          </div>
          <div className="col-span-12">
            <label htmlFor="underMajorFocusInput" className="form-label">
              Major/Focus
            </label>
            <input
              type="text"
              id="underMajorFocusInput"
              className="form-input"
              placeholder="Major/Focus"
              required
            />
          </div>
        </div>

        <h6 className="mt-5 mb-3">Academic Achievements</h6>
        <div className="grid grid-cols-12 gap-space">
          <div className="col-span-12 sm:col-span-4">
            <label htmlFor="honorsAwardsInput" className="form-label">
              Honors/Awards
            </label>
            <input type="text" id="honorsAwardsInput" className="form-input" />
          </div>
          <div className="col-span-12 sm:col-span-4">
            <label
              htmlFor="extracurricularActivitiesInput"
              className="form-label">
              Extracurricular Activities
            </label>
            <input
              type="text"
              id="extracurricularActivitiesInput"
              className="form-input"
            />
          </div>
          <div className="col-span-12 sm:col-span-4">
            <label htmlFor="leadershipRolesInput" className="form-label">
              Leadership Roles
            </label>
            <input
              type="text"
              id="leadershipRolesInput"
              className="form-input"
            />
          </div>
          <div className="col-span-12">
            <label htmlFor="publicationsResearchInput" className="form-label">
              Publications/Research
            </label>
            <input
              type="text"
              id="publicationsResearchInput"
              className="form-input"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 mt-5">
          <button type="button" className="btn btn-sub-gray">
            <MoveLeft className="mr-1 ltr:inline-block rtl:hidden size-4" />
            <MoveRight className="ml-1 ltr:hidden rtl:inline-block size-4" />
            Previous
          </button>
          <button type="button" className="btn btn-primary">
            Save to Next
            <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
            <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default EducationalBackground
