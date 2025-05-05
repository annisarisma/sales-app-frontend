import React, { useEffect, useState } from 'react'

import user13 from '@assets/images/avatar/user-13.png'
import BreadCrumb from '@common//BreadCrumb'
import { Upload } from 'lucide-react'

const FileInput = () => {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    document.title = 'File Input | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageUrl(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <React.Fragment>
      <BreadCrumb title="File Input" subTitle="Forms" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="basicInput1" className="form-label">
                  Light File Input
                </label>
                <input
                  type="file"
                  id="basicInput1"
                  className="form-file form-file-light"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="basicInput2" className="form-label">
                  Dark File Input
                </label>
                <input type="file" id="basicInput2" className="form-file" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="basicInput3" className="form-label">
                  Small File Input
                </label>
                <input
                  type="file"
                  id="basicInput3"
                  className="form-file form-file-sm form-file-light"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="basicInput4" className="form-label">
                  Medium File Input
                </label>
                <input
                  type="file"
                  id="basicInput4"
                  className="form-file form-file-md form-file-light"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="basicInput4" className="form-label">
                  Default File Input
                </label>
                <input
                  type="file"
                  id="basicInput4"
                  className="form-file form-file-light"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="basicInput4" className="form-label">
                  Large File Input
                </label>
                <input
                  type="file"
                  id="basicInput4"
                  className="form-file form-file-lg form-file-light"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Upload User Profile</h6>
          </div>
          <div className="card-body">
            <div className="text-sm">
              <div>
                <label htmlFor="logo">
                  <div className="inline-flex items-center justify-center overflow-hidden bg-gray-100 border border-gray-200 rounded-sm cursor-pointer dark:bg-dark-850 dark:border-dark-800 size-32">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        className="object-cover w-full h-full"
                        alt="Profile Preview"
                        width={126}
                        height={126}
                      />
                    ) : (
                      <div className="flex flex-col items-center text-gray-500 dark:text-dark-500">
                        <Upload className="size-4" />
                        <div className="mt-2">User Profile</div>
                      </div>
                    )}
                  </div>
                </label>
                <div className="mt-4">
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      name="logo"
                      id="logo"
                      onChange={handleFileChange}
                      className="block w-full text-sm file:cursor-pointer file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-500/10 file:text-violet-700 hover:file:bg-violet-500/15"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Upload User Profile</h6>
          </div>
          <div className="card-body">
            <form className="flex items-center space-x-6">
              <div className="shrink-0">
                <img
                  className="object-cover w-16 h-16 rounded-full"
                  src={user13}
                  alt="Current profile photo"
                />
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm file:cursor-pointer text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-500/10 file:text-violet-700 hover:file:bg-violet-500/15 "
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default FileInput
