import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

const Tabs = ({
  children,
  ulProps = '',
  activeTabClass = '',
  inactiveTabClass = '',
  otherClass = '',
  contentProps = '',
  liProps = '',
  spanProps = '',
  onChange, // Add this line
}) => {
  const router = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  // Extract tab labels and content from children
  const tabs = React.Children.toArray(children)

  // Set the active tab based on the current path
  useEffect(() => {
    const activeIndex = tabs.findIndex(
      (tab) => tab.props.path === router.pathname
    )
    if (activeIndex !== -1) {
      setActiveTab(activeIndex)
    }
  }, [router.pathname, tabs])

  const handleTabClick = (index, path) => {
    setActiveTab(index)
    if (path) {
      navigate(path)
    }
    const label = tabs[index].props.label
    if (label && onChange) {
      onChange(label) // Notify parent component of the tab change
    }
  }

  return (
    <>
      <ul className={`${ulProps}`}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index, tab.props.path)}
            className={`${liProps}`}
            style={{ cursor: 'pointer' }}>
            <span
              className={`${activeTab === index ? activeTabClass : inactiveTabClass} ${otherClass}`}>
              {tab.props.icon}
              <span className={`${spanProps}`}>{tab.props.label}</span>
            </span>
          </li>
        ))}
      </ul>
      <div className={contentProps}>{tabs[activeTab].props.children}</div>
    </>
  )
}

const Tab = ({ children }) => {
  return <>{children}</>
  // Only render children (content) for this tab
}

export { Tabs, Tab }
