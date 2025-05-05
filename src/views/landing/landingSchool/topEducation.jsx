import React from 'react'

import coatch from '@assets/images/school/landing/feature/coach.png'
import learning from '@assets/images/school/landing/feature/learning.png'
import onlineEducation from '@assets/images/school/landing/feature/online-education.png'
import selfImprove from '@assets/images/school/landing/feature/self-improvement.png'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const TopEducation = () => {
  return (
    <React.Fragment>
      <section className="relative pt-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="px-5 mb-4 badge badge-sub-orange text-15 py-1.5 rounded-full">
              Our Featured
            </span>
            <h2 className="mb-3 leading-normal capitalize">
              Top Education Offered by Domiex School
            </h2>
            <p className="text-gray-500 dark:text-dark-500 text-16">
              Our dedicated team of educators and comprehensive curriculum are
              designed to foster academic excellence and personal growth in
              every student.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space">
            <div>
              <div className="p-4 mb-3 rounded-lg bg-purple-500/10 size-20">
                <img
                  src={onlineEducation}
                  alt="onlineEducation"
                  width={48}
                  height={48}
                />
              </div>
              <h5 className="mb-1">Online Classes</h5>
              <p className="mb-3 text-gray-500 dark:text-dark-500 text-16">
                An online class is a course conducted over the Internet. They
                are generally conducted through a learning management.
              </p>
              <Link to="#!" className="link link-orange text-16">
                Read More{' '}
                <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
              </Link>
            </div>
            <div>
              <div className="p-4 mb-3 rounded-lg bg-10low-500/410 size-20">
                <img
                  src={selfImprove}
                  alt="selfImprove"
                  width={48}
                  height={48}
                />
              </div>
              <h5 className="mb-1">New Skills</h5>
              <p className="mb-3 text-gray-500 dark:text-dark-500 text-16">
                These life skills include problem solving, critical thinking,
                communication skills, decision-making, creative thinking.
              </p>
              <Link to="#!" className="link link-orange text-16">
                Read More{' '}
                <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
              </Link>
            </div>
            <div>
              <div className="p-4 mb-3 rounded-lg bg-sky-500/10 size-20">
                <img src={coatch} alt="coatch" width={48} height={48} />
              </div>
              <h5 className="mb-1">Best Trainer</h5>
              <p className="mb-3 text-gray-500 dark:text-dark-500 text-16">
                The Skills Trainer helps individuals develop the knowledge and
                abilities necessary to do their jobs effectively and
                efficiently.
              </p>
              <Link to="#!" className="link link-orange text-16">
                Read More{' '}
                <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
              </Link>
            </div>
            <div>
              <div className="p-4 mb-3 rounded-lg bg-emerald-500/10 size-20">
                <img src={learning} alt="learning" width={48} height={48} />
              </div>
              <h5 className="mb-1">Easy to Learn</h5>
              <p className="mb-3 text-gray-500 dark:text-dark-500 text-16">
                A fast learner is someone who embodies the skills of being a
                strategic a good listener and applies them to learning quickly.
              </p>
              <Link to="#!" className="link link-orange text-16">
                Read More{' '}
                <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default TopEducation
