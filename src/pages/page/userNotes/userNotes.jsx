import React from 'react'

import image1 from '@assets/images/gallery/img-01.jpg'
import highQuality from '@assets/images/others/high-quality.png'
import new1 from '@assets/images/others/new.png'
import quality from '@assets/images/others/quality.png'
import reward from '@assets/images/others/reward.png'
import {
  BriefcaseBusiness,
  Cake,
  Globe,
  Mail,
  MapPin,
  Monitor,
  Pencil,
  Phone,
  Trash2,
  Twitter,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const UserNotesContent = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 mt-5 gap-x-5">
        <div className="col-span-12 md:col-span-4 xl:col-span-3">
          {/* introductions */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Introductions</h6>
            </div>
            <div className="card-body">
              <p className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-dark-500">
                About
              </p>
              <div className="space-y-3">
                <h6 className="font-medium">
                  <Monitor className="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4" />{' '}
                  <span className="align-middle whitespace-nowrap">
                    Sophia Mia
                  </span>
                </h6>
                <h6 className="font-medium">
                  <BriefcaseBusiness className="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4"></BriefcaseBusiness>{' '}
                  <span className="align-middle whitespace-nowrap">
                    UI / UX Designer
                  </span>
                </h6>
                <h6 className="font-medium">
                  <MapPin className="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4"></MapPin>{' '}
                  <span className="align-middle whitespace-nowrap">
                    Argentina
                  </span>
                </h6>
                <h6 className="font-medium">
                  <Cake className="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4"></Cake>{' '}
                  <span className="align-middle whitespace-nowrap">
                    24 Jun, 1998
                  </span>
                </h6>
              </div>

              <div className="pt-4 mt-4 space-y-3 border-t border-gray-200 dark:border-dark-800">
                <h6 className="font-medium">
                  <Globe className="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4"></Globe>{' '}
                  <Link to="#!" className="align-middle whitespace-nowrap">
                    www.example.com
                  </Link>
                </h6>
                <h6 className="font-medium">
                  <Mail className="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4"></Mail>{' '}
                  <Link
                    to="mailto:support@example.com"
                    className="align-middle whitespace-nowrap">
                    support@example.com
                  </Link>
                </h6>
                <h6 className="font-medium">
                  <Phone className="inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4"></Phone>{' '}
                  <Link
                    to="tel:+1511555333222"
                    className="align-middle whitespace-nowrap">
                    +(151) 1555 333 222
                  </Link>
                </h6>
                <h6 className="font-medium">
                  <i className="ri-twitter-line text-[20px] inline-block text-gray-500 ltr:mr-2 rtl:ml-2 dark:text-dark-500 size-4"></i>{' '}
                  <span className="align-middle whitespace-nowrap">
                    SRBThemes
                  </span>
                </h6>
              </div>

              <p className="pt-4 mt-4 mb-3 space-y-3 text-sm font-medium text-gray-500 uppercase border-t border-gray-200 dark:border-dark-800 dark:text-dark-500">
                Fluent In
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 bg-transparent border-gray-200 dark:border-dark-800 badge">
                  English
                </span>
                <span className="text-gray-500 bg-transparent border-gray-200 dark:border-dark-800 badge">
                  Madrian
                </span>
                <span className="text-gray-500 bg-transparent border-gray-200 dark:border-dark-800 badge">
                  French
                </span>
              </div>
            </div>
          </div>

          {/* badges */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Badges</h6>
            </div>
            <div className="flex items-center gap-2 card-body">
              <div>
                <img
                  src={new1}
                  alt="New Users"
                  className="size-7"
                  title="New Users"
                  width={28}
                  height={28}
                  data-tooltip-content="New Users"
                  data-tooltip-id="defaultTooltip"
                />
                <Tooltip id="defaultTooltip" />
              </div>
              <div>
                <img
                  src={quality}
                  alt="Verified Badge"
                  className="size-7"
                  title="Verified Badge"
                  width={28}
                  height={28}
                  data-tooltip-content="Verified Badge"
                  data-tooltip-id="defaultTooltip1"
                />
                <Tooltip id="defaultTooltip1" />
              </div>
              <div>
                <img
                  src={highQuality}
                  alt="High Quality"
                  className="size-7"
                  title="High Quality"
                  width={28}
                  height={28}
                  data-tooltip-content="High Quality"
                  data-tooltip-id="defaultTooltip2"
                />
                <Tooltip id="defaultTooltip2" />
              </div>
              <div>
                <img
                  src={reward}
                  alt="Reward"
                  className="size-7"
                  title="Reward"
                  width={28}
                  height={28}
                  data-tooltip-content="Rewards"
                  data-tooltip-id="defaultTooltip3"
                />
                <Tooltip id="defaultTooltip3" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 xl:col-span-9">
          {/* create notes */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Create Notes</h6>
            </div>
            <div className="card-body">
              <form action="#!">
                <div className="mb-4">
                  <label htmlFor="basicInput1" className="form-label">
                    Notes Image
                  </label>
                  <input
                    type="file"
                    id="basicInput1"
                    className="form-file form-file-light"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="basicInput1" className="hidden form-label">
                    Notes Title
                  </label>
                  <input
                    type="text"
                    id="basicInput1"
                    className="form-input"
                    placeholder="Note Title"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="writeNotes" className="hidden form-label">
                    Notes
                  </label>
                  <textarea
                    name="writeNotes"
                    id="writeNotes"
                    rows={3}
                    className="h-auto form-input"
                    placeholder="Write your notes"></textarea>
                </div>
                <div className="ltr:text-right rtl:text-left">
                  <button type="submit" className="btn btn-primary">
                    Create Notes
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* business meetings */}
          <div className="card">
            <div className="card-body">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <div className="flex items-center gap-3 ltr:float-right rtl:float-left">
                    <Link to="#!" className="link link-green">
                      <Pencil className="size-4" />
                    </Link>
                    <Link to="#!" className="link link-red">
                      <Trash2 className="size-4" />
                    </Link>
                  </div>
                  <h6>Business Development Meeting</h6>
                  <p className="mb-3 text-gray-500 dark:text-dark-500">
                    By{' '}
                    <Link to="#!" className="link link-primary">
                      Sophia Mia
                    </Link>{' '}
                    - 2 May, 2024
                  </p>
                  <p className="text-gray-500 dark:text-dark-500">
                    Share updates, discuss strategies, and address challenges or
                    opportunities in a structured manner. Align goals and
                    objectives to ensure everyone is working towards the same
                    vision. Make informed decisions and outline actionable steps
                    to drive growth and expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* the best time visiting */}
          <div className="card">
            <div className="card-body">
              <div className="flex items-center gap-3 ltr:float-right rtl:float-left">
                <Link to="#!" className="link link-green">
                  <Pencil className="size-4" />
                </Link>
                <Link to="#!" className="link link-red">
                  <Trash2 className="size-4" />
                </Link>
              </div>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-3">
                  <img
                    src={image1}
                    alt="image1"
                    className="rounded-md"
                    width={228}
                    height={152}
                  />
                </div>
                <div className="col-span-12 lg:col-span-9">
                  <h6>The best time to visit a destination</h6>
                  <p className="mb-3 text-gray-500 dark:text-dark-500">
                    By{' '}
                    <Link to="#!" className="link link-primary">
                      Sophia Mia
                    </Link>{' '}
                    - 02:54 PM
                  </p>

                  <p className="text-gray-500 dark:text-dark-500">
                    Trip travel notes content" likely refers to documentation or
                    records created during a trip to capture experiences,
                    observations, and useful information for future reference.
                    These notes can include details such as itinerary,
                    accommodation details, transportation arrangements, places
                    visited, notable experiences, expenses, and personal
                    reflections. They serve as a valuable resource for recalling
                    memories, sharing experiences with others, and planning
                    future trips.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* schedule meeting */}
          <div className="card">
            <div className="card-body">
              <div className="flex items-center gap-3 ltr:float-right rtl:float-left">
                <Link to="#!" className="link link-green">
                  <Pencil className="size-4" />
                </Link>
                <Link to="#!" className="link link-red">
                  <Trash2 className="size-4" />
                </Link>
              </div>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <h6>Business Strategy Meeting Notes</h6>
                  <p className="mb-3 text-gray-500 dark:text-dark-500">
                    By{' '}
                    <Link to="#!" className="link link-primary">
                      Rudy Boring
                    </Link>{' '}
                    - 06:33 PM
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-dark-500">
                    The meeting concluded with a clear understanding of the
                    current business status, key challenges, and actionable
                    steps to drive growth and success. Each attendee left with a
                    sense of direction and accountability for their respective
                    tasks.
                  </p>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Review of Previous Meeting Minutes</li>
                    <li>Financial Performance Analysis</li>
                    <li>Marketing Strategy Updates</li>
                    <li>Operational Efficiency Discussion</li>
                    <li>New Business Opportunities</li>
                    <li>Action Items and Next Steps</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserNotesContent
