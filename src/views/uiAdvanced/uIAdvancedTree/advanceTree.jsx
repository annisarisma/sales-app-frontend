import React, { useState } from 'react'

const fileTreeData = [
  {
    title: 'Domiex-React Folders',
    children: [
      {
        title: 'dist/',
        children: [
          {
            title: 'assets',
            children: [
              { title: 'css' },
              { title: 'images' },
              { title: 'libs' },
              { title: 'main-*.js' },
            ],
          },
        ],
      },
      {
        title: 'plugins',
        children: [
          {
            title: 'plugins',
            children: [
              {
                title: 'layouts',
                children: [{ title: 'Layouts Plugins' }],
              },
              {
                title: 'PLugins',
                children: [{ title: 'Plugins' }],
              },
            ],
          },
          { title: 'buttons.js' },
          { title: 'cards.js' },
          { title: 'forms.js' },
          { title: 'headings.js' },
        ],
      },
      {
        title: 'src/',
        children: [
          {
            title: 'assets',
            children: [
              {
                title: 'fonts',
                children: [{ title: 'All Fonts' }],
              },
              {
                title: 'images',
                children: [{ title: 'ALL Images' }],
              },
              {
                title: 'libs',
                children: [{ title: 'All Libs Files' }],
              },
              {
                title: 'css',
                children: [{ title: 'All css Files' }],
              },
            ],
          },
          {
            title: 'components',
            children: [{ title: 'All common comonents' }],
          },
          {
            title: 'routes',
            children: [{ title: 'All routes' }],
          },
          {
            title: 'layout',
            children: [{ title: 'All layout files' }],
          },
          {
            title: 'slices',
            children: [{ title: 'All slice files' }],
          },
          {
            title: 'view',
            children: [
              { title: 'auth' },
              { title: 'dasboard' },
              { title: 'chart' },
            ],
          },
          { title: 'All Pages Files' },
        ],
      },
      { title: 'vite.config.js' },
      { title: 'tailwind.config.js' },
      { title: 'README.md' },
      { title: 'postcss.config.js' },
      { title: 'package.json' },
      { title: 'package-lock.json' },
      { title: '.gitignore' },
    ],
  },
]
const FolderTree = ({ levels }) => {
  // State to manage which folders are open
  const [openFolders, setOpenFolders] = useState(new Set())

  const toggleLevel = (title) => {
    setOpenFolders((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(title)) {
        newSet.delete(title)
      } else {
        newSet.add(title)
      }
      return newSet
    })
  }

  const renderLevel = (obj) => {
    const isOpen = openFolders.has(obj.title)

    return (
      <li key={obj.title}>
        <div
          className="block px-5 py-1 hover:text-gray-900 dark:hover:text-dark-100 cursor-pointer"
          onClick={obj.children ? () => toggleLevel(obj.title) : undefined}>
          <i
            className={`icon ${
              obj.children
                ? isOpen
                  ? 'ri-folder-open-line text-yellow-500 mr-1'
                  : 'ri-folder-3-line text-yellow-500 mr-1'
                : 'ri-file-line text-gray-500 dark:text-dark-500 mr-1'
            }`}></i>{' '}
          {obj.title}
        </div>
        {obj.children && isOpen && (
          <ul
            className={`pb-1 ltr:pl-5 rtl:pr-5 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {obj.children.map((child) => renderLevel(child))}
          </ul>
        )}
      </li>
    )
  }

  return <ul>{levels.map((level) => renderLevel(level))}</ul>
}

const FolderStructureTree = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Folder Structure Tree</h6>
          </div>
          <div className="card-body">
            <div className="-mx-5">
              <FolderTree levels={fileTreeData} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FolderStructureTree
