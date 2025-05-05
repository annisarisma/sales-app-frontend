import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  patients: initStore('d-hospital-patients-list'),
  isLoading: false,
  editMode: false,
  currentPatients: null,
}

const PatientsListSlice = createSlice({
  name: 'patient-list',
  initialState,
  reducers: {
    // get event list data
    getPatients(state, action) {
      state.patients = action.payload
    },

    // add new event list
    addPatients(state, action) {
      const newPatients = action.payload
      if (state.patients !== null) {
        state.patients.unshift(newPatients)
      } else {
        state.patients = [newPatients]
      }
    },

    // edit event list
    editPatients(state, action) {
      const patinets = action.payload
      if (state.patients !== null) {
        const findPatientsIndex = state.patients.findIndex(
          (item) => item._id === patinets._id
        )
        const findPatientsRecord = state.patients.find(
          (item) => item._id === patinets._id
        )
        if (findPatientsIndex !== -1 && findPatientsRecord) {
          state.patients[findPatientsIndex] = patinets
        }
        LoadingToast()
      }
    },

    // delete event list
    deletePatients(state, action) {
      if (state.patients !== null) {
        state.patients = state.patients.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // set current event list
    setCurrentPatients(state, action) {
      const { patient, mode } = action.payload
      if (patient !== null && patient !== undefined && mode !== undefined) {
        state.editMode = mode
        state.currentPatients = patient
      }
    },
  },
})

export const {
  getPatients,
  addPatients,
  editPatients,
  deletePatients,
  setCurrentPatients,
} = PatientsListSlice.actions
export default PatientsListSlice.reducer
