import React from 'react'

const CheckboxList = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 sm:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Checkbox List</h6>
        </div>
        <div className="card-body">
          <ul className="flex flex-col *:border-b *:border-gray-200 dark:*:border-dark-800 *:p-2">
            <li>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="checkboxList1"
                  name="checkboxListGroup"
                  className="shrink-0 border rounded-sm appearance-none cursor-pointer size-5 checked:bg-primary-500 checked:border-primary-500"
                />
                <label
                  htmlFor="checkboxList1"
                  className="cursor-pointer select-none">
                  Build functional APIs with zero coding.
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="checkboxList2"
                  name="checkboxListGroup"
                  className="shrink-0 border rounded-sm appearance-none cursor-pointer size-5 checked:bg-primary-500 checked:border-primary-500"
                />
                <label
                  htmlFor="checkboxList2"
                  className="cursor-pointer select-none">
                  Resources with permissions.
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="checkboxList3"
                  name="checkboxListGroup"
                  className="shrink-0 border rounded-sm appearance-none cursor-pointer size-5 checked:bg-primary-500 checked:border-primary-500"
                />
                <label
                  htmlFor="checkboxList3"
                  className="cursor-pointer select-none">
                  Built in user authentication.
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="checkboxList4"
                  name="checkboxListGroup"
                  className="shrink-0 border rounded-sm appearance-none cursor-pointer size-5 checked:bg-primary-500 checked:border-primary-500"
                />
                <label
                  htmlFor="checkboxList4"
                  className="cursor-pointer select-none">
                  Easy Integration with existing apps and tools.
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
export default CheckboxList
