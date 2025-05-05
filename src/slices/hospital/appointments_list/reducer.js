import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  todaysAppointments: initStore('d-hospital-appointment-todaylist'),
  appointments: initStore('d-hospital-appointment-list'),
  isLoading: false,
}

const AppointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    // get todays appointments
    getTodaysAppointments(state, action) {
      state.todaysAppointments = action.payload
    },

    // add new todays appointments
    addTodaysAppointments(state, action) {
      const newTodayAppointments = action.payload
      if (state.todaysAppointments !== null) {
        state.todaysAppointments.unshift(newTodayAppointments)
      } else {
        state.todaysAppointments = [newTodayAppointments]
      }
    },

    // edit todays appointments
    editTodaysAppointments(state, action) {
      const todayAppointment = action.payload
      if (state.todaysAppointments !== null) {
        const findTodayAppointmentIndex = state.todaysAppointments.findIndex(
          (item) => item._id === todayAppointment._id
        )
        const findTodayAppointmentRecord = state.todaysAppointments.find(
          (item) => item._id === todayAppointment._id
        )
        if (findTodayAppointmentIndex !== -1 && findTodayAppointmentRecord) {
          state.todaysAppointments[findTodayAppointmentIndex] = todayAppointment
        }
        LoadingToast()
      }
    },

    // delete todays appointments
    deleteTodaysAppointments(state, action) {
      if (state.todaysAppointments !== null) {
        state.todaysAppointments = state.todaysAppointments.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    //appointments List
    getAppointmentsList(state, action) {
      state.appointments = action.payload
    },

    // add new appointments list
    addAppointmentsList(state, action) {
      const newAppointments = action.payload
      if (state.appointments !== null) {
        state.appointments.unshift(newAppointments)
      }
    },

    // edit appointments list
    editAppointmentsList(state, action) {
      const appointment = action.payload
      if (state.appointments !== null) {
        const findAppointmentIndex = state.appointments.findIndex(
          (item) => item._id === appointment._id
        )
        const findAppointmentRecord = state.appointments.find(
          (item) => item._id === appointment._id
        )
        if (findAppointmentIndex !== -1 && findAppointmentRecord) {
          state.appointments[findAppointmentIndex] = appointment
        }
      }
    },

    // delete appointments list
    deleteAppointmentsList(state, action) {
      if (state.appointments !== null) {
        state.appointments = state.appointments.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getTodaysAppointments,
  addTodaysAppointments,
  editTodaysAppointments,
  deleteTodaysAppointments,

  getAppointmentsList,
  addAppointmentsList,
  editAppointmentsList,
  deleteAppointmentsList,
} = AppointmentSlice.actions

export default AppointmentSlice.reducer
