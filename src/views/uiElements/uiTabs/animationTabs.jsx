import React from 'react'

import { Tab, Tabs } from '@custom/Tabs/Tab'
import { Airplay, House, UserSquare } from 'lucide-react'

const AnimationTabs = () => {
  return (
    <React.Fragment>
      <Tabs
        ulProps="tabs-animation"
        activeTabClass="active"
        inactiveTabClass="text-gray-500 hover:text-green-500 dark:text-dark-500 dark:hover:text-green-500"
        contentProps="mt-4"
        otherClass="nav-item group/item [&.active]:bg-green-500 [&.active]:text-green-50"
        liProps="w-32"
        spanProps="content group-hover/item:visible group-hover/item:-translate-y-3">
        <Tab
          icon={<House className="icon group-hover/item:translate-y-11" />}
          label="Home">
          <div>
            <p className="text-gray-500 dark:text-dark-500">
              The Admin Dashboard displays tabs for multiple pages that provide
              a personalized view of BI performance, data correctness, required
              cube maintenance and required administrative actions. These pages
              contain the results of detailed analyses, represented by links,
              images, graphs, pie charts and BI reports.
            </p>
          </div>
        </Tab>
        <Tab
          icon={<Airplay className="icon group-hover/item:translate-y-11" />}
          label="Service">
          <div>
            <p className="text-gray-500 dark:text-dark-500">
              A service administrator is responsible for overseeing all aspects
              of the work order for a service department. Your job duties
              include coordinating with the service manager on the completion of
              customer work orders, putting together billing for work completed,
              and reviewing time cards for service employees.
            </p>
          </div>
        </Tab>
        <Tab
          icon={<UserSquare className="icon group-hover/item:translate-y-11" />}
          label="Contact Us">
          <div>
            <p className="text-gray-500 dark:text-dark-500">
              he official business definition of a Contact Administrator is an
              individual responsible for managing the contact database of an
              organization. This includes the maintenance of contact
              information, the creation of contact groups, and the organization
              of contact information into categories.
            </p>
          </div>
        </Tab>
      </Tabs>
    </React.Fragment>
  )
}

export default AnimationTabs
