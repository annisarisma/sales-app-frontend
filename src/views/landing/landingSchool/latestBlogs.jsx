import React from 'react'

import image1 from '@assets/images/school/blog/img-01.jpg'
import image2 from '@assets/images/school/blog/img-02.jpg'
import image3 from '@assets/images/school/blog/img-03.jpg'
import image4 from '@assets/images/school/blog/img-04.jpg'
import { Calendar, MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const LatestBlogs = () => {
  return (
    <React.Fragment>
      <section className="relative py-12 md:pb-24" id="blogs">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-3 leading-normal capitalize">Latest Blogs</h2>
            <p className="text-gray-500 dark:text-dark-500 text-16">
              The state of blogs now. Short answer: yes. A recent survey found
              that over 60% of all internet users read blogs, while another
              found that 77% of internet users read blogs daily.
            </p>
          </div>
          <div className="grid grid-cols-1 flex flex-col gap-6 lg:grid-cols-2 md:gap-8 md:flex flex-col gap-0">
            <div className="grid items-center grid-cols-12 md:gap-8">
              <div className="col-span-12 md:col-span-4">
                <img src={image1} alt="blogImg" className="rounded-md" />
              </div>
              <div className="col-span-12 mt-5 md:col-span-8 md:mt-0">
                <p className="mb-2 text-gray-500 dark:text-dark-500">
                  <Calendar className="inline-block align-middle ltr:mr-1 rtl:ml-1 size-4" />{' '}
                  28 May, 2024
                </p>
                <h5 className="mb-1">
                  <Link
                    to="#!"
                    className="text-current link hover:text-primary-500 dark:hover:text-primary-500 dark:text-current">
                    3 Lessons Learned From X
                  </Link>
                </h5>
                <p className="mb-3 text-gray-500 dark:text-dark-500 line-clamp-2">
                  He boosted the self-esteem of Black Americans due to his
                  advocacy for black empowerment and self-determination.
                </p>
                <Link
                  to="#!"
                  className="font-medium text-orange-500 link hover:text-orange-600">
                  Read More{' '}
                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
                </Link>
              </div>
            </div>
            <div className="grid items-center grid-cols-12 md:gap-8">
              <div className="col-span-12 md:col-span-4">
                <img src={image2} alt="blogImg" className="rounded-md" />
              </div>
              <div className="col-span-12 mt-5 md:col-span-8 md:mt-0">
                <p className="mb-2 text-gray-500 dark:text-dark-500">
                  <Calendar className="inline-block align-middle ltr:mr-1 rtl:ml-1 size-4" />{' '}
                  29 May, 2024
                </p>
                <h5 className="mb-1">
                  <Link
                    to="#!"
                    className="text-current link hover:text-primary-500 dark:hover:text-primary-500 dark:text-current">
                    Edu-tainment: Fun and Engaging Lessons
                  </Link>
                </h5>
                <p className="mb-3 text-gray-500 dark:text-dark-500 line-clamp-2">
                  He boosted the self-esteem of Black Americans due to his
                  advocacy for black empowerment and self-determination.
                </p>
                <Link
                  to="#!"
                  className="font-medium text-orange-500 link hover:text-orange-600">
                  Read More{' '}
                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
                </Link>
              </div>
            </div>
            <div className="grid items-center grid-cols-12 md:gap-8">
              <div className="col-span-12 md:col-span-4">
                <img src={image3} alt="blogImg" className="rounded-md" />
              </div>
              <div className="col-span-12 mt-5 md:col-span-8 md:mt-0">
                <p className="mb-2 text-gray-500 dark:text-dark-500">
                  <Calendar className="inline-block align-middle ltr:mr-1 rtl:ml-1 size-4" />{' '}
                  22 May, 2024
                </p>
                <h5 className="mb-1">
                  <Link
                    to="#!"
                    className="text-current link hover:text-primary-500 dark:hover:text-primary-500 dark:text-current">
                    The Power of Education: Changing Lives
                  </Link>
                </h5>
                <p className="mb-3 text-gray-500 dark:text-dark-500 line-clamp-2">
                  He boosted the self-esteem of Black Americans due to his
                  advocacy for black empowerment and self-determination.
                </p>
                <Link
                  to="#!"
                  className="font-medium text-orange-500 link hover:text-orange-600">
                  Read More{' '}
                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
                </Link>
              </div>
            </div>
            <div className="grid items-center grid-cols-12 md:gap-8">
              <div className="col-span-12 md:col-span-4">
                <img src={image4} alt="blogImg" className="rounded-md" />
              </div>
              <div className="col-span-12 mt-5 md:col-span-8 md:mt-0">
                <p className="mb-2 text-gray-500 dark:text-dark-500">
                  <Calendar className="inline-block align-middle ltr:mr-1 rtl:ml-1 size-4" />{' '}
                  20 May, 2024
                </p>
                <h5 className="mb-1">
                  <Link
                    to="#!"
                    className="text-current link hover:text-primary-500 dark:hover:text-primary-500 dark:text-current">
                    Teaching with Purpose: Inspiring Lessons
                  </Link>
                </h5>
                <p className="mb-3 text-gray-500 dark:text-dark-500 line-clamp-2">
                  He boosted the self-esteem of Black Americans due to his
                  advocacy for black empowerment and self-determination.
                </p>
                <Link
                  to="#!"
                  className="font-medium text-orange-500 link hover:text-orange-600">
                  Read More{' '}
                  <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                  <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default LatestBlogs
