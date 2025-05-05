import React, { useCallback, useEffect, useMemo, useState } from 'react'

import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { deleteFileData, getFileListData } from '@src/slices/thunk'
import { CloudUpload, Trash } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

import AddEditFiles from './addEditFiles'

const RecentFiles = () => {
  const { fileList } = useSelector((state) => state.FileList)
  const dispatch = useDispatch()
  const [selectAll, setSelectAll] = useState(false)
  const [deletedListData, setDeletedListData] = useState([])
  const [fileListData, setFileListData] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)
  const [currentFile, setCurrentFile] = useState(null)
  // add & edit modal
  const handleOpenModal = (editMode = true, file) => {
    setEditMode(editMode)
    setCurrentFile(file)
  }
  // close modal
  const handleCloseModal = () => {
    // closeModal(modalKey);
    setEditMode(false)
    setCurrentFile(null)
  }

  useEffect(() => {
    if (!fileList) {
      dispatch(getFileListData())
    } else {
      setFileListData(fileList)
    }
  }, [fileList, dispatch])

  const handleDeleteRecord = (_id) => {
    setIsModalOpen(true)
    setDeletedRecord([_id])
  }
  const setDeleteRecord = () => {
    if (deletedRecord && isModalOpen) {
      dispatch(deleteFileData(deletedRecord))
      setIsModalOpen(false)
      setDeletedRecord(null)
    }
  }
  // select all or unselect all
  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setDeletedListData([])
    } else {
      setDeletedListData(fileListData.map((file) => file._id))
    }
    setSelectAll(!selectAll)
  }, [selectAll, fileListData])

  // set multiple delete records
  const handleSelectRecord = (_id) => {
    setDeletedListData((prev) =>
      prev.includes(_id) ? prev.filter((item) => item !== _id) : [...prev, _id]
    )
  }
  const handleRemoveSelectedRecords = () => {
    dispatch(deleteFileData(deletedListData))
    setDeletedListData([])
    setSelectAll(false)
  }

  const columns = useMemo(
    () => [
      {
        header: (
          <input
            id="checkboxAll"
            className="input-check input-check-primary"
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        ),
        accessorKey: 'id',
        cell: ({ row }) => (
          <input
            className="input-check input-check-primary"
            type="checkbox"
            checked={deletedListData.includes(row.original._id)}
            onChange={() => handleSelectRecord(row.original._id)}
          />
        ),
      },
      {
        header: 'Type',
        accessorKey: 'image',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={row.original.image}
              alt="originalImg"
              className="w-6 h-6"
              width={10}
              height={10}
            />
          </div>
        ),
      },
      {
        header: 'Document Name',
        accessorKey: 'documentName',
      },
      {
        header: 'Size',
        accessorKey: 'size',
      },
      {
        header: 'Last Edit',
        accessorKey: 'lastEdit',
      },
      {
        header: 'Action',
        accessorKey: '',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sub-gray btn-icon !size-8 rounded-md"
              title="edit"
              data-modal-target="renameFileModal"
              onClick={(e) => {
                e.preventDefault()
                handleOpenModal(true, row.original)
              }}>
              <i className="ri-pencil-line"></i>
            </button>
            <button
              className="btn btn-sub-red btn-icon !size-8 rounded-md"
              title="delete"
              onClick={(e) => {
                e.preventDefault()
                handleDeleteRecord(row.original._id)
              }}>
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        ),
      },
    ],
    [selectAll, deletedListData, handleSelectAll]
  )

  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = fileListData.slice(
    startIndex,
    startIndex + itemsPerPage
  )
  return (
    <React.Fragment>
      <div className="card">
        <div className="flex items-center gap-5 card-header">
          <h6 className="card-title grow">Recent Files</h6>
          {deletedListData.length > 0 && (
            <button
              className="btn btn-red btn-icon"
              onClick={handleRemoveSelectedRecords}>
              <Trash className="inline-block size-4" />
            </button>
          )}
          <div className="shrink-0">
            <input type="file" id="fileInput" className="hidden" />
            <label htmlFor="fileInput" className="btn btn-sub-green">
              <CloudUpload className="inline-block ltr:mr-1 rtl:ml-1 size-4" />{' '}
              Upload File
            </label>
          </div>
        </div>
        <div className="pt-0 card-body">
          <div>
            <TableContainer
              isSearch={false}
              isPagination={false}
              columns={columns}
              data={paginatedEvents}
              thClassName="!font-medium cursor-pointer bg-gray-100 dark:bg-dark-850"
              divClassName="overflow-x-auto table-box whitespace-nowrap"
              tableClassName="table flush"
              tBodyClassName=""
              PaginationClassName="pagination-container"
              thTrClassName="*:px-3 *:py-2.5"
              isTableFooter={false}
            />
            {fileListData.length > 0 && (
              <Pagination
                totalItems={fileListData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>

      {/* re4name files modal */}
      {currentFile && (
        <AddEditFiles
          closeModal={handleCloseModal}
          filesList={fileList}
          editMode={editMode}
          currentFile={currentFile}
        />
      )}
      <DeleteModal
        show={isModalOpen}
        handleHide={() => setIsModalOpen(false)}
        deleteModalFunction={setDeleteRecord}
      />
    </React.Fragment>
  )
}

export default RecentFiles
