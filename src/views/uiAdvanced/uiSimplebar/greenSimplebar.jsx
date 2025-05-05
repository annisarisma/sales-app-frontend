import React from 'react'

import SimpleBar from 'simplebar-react'

const GreenSimplebar = () => {
  return (
    <React.Fragment>
      <SimpleBar
        className="h-64 -mx-space px-space simplebar-scrollable-y"
        data-simplebar-scroll="green">
        <p className="mb-3 text-gray-500 dark:text-dark-500">
          Creating an admin dashboard requires careful consideration of the
          specific needs and functionalities of the system you're administering.
          Here's a general outline of the content and features you might include
          in an admin dashboard:
        </p>
        <h6 className="mb-2">User Management:</h6>
        <ul className="flex flex-col gap-2 mb-3 text-gray-500 list-disc list-inside dark:text-dark-500">
          <li>Ability to view all users registered in the system.</li>
          <li>Options to add, edit, or delete users.</li>
          <li>
            Permissions management to control access levels for different users
            or user groups.
          </li>
          <li>User activity logs to track user actions within the system.</li>
        </ul>
        <h6 className="mb-2">Content Management:</h6>
        <ul className="flex flex-col gap-2 text-gray-500 list-disc list-inside dark:text-dark-500">
          <li>
            Interface to manage various types of content (e.g., articles,
            products, events).
          </li>
          <li>
            CRUD (Create, Read, Update, Delete) operations for content items.
          </li>
          <li>
            Workflow management for content approval processes if necessary.
          </li>
          <li>Content categorization and tagging features.</li>
        </ul>
      </SimpleBar>
    </React.Fragment>
  )
}

export default GreenSimplebar
