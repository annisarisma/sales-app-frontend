import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  mail: initStore('d-email-list'),
  isLoading: false,
  currentEmail: null,
}

const ProjectSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    // get mails data
    getMail(state, action) {
      state.mail = action.payload
    },

    // add mail list record
    addMail(state, action) {
      const newMailRecord = action.payload
      if (state.mail !== null) {
        state.mail.unshift(newMailRecord)
      } else {
        state.mail = [newMailRecord]
      }
    },

    // delete mail list record
    deleteMail(state, action) {
      if (state.mail !== null) {
        state.mail = state.mail.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // update mail list
    editMail(state, action) {
      const mailRecord = action.payload
      if (state.mail !== null) {
        const findMailIndex = state.mail.findIndex(
          (item) => item._id === mailRecord._id
        )
        if (findMailIndex !== -1) {
          state.mail[findMailIndex] = mailRecord
        }
        LoadingToast()
      }
    },

    setCurrentEmail(state, action) {
      state.currentEmail = action.payload
    },
  },
})

export const { getMail, addMail, deleteMail, editMail, setCurrentEmail } =
  ProjectSlice.actions
export default ProjectSlice.reducer
