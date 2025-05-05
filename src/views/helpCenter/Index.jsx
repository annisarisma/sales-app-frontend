import React, { useCallback, useEffect, useState } from 'react'

import user17 from '@assets/images/avatar/user-17.png'
import user45 from '@assets/images/avatar/user-45.png'
import { Modal } from '@custom/Modal/Modal'
import { ticketsdata } from '@data/index'
import { Calendar, MoveLeft, MoveRight, Search, UserRound } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import SimpleBar from 'simplebar-react'

import ContactModal from './contactModal'

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTicket, setActiveTicket] = useState('Getting Started')
  const [ticket, setTickets] = useState([])
  const [filteredTickets, setFilteredTickets] = useState([])
  const [activeFilter, setActiveFilter] = useState('All Tickets')
  const [showTicketDetailsModal, setShowTicketDetailsModal] = useState(false)
  const [ticketDetails, setTicketDetails] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const tickets = [
    { category: 'Getting Started', count: 5 },
    { category: 'Account with Card', count: 3 },
    { category: 'Licenses Policy' },
    { category: 'Customize Templates' },
    { category: 'Customize Layouts' },
  ]
  const [showContact, setShowContact] = useState(false)

  // search
  const searchQuestions = useCallback(() => {
    const query = searchQuery.toLowerCase()
    let filtered = []

    if (activeTicket === 'All Tickets') {
      filtered = ticket.flatMap((category) =>
        category.tickets.filter(
          (ticket) =>
            ticket.title.toLowerCase().includes(query) ||
            ticket.description.toLowerCase().includes(query)
        )
      )
    } else {
      const selectedCategory = ticket.find(
        (cat) => cat.category === activeTicket
      )
      if (selectedCategory) {
        filtered = selectedCategory.tickets.filter(
          (ticket) =>
            ticket.title.toLowerCase().includes(query) ||
            ticket.description.toLowerCase().includes(query)
        )
      }
    }

    setFilteredTickets(filtered)
  }, [searchQuery, activeTicket, ticket])

  useEffect(() => {
    searchQuestions()
  }, [searchQuery, activeTicket, searchQuestions])

  useEffect(() => {
    const data = ticketsdata
    setTickets(data)
    const gettingStartedCategory = data.find(
      (category) => category.category === 'Getting Started'
    )
    setFilteredTickets(
      gettingStartedCategory ? gettingStartedCategory.tickets : []
    )
  }, [])

  const flattenTickets = (category) => {
    setActiveTicket(category)

    if (category === 'All Tickets') {
      setFilteredTickets(ticket.flatMap((category) => category.tickets))
    } else {
      const selectedCategory = ticket.find((cat) => cat.category === category)
      setFilteredTickets(selectedCategory ? selectedCategory.tickets : [])
    }
  }

  const filterTickets = (status) => {
    let filtered = []

    if (activeTicket === 'All Tickets') {
      filtered = ticket.flatMap((category) =>
        status === 'All Tickets'
          ? category.tickets
          : category.tickets.filter((ticket) => ticket.status === status)
      )
    } else {
      // Filter tickets by the active category and status
      const selectedCategory = ticket.find(
        (cat) => cat.category === activeTicket
      )
      if (selectedCategory) {
        filtered =
          status === 'All Tickets'
            ? selectedCategory.tickets
            : selectedCategory.tickets.filter(
                (ticket) => ticket.status === status
              )
      }
    }

    setFilteredTickets(filtered)
    setActiveFilter(status)
  }

  const handleClose = () => {
    setShowTicketDetailsModal(false)
  }

  const showTicket = (ticket) => {
    setTicketDetails(ticket)
    setShowTicketDetailsModal(true)
  }

  // add message
  const addMessage = (msg) => {
    if (msg.trim() === '') return
    setTicketDetails((prevDetails) => {
      if (prevDetails) {
        return {
          ...prevDetails,
          replymessages: [...(prevDetails.replymessages || []), msg],
        }
      }
      return null
    })

    setNewMessage('')
  }

  const handleAddMessage = () => {
    addMessage(newMessage)
  }
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm()
  const [showNewTicketsModal, setShowNewTicketsModal] = useState(false)

  const onSubmit = (data, onClose) => {
    const newId = `2023-00${filteredTickets.length + 1}`

    // Create a new ticket object based on form data
    const newTicket = {
      id: newId,
      title: data.title,
      description: data.description,
      status: 'Open',
      time: '',
      author: 'Olivia Martina',
      avatar: user45,
      tags: [],
      comments: 0,
    }
    setFilteredTickets((prevTickets) => [newTicket, ...prevTickets])
    setShowNewTicketsModal(false)
    onClose()
    reset()
  }

  const handleModalToggle = () => {
    setShowNewTicketsModal(!showNewTicketsModal)
  }

  const keywordOptions = [
    { label: 'Help', value: 'Help' },
    { label: 'Design', value: 'Design' },
    { label: 'Customize', value: 'Customize' },
    { label: 'Development', value: 'Development' },
  ]

  const assignedOptions = [
    { label: 'Patrick Schulz', value: '1' },
    { label: 'Margaret Mann', value: '2' },
    { label: 'Joanne Murray', value: '3' },
    { label: 'Cynthia Justice', value: '4' },
    { label: 'John Jenson', value: '5' },
    { label: 'Mark Welch', value: '6' },
    { label: 'Virginia Dawson', value: '7' },
  ]

  const handleContactModal = () => {
    setShowContact(!showContact)
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-x-space">
        {/* sidebar */}
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="card">
            <div className="card-body">
              <h6>Search for a Question</h6>
              <p className="mb-3 text-gray-500 dark:text-dark-500">
                Type your question or search keyword
              </p>
              <div className="relative group/form">
                <input
                  type="text"
                  id="iconWithInput"
                  className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                  placeholder="Start typing ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onInput={searchQuestions}
                />
                <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                  <Search className="size-4"></Search>
                </button>
              </div>
              <div className="h-auto lg:h-[calc(100vh_-_28rem)]" data-simplebar>
                <ul className="px-1 my-5 space-y-3">
                  {tickets.map((ticket) => (
                    <li key={ticket.category}>
                      <Link
                        to="#!"
                        className={`block px-4 py-2 font-medium rounded-md text-gray-500 dark:text-dark-500 ${
                          activeTicket === ticket.category
                            ? 'bg-primary-500/10 text-primary-500 outline outline-primary-500/20'
                            : 'hover:text-primary-500 dark:hover:text-primary-500'
                        } transition ease-linear duration-200 text-sm`}
                        onClick={() => flattenTickets(ticket.category)}>
                        {ticket.category}{' '}
                        {ticket.count ? (
                          <span className="py-1 leading-none align-middle badge badge-primary ltr:ml-1 rtl:mr-1">
                            {ticket.count}
                          </span>
                        ) : (
                          ''
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative px-4 py-3 overflow-hidden rounded-md bg-primary-600">
                <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="300"
                    height="160"
                    preserveAspectRatio="none"
                    viewBox="0 0 300 160">
                    <g mask="url(#SvgjsMask1016)" fill="none">
                      <path
                        d="M161.32 191.44C190.36 168.14 173.39 56.82 222.5 55.64 271.61 54.46 310.21 119.21 344.86 121.24"
                        className="stroke-primary-400/15"
                        strokeWidth="2"></path>
                      <path
                        d="M103.48 160.94C139.34 155.85 149.02 78.76 217.61 71.68 286.2 64.6 298.91 8.36 331.74 6.08"
                        className="stroke-primary-400/15"
                        strokeWidth="2"></path>
                      <path
                        d="M118.76 180.58C146.95 179.59 162.2 139.63 222.03 135.17 281.86 130.71 293.38 62.42 325.3 58.37"
                        className="stroke-primary-400/15"
                        strokeWidth="2"></path>
                      <path
                        d="M96.26 168.19C127.98 167.05 145.97 121.03 212.32 116.71 278.68 112.39 293.56 41.87 328.39 38.31"
                        className="stroke-primary-400/15"
                        strokeWidth="2"></path>
                      <path
                        d="M50.02 170.02C76.2 169.48 99.14 134.5 148.57 134.49 198 134.48 197.84 154.49 247.12 154.49 296.39 154.49 320.53 134.59 345.67 134.49"
                        className="stroke-primary-400/15"
                        strokeWidth="2"></path>
                    </g>
                    <defs>
                      <mask id="SvgjsMask1016">
                        <rect width="300" height="160" fill="#ffffff"></rect>
                      </mask>
                    </defs>
                  </svg>
                </div>
                <h6 className="mb-4 text-primary-50">
                  Do you still need our help?
                </h6>
                <button
                  data-modal-target="contactModal"
                  className="relative text-white group/effect bg-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600 btn"
                  onClick={handleContactModal}>
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover/effect:opacity-100"></span>
                  </span>
                  <span>
                    Contact Us
                    <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4" />
                    <MoveLeft className="mr-1 ltr:hidden rtl:inline-block size-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          {/* Ticket List */}
          <div
            className={`list ${showTicketDetailsModal == true ? 'hidden' : ''}`}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <ul className="overflow-x-auto tabs grow">
                {['All Tickets', 'Active', 'Closed', 'Deleted'].map(
                  (filter) => (
                    <li key={filter}>
                      <button
                        onClick={() => filterTickets(filter)}
                        className={`nav-item [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500 ${
                          activeFilter === filter ? 'active' : ''
                        }`}>
                        {filter}
                      </button>
                    </li>
                  )
                )}
              </ul>
              <div className="shrink-0">
                <button
                  className="btn btn-sky btn-icon-overlay"
                  onClick={handleModalToggle}>
                  <span className="icon">
                    <i className="size-5 ri-pencil-line"></i>
                  </span>
                  New Tickets
                </button>
              </div>
            </div>

            <SimpleBar className="h-[calc(100vh_-_16.8rem)]">
              <div className="flex flex-col gap-3">
                {filteredTickets.map((ticket, index) => (
                  <div className="card !mb-0" key={index}>
                    <div className="card-body">
                      <div className="flex items-center gap-5 mb-4">
                        <h6 className="underline grow">
                          <Link to="#!" onClick={() => showTicket(ticket)}>
                            Ticket #{ticket.id}
                          </Link>
                        </h6>
                        <div className="flex items-center gap-4 shrink-0">
                          <p className="text-sm text-gray-500 dark:text-dark-500">
                            {ticket.time}
                          </p>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="flex items-center gap-2 p-0 btn">
                              <i className="ri-more-2-fill"></i>
                            </button>
                            {/* Dropdown content */}
                          </div>
                        </div>
                      </div>
                      <h6 className="mb-1">
                        <button>{ticket.title}</button>
                      </h6>
                      <p className="text-gray-500 dark:text-dark-500 line-clamp-2">
                        {ticket.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-5">
                        <div className="flex items-center gap-2 grow">
                          <img
                            src={ticket.avatar}
                            alt="ticketImg"
                            className="rounded-full size-8 shrink-0"
                          />
                          <h6>{ticket.author}</h6>
                        </div>
                        <div className="shrink-0">
                          {ticket.tags.map((tag, i) => (
                            <React.Fragment key={i}>
                              <Link
                                to="#!"
                                className="p-1 text-gray-500 transition duration-200 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">
                                {tag}
                              </Link>
                              {i < ticket.tags.length - 1 && ', '}
                            </React.Fragment>
                          ))}
                        </div>
                        <div className="shrink-0">
                          <Link
                            to="#!"
                            className="text-gray-500 transition duration-200 ease-linear dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500">
                            <i className="inline-block align-middle size-5 ri-chat-3-line"></i>{' '}
                            {ticket.comments}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredTickets.length === 0 && (
                  <div className="!p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="mx-auto size-12"
                      viewBox="0 0 48 48">
                      <linearGradient
                        id="SVGID_1__h35ynqzIJzH4_gr1"
                        x1="34.598"
                        x2="15.982"
                        y1="15.982"
                        y2="34.598"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#60e8fe"></stop>
                        <stop offset=".033" stopColor="#6ae9fe"></stop>
                        <stop offset=".197" stopColor="#97f0fe"></stop>
                        <stop offset=".362" stopColor="#bdf5ff"></stop>
                        <stop offset=".525" stopColor="#dafaff"></stop>
                        <stop offset=".687" stopColor="#eefdff"></stop>
                        <stop offset=".846" stopColor="#fbfeff"></stop>
                        <stop offset="1" stopColor="#fff"></stop>
                      </linearGradient>
                      <path
                        fill="url(#SVGID_1__h35ynqzIJzH4_gr1)"
                        d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164	S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331	c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
                      <path
                        fill="none"
                        stroke="#10cfe3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="3"
                        d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0	l-4.331-4.331"></path>
                      <path
                        fill="none"
                        stroke="#10cfe3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="3"
                        d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
                      <path
                        fill="none"
                        stroke="#10cfe3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="3"
                        d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
                    </svg>
                    <p className="mt-2 text-center text-gray-500 dark:text-dark-500">
                      No matching records found
                    </p>
                  </div>
                )}
              </div>
            </SimpleBar>
          </div>

          {/* Ticket Details Modal */}
          {showTicketDetailsModal && ticketDetails && (
            <div
              className={`ticket ${showTicketDetailsModal == true ? 'block' : 'none'}`}>
              <div className="flex items-center gap-5 mb-4">
                <div className="grow">
                  <h5 className="mb-1">
                    <Link to="#!">
                      Ticket #<span>{ticketDetails.id}</span>
                    </Link>
                  </h5>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 dark:text-dark-500">
                      <UserRound className="inline-block mr-1 size-4"></UserRound>
                      <Link to="#!">{ticketDetails.author}</Link>
                    </span>
                    <span className="text-gray-500 dark:text-dark-500">
                      <Calendar className="inline-block mr-1 size-4"></Calendar>
                      19 Feb, 2024
                    </span>
                    <span className="badge badge-sub-green">
                      {ticketDetails.status}
                    </span>
                  </div>
                </div>
                <div>
                  <p
                    className="text-gray-500 dark:text-dark-500"
                    onClick={handleClose}>
                    Close
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="h-[calc(100vh_-_17rem)] overflow-auto">
                  <div className="p-5 space-y-4">
                    <div>
                      <h5 className="mb-1">{ticketDetails.title}</h5>
                      <p className="text-gray-500 dark:text-dark-500">
                        {ticketDetails.description}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <img
                        src={ticketDetails.avatar}
                        alt=""
                        className="rounded-md size-10"
                      />
                      <div className="space-y-2">
                        <p className="text-gray-500 dark:text-dark-500">
                          To enable dark mode in Tailwind CSS, update your
                          <span className="text-pink-500">
                            tailwind.config.js
                          </span>
                          file with the{' '}
                          <span className="text-pink-500">darkMode</span>{' '}
                          option. You can choose between two different dark mode
                          strategies:
                          <span className="text-pink-500">
                            [data-mode="dark"]
                          </span>
                          or <span className="text-pink-500">class</span>.
                        </p>
                        <p className="text-gray-500 dark:text-dark-500">
                          Using{' '}
                          <span className="text-pink-500">
                            [data-mode="dark"]
                          </span>
                          , the dark mode is enabled based on the user's
                          operating system preference:
                        </p>
                        <pre>
                          <code>module.exports = {}</code>
                        </pre>

                        <p className="text-gray-500 dark:text-dark-500">
                          Using <span className="text-pink-500">class</span>,
                          the dark mode is enabled by adding a{' '}
                          <span className="text-pink-500">.dark</span> class to
                          an ancestor element of your components:
                        </p>
                        <pre>
                          <code>module.exports = {}</code>
                        </pre>
                        <p className="text-gray-500 dark:text-dark-500">
                          To apply styles for dark mode, simply prefix your
                          utility classes with{' '}
                          <span className="text-pink-500">dark:</span> followed
                          by the desired state variant, if any.
                        </p>
                        <p className="text-gray-500 dark:text-dark-500">
                          For example, if you want to change the background
                          color of an element in dark mode, you can use the
                          following code:
                        </p>
                        <pre>
                          <code>
                            &lt;div class="bg-white dark:bg-gray-800"&gt;
                            &lt;!-- Your content here --&gt; &lt;/div&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  {ticketDetails.replymessages?.map((reply, index) => (
                    <div key={index} className="flex gap-2 p-5">
                      <img
                        src={user17}
                        alt="user17Img"
                        className="rounded-md size-10"
                      />
                      <div className="space-y-2">
                        <p className="text-gray-500 dark:text-dark-500">
                          {reply}
                        </p>
                      </div>
                    </div>
                  ))}
                  <form
                    action="#"
                    className="p-5 pt-0"
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleAddMessage()
                    }}>
                    <h5 className="mb-2">Comment</h5>
                    <div className="grid grid-cols-12 gap-5">
                      <div className="col-span-12">
                        <div className="mb-5">
                          <label
                            htmlFor="textareaInput2"
                            className="block mb-2 text-sm">
                            Your Reply
                          </label>
                          <textarea
                            name="textareaInput2"
                            id="textareaInput2"
                            rows={3}
                            className="h-auto form-input"
                            placeholder="Enter your description"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                          />
                        </div>
                        <div className="ltr:text-right rtl:text-left">
                          <button type="submit" className="btn btn-primary">
                            Reply Now{' '}
                            <i className="inline-block ml-1 size-4">→</i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* new ticket Modal */}
      {showNewTicketsModal && (
        <Modal
          isOpen={showNewTicketsModal}
          onClose={() => handleModalToggle()}
          position="modal-center"
          title="Create New Ticket"
          id="newTicketsModal"
          size="modal-2xl"
          contentClass="modal-content"
          content={(onClose) => (
            <>
              <form
                onSubmit={handleSubmit((data) => onSubmit(data, onClose))}
                className="grid grid-cols-12 gap-5">
                <div className="col-span-6">
                  <label
                    htmlFor="taskTitleInput"
                    className="block mb-2 text-sm font-medium">
                    Task Title
                  </label>
                  <input
                    id="taskTitleInput"
                    className="form-input"
                    {...register('title', { required: 'Title is required.' })}
                  />
                  {errors.title && (
                    <span className="text-red-500">{errors.title.message}</span>
                  )}
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="projectNameInput"
                    className="block mb-2 text-sm font-medium">
                    Project Name
                  </label>
                  <input
                    id="projectNameInput"
                    className="form-input"
                    {...register('projectName', {
                      required: 'Project Name is required.',
                    })}
                  />
                  {errors.projectName && (
                    <span className="text-red-500">
                      {errors.projectName.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="descriptionInput2"
                    className="block mb-2 text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    id="descriptionInput2"
                    rows={3}
                    className="h-auto form-input"
                    {...register('description', {
                      required: 'Description is required.',
                    })}
                  />
                  {errors.description && (
                    <span className="text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="keywords"
                    className="block mb-2 text-sm font-medium">
                    Keywords
                  </label>
                  <Select
                    classNamePrefix="select"
                    isMulti={true}
                    options={keywordOptions}
                  />
                  {errors.keywords && (
                    <span className="text-red-500">
                      {errors.keywords.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="assignedTo"
                    className="block mb-2 text-sm font-medium">
                    Assigned To
                  </label>
                  <Select
                    classNamePrefix="select"
                    isMulti={true}
                    options={assignedOptions}
                  />
                  {errors.assignedTo && (
                    <span className="text-red-500">
                      {errors.assignedTo.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="phomenoInput"
                    className="block mb-2 text-sm font-medium">
                    Phone No
                  </label>
                  <input
                    id="phomenoInput"
                    type="tel"
                    className="form-input"
                    {...register('phone', {
                      required: 'Phone number is required.',
                    })}
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </div>
                <div className="col-span-12">
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        />
      )}
      <ContactModal
        showContactModal={showContact}
        handleContactModal={handleContactModal}
      />
    </React.Fragment>
  )
}

export default HelpCenterPage
