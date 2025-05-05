import React from 'react'

import student14 from '@assets/images/avatar/user-14.png'
import { Box, CalendarCheck, Mail, MapPin, Pencil, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const StudentInformation = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-8 2xl:col-span-9 xl:row-span-3">
        <div className="card">
          <div className="card-body">
            <div className="relative gap-4 mb-5 md:flex">
              <img
                src={student14}
                alt="student14Img"
                className="rounded-md size-36 shrink-0"
              />
              <div className="mt-5 grow md:mt-0">
                <h6 className="mb-2">Michael Johnson</h6>
                <div className="flex flex-wrap gap-3 mb-2 whitespace-nowrap item-center">
                  <p className="text-gray-500 dark:text-dark-500">
                    <Box className="inline-block size-4 fill-gray-100 dark:fill-dark-850" />{' '}
                    <span className="align-bottom">ClassName: 12 (A)</span>
                  </p>
                  <p className="text-gray-500 dark:text-dark-500">
                    <MapPin className="inline-block size-4 fill-gray-100 dark:fill-dark-850" />{' '}
                    <span className="align-bottom">California</span>
                  </p>
                  <p className="text-gray-500 dark:text-dark-500">
                    <CalendarCheck className="inline-block size-4 fill-gray-100 dark:fill-dark-850" />{' '}
                    <span className="align-bottom">05 Mar, 2007</span>
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
                <div className="flex gap-2 item-center">
                  <span className="badge badge-yellow">Learner (5)</span>
                  <span className="badge badge-green">Teacher (6)</span>
                  <span className="badge badge-purple">Skills (12)</span>
                </div>
              </div>
              <div className="absolute top-0 shrink-0 ltr:right-0 rtl:left-0">
                <Link
                  to="/apps/school/students-admission"
                  className="btn btn-sub-gray btn-icon">
                  <Pencil className="size-4" />
                </Link>
              </div>
            </div>
            <div className="my-5 space-y-5 overflow-x-auto whitespace-nowrap">
              <div className="flex">
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Gender
                  </p>
                  <h6>Male</h6>
                </div>
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Religion
                  </p>
                  <h6>Islam</h6>
                </div>
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Father Occupation
                  </p>
                  <h6>Web Developer</h6>
                </div>
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Admission Date
                  </p>
                  <h6>15 Jun 2024</h6>
                </div>
              </div>
              <div className="flex ">
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Roll No
                  </p>
                  <h6>8</h6>
                </div>
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Father Name
                  </p>
                  <h6>Mitchell Martin</h6>
                </div>
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Mother Name
                  </p>
                  <h6>Theresa Martin</h6>
                </div>
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Parents Number
                  </p>
                  <h6>+1 147 20 1478</h6>
                </div>
                <div className="w-[130px] md:w-[200px] shrink-0">
                  <div className="whitespace-normal">
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Address
                    </p>
                    <h6>1816 Angus Ave, Simi Valley, California</h6>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-4 text-gray-500 dark:text-dark-500">
              To achieve academic excellence and personal growth in ClassName 12
              (A) by mastering the curriculum, developing critical thinking
              skills, and preparing for higher education and future career
              opportunities.
            </p>
            <h6 className="mb-3">Curriculum Mastery</h6>
            <ul className="space-y-2 list-inside list-circle">
              <li className="text-gray-500 dark:text-dark-500">
                Thoroughly understand and excel in all subjects including
                Mathematics, Science (Physics, Chemistry, Biology), English, and
                Electives (such as Computer Science, Economics, History, etc.).
              </li>
              <li className="text-gray-500 dark:text-dark-500">
                Regularly complete assignments, projects, and laboratory work to
                apply theoretical knowledge.
              </li>
              <li className="text-gray-500 dark:text-dark-500">
                Engage in activities that enhance critical thinking, such as
                debates, discussions, and problem-solving exercises.
              </li>
              <li className="text-gray-500 dark:text-dark-500">
                Apply logic and reasoning to solve complex problems in subjects
                like Mathematics and Science.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentInformation
