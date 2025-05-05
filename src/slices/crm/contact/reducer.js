import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  contact: initStore('d-crm-contact-list'),
  isLoading: false,
}

const ContactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // get contact list data
    getContactList(state, action) {
      state.contact = action.payload
    },

    // delete contact list
    deleteContactList(state, action) {
      if (state.contact !== null) {
        state.contact = state.contact.filter(
          (item) => !action.payload.includes(item.id)
        )
      }
    },

    // edit contact list
    editContactList(state, action) {
      const contact = action.payload
      if (state.contact !== null) {
        const findContactIndex = state.contact.findIndex(
          (item) => item.id === contact.id
        )
        const findContactRecord = state.contact.find(
          (item) => item.id === contact.id
        )
        if (findContactIndex !== -1 && findContactRecord) {
          state.contact[findContactIndex] = contact
        }
        LoadingToast()
      }
    },

    // add contact list
    addContactList(state, action) {
      const newContact = action.payload
      if (state.contact !== null) {
        state.contact.unshift(newContact)
      } else {
        state.contact = [newContact]
      }
    },
  },
})

export const {
  getContactList,
  addContactList,
  editContactList,
  deleteContactList,
} = ContactSlice.actions
export default ContactSlice.reducer
