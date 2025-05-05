import React, { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import { deleteDealListData, getDealData } from '@src/slices/crm/deal/thunk'
import CallModal from '@src/views/apps/crm/callModal'
import MessageModal from '@src/views/apps/crm/messageModal'
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  GalleryVerticalEnd,
  List,
  Search,
  Trash,
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createSelector } from 'reselect'

const CrmDeal = () => {
  const dispatch = useDispatch()
  const dealData = createSelector(
    (state) => state.Deal,
    (deal) => deal.deal
  )
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const [dealList, setDealList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = dealList.filter(
    (item) =>
      item.projectName?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      item.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const totalItems = filteredData.length
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  const dealCrm = useSelector(dealData)
  const [selectedDeal, setSelectedDeal] = useState(null)
  const [open, setOpen] = useState(false)
  const [isCardView, setIsCardView] = useState(false)
  const [showingStart, setShowingStart] = useState(1)
  const [showingEnd, setShowingEnd] = useState(
    Math.min(itemsPerPage, totalItems)
  )
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const [messageOpen, setMessageOpen] = useState(false)
  const [sortOption, setSortOption] = useState('none')

  useEffect(() => {
    document.title = 'Deals | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!dealCrm) {
      dispatch(getDealData())
    } else {
      setDealList(dealCrm)
    }
  }, [dealCrm, dispatch])

  // status badge
  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'badge badge-green'
      default:
        return 'badge badge-gray'
    }
  }

  const handleOpenModal = (deal) => {
    setSelectedDeal(deal)
    setMessageOpen(false)
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
    setSelectedDeal(null)
  }

  const handleOpenMessageModal = (deal) => {
    setSelectedDeal(deal)
    setMessageOpen(true)
  }

  const handleCloseMessageModal = () => {
    setMessageOpen(false)
    setSelectedDeal(null)
  }

  const handleSort = (option) => {
    let sortedList = [...dealList]
    switch (option) {
      case 'projectNameAsc':
        sortedList.sort((a, b) => a.projectName.localeCompare(b.projectName))
        break
      case 'projectNameDesc':
        sortedList.sort((a, b) => b.projectName.localeCompare(a.projectName))
        break
      case 'status':
        sortedList.sort((a, b) => a.status.localeCompare(b.status))
        break
      default:
        break
    }
    setSortOption(option)
    setDealList(sortedList)
  }

  useEffect(() => {
    setShowingStart((currentPage - 1) * itemsPerPage + 1)
    setShowingEnd(Math.min(currentPage * itemsPerPage, totalItems))
  }, [currentPage, itemsPerPage, totalItems])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const prevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }

  const gotoPage = (page) => {
    handlePageChange(page)
  }

  const handleDelete = (id) => {
    dispatch(deleteDealListData([id]))
    dispatch(getDealData())
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Deal" subTitle="CRM" />
      <div>
        <div>
          <div>
            <div className="flex flex-wrap justify-between gap-5 mb-5">
              <div>
                <div className="relative group/form">
                  <input
                    type="email"
                    className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                    placeholder="Search for ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                    <Search className="size-4" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`btn btn-icon btn-icon-text ${
                      isCardView ? 'btn btn-primary' : 'btn btn-sub-gray'
                    }`}
                    onClick={() => setIsCardView(true)}
                    title="card">
                    <GalleryVerticalEnd className="size-5" />
                  </button>
                  <button
                    className={`btn btn-icon btn-icon-text ${
                      !isCardView ? 'btn btn-primary' : 'btn btn-sub-gray'
                    }`}
                    onClick={() => setIsCardView(false)}
                    title="list">
                    <List className="size-5" />
                  </button>

                  <Dropdown
                    position=""
                    trigger="click"
                    dropdownClassName="dropdown">
                    <DropdownButton colorClass="btn btn-sub-gray">
                      <Filter className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />{' '}
                      Sort By
                    </DropdownButton>
                    <DropdownMenu>
                      <button
                        onClick={() => handleSort('none')}
                        className="dropdown-item text-start">
                        <span>No Sorting</span>
                      </button>
                      <button
                        onClick={() => handleSort('projectNameAsc')}
                        className="dropdown-item text-start">
                        <span>Alphabetical (A -&gt; Z)</span>
                      </button>
                      <button
                        onClick={() => handleSort('projectNameDesc')}
                        className="dropdown-item text-start">
                        <span>Reverse Alphabetical (Z -&gt; A)</span>
                      </button>
                      <button
                        onClick={() => handleSort('status')}
                        className="dropdown-item text-start">
                        <span>Status</span>
                      </button>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={` ${
                isCardView
                  ? `group card-view gap-x-5 grid grid-cols-12`
                  : `list-view group`
              }`}>
              {(currentData || sortOption).map((item, idx) => (
                <div
                  className="group-[&.card-view]:2xl:col-span-3 group-[&.card-view]:md:col-span-6 group-[&.card-view]:col-span-12"
                  key={idx}>
                  <div className="card">
                    <div className="card-body">
                      <div className="group-[&.list-view]:flex group-[&.list-view]:justify-between gap-4 group-[&.list-view]:overflow-x-auto group-[&.list-view]:whitespace-nowrap group-[&.card-view]:grid group-[&.card-view]:grid-cols-12">
                        <div className="flex items-center col-span-4 gap-3 group-[&.card-view]:min-w-[300px]">
                          <div className="p-2 border border-gray-200 rounded-md dark:border-dark-800 size-12 shrink-0">
                            <img
                              src={item.image}
                              alt="currentDataImg"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="overflow-hidden grow">
                            <h6 className="mb-1 truncate">
                              <Link to="#!">{item.projectName}</Link>
                            </h6>

                            <p className="text-gray-500 dark:text-dark-500">
                              <span>{item.amount}</span>
                              {isCardView && (
                                <span className="inline-block  group-[&.card-view]:inline-block">
                                  - <span>{item.createDate}</span>
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                        {!isCardView && (
                          <div className="w-28">
                            <p className="text-gray-500 dark:text-dark-500">
                              {item.createDate}
                            </p>
                          </div>
                        )}
                        <div className="group-[&.list-view]:w-28 group-[&.card-view]:col-span-12">
                          <p
                            className={`text-gray-500 dark:text-dark-500 truncate ${
                              isCardView
                                ? 'group-[&.card-view]:text-gray-800 dark:group-[&.card-view]:text-dark-50 group-[&.card-view]:font-medium'
                                : ''
                            }`}>
                            {item.company}
                          </p>
                          {isCardView && (
                            <p className="group-[&.card-view]:block hidden mt-1 text-gray-500 dark:text-dark-500 line-clamp-2">
                              {item.content}
                            </p>
                          )}
                        </div>
                        <div className="w-28 group-[&.card-view]:col-span-12">
                          <div className="flex items-center gap-2">
                            <p className="badge badge-pink">
                              {item.daysLeft !== undefined
                                ? `${item.daysLeft} Days left`
                                : 'Expired'}
                            </p>
                            <span className={getStatusClass(item.status)}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                        <div className="col-span-3 group-[&.card-view]:min-w-[300px]">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleOpenMessageModal(item)}
                              className="border-dashed btn btn-dashed-yellow group-[&.card-view]:w-full">
                              <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-message-2-line"></i>{' '}
                              Message
                            </button>
                            <button
                              type="button"
                              data-modal-target="callModal"
                              onClick={() => handleOpenModal(item)}
                              className="border-dashed btn btn-dashed-primary shrink-0">
                              <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-phone-line"></i>{' '}
                              Call
                            </button>
                            <button
                              type="button"
                              className="btn btn-sub-gray shrink-0 btn-icon-text btn-icon"
                              title="delete"
                              onClick={() => handleDelete(item._id)}>
                              <Trash className="inline-block size-4"></Trash>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-5 mb-5 items-center">
              {totalItems > 0 && (
                <>
                  <div className="col-span-12 md:col-span-6">
                    <p className="text-gray-500 dark:text-dark-500">
                      Showing <b>{showingStart}</b> - <b>{showingEnd}</b> of{' '}
                      <b>{totalItems}</b> Results
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="flex justify-end pagination pagination-primary">
                      <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="pagination-pre">
                        <ChevronLeft className="mr-1 ltr:inline-block rtl:hidden size-4"></ChevronLeft>
                        <ChevronRight className="ml-1 ltr:hidden rtl:inline-block size-4"></ChevronRight>
                        Prev
                      </button>
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => gotoPage(index + 1)}
                          className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}>
                          <span>{index + 1}</span>
                        </button>
                      ))}
                      <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="pagination-next">
                        Next
                        <ChevronRight className="ml-1 ltr:inline-block rtl:hidden size-4"></ChevronRight>
                        <ChevronLeft className="mr-1 ltr:hidden rtl:inline-block size-4"></ChevronLeft>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* <!--call modal--> */}
        <CallModal
          open={open}
          closeModal={handleCloseModal}
          selectedDeal={selectedDeal}
        />

        {/* <!--message modal--> */}
        <MessageModal
          messageOpen={messageOpen}
          closeModal={handleCloseMessageModal}
          selectedDeal={selectedDeal}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </React.Fragment>
  )
}

export default CrmDeal
