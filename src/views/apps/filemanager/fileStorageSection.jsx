import React from 'react'

import upgradeImage from '@assets/images/file-manager/upgrade.png'
import { documents } from '@src/data/FileManager/files'

import StorageChart from './storageChart'

const FileStorageSection = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
        <div className="card">
          <div className="card-body">
            <div
              className="h-72"
              x-ref="basicBarChart"
              data-chart-colors="[bg-sky-500, bg-green-500]">
              <StorageChart />
            </div>

            <p className="text-center text-slate-500 dark:text-dark-500">
              Get an additional 500 GB of space for your documents and files.
            </p>
            <div className="flex flex-col gap-4 mt-space">
              {documents.map((document, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center justify-center p-2 rounded-md bg-gray-50 size-12 shrink-0 dark:bg-dark-850">
                    <img src={document.icon} alt="documentIcon" />
                  </div>
                  <div className="grow">
                    <h6 className="mb-1">
                      {document.count} {document.type}
                    </h6>
                    <p className="text-slate-500 dark:text-dark-500">
                      {document.size}
                    </p>
                  </div>
                  <p className="text-slate-500 dark:text-dark-500 shrink-0">
                    {document.percentage}
                  </p>
                </div>
              ))}
              <div className="pt-3 overflow-hidden rounded-md">
                <div className="mx-10">
                  <img src={upgradeImage} alt="upgradeImage" />
                </div>
                <div className="text-center p-space bg-primary-500/10">
                  <h6 className="mb-1">Get More space for files</h6>
                  <p className="mb-3 text-sm text-slate-500 dark:text-dark-500">
                    We offer your unlimited storage space for all your needs
                  </p>
                  <button type="button" className="w-full btn btn-primary">
                    Upgrade to Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FileStorageSection
