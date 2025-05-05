import React, { useEffect } from 'react'

import { CompanyMenuChatSidebar } from '@src/data'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const CompanyMenu = () => {
  const [menuData, setMenuData] = React.useState([])

  useEffect(() => {
    if (CompanyMenuChatSidebar) {
      setMenuData(CompanyMenuChatSidebar)
    }
  }, [])

  return (
    <React.Fragment>
      <div className="col-span-12 2xl:col-span-1 card">
        <SimpleBar className="max-h-[calc(100vh_-_13rem)]">
          <div className="flex gap-4 2xl:flex-col *:shrink-0 card-body">
            {menuData &&
              menuData.length > 0 &&
              menuData.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to="#!"
                    title="link"
                    className={`relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 size-14 hover:ring-2 [&.active]:ring-2 hover:ring-offset-2 dark:hover:ring-offset-dark-900 [&.active]:ring-offset-2 dark:[&.active]:ring-offset-dark-900 hover:ring-opacity-100 [&.active]:ring-opacity-100 hover:ring-primary-500 [&.active]:ring-primary-500 ${item.isOpenCompanyChat === true ? 'active' : ''} `}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt="itemImg"
                        className="rounded-full size-9"
                        width={36}
                        height={36}
                      />
                    ) : (
                      <span>{item.name}</span>
                    )}
                    <span className="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 right-1 size-3"></span>
                  </Link>
                )
              })}
          </div>
        </SimpleBar>
      </div>
    </React.Fragment>
  )
}

export default CompanyMenu
