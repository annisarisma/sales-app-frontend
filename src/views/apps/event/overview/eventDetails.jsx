import React from 'react'

import user5 from '@assets/images/avatar/user-5.png'
import user13 from '@assets/images/avatar/user-13.png'
import user14 from '@assets/images/avatar/user-14.png'
import user15 from '@assets/images/avatar/user-15.png'
import user18 from '@assets/images/avatar/user-18.png'
import user20 from '@assets/images/avatar/user-20.png'
import overview from '@assets/images/event/overview.jpg'
import { TicketMinus } from 'lucide-react'

const EventDetails = ({ handleModal }) => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Event Details</h6>
          </div>
          <div className="card-body">
            <div className="mb-5">
              <img
                src={overview}
                alt=""
                className="object-cover w-full rounded-md h-72"
              />
            </div>
            <div className="flex flex-wrap gap-3 mb-5">
              <div className="flex flex-col items-center justify-center mb-2.5 border bg-red-100 rounded-md border-red-200 size-16 text-red-500">
                <p className="mb-0.5">Fri</p>
                <h3 className="leading-none">20</h3>
              </div>
              <div className="grow">
                <h6 className="mb-1.5">Annual Music Festival!</h6>
                <p className="mb-4 text-gray-500 dark:text-dark-500">
                  <span>20 Dec 2024</span>
                  <span className="ltr:pl-2 rtl:pr-2 ltr:ml-1.5 rtl:mr-1.5 ltr:border-l rtl:border-r border-gray-200 dark:border-dark-800">
                    Sydney, Australia
                  </span>
                </p>

                <p className="mb-2 text-gray-500 dark:text-dark-500">
                  Contributors & Sponsors
                </p>
                <div className="flex grow">
                  <div className="transition duration-300 ease-linear hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-800 size-8"
                      alt="user5Img"
                      src={user5}
                    />
                  </div>
                  <div className="transition duration-300 ease-linear hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-800 size-8"
                      alt="user20Img"
                      src={user20}
                    />
                  </div>
                  <div className="transition duration-300 ease-linear hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-800 size-8"
                      alt="user13Img"
                      src={user13}
                    />
                  </div>
                  <div className="transition duration-300 ease-linear hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-800 size-8"
                      alt="user14Img"
                      src={user14}
                    />
                  </div>
                  <div className="transition duration-300 ease-linear hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-800 size-8"
                      alt="user15Img"
                      src={user15}
                    />
                  </div>
                  <div className="transition duration-300 ease-linear hover:-translate-y-1">
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-800 size-8"
                      alt="user18Img"
                      src={user18}
                    />
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  className="btn btn-red"
                  data-modal-target="bookEventModal"
                  onClick={handleModal}>
                  Book Now{' '}
                  <TicketMinus className="inline-block ltr:ml-1 rtl:mr-1 size-5" />
                </button>
              </div>
            </div>

            <p className="mb-3 text-gray-500 dark:text-dark-500">
              Join us for an unforgettable experience filled with live
              performances, vibrant energy, and a celebration of music and
              culture. This year, we're bringing together some of the biggest
              names in the industry, alongside emerging artists, to create a
              diverse and dynamic lineup that promises to entertain and inspire.
            </p>
            <h6 className="mb-3">Event Highlights:</h6>
            <ul className="mb-4 flex flex-col gap-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Live Performances:
                </span>{' '}
                Enjoy non-stop music from top artists across multiple stages.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Food and Drinks:
                </span>{' '}
                Savor delicious cuisine and refreshing beverages from local
                vendors.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Workshops and Activities:
                </span>{' '}
                Participate in interactive workshops and activities for all
                ages.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Merchandise:
                </span>{' '}
                Get your hands on exclusive festival merchandise and
                memorabilia.
              </li>
            </ul>
            <h6 className="mb-3">Details:</h6>
            <ul className="mb-4 flex flex-col gap-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Date:
                </span>{' '}
                20 Dec 2024
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Time:
                </span>{' '}
                2:30 pm
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Location:
                </span>{' '}
                Sydney, Australia
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Tickets Price:
                </span>{' '}
                $599.00
              </li>
            </ul>
            <h6 className="mb-3">Additional Information:</h6>
            <ul className="mb-4 flex flex-col gap-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Parking:
                </span>{' '}
                On-site parking available with a shuttle service to the festival
                grounds.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Accommodations:
                </span>{' '}
                Partner hotels offering special festival rates for attendees.
                Check our website for more details.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Accessibility:
                </span>{' '}
                The event is fully accessible with dedicated areas for
                wheelchair users and assistance for those with disabilities.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Safety Measures:
                </span>{' '}
                We prioritize your safety with on-site medical facilities,
                security personnel, and clear signage throughout the venue.
              </li>
            </ul>
            <h6 className="mb-3">How to Prepare:</h6>
            <ul className="mb-4 flex flex-col gap-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Plan Ahead:
                </span>{' '}
                Check the schedule and plan which performances you want to
                catch.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Stay Hydrated:
                </span>{' '}
                Bring a reusable water bottle and stay hydrated throughout the
                event.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Dress Comfortably:
                </span>{' '}
                Wear comfortable clothing and shoes suitable for outdoor
                activities.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Stay Connected:
                </span>{' '}
                Follow us on social media for live updates and announcements.
              </li>
            </ul>
            <h6 className="mb-1">Sustainability Initiatives:</h6>
            <p className="mb-3 text-gray-500 dark:text-dark-500">
              We are committed to making this festival environmentally friendly:
            </p>
            <ul className="mb-4 flex flex-col gap-3 text-gray-500 list-disc list-inside dark:text-dark-500 marker:text-green-500">
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Recycling Stations:
                </span>{' '}
                Easily accessible recycling bins throughout the venue.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Eco-friendly Products:
                </span>{' '}
                Encouraging the use of biodegradable and recyclable materials by
                our vendors.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Green Transportation:
                </span>{' '}
                Promoting the use of public transport, biking, and carpooling to
                reduce the festival’s carbon footprint.
              </li>
            </ul>
            <p className="mb-2 text-gray-500 dark:text-dark-500">
              Don’t miss out on the music event of the year! Gather your friends
              and family and come create lasting memories with us.
            </p>
            <h6 className="mb-2">
              Get your tickets now and be part of the magic!
            </h6>
            <p className="text-gray-500 dark:text-dark-500">
              For more information, visit our website or contact us at
              SRBThemes. We can’t wait to see you there!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EventDetails
