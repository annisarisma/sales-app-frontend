import React, { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { fileData } from '@src/data'
import { Upload } from 'lucide-react'
import { Link } from 'react-router-dom'

import ProjectsTabs from '../ProjectsTabs'

const ProjectsFiles = () => {
  const [files, setFiles] = useState(fileData)

  useEffect(() => {
    document.title = 'Files | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFiles((prevFiles) => [
        ...prevFiles,
        { name: file.name, size: file.size, type: file.type },
      ])
      event.target.value = ''
    }
  }

  const getIconClass = (fileType) => {
    if (typeof fileType === 'undefined') {
      return 'ri-file-text-line'
    }
    switch (true) {
      case fileType.startsWith('image/'):
        return 'ri-file-image-line'
      case fileType === 'application/pdf':
        return 'ri-file-pdf-2-line'
      case fileType.startsWith('audio/'):
        return 'ri-file-music-line'
      case fileType.startsWith('video/'):
        return 'ri-file-2-line'
      case fileType === 'application/msword' ||
        fileType ===
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'ri-file-word-line'
      case fileType === 'application/vnd.ms-excel' ||
        fileType ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return 'ri-file-excel-line'
      case fileType === 'application/vnd.ms-powerpoint' ||
        fileType ===
          'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        return 'ri-file-ppt-line'
      case fileType === 'application/zip' ||
        fileType === 'application/x-rar-compressed':
        return 'ri-file-zip-line'
      case fileType === 'text/plain':
        return 'ri-file-text-line'
      default:
        return 'ri-file-line'
    }
  }

  const formatSize = (sizeInBytes) => {
    if (sizeInBytes >= 1024 * 1024) {
      return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB'
    } else {
      return (sizeInBytes / 1024).toFixed(2) + ' KB'
    }
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Files" subTitle="Projects" />
      {/* tabs */}
      <ProjectsTabs />

      <div>
        <h5 className="text-16">
          Files (<span>{files.length}</span>)
        </h5>

        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-5">
          {files.map((file, index) => (
            <div key={index} className="relative text-center card">
              <div className="card-body">
                <i
                  className={`text-2xl fill-sky-500/10 ${getIconClass(file.type)}`}></i>
                <h6 className="mt-4 mb-1">
                  <Link
                    to="#!"
                    className="before:inset-0 before:absolute before:content-['']">
                    {file.name}
                  </Link>
                </h6>
                <p className="text-gray-500 dark:text-dark-500">
                  {formatSize(file.size)}
                </p>
              </div>
            </div>
          ))}

          <label className="relative flex flex-col items-center justify-center p-5 cursor-pointer border-primary-500/20 bg-primary-50 dark:bg-primary-500/10 dark:border-primary-500/20 card">
            <Upload className="inline-block mb-3 text-primary-500 size-7 fill-primary-500/20"></Upload>
            <span className="font-medium card-title text-primary-500">
              Upload file
            </span>
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </label>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectsFiles
