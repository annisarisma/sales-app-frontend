import user11 from '@assets/images/avatar/user-11.png'
import user12 from '@assets/images/avatar/user-12.png'
import user13 from '@assets/images/avatar/user-13.png'
import user14 from '@assets/images/avatar/user-14.png'
import user15 from '@assets/images/avatar/user-15.png'
import user16 from '@assets/images/avatar/user-16.png'
import user18 from '@assets/images/avatar/user-18.png'
import user19 from '@assets/images/avatar/user-19.png'
import user20 from '@assets/images/avatar/user-20.png'
import user21 from '@assets/images/avatar/user-21.png'
import user22 from '@assets/images/avatar/user-22.png'
import user23 from '@assets/images/avatar/user-23.png'
import user24 from '@assets/images/avatar/user-24.png'
import user25 from '@assets/images/avatar/user-25.png'
import user26 from '@assets/images/avatar/user-26.png'
import user27 from '@assets/images/avatar/user-27.png'
import user28 from '@assets/images/avatar/user-28.png'
import user29 from '@assets/images/avatar/user-29.png'
import user30 from '@assets/images/avatar/user-30.png'

// widgets
const widgetsData = [
  {
    id: 'totalTask',
    icon: 'Dessert',
    iconClass: 'stroke-1 size-10 fill-primary-500/10 text-primary-500',
    bgClass: 'bg-primary-500/20',
    count: 'totalTaskCount',
    label: 'Total Task',
  },
  {
    id: 'newTask',
    icon: 'Cross',
    iconClass: 'text-purple-500 stroke-1 size-10 fill-purple-500/10',
    bgClass: 'bg-purple-500/20',
    count: 'newTaskCount',
    label: 'New Task',
  },
  {
    id: 'pendingTask',
    icon: 'Hourglass',
    iconClass: 'text-yellow-500 stroke-1 size-10 fill-yellow-500/10',
    bgClass: 'bg-yellow-500/20',
    count: 'pendingTaskCount',
    label: 'Pending Task',
  },
  {
    id: 'completedTask',
    icon: 'CircleCheckBig',
    iconClass: 'text-green-500 stroke-1 size-10 fill-green-500/10',
    bgClass: 'bg-green-500/20',
    count: 'completedTaskCount',
    label: 'Completed Task',
  },
]

// To Do Lists
const today = new Date().toISOString().split('T')[0]
const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

const tasksList = [
  {
    id: 1,
    text: 'Define Data Requirements',
    completed: true,
    editing: false,
    date: today,
  },
  {
    id: 2,
    text: 'Identify Data Sources',
    completed: false,
    editing: false,
    date: today,
  },
  {
    id: 3,
    text: 'Setup Initial Infrastructure',
    completed: false,
    editing: false,
    date: today,
  },
  {
    id: 4,
    text: 'Initial Data Cleaning',
    completed: false,
    editing: false,
    date: yesterday,
  },
  {
    id: 5,
    text: 'Data Profiling',
    completed: false,
    editing: false,
    date: yesterday,
  },
  {
    id: 6,
    text: 'Data Transformation',
    completed: false,
    editing: false,
    date: yesterday,
  },
]

// Project Tasks table
const taskTable = [
  {
    taskName: 'Data Source Identification and Access',
    createDate: '15 June, 2024',
    assignees: [user14, user16],
    priority: 'High',
    status: 'New',
  },
  {
    taskName: 'Data Transformation',
    createDate: '08 April, 2024',
    assignees: [user18, user23, user12],
    priority: 'Low',
    status: 'Pending',
  },
  {
    taskName: 'Cleaned and Transformed Datasets',
    createDate: '11 Feb, 2024',
    assignees: [user16],
    priority: 'Low',
    status: 'New',
  },
  {
    taskName: 'Data Quality Assurance',
    createDate: '22 May, 2024',
    assignees: [user14, user20, user19],
    priority: 'High',
    status: 'Completed',
  },
  {
    taskName: 'Database Schema Design',
    createDate: '01 March, 2024',
    assignees: [user13, user21],
    priority: 'Low',
    status: 'New',
  },
  {
    taskName: 'Data Integration',
    createDate: '12 July, 2024',
    assignees: [user22, user24, user15],
    priority: 'High',
    status: 'Completed',
  },
  {
    taskName: 'ETL Process Implementation',
    createDate: '30 April, 2024',
    assignees: [user25, user11],
    priority: 'Low',
    status: 'Pending',
  },
  {
    taskName: 'Performance Tuning',
    createDate: '18 March, 2024',
    assignees: [user14, user23],
    priority: 'High',
    status: 'New',
  },
  {
    taskName: 'Security and Compliance Checks',
    createDate: '05 May, 2024',
    assignees: [user18, user20, user19],
    priority: 'High',
    status: 'Completed',
  },
  {
    taskName: 'User Access Management',
    createDate: '10 August, 2024',
    assignees: [user30, user29],
    priority: 'High',
    status: 'Pending',
  },
  {
    taskName: 'Data Backup and Recovery',
    createDate: '02 September, 2024',
    assignees: [user26, user28],
    priority: 'Low',
    status: 'Pending',
  },
  {
    taskName: 'Data Archival Strategy',
    createDate: '20 March, 2024',
    assignees: [user21, user27, user30],
    priority: 'Low',
    status: 'New',
  },
  {
    taskName: 'Data Visualization',
    createDate: '15 July, 2024',
    assignees: [user25, user18],
    priority: 'High',
    status: 'Pending',
  },
  {
    taskName: 'Machine Learning Model Training',
    createDate: '28 August, 2024',
    assignees: [user19, user14, user16],
    priority: 'High',
    status: 'New',
  },
]

export { widgetsData, tasksList, taskTable }
