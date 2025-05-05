import React, { useEffect, useState } from 'react'

import DeleteModal from '@src/components/Common/DeleteModal'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import {
  deleteTodayAppointmentsData,
  getTodayAppointmentsData,
} from '@src/slices/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import EditTodayAppointments from './editTodayAppointments'

const TodayAppointments = () => {
  const dispatch = useDispatch()
  const { todaysAppointments } = useSelector((state) => state.Appointments)
  const [showAll, setShowAll] = useState(false)
  const [todaysAppointment, setTodaysAppointment] = useState([])
  const appointmentsToShow = showAll
    ? todaysAppointment
    : todaysAppointment.slice(0, 4)
  const [dayAppointment, setDayAppointment] = useState(null)
  const [show, setShow] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(null)
  useEffect(() => {
    if (!todaysAppointments) {
      dispatch(getTodayAppointmentsData())
    } else {
      setTodaysAppointment(todaysAppointments)
    }
  }, [todaysAppointments, dispatch])

  const toggleShowAll = () => {
    setShowAll((prev) => !prev)
  }

  const toggleDelete = () => {
    setShow(false)
    setDayAppointment(null)
  }

  const onClickEventListDelete = (list) => {
    setDayAppointment(list)
    setShow(true)
  }

  const handleDeleteList = () => {
    if (dayAppointment) {
      dispatch(deleteTodayAppointmentsData([dayAppointment._id]))
      setShow(false)
    }
  }
  const [modalState, setModalState] = useState({
    showAddContactForm: false,
    showEditContactForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = (editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentEvent(event)
    const modalKey = editMode ? 'showEditContactForm' : 'showAddContactForm'
    openModal(modalKey)
  }

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditContactForm' : 'showAddContactForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentEvent(null)
  }

  return (
    <React.Fragment>
      <div className="flex mb-3">
        <h6 className="grow">Today Appointments</h6>
        <Link
          to="#"
          className="underline link link-primary shrink-0"
          onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'Show All'}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-space">
        {appointmentsToShow.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="flex">
                <div className="grow">
                  <img
                    src={item.image}
                    alt="itemImg"
                    height={48}
                    width={48}
                    className="rounded-lg size-12"
                  />
                </div>
                <Dropdown
                  position=""
                  trigger="click"
                  dropdownClassName="dropdown">
                  <DropdownButton colorClass="link link-primary">
                    <i className="ri-more-fill"></i>
                  </DropdownButton>
                  <DropdownMenu>
                    <Link to="#" className="dropdown-item">
                      Overview
                    </Link>
                    <Link
                      to="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault()
                        handleOpenModal(true, item)
                      }}>
                      Edit
                    </Link>
                    <button
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault()
                        onClickEventListDelete(item)
                      }}>
                      Delete
                    </button>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="mt-4">
                <h6 className="mb-1">
                  <Link to="#!">{item.patientName}</Link>
                </h6>
                <p className="text-gray-500 dark:text-dark-500">
                  {item.treatment}
                </p>
              </div>
              <div className="flex mt-5 text-gray-500 dark:text-dark-500">
                <p className="grow">
                  <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-calendar-event-line"></i>
                  {item.date}
                </p>
                <p>
                  <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-time-line"></i>
                  {item.startTime} - {item.endTime}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />
      <EditTodayAppointments
        modalState={modalState}
        closeModal={handleCloseModal}
        eventList={todaysAppointment}
        editMode={editMode}
        currentContact={currentEvent}
      />
    </React.Fragment>
  )
}

export default TodayAppointments
