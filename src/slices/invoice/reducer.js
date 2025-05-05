import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  invoiceList: initStore('d-invoice-list'),
  isLoading: false,
  isEditMode: false,
  currentInvoiceRecord: null,
}

const ListSlice = createSlice({
  name: 'invoice_list',
  initialState,
  reducers: {
    // get invoice list
    getInvoiceList(state, action) {
      state.invoiceList = action.payload
    },

    // delete invoice list record
    deleteInvoiceRecord(state, action) {
      if (state.invoiceList !== null) {
        state.invoiceList = state.invoiceList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // edit invoice list record
    editInvoiceRecord(state, action) {
      const invoiceRecord = action.payload
      if (state.invoiceList !== null) {
        const findInvoiceRecordIndex = state.invoiceList.findIndex(
          (item) => item._id === invoiceRecord._id
        )
        if (findInvoiceRecordIndex !== -1) {
          state.invoiceList[findInvoiceRecordIndex] = invoiceRecord
        }
        LoadingToast()
      }
    },

    // add invoice list record
    addInvoiceRecord(state, action) {
      const newInvoiceRecord = action.payload
      if (state.invoiceList !== null) {
        state.invoiceList.unshift(newInvoiceRecord)
      } else {
        state.invoiceList = [newInvoiceRecord]
      }
    },

    // set current invoice record
    setCurrentInvoiceRecord(state, action) {
      state.isEditMode = action.payload.mode
      state.currentInvoiceRecord = action.payload.list
    },
  },
})

export const {
  getInvoiceList,
  deleteInvoiceRecord,
  editInvoiceRecord,
  addInvoiceRecord,
  setCurrentInvoiceRecord,
} = ListSlice.actions
export default ListSlice.reducer
