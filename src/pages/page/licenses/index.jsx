import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import { Check, Headset, MessageCircleQuestion, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Licenses = () => {
  useEffect(() => {
    document.title = 'Licenses | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Licenses" subTitle="Pages" />

      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12">
          <div className="card">
            <div className="card-header">
              <h6>Standard Licenses</h6>
            </div>
            <div className="card-body">
              <p className="mb-5 text-gray-500 dark:text-dark-500">
                The majority of our items (themes, code, graphics, 3D and flash)
                are covered by our <b>Standard Licenses</b>. If your end product
                including the item is going to be free to the end user then a{' '}
                <b>Regular License</b> is what you need. An{' '}
                <b>Extended License</b> is required if the end user must pay to
                use the end product.
              </p>

              <div className="overflow-x-auto">
                <table className="table even-striped">
                  <tbody>
                    <tr>
                      <th></th>
                      <th>
                        <div>
                          <h6>Regular</h6>
                          <Link
                            to="#!"
                            className="text-sm font-normal text-gray-500 underline transition duration-300 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">
                            view full license
                          </Link>
                        </div>
                      </th>
                      <th>
                        <div>
                          <h6>Extended</h6>
                          <Link
                            to="#!"
                            className="text-sm font-normal text-gray-500 underline transition duration-300 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">
                            view full license
                          </Link>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">
                        Number of end products
                      </td>
                      <td className="text-center whitespace-nowrap">1</td>
                      <td className="text-center whitespace-nowrap">1</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">
                        Use in a single end product
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <Check className="mx-auto text-green-500 size-4" />
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <Check className="mx-auto text-green-500 size-4" />
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">
                        Use in a free end product
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <Check className="mx-auto text-green-500 size-4" />
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <Check className="mx-auto text-green-500 size-4" />
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">
                        Use in an end product that's sold
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <X className="mx-auto text-red-500 size-4" />
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <Check className="mx-auto text-green-500 size-4" />
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">
                        On-demand products/services
                      </td>
                      <td className="text-center whitespace-nowrap">
                        One license per each customized end produc
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <X className="mx-auto text-red-500 size-4" />
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">
                        Use in stock items/templates
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <X className="mx-auto text-red-500 size-4" />
                      </td>
                      <td className="text-center whitespace-nowrap">
                        <X className="mx-auto text-red-500 size-4" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6 className="mt-4 mb-2">
                Note to freelancers and creative agencies:
              </h6>
              <p className="mb-4 text-gray-500 dark:text-dark-500">
                You may charge your client for your services to create an end
                product, even under the Regular License. But you can’t use one
                of our Standard Licenses on multiple clients or jobs.
              </p>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="mb-0 card">
                  <div className="card-body">
                    <div className="flex items-center justify-center size-16 bg-gradient-to-b from-sky-500/10 rounded-modern">
                      <MessageCircleQuestion
                        data-lucide="message-circle-question"
                        className="relative stroke-1 text-sky-500 size-10 fill-sky-500/20"
                      />
                    </div>
                    <div className="mt-3">
                      <h6 className="mb-1">FAQ</h6>
                      <p className="mb-2 text-gray-500 dark:text-dark-500">
                        Did you know that the FAQs form part of the licenses?
                      </p>
                      <Link
                        to="https://themeforest.net/licenses/faq"
                        className="underline text-primary-500">
                        Read on for more details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-0 card">
                  <div className="card-body">
                    <div className="flex items-center justify-center size-16 bg-gradient-to-b from-red-500/10 rounded-modern">
                      <Headset className="relative text-red-500 stroke-1 size-10 fill-red-500/20" />
                    </div>
                    <div className="mt-3">
                      <h6 className="mb-1">Support</h6>
                      <p className="mb-2 text-gray-500 dark:text-dark-500">
                        Still have a burning question?
                      </p>
                      <Link
                        to="https://help.market.envato.com/hc/en-us"
                        className="underline text-primary-500">
                        Have a chat with our friendly Help Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Licenses
