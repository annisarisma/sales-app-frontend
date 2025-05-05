import React, { useCallback, useEffect, useMemo, useState } from 'react'

import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { deleteMedicineData, getMedicineData } from '@src/slices/thunk'
import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

import AddEditMedicine from './addEditMedicine'

const MedicineHistory = () => {
  //get

  const dispatch = useDispatch()
  const { medicine } = useSelector((state) => state.Reports)

  const [medicineData, setMedicineData] = useState([])
  const [medicineShowData, setMedicineShowData] = useState(null)

  useEffect(() => {
    if (!medicine) {
      dispatch(getMedicineData())
    } else {
      setMedicineData(medicine)
    }
  }, [medicine, dispatch])

  const [show, setShow] = useState(false)
  const toggleDelete = () => {
    setShow(false)
    setMedicineShowData(null)
  }

  const onClickEventListDelete = (list) => {
    setMedicineShowData(list)
    setShow(true)
  }

  const handleDeleteList = () => {
    if (medicineShowData) {
      dispatch(deleteMedicineData([medicineShowData._id]))
      setShow(false)
    }
  }
  const [modalState, setModalState] = useState({
    showAddMedicineForm: false,
    showEditMedicineForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const [editMode, setEditMode] = useState(false)

  const [currentEvent, setCurrentEvent] = useState(null)

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentEvent(event)
    const modalKey = editMode ? 'showEditMedicineForm' : 'showAddMedicineForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditMedicineForm' : 'showAddMedicineForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentEvent(null)
  }
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = medicineData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const columns = useMemo(
    () => [
      {
        header: 'Date',
        accessorKey: 'date',
      },
      {
        header: 'Time',
        accessorKey: 'time',
      },
      {
        header: 'Medicine Name',
        accessorKey: 'medicineName',
      },
      {
        header: 'Dosage',
        accessorKey: 'dosage',
      },
      {
        header: 'Frequency',
        accessorKey: 'frequency',
      },
      {
        header: 'Start Date',
        accessorKey: 'startDate',
      },
      {
        header: 'End Date',
        accessorKey: 'endDate',
      },
      {
        header: 'Prescribing Doctor',
        accessorKey: 'prescribingDoctor',
      },
      {
        header: 'Reason/Condition',
        accessorKey: 'reasonCondition',
      },
      {
        header: 'Notes',
        accessorKey: 'notes',
      },
      {
        header: 'Action',
        accessorKey: 'action',
        cell: (value) => (
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sub-purple btn-icon !size-8 rounded-full"
              title="edit"
              data-modal-target="addMedicineModal"
              onClick={(e) => {
                e.preventDefault()
                handleOpenModal(true, value.row.original)
              }}>
              <i className="ri-pencil-line"></i>
            </button>
            <button
              className="btn btn-sub-red btn-icon !size-8 rounded-full"
              title="delete"
              data-modal-target="deleteMedicineModal"
              onClick={(e) => {
                e.preventDefault()
                onClickEventListDelete(value.row.original)
              }}>
              {' '}
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        ),
      },
    ],
    [handleOpenModal]
  )

  return (
    <React.Fragment>
      <div className="col-span-12 overflow-hidden card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Medicine History</h6>
          <button
            data-modal-target="addMedicineModal"
            className="font-medium shrink-0 text-primary-500 link hover:text-primary-600"
            onClick={() => openModal('showAddMedicineForm')}>
            <Plus className="inline-block mb-1 align-middle size-4" /> Add
            Medicine
          </button>
        </div>

        <div className="pt-0 card-body">
          <div>
            <TableContainer
              columns={columns || []}
              data={paginatedEvents}
              divClassName="overflow-x-auto table-box whitespace-nowrap"
              tableClassName="table flush whitespace-nowrap"
              thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
            />
          </div>
          <Pagination
            totalItems={medicineData.length}
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
      <AddEditMedicine
        modalState={modalState}
        closeModal={handleCloseModal}
        eventList={medicineData}
        editMode={editMode}
        currentContact={currentEvent}
      />
    </React.Fragment>
  )
}

export default MedicineHistory
