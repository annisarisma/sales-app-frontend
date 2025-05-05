import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import EComInfo from '@views/dashboards/ecommerceDashboard/ecomInfo'
import MarkersMap from '@views/dashboards/ecommerceDashboard/location'
import Message from '@views/dashboards/ecommerceDashboard/message'
import ProductStock from '@views/dashboards/ecommerceDashboard/productStock'
import TopCountries from '@views/dashboards/ecommerceDashboard/topCountries'
import TopSellingProducts from '@views/dashboards/ecommerceDashboard/topSellingProducts'
import Traffic from '@views/dashboards/ecommerceDashboard/traffic'
import Welcome from '@views/dashboards/ecommerceDashboard/welcome'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DashboardsPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'E-Commerce | Domiex - React JS Admin & Dashboard Template'
    navigate('/dashboards/ecommerce')
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title={'ECommerce'} subTitle={'Dashboards'} />
      <div className="grid grid-cols-12 gap-x-space">
        <Welcome />
        <EComInfo />
        <ProductStock />
        <MarkersMap />
        <TopSellingProducts />
        <TopCountries />
        <Traffic />
        <Message />
      </div>
    </React.Fragment>
  )
}
export default DashboardsPage
