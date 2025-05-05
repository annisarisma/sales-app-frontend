import React, { useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Pagination from '@src/components/Common/Pagination'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import { taskTable, tasksList, widgetsData } from '@src/data'
import { CircleCheckBig, Cross, Dessert, Hourglass } from 'lucide-react'
import { Link } from 'react-router-dom'

import ProjectsTabs from '../ProjectsTabs'

const iconMapping = {
  Dessert: Dessert,
  Cross: Cross,
  Hourglass: Hourglass,
  CircleCheckBig: CircleCheckBig,
}

const TaskTable = ({ tasks, itemsPerPage, currentPage }) => {
  const [sortBy, setSortBy] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortDirection('asc')
    }
  }

  const sortedTasks = useMemo(() => {
    let sorted = [...tasks]
    if (sortBy) {
      sorted.sort((a, b) => {
        const aValue = a[sortBy]
        const bValue = b[sortBy]
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
        return 0
      })
    }
    return sorted
  }, [sortBy, sortDirection, tasks])

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTasks = sortedTasks.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <React.Fragment>
      <table className="table flush whitespace-nowrap">
        <thead>
          <tr className="text-gray-500 dark:text-dark-500">
            <th
              onClick={() => handleSort('taskName')}
              className="!font-medium cursor-pointer">
              Task Name{' '}
              {sortBy === 'taskName' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th
              onClick={() => handleSort('createDate')}
              className="!font-medium cursor-pointer">
              Create Date{' '}
              {sortBy === 'createDate' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className="!font-medium cursor-pointer">Assigned To</th>
            <th
              onClick={() => handleSort('status')}
              className="!font-medium cursor-pointer">
              Status{' '}
              {sortBy === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th
              onClick={() => handleSort('priority')}
              className="!font-medium cursor-pointer">
              Priority{' '}
              {sortBy === 'priority' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className="!font-medium cursor-pointer">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTasks.map((project, index) => (
            <tr key={index}>
              <td>{project.taskName}</td>
              <td>{project.createDate}</td>
              <td>
                <div className="flex ml-3 -space-x-3 grow">
                  {(project.assignees || []).map((assignee, idx) => (
                    <Link
                      key={idx}
                      to="#!"
                      className="transition duration-300 ease-linear hover:z-10"
                      title="avatar link">
                      <img
                        className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                        src={assignee}
                        alt="assigneeImg"
                      />
                    </Link>
                  ))}
                </div>
              </td>
              <td>
                <span className={`badge ${getStatusClass(project.status)}`}>
                  {project.status}
                </span>
              </td>
              <td>
                <span className={`badge ${getPriorityClass(project.priority)}`}>
                  {project.priority}
                </span>
              </td>
              <td>
                <Dropdown trigger="click" dropdownClassName="dropdown">
                  <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
                    <i className="ri-more-2-fill"></i>
                  </DropdownButton>
                  <DropdownMenu>
                    <Link to="#!" className="dropdown-item">
                      <i className="align-middle ri-eye-line"></i> Overview
                    </Link>
                    <Link to="#!" className="dropdown-item">
                      <i className="align-middle ri-pencil-line"></i> Edit
                    </Link>
                    <Link to="#!" className="dropdown-item">
                      <i className="align-middle ri-delete-bin-line"></i> Delete
                    </Link>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

const getStatusClass = (status) => {
  switch (status) {
    case 'New':
      return 'badge-purple'
    case 'Pending':
      return 'badge-yellow'
    case 'Completed':
      return 'badge-green'
    default:
      return ''
  }
}

const getPriorityClass = (priority) => {
  switch (priority) {
    case 'High':
      return 'badge-red'
    case 'Low':
      return 'badge-green'
    default:
      return ''
  }
}

const ProjectsTask = () => {
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  const [tasks, setTasks] = useState(tasksList)
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    document.title = 'Task | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: 0, text: newTask, completed: false, editing: false, date: today },
      ])
      setNewTask('')
    }
  }

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete))
  }

  const handleEnableEditing = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].editing = true
    setTasks(updatedTasks)
  }

  const handleDisableEditing = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].editing = false
    setTasks(updatedTasks)
  }

  const handleTaskChange = (index, newText) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].text = newText
    setTasks(updatedTasks)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  const todayTasks = tasks.filter((task) => task.date === today)
  const yesterdayTasks = tasks.filter((task) => task.date === yesterday)

  // pagination
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const filterTask = (task) => {
    const tasks = taskTable.filter((item) => item.status === task)
    return tasks.length
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Task" subTitle="Projects" />
      {/* tabs */}
      <ProjectsTabs />

      {/* task section */}
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 lg:col-span-6 xl:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-space">
            {widgetsData.map((item, idx) => {
              const IconComponent = iconMapping[item.icon]
              return (
                <div className="card" key={idx}>
                  <div className="card-body">
                    <div className="relative">
                      <div
                        className={`absolute top-0 z-0 size-11 blur-md ${item.bgClass}`}></div>
                      {IconComponent && (
                        <IconComponent
                          className={`relative ${item.iconClass}`}
                        />
                      )}
                    </div>
                    <h6 className="mt-6">
                      {item.count == 'totalTaskCount'
                        ? taskTable.length
                        : item.count == 'newTaskCount'
                          ? `${filterTask('New')}`
                          : item.count == 'completedTaskCount'
                            ? `${filterTask('Completed')}`
                            : `${filterTask('Pending')}`}
                    </h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex items-center gap-space">
            <h6 className="grow">Project Tasks</h6>
            <button type="button" className="btn btn-primary shrink-0">
              Add Task
            </button>
          </div>

          <div className="my-5">
            <div className="overflow-x-auto">
              <TaskTable
                tasks={taskTable}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
              />
            </div>
            <Pagination
              totalItems={taskTable.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">To Do Lists</h6>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <h6>Today ({todayTasks.length})</h6>
                {todayTasks.map((task, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_36px] items-center gap-6">
                    <div className="input-check-group">
                      <input
                        type="checkbox"
                        className="input-check input-check-primary"
                        checked={task.completed}
                        onChange={() => {
                          const updatedTasks = [...tasks]
                          updatedTasks[index].completed = !task.completed
                          setTasks(updatedTasks)
                        }}
                      />
                      {task.editing ? (
                        <input
                          value={task.text}
                          onChange={(e) =>
                            handleTaskChange(index, e.target.value)
                          }
                          onBlur={() => handleDisableEditing(index)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleDisableEditing(index)
                          }}
                          className="ml-3 form-input"
                        />
                      ) : (
                        <span
                          onDoubleClick={() => handleEnableEditing(index)}
                          className={`text-gray-800 select-none ltr:ml-3 rtl:mr-3 dark:text-dark-50 ${task.completed ? 'line-through text-gray-500 dark:text-dark-500' : ''}`}>
                          {task.text}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to="#!"
                        onClick={() => handleEnableEditing(index)}
                        className="flex items-center justify-center text-gray-500 transition duration-300 ease-linear rounded-md dark:text-dark-500 size-5 hover:text-yellow-500 dark:hover:text-yellow-500">
                        <i className="ri-pencil-line"></i>
                      </Link>
                      <Link
                        to="#!"
                        onClick={() => handleDeleteTask(task)}
                        className="flex items-center justify-center text-gray-500 transition duration-300 ease-linear rounded-md dark:text-dark-500 size-5 hover:text-red-500 dark:hover:text-red-500">
                        <i className="ri-close-line"></i>
                      </Link>
                    </div>
                  </div>
                ))}

                <h6 className="mt-4">Yesterday ({yesterdayTasks.length})</h6>
                {yesterdayTasks.map((task, index) => (
                  <div
                    key={`yesterday-${index}`}
                    className="grid grid-cols-[1fr_36px] items-center gap-6">
                    <div className="input-check-group">
                      <input
                        type="checkbox"
                        className="input-check input-check-primary"
                        checked={task.completed}
                        onChange={() => {
                          const updatedTasks = [...tasks]
                          updatedTasks[tasks.indexOf(task)].completed =
                            !task.completed
                          setTasks(updatedTasks)
                        }}
                      />
                      {task.editing ? (
                        <input
                          value={task.text}
                          onChange={(e) =>
                            handleTaskChange(
                              tasks.indexOf(task),
                              e.target.value
                            )
                          }
                          onBlur={() =>
                            handleDisableEditing(tasks.indexOf(task))
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleDisableEditing(tasks.indexOf(task))
                          }}
                          className="ml-3 form-input"
                        />
                      ) : (
                        <span
                          onDoubleClick={() =>
                            handleEnableEditing(tasks.indexOf(task))
                          }
                          className={`text-gray-800 select-none ltr:ml-3 rtl:mr-3 dark:text-dark-50 ${task.completed ? 'line-through text-gray-500 dark:text-dark-500' : ''}`}>
                          {task.text}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to="#!"
                        onClick={() => handleEnableEditing(tasks.indexOf(task))}
                        className="flex items-center justify-center text-gray-500 transition duration-300 ease-linear rounded-md dark:text-dark-500 size-5 hover:text-yellow-500 dark:hover:text-yellow-500">
                        <i className="ri-pencil-line"></i>
                      </Link>
                      <Link
                        to="#!"
                        onClick={() => handleDeleteTask(task)}
                        className="flex items-center justify-center text-gray-500 transition duration-300 ease-linear rounded-md dark:text-dark-500 size-5 hover:text-red-500 dark:hover:text-red-500">
                        <i className="ri-close-line"></i>
                      </Link>
                    </div>
                  </div>
                ))}

                <div className="mt-4">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a new task"
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectsTask
