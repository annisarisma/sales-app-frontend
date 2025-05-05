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
import { REACT_APP_SHOP_CART_API } from '@src/utils/url_helper'

import {
  addShopProduct,
  getEcommerceShopCartList,
  modifyProduct,
  removeShopProduct,
} from './reducer'

const USER_SHOP_CART_API = REACT_APP_SHOP_CART_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get ecommerce shop cart data
export const getECommerceShopCartData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-shop-cart-list')
      if (!responseData) {
        const response = await api.get(USER_SHOP_CART_API)
        createLocalStorage('d-shop-cart-list', response)
        dispatch(getEcommerceShopCartList(response))
      } else {
        dispatch(getEcommerceShopCartList(responseData))
      }
    } else {
      const response = await api.get(USER_SHOP_CART_API)
      dispatch(getEcommerceShopCartList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Shop Cart List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching shop cart data:', error)
  }
}

// add product to shop
export const addNewShopProduct = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(USER_SHOP_CART_API, newRecord, 'Shop cart')
    const { message } = response
    AddToast(message || 'Product transferred to cart.')
    addLocalStorageRecord('d-shop-cart-list', newRecord)
    dispatch(addShopProduct(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Shop cart record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding shop cart record:', error)
  }
}

// update wishlist record
export const updateShopCartProduct = (product) => async (dispatch) => {
  try {
    const response = await api.put(USER_SHOP_CART_API, product, 'Shop cart')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Shop cart updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-shop-cart-list', product)
    dispatch(modifyProduct(product))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Shop cart record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating shop cart record:', error)
  }
}

// delete wishlist record from wishlist
export const deleteShopProduct = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (_id) => {
      const response = await api.delete(USER_SHOP_CART_API, _id, 'Shop cart')
      const { message } = response
      DeleteToast(message || 'Product deleted successfully')
      return _id
    })

    const deletedProducts = await Promise.all(deletePromises)
    dispatch(removeShopProduct(deletedProducts))
    deleteLocalStorageRecord({
      key: 'd-shop-cart-list',
      listRecord: reviews,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Shop cart record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting shop cart: ', error)
  }
}
