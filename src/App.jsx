import React, { useEffect } from 'react'

import '@assets/css/fonts/fonts.css'
import '@assets/css/icons.css'
import '@assets/css/tailwind.css'
// Adjust the path if needed
import { LAYOUT_LANGUAGES } from '@constants/layout'
import 'flatpickr/dist/flatpickr.css'
// Adjust the path if needed
import { withTranslation } from 'react-i18next'
import 'simplebar-react/dist/simplebar.min.css'

import './assets/css/plugins.css'
// Adjust the path if needed
import Routing from './routes'
import { getOrderData } from './slices/ecommerce/order/thunk'
import { getProductListData } from './slices/ecommerce/products/list/thunk'
import { getECommerceShopCartData } from './slices/ecommerce/shop_cart/thunk'
import { getWishList } from './slices/ecommerce/wishlist/thunk'
import { getPatientsData } from './slices/hospital/patients/thunk'
import { getInvoiceListData } from './slices/invoice/thunk'
import { initialState } from './slices/layout/reducer'
import { getPreviousStorageData } from './slices/layout/utils'
import store from './slices/reducer'
import {
  changeDarkModeClass,
  changeDataColor,
  changeDirection,
  changeLayout,
  changeLayoutContentWidth,
  changeLayoutLanguage,
  changeLayoutMode,
  changeModernNavigation,
  changeSidebarColor,
  changeSidebarSize,
  getStudentListData,
} from './slices/thunk'

import { getRole } from './slices/masterData/roles/thunk'
import { getCategory } from './slices/masterData/categories/thunk'

function App() {
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.classList.add('scroll-smooth', 'group')
    return () => {
      htmlElement.classList.remove('scroll-smooth', 'group')
    }
  }, [])

  useEffect(() => {
    const dispatch = store.dispatch // Use AppDispatch
    dispatch(getRole())
    dispatch(getCategory())







    dispatch(getECommerceShopCartData())
    dispatch(getOrderData())
    dispatch(getInvoiceListData())
    dispatch(getWishList())
    dispatch(getPatientsData())
    dispatch(getStudentListData())
    dispatch(getProductListData())
    dispatch(
      changeLayoutMode(
        getPreviousStorageData('data-layout-mode') ?? initialState.layoutMode
      )
    )
    dispatch(
      changeLayoutContentWidth(
        getPreviousStorageData('data-layout-content-width') ??
          initialState.layoutWidth
      )
    )
    dispatch(
      changeSidebarSize(
        getPreviousStorageData('data-sidebar-size') ??
          initialState.layoutSidebar
      )
    )
    dispatch(
      changeDirection(
        getPreviousStorageData('data-layout-direction') ??
          initialState.layoutDirection
      )
    )
    dispatch(
      changeLayout(
        getPreviousStorageData('data-layout-type') ?? initialState.layoutType
      )
    )
    dispatch(
      changeSidebarColor(
        getPreviousStorageData('data-sidebar-colors') ??
          initialState.layoutSidebarColor
      )
    )
    dispatch(
      changeLayoutLanguage(
        getPreviousStorageData('data-layout-language') ??
          LAYOUT_LANGUAGES.ENGLISH
      )
    )
    dispatch(
      changeDataColor(
        getPreviousStorageData('data-theme-color') ??
          initialState.layoutDataColor
      )
    )
    dispatch(
      changeDarkModeClass(
        getPreviousStorageData('data-theme-dark-class') ??
          initialState.layoutDarkModeClass
      )
    )
    dispatch(
      changeModernNavigation(
        getPreviousStorageData('data-theme-nav-type') ??
          initialState.layoutNavigation
      )
    )
  }, [])

  return (
    <React.Fragment>
      <Routing />
    </React.Fragment>
  )
}

export default withTranslation()(App)
