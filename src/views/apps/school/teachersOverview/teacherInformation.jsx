import React from 'react'

import user14 from '@assets/images/avatar/user-4.png'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const TeacherInformation = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-8 2xl:col-span-9 xl:row-span-3">
        <div className="card">
          <div className="card-body">
            <div className="gap-4 mb-5 md:flex">
              <img
                src={user14}
                alt="user14Img"
                className="rounded-md size-32 shrink-0"
              />
              <div className="mt-5 grow md:mt-0">
                <h6 className="mb-1">Emily Davis</h6>
                <div className="flex gap-3 mb-4 item-center">
                  <p className="text-gray-500 dark:text-dark-500">
                    <i className="ri-building-line"></i>{' '}
                    <span className="align-bottom">Lecturer</span>
                  </p>
                  <p className="text-gray-500 dark:text-dark-500">
                    <i className="ri-map-pin-line"></i>{' '}
                    <span className="align-bottom">Argentina</span>
                  </p>
                  <p className="text-gray-500 dark:text-dark-500">
                    <i className="ri-calendar-event-line"></i>{' '}
                    <span className="align-bottom">12 Jul, 2024</span>
                  </p>
                </div>
                <p className="mb-2 text-gray-500 dark:text-dark-500">
                  <Phone className="inline-block size-4 fill-gray-100 dark:fill-dark-850" />{' '}
                  <span className="align-bottom">+1 712 25 1525</span>
                </p>
                <p className="mb-3 text-gray-500 dark:text-dark-500">
                  <Mail className="inline-block size-4 fill-gray-100 dark:fill-dark-850" />{' '}
                  <span className="align-bottom">michael@gmail.com</span>
                </p>
              </div>
              <div className="absolute top-0 shrink-0 ltr:right-0 rtl:left-0">
                <Link
                  to="/apps/school/teachers-list"
                  className="btn btn-sub-gray btn-icon">
                  <i data-lucide="pencil" className="size-4"></i>
                </Link>
              </div>
            </div>
            <div className="my-5 space-y-5 overflow-x-auto whitespace-nowrap">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">Title</p>
                  <h6>
                    <span className="badge badge-red">Lecturer</span>
                  </h6>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Gender
                  </p>
                  <h6>Female</h6>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Religion
                  </p>
                  <h6>Islam</h6>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Father Occupation
                  </p>
                  <h6>Web Developer</h6>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Joining Date
                  </p>
                  <h6>12 Jul 2024</h6>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Salary
                  </p>
                  <h6>$52,000</h6>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Experience
                  </p>
                  <h6>9 years</h6>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">Email</p>
                  <h6>davis@example.com</h6>
                </div>
                <div className="col-span-12 xl:col-span-6">
                  <div className="whitespace-normal">
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Address
                    </p>
                    <h6>1816 Angus Ave, Simi Valley, Argentina</h6>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-3 text-gray-500 dark:text-dark-500">
              As a dedicated and passionate lecturer, my objective is to create
              a dynamic and engaging learning environment that fosters
              intellectual growth and critical thinking. I aim to:
            </p>
            <ul className="space-y-2 list-inside list-circle">
              <li className="text-gray-500 dark:text-dark-500">
                <strong>Deliver High-Quality Education:</strong> Provide
                students with comprehensive, up-to-date knowledge in my field of
                expertise through well-structured lectures, interactive
                discussions, and practical applications.
              </li>
              <li className="text-gray-500 dark:text-dark-500">
                <strong>Encourage Critical Thinking:</strong> Inspire students
                to think critically and independently, encouraging them to
                challenge ideas and explore diverse perspectives.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TeacherInformation
