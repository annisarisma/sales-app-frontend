import React, { useEffect } from 'react'

import logoWhite from '@assets/images/logo-white.png'
import mainLogo from '@assets/images/main-logo.png'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import { Link } from 'react-router-dom'

import favicon from '../../../../../public/favicon.ico'

const PayrollPayslip = () => {
  useEffect(() => {
    document.title = 'Payslip | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handlePrint = () => {
    window.print()
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Payslip" subTitle="Payroll" />

      <div className="grid grid-cols-12 mb-space">
        <div className="relative col-span-12 xl:col-span-8 xl:col-start-3 card print:col-span-12 print:border-0 print:shadow-none">
          <img
            src={favicon}
            alt="favicon"
            className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-64 opacity-15"
          />
          <div className="card-body">
            <div className="grid grid-cols-12 pb-4 mb-4 border-b border-gray-200 dark:border-dark-800">
              <div className="col-span-12 md:col-span-5">
                <div className="mb-5">
                  <img
                    src={mainLogo}
                    alt="mainLogo"
                    className="inline-block h-8 dark:hidden"
                    width={175}
                    height={32}
                  />
                  <img
                    src={logoWhite}
                    alt="logoWhite"
                    className="hidden h-8 dark:inline-block"
                    width={175}
                    height={32}
                  />
                </div>
                <h6 className="mb-1">Domiex - Multispeciality Hospital</h6>
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  1960 Squaw Valley Rd, Olympic Valley, California, United
                  States - 96146
                </p>
                <p className="text-gray-500 dark:text-dark-500">
                  <Link to="mailto:domiex@example.com">domiex@example.com</Link>
                </p>
              </div>
            </div>

            {/* Employee Information Section */}
            <h6 className="mb-3">Employee Information:</h6>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-6">
                <span className="text-gray-500 dark:text-dark-500">
                  Employee ID:
                </span>{' '}
                PE-A14E0112
              </div>
              <div className="col-span-12 md:col-span-6">
                <span className="text-gray-500 dark:text-dark-500">
                  Employee Name:
                </span>{' '}
                Sophia Mia
              </div>
              <div className="col-span-12 md:col-span-6">
                <span className="text-gray-500 dark:text-dark-500">
                  Designation:
                </span>{' '}
                Accounts Specialist
              </div>
              <div className="col-span-12 md:col-span-6">
                <span className="text-gray-500 dark:text-dark-500">
                  Pay Period:
                </span>{' '}
                February
              </div>
              <div className="col-span-12 md:col-span-6">
                <span className="text-gray-500 dark:text-dark-500">
                  Department:
                </span>{' '}
                Finance
              </div>
              <div className="col-span-12 md:col-span-6">
                <span className="text-gray-500 dark:text-dark-500">Month:</span>{' '}
                Nov - Dec, 2024
              </div>
              <div className="col-span-12 md:col-span-6">
                <span className="text-gray-500 dark:text-dark-500">
                  Worked Days:
                </span>{' '}
                24 Days
              </div>
            </div>

            <div className="grid grid-cols-12 gap-space">
              <div className="col-span-12 md:col-span-6">
                <div className="mt-5 overflow-x-auto">
                  <table className="table bordered">
                    <tbody>
                      <tr className="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                        <th>Earnings</th>
                        <th>Amount</th>
                      </tr>
                      <tr>
                        <td>Basic Salary</td>
                        <td>$17,500</td>
                      </tr>
                      <tr>
                        <td>Incentive Pay</td>
                        <td>$900</td>
                      </tr>
                      <tr>
                        <td>Other Allowance</td>
                        <td>$450</td>
                      </tr>
                      <tr>
                        <td>Total Earnings</td>
                        <td>$18,850</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="mt-5 overflow-x-auto">
                  <table className="table bordered">
                    <tbody>
                      <tr className="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                        <th>Deduction</th>
                        <th>Amount</th>
                      </tr>
                      <tr>
                        <td>Tax</td>
                        <td>$700</td>
                      </tr>
                      <tr>
                        <td>Health Insurance</td>
                        <td>$1,100</td>
                      </tr>
                      <tr>
                        <td>Absences (3)</td>
                        <td>$1,245.22</td>
                      </tr>
                      <tr>
                        <td>Total Deduction</td>
                        <td>$3,045.22</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 mt-3 text-center border border-gray-200 rounded-md dark:border-dark-800">
                  <h6>Net Pay: $15,804.78</h6>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 mt-10">
              <div className="col-span-12">
                <p className="mb-2 text-gray-500 dark:text-dark-500">
                  For any Queries, Please mail us at{' '}
                  <span className="font-medium">domiex@example.com</span>
                </p>
                <p className="mb-1 text-gray-500 dark:text-dark-500">Regards</p>
                <p>SRBThemes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 text-right xl:col-span-8 xl:col-start-3 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="btn btn-primary">
            Print Now
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PayrollPayslip
