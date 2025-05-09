import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

const CheckboxRadio = () => {
  useEffect(() => {
    document.title =
      'Checkbox & Radio | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Checkbox & Radio" subTitle="Form" />
      <h6 className="mb-2 font-semibold text-15">Checkbox</h6>
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="flex flex-col gap-2 card-body">
            <div className="input-check-group">
              <input
                id="checkboxBasic1"
                className="input-check input-check-primary"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic1" className="input-check-label">
                Default
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic2"
                className="input-check input-check-purple"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic2" className="input-check-label">
                Purple
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic3"
                className="input-check input-check-green"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic3" className="input-check-label">
                Green
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic4"
                className="input-check input-check-red"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic4" className="input-check-label">
                Red
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic5"
                className="input-check input-check-yellow"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic5" className="input-check-label">
                Yellow
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic6"
                className="input-check input-check-sky"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic6" className="input-check-label">
                Sky
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic7"
                className="input-check input-check-pink"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic7" className="input-check-label">
                Pink
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic8"
                className="input-check input-check-indigo"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic8" className="input-check-label">
                Indigo
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic9"
                className="input-check input-check-orange"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic9" className="input-check-label">
                Orange
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxBasic10"
                className="input-check input-check-gray"
                type="checkbox"
              />
              <label htmlFor="checkboxBasic10" className="input-check-label">
                Gray
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Circle</h6>
          </div>
          <div className="flex flex-col gap-2 card-body">
            <div className="input-check-group">
              <input
                id="checkboxOutline1"
                className="rounded-full input-check input-check-primary"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline1" className="input-check-label">
                Default
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline2"
                className="rounded-full input-check input-check-purple"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline2" className="input-check-label">
                Purple
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline3"
                className="rounded-full input-check input-check-green"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline3" className="input-check-label">
                Green
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline4"
                className="rounded-full input-check input-check-red"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline4" className="input-check-label">
                Red
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline5"
                className="rounded-full input-check input-check-yellow"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline5" className="input-check-label">
                Yellow
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline6"
                className="rounded-full input-check input-check-sky"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline6" className="input-check-label">
                Sky
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline7"
                className="rounded-full input-check input-check-pink"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline7" className="input-check-label">
                Pink
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline8"
                className="rounded-full input-check input-check-indigo"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline8" className="input-check-label">
                Indigo
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline9"
                className="rounded-full input-check input-check-orange"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline9" className="input-check-label">
                Orange
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxOutline10"
                className="rounded-full input-check input-check-gray"
                type="checkbox"
              />
              <label htmlFor="checkboxOutline10" className="input-check-label">
                Gray
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Soft Checkbox</h6>
          </div>
          <div className="flex flex-col gap-2 card-body">
            <div className="input-check-group">
              <input
                id="checkboxSoft1"
                className="input-check input-check-soft-primary"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft1" className="input-check-label">
                Default
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft2"
                className="input-check input-check-soft-purple"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft2" className="input-check-label">
                Purple
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft3"
                className="input-check input-check-soft-green"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft3" className="input-check-label">
                Green
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft4"
                className="input-check input-check-soft-red"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft4" className="input-check-label">
                Red
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft5"
                className="input-check input-check-soft-yellow"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft5" className="input-check-label">
                Yellow
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft6"
                className="input-check input-check-soft-sky"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft6" className="input-check-label">
                Sky
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft7"
                className="input-check input-check-soft-pink"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft7" className="input-check-label">
                Pink
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft8"
                className="input-check input-check-soft-indigo"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft8" className="input-check-label">
                Indigo
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft9"
                className="input-check input-check-soft-orange"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft9" className="input-check-label">
                Orange
              </label>
            </div>
            <div className="input-check-group">
              <input
                id="checkboxSoft10"
                className="input-check input-check-soft-gray"
                type="checkbox"
              />
              <label htmlFor="checkboxSoft10" className="input-check-label">
                Gray
              </label>
            </div>
          </div>
        </div>
      </div>

      <h6 className="mb-2 font-semibold text-15">Radio Example</h6>
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="space-y-3 card-body">
            <div className="input-radio-group">
              <input
                id="radioBasic1"
                className="input-radio input-radio-primary"
                type="radio"
              />
              <label htmlFor="radioBasic1" className="input-radio-label">
                Default
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic2"
                className="input-radio input-radio-purple"
                type="radio"
              />
              <label htmlFor="radioBasic2" className="input-radio-label">
                Purple
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic3"
                className="input-radio input-radio-green"
                type="radio"
              />
              <label htmlFor="radioBasic3" className="input-radio-label">
                Green
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic4"
                className="input-radio input-radio-red"
                type="radio"
              />
              <label htmlFor="radioBasic4" className="input-radio-label">
                Red
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic5"
                className="input-radio input-radio-yellow"
                type="radio"
              />
              <label htmlFor="radioBasic5" className="input-radio-label">
                Yellow
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic6"
                className="input-radio input-radio-sky"
                type="radio"
              />
              <label htmlFor="radioBasic6" className="input-radio-label">
                Sky
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic7"
                className="input-radio input-radio-pink"
                type="radio"
              />
              <label htmlFor="radioBasic7" className="input-radio-label">
                Pink
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic8"
                className="input-radio input-radio-indigo"
                type="radio"
              />
              <label htmlFor="radioBasic8" className="input-radio-label">
                Indigo
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic9"
                className="input-radio input-radio-orange"
                type="radio"
              />
              <label htmlFor="radioBasic9" className="input-radio-label">
                Orange
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic10"
                className="input-radio input-radio-gray"
                type="radio"
              />
              <label htmlFor="radioBasic10" className="input-radio-label">
                Gray
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Square</h6>
          </div>
          <div className="space-y-3 card-body">
            <div className="input-radio-group">
              <input
                id="radioBasic11"
                className="rounded-none input-radio input-radio-primary"
                type="radio"
              />
              <label htmlFor="radioBasic11" className="input-radio-label">
                Default
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic12"
                className="rounded-none input-radio input-radio-purple"
                type="radio"
              />
              <label htmlFor="radioBasic12" className="input-radio-label">
                Purple
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic13"
                className="rounded-none input-radio input-radio-green"
                type="radio"
              />
              <label htmlFor="radioBasic13" className="input-radio-label">
                Green
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic14"
                className="rounded-none input-radio input-radio-red"
                type="radio"
              />
              <label htmlFor="radioBasic14" className="input-radio-label">
                Red
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic15"
                className="rounded-none input-radio input-radio-yellow"
                type="radio"
              />
              <label htmlFor="radioBasic15" className="input-radio-label">
                Yellow
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic16"
                className="rounded-none input-radio input-radio-sky"
                type="radio"
              />
              <label htmlFor="radioBasic16" className="input-radio-label">
                Sky
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic17"
                className="rounded-none input-radio input-radio-pink"
                type="radio"
              />
              <label htmlFor="radioBasic17" className="input-radio-label">
                Pink
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic18"
                className="rounded-none input-radio input-radio-indigo"
                type="radio"
              />
              <label htmlFor="radioBasic18" className="input-radio-label">
                Indigo
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic19"
                className="rounded-none input-radio input-radio-orange"
                type="radio"
              />
              <label htmlFor="radioBasic19" className="input-radio-label">
                Orange
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic20"
                className="rounded-none input-radio input-radio-gray"
                type="radio"
              />
              <label htmlFor="radioBasic20" className="input-radio-label">
                Gray
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Soft Checkbox</h6>
          </div>
          <div className="space-y-3 card-body">
            <div className="input-radio-group">
              <input
                id="radioBasic21"
                className="input-radio input-radio-soft-primary"
                type="radio"
              />
              <label htmlFor="radioBasic21" className="input-radio-label">
                Default
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic22"
                className="input-radio input-radio-soft-purple"
                type="radio"
              />
              <label htmlFor="radioBasic22" className="input-radio-label">
                Purple
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic23"
                className="input-radio input-radio-soft-green"
                type="radio"
              />
              <label htmlFor="radioBasic23" className="input-radio-label">
                Green
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic24"
                className="input-radio input-radio-soft-red"
                type="radio"
              />
              <label htmlFor="radioBasic24" className="input-radio-label">
                Red
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic25"
                className="input-radio input-radio-soft-yellow"
                type="radio"
              />
              <label htmlFor="radioBasic25" className="input-radio-label">
                Yellow
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic26"
                className="input-radio input-radio-soft-sky"
                type="radio"
              />
              <label htmlFor="radioBasic26" className="input-radio-label">
                Sky
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic27"
                className="input-radio input-radio-soft-pink"
                type="radio"
              />
              <label htmlFor="radioBasic27" className="input-radio-label">
                Pink
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic28"
                className="input-radio input-radio-soft-indigo"
                type="radio"
              />
              <label htmlFor="radioBasic28" className="input-radio-label">
                Indigo
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic29"
                className="input-radio input-radio-soft-orange"
                type="radio"
              />
              <label htmlFor="radioBasic29" className="input-radio-label">
                Orange
              </label>
            </div>
            <div className="input-radio-group">
              <input
                id="radioBasic30"
                className="input-radio input-radio-soft-gray"
                type="radio"
              />
              <label htmlFor="radioBasic30" className="input-radio-label">
                Gray
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Card Selected</h6>
          </div>
          <div className="card-body">
            <div className="space-y-2">
              <label
                htmlFor="apple"
                className="has-[:checked]:ring-primary-500/20 cursor-pointer has-[:checked]:text-primary-500 has-[:checked]:bg-primary-500/10 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-gray-100 dark:hover:bg-dark-850">
                <svg className="w-8" fill="currentColor" viewBox="0 0 24 13">
                  <path d="M3.96299 1.735C3.22833 1.73504 2.50814 1.9393 1.88285 2.32497C1.25756 2.71063 0.751781 3.26252 0.42199 3.919C0.144511 4.47115 0 5.08054 0 5.6985C0 6.31645 0.144511 6.92584 0.42199 7.478C0.751781 8.13447 1.25756 8.68636 1.88285 9.07202C2.50814 9.45769 3.22833 9.66195 3.96299 9.662C5.03299 9.662 5.93299 9.31 6.58999 8.705C7.33799 8.015 7.76999 6.995 7.76999 5.789C7.76976 5.51882 7.74634 5.24916 7.69999 4.983H3.96399V6.509H6.10399C6.06043 6.75276 5.96798 6.98519 5.83221 7.19228C5.69644 7.39937 5.52016 7.57684 5.31399 7.714C4.95799 7.955 4.49999 8.093 3.96399 8.093C2.92999 8.093 2.05299 7.396 1.73899 6.457C1.57315 5.96493 1.57315 5.43207 1.73899 4.94C2.05299 4 2.92999 3.304 3.96399 3.304C4.52899 3.29475 5.07496 3.50811 5.48399 3.898L6.61599 2.768C5.89873 2.09384 4.94728 1.72362 3.96299 1.735ZM10.464 2.285V9.185H11.35V6.39H12.815C13.418 6.39 13.925 6.194 14.337 5.802C14.5421 5.61815 14.705 5.39214 14.8146 5.13945C14.9242 4.88676 14.9779 4.61337 14.972 4.338C14.9762 4.06405 14.9216 3.79238 14.8121 3.54125C14.7026 3.29011 14.5406 3.06533 14.337 2.882C14.1354 2.68674 13.897 2.53337 13.6358 2.43073C13.3746 2.32809 13.0956 2.27822 12.815 2.284L10.464 2.285ZM12.891 3.135C13.0456 3.13769 13.1981 3.17139 13.3395 3.23408C13.4808 3.29678 13.6082 3.3872 13.714 3.5C13.8267 3.60959 13.9162 3.74065 13.9774 3.88544C14.0385 4.03024 14.07 4.18582 14.07 4.343C14.07 4.50017 14.0385 4.65576 13.9774 4.80055C13.9162 4.94534 13.8267 5.07641 13.714 5.186C13.6007 5.30328 13.4642 5.39562 13.3132 5.45709C13.1622 5.51857 13 5.54783 12.837 5.543H11.35V3.135H12.837C12.855 3.13458 12.873 3.13458 12.891 3.135ZM17.015 4.31C16.173 4.31 15.538 4.618 15.108 5.235L15.889 5.726C16.177 5.309 16.569 5.1 17.064 5.1C17.3798 5.09612 17.6855 5.21145 17.92 5.423C18.0354 5.51846 18.1282 5.63844 18.1915 5.77423C18.2548 5.91001 18.2871 6.05818 18.286 6.208V6.41C17.946 6.217 17.512 6.121 16.986 6.121C16.369 6.121 15.876 6.266 15.507 6.555C15.137 6.843 14.953 7.232 14.953 7.72C14.949 7.9396 14.994 8.15734 15.0848 8.35733C15.1757 8.55732 15.31 8.73451 15.478 8.876C15.828 9.184 16.263 9.339 16.783 9.339C17.393 9.339 17.881 9.069 18.248 8.529H18.286V9.184H19.134V6.275C19.134 5.665 18.944 5.185 18.566 4.835C18.186 4.485 17.67 4.31 17.015 4.31ZM19.278 4.464L21.224 8.886L20.126 11.266H21.041L24 4.463H23.035L21.667 7.854H21.647L20.241 4.464H19.278ZM17.132 6.832C17.626 6.832 18.012 6.942 18.288 7.162C18.288 7.534 18.141 7.858 17.848 8.135C17.5835 8.39951 17.225 8.54839 16.851 8.549C16.6011 8.55376 16.3573 8.47178 16.161 8.317C16.0697 8.25093 15.9954 8.16402 15.9445 8.06349C15.8935 7.96295 15.8673 7.85171 15.868 7.739C15.868 7.482 15.988 7.269 16.231 7.092C16.471 6.919 16.772 6.832 17.132 6.832Z"></path>
                </svg>
                Google Pay
                <input
                  name="payment_method"
                  id="apple"
                  value="google"
                  type="radio"
                  className="input-radio input-radio-primary"
                  defaultChecked
                />
              </label>
              <label
                htmlFor="google"
                className="has-[:checked]:ring-primary-500/20 cursor-pointer has-[:checked]:text-primary-500 has-[:checked]:bg-primary-500/10 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-gray-100 dark:hover:bg-dark-850">
                <svg
                  className="w-8 mt-1 fill-current"
                  fill="currentColor"
                  viewBox="0 0 24 13">
                  <path d="M4.38526 1.86704C4.10401 2.19606 3.65392 2.45565 3.20387 2.41854C3.14762 1.97367 3.36793 1.50091 3.62579 1.20892C3.90704 0.870635 4.39932 0.62962 4.79781 0.611084C4.84468 1.07453 4.66182 1.52871 4.38526 1.86704ZM4.79312 2.50663C4.14146 2.46956 3.5836 2.87272 3.27418 2.87272C2.96012 2.87272 2.48659 2.52517 1.97092 2.53443C1.30056 2.5437 0.677025 2.91906 0.33479 3.51694C-0.368428 4.71265 0.151978 6.48308 0.831712 7.45632C1.16457 7.9383 1.56306 8.46662 2.0881 8.44809C2.58507 8.42955 2.78195 8.12834 3.38204 8.12834C3.98677 8.12834 4.16026 8.44809 4.68531 8.43882C5.2291 8.42955 5.57134 7.95688 5.9042 7.47485C6.28388 6.92799 6.43862 6.39499 6.44799 6.36718C6.43862 6.35791 5.3979 5.96402 5.38853 4.77753C5.37915 3.78576 6.20893 3.31304 6.24643 3.28524C5.77759 2.59931 5.04629 2.52517 4.79312 2.50663ZM8.55765 1.16258V8.38789H9.69212V5.91768H11.2626C12.6971 5.91768 13.7051 4.94445 13.7051 3.53552C13.7051 2.12664 12.7159 1.16262 11.3001 1.16262H8.5576L8.55765 1.16258ZM9.69212 2.10806H11.0001C11.9846 2.10806 12.5471 2.62711 12.5471 3.54011C12.5471 4.4531 11.9846 4.97684 10.9954 4.97684H9.69212V2.10806ZM15.7772 8.44345C16.4898 8.44345 17.1508 8.08664 17.4508 7.52119H17.4743V8.38785H18.5244V4.79143C18.5244 3.74868 17.6806 3.07666 16.3819 3.07666C15.1771 3.07666 14.2864 3.75795 14.2536 4.69412H15.2756C15.36 4.24921 15.7771 3.95722 16.3491 3.95722C17.043 3.95722 17.4321 4.27701 17.4321 4.86562V5.26415L16.0163 5.34756C14.6989 5.42634 13.9864 5.95934 13.9864 6.88629C13.9864 7.82245 14.7224 8.44345 15.7772 8.44345ZM16.0819 7.58607C15.4772 7.58607 15.0927 7.29876 15.0927 6.85844C15.0927 6.4043 15.4631 6.14012 16.171 6.09841L17.4321 6.01963V6.42743C17.4321 7.10408 16.8508 7.58607 16.0819 7.58607H16.0819ZM19.9261 10.3529C21.0325 10.3529 21.5529 9.93584 22.0076 8.67057L24 3.14617H22.8467L21.5107 7.41456H21.4872L20.1511 3.14617H18.9651L20.8871 8.40638L20.784 8.72618C20.6106 9.2684 20.3293 9.47698 19.8277 9.47698C19.7386 9.47698 19.5652 9.46771 19.4948 9.45844V10.3251C19.5604 10.3436 19.8417 10.3529 19.9261 10.3529Z"></path>
                </svg>
                Apple Pay
                <input
                  name="payment_method"
                  id="google"
                  value="apple"
                  type="radio"
                  className="input-radio input-radio-primary"
                />
              </label>
              <label
                htmlFor="credit-card"
                className="has-[:checked]:ring-primary-500/20 cursor-pointer has-[:checked]:text-primary-500 has-[:checked]:bg-primary-500/10 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-gray-100 dark:hover:bg-dark-850">
                <svg className="w-8" viewBox="0 0 24 13" fill="none">
                  <rect
                    stroke="currentColor"
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="11"
                    rx="1.5"></rect>
                  <path
                    fill="currentColor"
                    d="M16.539 3.18591C16.0742 3.01652 15.5828 2.93152 15.088 2.93491C13.488 2.93491 12.358 3.74091 12.35 4.89791C12.34 5.74791 13.153 6.22691 13.768 6.51091C14.399 6.80291 14.61 6.98691 14.608 7.24791C14.604 7.64491 14.104 7.82491 13.639 7.82491C13 7.82491 12.651 7.73591 12.114 7.51291L11.915 7.41991L11.688 8.75191C12.077 8.91391 12.778 9.05291 13.502 9.06491C15.203 9.06491 16.315 8.26391 16.328 7.03291C16.342 6.35391 15.902 5.84091 14.976 5.41691C14.413 5.14191 14.064 4.95791 14.064 4.67891C14.064 4.43191 14.363 4.16791 14.988 4.16791C15.404 4.15785 15.8174 4.23589 16.201 4.39691L16.351 4.46391L16.578 3.17691L16.539 3.18591ZM20.691 3.04291H19.441C19.052 3.04291 18.759 3.14991 18.589 3.53591L16.185 8.98191H17.886L18.226 8.08891L20.302 8.09091C20.351 8.29991 20.501 8.98191 20.501 8.98191H22.001L20.691 3.04291ZM10.049 2.99291H11.67L10.656 8.93491H9.03705L10.049 2.99091V2.99291ZM5.93405 6.26791L6.10205 7.09291L7.68605 3.04291H9.40305L6.85205 8.97391H5.13905L3.73905 3.95191C3.71637 3.8691 3.66312 3.79798 3.59005 3.75291C3.08545 3.49225 2.55079 3.29444 1.99805 3.16391L2.02005 3.03891H4.62905C4.98305 3.05291 5.26805 3.16391 5.36305 3.54191L5.93305 6.27091L5.93405 6.26791ZM18.691 6.87391L19.337 5.21191C19.329 5.22991 19.47 4.86891 19.552 4.64591L19.663 5.15891L20.038 6.87291H18.69L18.691 6.87391Z"></path>
                </svg>
                Credit Card
                <input
                  name="payment_method"
                  id="credit-card"
                  value="credit-card"
                  type="radio"
                  className="input-radio input-radio-primary"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Do To List</h6>
          </div>
          <div className="card-body">
            <fieldset className="space-y-3">
              <legend className="text-base font-semibold text-gray-900 dark:text-gray-200">
                Today
              </legend>
              <div className="grid grid-cols-[1fr_24px] items-center gap-6">
                <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="input-check peer input-check-red"
                    defaultChecked
                  />
                  <span className="select-none peer-checked:text-gray-500 dark:peer-checked:text-dark-500 peer-checked:line-through">
                    Create a to do list
                  </span>
                </label>
                <Link
                  to="#!"
                  className="size-5 rounded-md flex items-center justify-center text-gray-500 dark:text-dark-500 hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-500 peer-has-[:checked]:hidden">
                  <X className="size-4" />
                </Link>
              </div>
              <div className="grid grid-cols-[1fr_24px] items-center gap-6">
                <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="input-check peer input-check-red"
                  />
                  <span className="select-none peer-checked:text-gray-500 dark:peer-checked:text-dark-500 peer-checked:line-through">
                    Check off first item
                  </span>
                </label>
                <Link
                  to="#!"
                  className="size-5 rounded-md flex items-center justify-center text-gray-500 dark:text-dark-500 hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-500 peer-has-[:checked]:hidden">
                  <X className="size-4" />
                </Link>
              </div>
              <div className="grid grid-cols-[1fr_24px] items-center gap-6">
                <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="input-check peer input-check-red"
                  />
                  <span className="select-none peer-checked:text-gray-500 dark:peer-checked:text-dark-500 peer-checked:line-through">
                    Investigate race condition
                  </span>
                </label>
                <Link
                  to="#!"
                  className="size-5 rounded-md flex items-center justify-center text-gray-500 dark:text-dark-500 hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-500 peer-has-[:checked]:hidden">
                  <X className="size-4" />
                </Link>
              </div>
              <div className="grid grid-cols-[1fr_24px] items-center gap-6">
                <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="input-check peer input-check-red"
                  />
                  <span className="select-none peer-checked:text-gray-500 dark:peer-checked:text-dark-500 peer-checked:line-through">
                    Check off first item
                  </span>
                </label>
                <Link
                  to="#!"
                  className="size-5 rounded-md flex items-center justify-center text-gray-500 dark:text-dark-500 hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-500 peer-has-[:checked]:hidden">
                  <X className="size-4" />
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default CheckboxRadio
