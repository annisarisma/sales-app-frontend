import React, { useEffect, useMemo, useState } from 'react'

import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { deleteReportsData, getReportsData } from '@src/slices/thunk'
import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

import AddEditReports from './addEditReports'

const Reports = () => {
  const dispatch = useDispatch()
  const { reportList } = useSelector((state) => state.Reports)
  const [reportData, setReportData] = useState([])
  const [medicine, setMedicine] = useState(null)
  const [show, setShow] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentReports, setCurrentReports] = useState(null)

  useEffect(() => {
    if (!reportList) {
      dispatch(getReportsData())
    } else {
      setReportData(reportList)
    }
  }, [reportList, dispatch])

  const toggleDelete = () => {
    setShow(false)
    setMedicine(null)
  }

  const onClickEventListDelete = (list) => {
    setMedicine(list)
    setShow(true)
  }

  const handleDeleteList = () => {
    if (medicine) {
      dispatch(deleteReportsData([medicine._id]))
      setShow(false)
    }
  }

  //add and edite
  const [modalState, setModalState] = useState({
    showAddReportForm: false,
    showEditReportForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleCloseModal = () => {
    const modalKey = 'showAddReportForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentReports(null)
  }

  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = reportData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'badge badge-green'
      case 'In Progress':
        return 'badge badge-purple'
      case 'Pending':
        return 'badge badge-yellow'
      default:
        return 'badge'
    }
  }

  const columns = useMemo(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Date',
        accessorKey: 'date',
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: ({ row }) => {
          const { status } = row.original
          return <span className={getStatusClass(status)}>{status}</span>
        },
      },
      {
        header: 'Action',
        accessorKey: 'action',
        cell: (value) => (
          <div className="flex items-center gap-2">
            <button
              title="Download"
              className="btn btn-sub-purple btn-icon !size-8 rounded-full">
              <i className="ri-download-2-line"></i>
            </button>
            <button
              title="delete"
              className="btn btn-sub-red btn-icon !size-8 rounded-full"
              data-modal-target="deleteReportsModal"
              onClick={(e) => {
                e.preventDefault()
                onClickEventListDelete(value.row.original)
              }}>
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        ),
      },
    ],
    []
  )

  return (
    <React.Fragment>
      <div className="col-span-12 overflow-hidden xl:col-span-6 xl:row-span-2 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Reports</h6>
          <button
            data-modal-target="addReportsModal"
            className="font-medium shrink-0 text-primary-500 link hover:text-primary-600"
            onClick={() => openModal('showAddReportForm')}>
            <Plus className="inline-block mb-1 align-middle size-4" /> Add
            Reports
          </button>
        </div>
        <div className="pt-0 card-body">
          <div>
            <TableContainer
              columns={columns || []}
              data={paginatedEvents}
              divClassName="overflow-x-auto table-box"
              tableClassName="table flush odd-striped whitespace-nowrap"
              thTrClassName="*:px-3 *:py-2.5"
              isHeader={false}
            />
          </div>
          <Pagination
            totalItems={reportData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />
      <AddEditReports
        modalState={modalState}
        closeModal={handleCloseModal}
        reportsList={reportData}
        editMode={editMode}
        currentReports={currentReports}
      />
    </React.Fragment>
  )
}

export default Reports
