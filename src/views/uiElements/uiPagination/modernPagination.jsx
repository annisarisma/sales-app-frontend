import React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const ModernPagination = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-4">
        <div className="inline-flex items-center gap-3 overflow-hidden border border-gray-200 rounded-md dark:border-dark-800">
          <button
            type="button"
            className="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-r rtl:border-l border-gray-200 bg-gray-100 dark:border-dark-800 dark:bg-dark-850 hover:text-primary-500 [&.active]:text-primary-500 disabled:text-gray-500 dark:disabled:text-dark-500">
            <ChevronLeft className="ltr:inline-block rtl:hidden size-5" />
            <ChevronRight className="ltr:hidden rtl:inline-block size-5" />
          </button>
          <p className="text-gray-500 dark:text-dark-500">
            <b className="font-medium text-gray-800 dark:text-dark-100">04</b> /
            24
          </p>
          <button
            type="button"
            className="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-l rtl:border-r border-gray-200 bg-gray-100 dark:border-dark-800 dark:bg-dark-850 hover:text-primary-500 [&.active]:text-primary-500 disabled:text-gray-500 dark:disabled:text-dark-500">
            <ChevronRight className="ltr:inline-block rtl:hidden size-5" />
            <ChevronLeft className="rtl:inline-block ltr:hidden size-5" />
          </button>
        </div>

        <div className="inline-flex items-center gap-3 overflow-hidden border border-gray-200 rounded-full dark:border-dark-800">
          <button
            type="button"
            className="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-r rtl:border-l border-gray-200 bg-gray-100 dark:border-dark-800 dark:bg-dark-850 hover:text-primary-500 [&.active]:text-primary-500 disabled:text-gray-500 dark:disabled:text-dark-500">
            <ChevronLeft className="ltr:inline-block rtl:hidden size-5" />
            <ChevronRight className="ltr:hidden rtl:inline-block size-5" />
          </button>
          <p className="text-gray-500 dark:text-dark-500">
            <b className="font-medium text-gray-800 dark:text-dark-100">04</b> /
            24
          </p>
          <button
            type="button"
            className="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-l rtl:border-r border-gray-200 bg-gray-100 dark:border-dark-800 dark:bg-dark-850 hover:text-primary-500 [&.active]:text-primary-500 disabled:text-gray-500 dark:disabled:text-dark-500">
            <ChevronRight className="ltr:inline-block rtl:hidden size-5" />
            <ChevronLeft className="rtl:inline-block ltr:hidden size-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-5">
        <div className="inline-flex items-center gap-3 overflow-hidden border rounded-md border-primary-500 bg-primary-500">
          <button
            type="button"
            className="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-r rtl:border-l border-primary-200/20 bg-primary-500 text-primary-200 hover:text-white [&.active]:text-white disabled:text-primary-300">
            <ChevronLeft className="ltr:inline-block rtl:hidden size-5" />
            <ChevronRight className="ltr:hidden rtl:inline-block size-5" />
          </button>
          <p className="cursor-default text-primary-200">
            <b className="font-medium text-white">04</b> / 24
          </p>
          <button
            type="button"
            className="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-l rtl:border-r border-primary-200/20 bg-primary-500 text-primary-200 hover:text-white [&.active]:text-white disabled:text-primary-300">
            <ChevronRight className="ltr:inline-block rtl:hidden size-5" />
            <ChevronLeft className="rtl:inline-block ltr:hidden size-5" />
          </button>
        </div>

        <div className="inline-flex items-center gap-3 overflow-hidden bg-green-500 border border-green-500 rounded-full">
          <button
            type="button"
            className="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-r rtl:border-l border-green-200/20 bg-green-500 text-green-200 hover:text-white [&.active]:text-white disabled:text-green-300">
            <ChevronLeft className="ltr:inline-block rtl:hidden size-5" />
            <ChevronRight className="ltr:hidden rtl:inline-block size-5" />
          </button>
          <p className="text-green-200 cursor-default ">
            <b className="font-medium text-white">04</b> / 24
          </p>
          <button
            type="button"
            className="flex items-center justify-center text-sm transition duration-200 ease-linear size-9 ltr:border-l rtl:border-r border-green-200/20 bg-green-500 text-green-200 hover:text-white [&.active]:text-white disabled:text-green-300">
            <ChevronRight className="ltr:inline-block rtl:hidden size-5" />
            <ChevronLeft className="rtl:inline-block ltr:hidden size-5" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ModernPagination
