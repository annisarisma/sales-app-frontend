import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  examQuestion: initStore('d-exam-question'),
  isLoading: false,
}

const questionSlice = createSlice({
  name: 'examQuestion',
  initialState,
  reducers: {
    //get Question List
    getQuestionList(state, action) {
      state.examQuestion = action.payload
    },

    //add Question
    addQuestionList(state, action) {
      const newQustion = action.payload
      if (state.examQuestion !== null) {
        state.examQuestion.unshift(newQustion)
      } else {
        state.examQuestion = [newQustion]
      }
    },

    //edit Question
    editQuestionList(state, action) {
      const question = action.payload
      if (state.examQuestion !== null) {
        const findExamIndex = state.examQuestion.findIndex(
          (item) => item._id === question._id
        )
        const findExamRecord = state.examQuestion.find(
          (item) => item._id === question._id
        )
        if (findExamIndex !== -1 && findExamRecord) {
          state.examQuestion[findExamIndex] = question
          LoadingToast()
        }
      }
    },

    //delete Question
    deleteQuestionList(state, action) {
      if (state.examQuestion !== null) {
        state.examQuestion = state.examQuestion.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getQuestionList,
  addQuestionList,
  editQuestionList,
  deleteQuestionList,
} = questionSlice.actions

export default questionSlice.reducer
