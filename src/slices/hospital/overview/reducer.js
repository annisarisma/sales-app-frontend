import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  reportList: initStore('d-report'),
  medicine: initStore('d-medicine'),
  appointments: initStore('d-appointments'),
  isLoading: false,
}

const OverviewSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    // get reports data

    getReport(state, action) {
      state.reportList = action.payload
    },

    addReport(state, action) {
      const newCustomer = action.payload
      if (state.reportList !== null) {
        state.reportList.unshift(newCustomer)
      } else {
        state.reportList = [newCustomer]
      }
    },

    //edit reports data
    editReport(state, action) {
      const reports = action.payload
      if (state.reportList !== null) {
        const findReportsIndex = state.reportList.findIndex(
          (item) => item._id === reports._id
        )
        const findReportsRecord = state.reportList.find(
          (item) => item._id === reports._id
        )
        if (findReportsIndex !== -1 && findReportsRecord) {
          state.reportList[findReportsIndex] = reports
        }
        LoadingToast()
      }
    },

    //delete reports data
    deleteReport(state, action) {
      if (state.reportList !== null) {
        state.reportList = state.reportList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // Medicine

    //get madicine data
    getMedicine(state, action) {
      state.medicine = action.payload
    },

    //add medicine data
    addMedicine(state, action) {
      const newMadicine = action.payload
      if (state.medicine !== null) {
        state.medicine.unshift(newMadicine)
      }
    },

    //edite madicine data
    editMedicine(state, action) {
      const madicine = action.payload
      if (state.medicine !== null) {
        const findMadicineIndex = state.medicine.findIndex(
          (item) => item._id === madicine._id
        )
        const findMadicineRecord = state.medicine.find(
          (item) => item._id === madicine._id
        )
        if (findMadicineIndex !== -1 && findMadicineRecord) {
          state.medicine[findMadicineIndex] = madicine
        }
      }
    },

    //delete madicine data
    deleteMedicine(state, action) {
      if (state.medicine !== null) {
        state.medicine = state.medicine.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    //appointments

    getAppointments(state, action) {
      state.appointments = action.payload
    },

    addAppointments(state, action) {
      const newAppointments = action.payload
      if (state.appointments !== null) {
        state.appointments.unshift(newAppointments)
      }
    },

    editAppointments(state, action) {
      const appointment = action.payload
      if (state.appointments !== null) {
        const findAppointmentsIndex = state.appointments.findIndex(
          (item) => item._id === appointment._id
        )
        const findAppointmentsRecord = state.appointments.find(
          (item) => item._id === appointment._id
        )
        if (findAppointmentsIndex !== -1 && findAppointmentsRecord) {
          state.appointments[findAppointmentsIndex] = appointment
        }
      }
    },
    deleteAppointments(state, action) {
      if (state.appointments !== null) {
        state.appointments = state.appointments.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getReport,
  addReport,
  editReport,
  deleteReport,
  getMedicine,
  addMedicine,
  editMedicine,
  deleteMedicine,
  getAppointments,
  addAppointments,
  editAppointments,
  deleteAppointments,
} = OverviewSlice.actions

export default OverviewSlice.reducer
