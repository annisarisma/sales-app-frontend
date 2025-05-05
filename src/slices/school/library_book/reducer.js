import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  bookList: initStore('d-library-books'),
  isLoading: false,
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    //get book List
    getBookList(state, action) {
      state.bookList = action.payload
    },

    //add book
    addBookList(state, action) {
      const newBook = action.payload
      if (state.bookList !== null) {
        state.bookList.unshift(newBook)
      } else {
        state.bookList = [newBook]
      }
    },

    //edit book
    editBookList(state, action) {
      const book = action.payload
      if (state.bookList !== null) {
        const findBookIndex = state.bookList.findIndex(
          (item) => item.id === book.id
        )
        const findBookRecord = state.bookList.find(
          (item) => item.id === book.id
        )
        if (findBookIndex !== -1 && findBookRecord) {
          state.bookList[findBookIndex] = book
        }
        LoadingToast()
      }
    },

    //delete book
    deleteBookList(state, action) {
      if (state.bookList !== null) {
        state.bookList = state.bookList.filter(
          (item) => !action.payload.includes(item.id)
        )
      }
    },
  },
})

export const { getBookList, addBookList, editBookList, deleteBookList } =
  librarySlice.actions

export default librarySlice.reducer
