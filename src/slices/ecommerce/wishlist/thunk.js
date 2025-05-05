import AddToast from '@src/components/CustomComponents/Toast/AddToast'
import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import {
  addLocalStorageRecord,
  createLocalStorage,
  deleteLocalStorageRecord,
  getLocalStorage,
  updateLocalStorageRecord,
} from '@src/utils/crud_functions'
import { REACT_APP_WISHLIST_API } from '@src/utils/url_helper'

import {
  addWishListProduct,
  getWishListData,
  modifyWishListProductQuantity,
  removeWishListProduct,
} from './reducer'

const USER_WISHLIST_API = REACT_APP_WISHLIST_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

//  get wishlist data
export const getWishList = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-wishlist')
      if (!responseData) {
        const response = await api.get(USER_WISHLIST_API)
        createLocalStorage('d-wishlist', response)
        dispatch(getWishListData(response))
      } else {
        dispatch(getWishListData(responseData))
      }
    } else {
      const response = await api.get(USER_WISHLIST_API)
      dispatch(getWishListData(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Wishlist Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching whish list data:', error)
  }
}

// add customer record
export const addWishListProductRecord = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      USER_WISHLIST_API,
      newRecord,
      'Wishlist record'
    )
    const { message } = response
    AddToast(message || 'Wishlist record added successfully')
    addLocalStorageRecord('d-wishlist', newRecord)
    dispatch(addWishListProduct(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Wishlist record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding whish list record:', error)
  }
}

// update wishlist record
export const updateWishListProductQuantity = (product) => async (dispatch) => {
  try {
    const response = await api.put(
      USER_WISHLIST_API,
      product,
      'Wishlist record'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Wishlist record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-wishlist', product)
    dispatch(modifyWishListProductQuantity(product))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Wishlist record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating whish list record:', error)
  }
}

// delete wishlist record from wishlist
export const deleteWishListProduct = (whishlist) => async (dispatch) => {
  try {
    const deletePromises = whishlist.map(async (_id) => {
      const response = await api.delete(
        USER_WISHLIST_API,
        _id,
        'Wishlist record'
      )
      const { message } = response
      DeleteToast(message || 'Product deleted successfully')
      return _id
    })

    const deletedWishlist = await Promise.all(deletePromises)
    dispatch(removeWishListProduct(deletedWishlist))
    deleteLocalStorageRecord({
      key: 'd-shop-cart-list',
      listRecord: whishlist,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'wishlist record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting whish list: ', error)
  }
}
