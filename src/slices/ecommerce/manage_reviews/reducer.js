import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  manageReviews: initStore('d-user-review-list'),
  isLoading: false,
}

const ManageReviewSlice = createSlice({
  name: 'manage_reviews',
  initialState,
  reducers: {
    // set default review data
    getManageReviews(state, action) {
      state.manageReviews = action.payload
    },

    // add new user review
    addManageReview(state, action) {
      const newReview = action.payload
      if (state.manageReviews !== null) {
        state.manageReviews.unshift(newReview)
      } else {
        state.manageReviews = [newReview]
      }
    },

    // edit existing user review
    updateManageReview(state, action) {
      const Review = action.payload
      if (state.manageReviews !== null) {
        const findReviewIndex = state.manageReviews.findIndex(
          (item) => item._id === Review._id
        )
        const findReviewRecord = state.manageReviews.find(
          (item) => item._id === Review._id
        )
        if (findReviewIndex !== -1 && findReviewRecord) {
          state.manageReviews[findReviewIndex] = Review
        }
        LoadingToast()
      }
    },

    // delete existing user review
    deleteManageReview(state, action) {
      if (state.manageReviews !== null) {
        state.manageReviews = state.manageReviews.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getManageReviews,
  addManageReview,
  updateManageReview,
  deleteManageReview,
} = ManageReviewSlice.actions
export default ManageReviewSlice.reducer
