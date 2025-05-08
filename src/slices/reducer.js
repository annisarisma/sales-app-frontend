// store.ts (or store.js if you're not using TypeScript)
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userListReducer from './masterData/users/reducer'
import roleListReducer from './masterData/roles/reducer'
import categoryListReducer from './masterData/categories/reducer'

import calendarReducer from './calendar/reducer'
import contactChatReducer from './chat/contact/reducer'
import defaultChatListReducer from './chat/default/reducer'
import groupChatListReducer from './chat/group/reducer'
import contactReducer from './crm/contact/reducer'
import dealReducer from './crm/deal/reducer'
import leadReducer from './crm/lead/reducer'
import categoryReducer from './ecommerce/category_list/reducer'
import checkoutReducer from './ecommerce/checkout/reducer'
import customerListReducer from './ecommerce/customer/list/reducer'
import manageReviewReducer from './ecommerce/manage_reviews/reducer'
import orderReducer from './ecommerce/order/reducer'
import productReducer from './ecommerce/products/list/reducer'
import shopCartReducer from './ecommerce/shop_cart/reducer'
import wishListReducer from './ecommerce/wishlist/reducer'
import mailReducer from './email/reducer'
import eventGrid from './events/grid/reducer'
import eventReducer from './events/list/reducer'
import fileListReducer from './filemanager/file_list/reducer'
import folderListReducer from './filemanager/folder_list/reducer'
import appointmentsReducers from './hospital/appointments_list/reducer'
import departmentsReducers from './hospital/departments/reducer'
import employeeSalaryReducer from './hospital/employee_salary/reducer'
import reportReducers from './hospital/overview/reducer'
import patientsReducers from './hospital/patients/reducer'
import attendanceReducers from './hospital/staff_attendance/reducer'
import holidaysReducers from './hospital/staff_holidays/reducer'
import staffLeaveReducers from './hospital/staff_leaves/reducer'
import staffListReducers from './hospital/staff_lists/reducer'
import invoiceReducer from './invoice/reducer'
import layoutReducer from './layout/reducer'
import projectsGridReducer from './projects/grid/reducer'
import projectsListReducer from './projects/list/reducer'
import examQuestionReducers from './school/exam_question/reducer'
import examListReducers from './school/exam_schedule/reducer'
import libraryBookReducers from './school/library_book/reducer'
import parentsReducers from './school/parents/reducer'
import teacherPayrollReducers from './school/payroll/reducer'
import studentListReducers from './school/student/reducer'
import teacherListReducers from './school/teachers/reducer'

// Combine your reducers
const rootReducer = combineReducers({
  UserList: userListReducer,
  RoleList: roleListReducer,
  CategoryList: categoryListReducer,



  Layout: layoutReducer,
  Contact: contactReducer,
  Deal: dealReducer,
  Lead: leadReducer,
  EventGrid: eventGrid,
  EventList: eventReducer,
  ProjectsList: projectsListReducer,
  ProjectsGrid: projectsGridReducer,
  ProductList: productReducer,
  CustomerList: customerListReducer,
  Departments: departmentsReducers,
  ShopCarts: shopCartReducer,
  Checkout: checkoutReducer,
  WishList: wishListReducer,
  Patients: patientsReducers,
  Reports: reportReducers,
  Holidays: holidaysReducers,
  Attendance: attendanceReducers,
  Calendar: calendarReducer,
  EmployeeSalary: employeeSalaryReducer,
  Mail: mailReducer,
  StaffLeave: staffLeaveReducers,
  StaffList: staffListReducers,
  Appointments: appointmentsReducers,
  ManageReview: manageReviewReducer,
  Order: orderReducer,
  LibraryBooks: libraryBookReducers,
  ExamList: examListReducers,
  Parents: parentsReducers,
  Category: categoryReducer,
  DefaultChat: defaultChatListReducer,
  ContactChat: contactChatReducer,
  GroupChat: groupChatListReducer,
  Invoice: invoiceReducer,
  FileList: fileListReducer,
  FolderList: folderListReducer,
  TeacherPayroll: teacherPayrollReducers,
  TeacherList: teacherListReducers,
  StudentList: studentListReducers,
  ExamQuestionList: examQuestionReducers,
})

// Create a reducer to handle hydration (if needed)
const reducer = (state, action) => {
  // If you're using hydration (like with SSR), handle it here
  // Remove the HYDRATE part if not using SSR
  if (action.type === 'HYDRATE') {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  }
  return rootReducer(state, action)
}

// Configure the Redux store
export const makeStore = () =>
  configureStore({
    reducer,
    // Optional: Add middleware here if needed
  })

const store = makeStore()

export default store
