import React, { useCallback, useEffect, useState } from 'react'

import { menu } from '@data/index'
import { LAYOUT_TYPES, SIDEBAR_SIZE } from '@src/components/Constants/layout'
import { changeHTMLAttribute, setNewThemeData } from '@src/slices/layout/utils'
import { changeSidebarSize } from '@src/slices/thunk'
import { useDispatch, useSelector } from 'react-redux'

import { changeSettingModalOpen } from '../slices/layout/reducer'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const Layout = ({ children, breadcrumbTitle }) => {
  const title = breadcrumbTitle
    ? ` ${breadcrumbTitle} | Domiex - React JS Admin & Dashboard Template `
    : 'Domiex - Admin & Dashboard Template'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const dispatch = useDispatch()
  const [serachSidebar, setSearchSidebar] = useState(menu)
  const [serachValue, setSearchValue] = useState('')
  const {
    layoutMode,
    layoutType,
    layoutWidth,
    layoutSidebar,
    layoutDarkModeClass,
    layoutSidebarColor,
    layoutDataColor,
    layoutDirection,
  } = useSelector((state) => state.Layout)
  const handleThemeSidebarSize = useCallback(() => {
    if (layoutType !== 'horizontal') {
      // Toggle between BIG and SMALL sidebar
      const newSize =
        layoutSidebar === SIDEBAR_SIZE.DEFAULT
          ? SIDEBAR_SIZE.SMALL
          : SIDEBAR_SIZE.DEFAULT
      setNewThemeData('data-sidebar-size', newSize)
      changeHTMLAttribute('data-sidebar', newSize)
      dispatch(changeSidebarSize(newSize))
    } else {
      // If layout is horizontal, always use default size
      setNewThemeData('data-sidebar-size', SIDEBAR_SIZE.DEFAULT)
      changeHTMLAttribute('data-sidebar', SIDEBAR_SIZE.DEFAULT)
      dispatch(changeSidebarSize(SIDEBAR_SIZE.DEFAULT))
    }
  }, [layoutType, layoutSidebar, dispatch])

  const toggleSidebar = () => {
    if (window.innerWidth < 1000) {
      // Toggle sidebar open/close for small screens
      setIsSidebarOpen((prev) => !prev)
    } else {
      // On larger screens, toggle between big and small sidebar
      handleThemeSidebarSize()
    }
  }

  useEffect(() => {
    const handleResize = () => {
      // Update the sidebar state based on the window width
      setIsSidebarOpen(window.innerWidth >= 1024)
      if (
        layoutType === LAYOUT_TYPES.SEMIBOX ||
        layoutType === LAYOUT_TYPES.MODERN
      ) {
        if (window.innerWidth > 1000) {
          // Set the layout to the layoutType if screen size is greater than 1000px
          document.documentElement.setAttribute('data-layout', layoutType)
        } else {
          // Set to 'default' if screen size is 1000px or less
          document.documentElement.setAttribute('data-layout', 'default')
        }
      } else {
        // For other layouts, just set to layoutType, no need to check screen size
        document.documentElement.setAttribute('data-layout', layoutType)
      }
    }
    // Initial layout check on component mount
    handleResize()
    // Listen for window resize events
    window.addEventListener('resize', handleResize)
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [layoutType]) // Only rerun the effect when layoutType changes
  // handle search menu
  const handleSearchClient = (value) => {
    setSearchValue(value)

    if (value.trim() !== '') {
      const filteredMenu = menu.filter((megaItem) => {
        // Filter the first level: MegaMenu
        const isMegaMenuMatch =
          megaItem.title.toLowerCase().includes(value.toLowerCase()) ||
          megaItem.lang.toLowerCase().includes(value.toLowerCase())

        // Filter the second level: MainMenu (children of MegaMenu)
        const filteredMainMenu = megaItem.children?.filter((mainItem) => {
          const isMainMenuMatch =
            mainItem.title.toLowerCase().includes(value.toLowerCase()) ||
            mainItem.lang.toLowerCase().includes(value.toLowerCase())

          // Filter the third level: SubMenu (children of MainMenu)
          const filteredSubMenu = mainItem.children?.filter((subItem) => {
            return (
              subItem.title.toLowerCase().includes(value.toLowerCase()) ||
              subItem.lang.toLowerCase().includes(value.toLowerCase())
            )
          })

          // If SubMenu matches or MainMenu matches, return the filtered item
          return (
            isMainMenuMatch || (filteredSubMenu && filteredSubMenu.length > 0)
          )
        })

        // Return MegaMenu item if it matches or has any matching MainMenu children
        return (
          isMegaMenuMatch || (filteredMainMenu && filteredMainMenu.length > 0)
        )
      })

      setSearchSidebar(filteredMenu)
    } else {
      setSearchSidebar(menu)
    }
  }
  useEffect(() => {
    let timer
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) {
        timer = setTimeout(() => {
          dispatch(changeSettingModalOpen(true))
        }, 1000) // Delay to show modal after a short timeout
      }
    }
    // Cleanup the timeout if the component is unmounted or the effect is cleaned up
    return () => {
      clearTimeout(timer)
    }
  }, [dispatch])
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth', 'group')
    document.documentElement.setAttribute('data-mode', layoutMode)
    document.documentElement.setAttribute('data-colors', layoutDataColor)
    document.documentElement.setAttribute('lang', 'en')
    document.documentElement.setAttribute('data-layout', layoutType)
    document.documentElement.setAttribute('data-content-width', layoutWidth)
    document.documentElement.setAttribute('data-sidebar', layoutSidebar)
    document.documentElement.setAttribute(
      'data-sidebar-colors',
      layoutSidebarColor
    )
    document.documentElement.setAttribute('data-nav-type', layoutDarkModeClass)
    document.documentElement.setAttribute('dir', layoutDirection)
  }, [])

  return (
    <React.Fragment>
      <title>{title}</title>
      {/* </Head> */}
      <Topbar
        searchMenu={(value) => handleSearchClient(value)}
        searchText={serachValue}
        toggleSidebar={toggleSidebar}
      />
      {/* sidebar */}
      <Sidebar
        serachSidebar={serachSidebar}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="relative min-h-screen group-data-[layout=boxed]:bg-white group-data-[layout=boxed]:rounded-md">
        <div className="page-wrapper">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
