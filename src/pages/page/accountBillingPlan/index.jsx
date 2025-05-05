import React, { useEffect, useState } from 'react'

import american from '@assets/images/payment/american.png'
import mastercard from '@assets/images/payment/mastercard.png'
import visa from '@assets/images/payment/visa.png'
import { Modal } from '@custom/Modal/Modal'
import TableContainer from '@custom/Table/Table'
import { Tab, Tabs } from '@custom/Tabs/Tab'
import Pagination from '@src/components/Common/Pagination'
import { accountBilling } from '@src/data'
import {
  ArrowUpLeft,
  ArrowUpRight,
  Bell,
  CirclePlus,
  Gem,
  ListTree,
  LogOut,
  Pencil,
  Search,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import { useFormState } from 'react-dom'
import { Link } from 'react-router-dom'

import CommonAccount from '../../../components/Common/commonAccount'

const AccountBillingPlan = () => {
  const [defaultCard, setDefaultCard] = useState(1)
  const [value, setValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState(accountBilling)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    document.title =
      'Account Billing & Plan | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const cards = [
    {
      id: 1,
      imgSrc: visa,
      cardNumber: 'xxxx xxxx xxx 1547',
      expiry: '01/2030',
    },
    {
      id: 2,
      imgSrc: american,
      cardNumber: 'xxxx xxxx xxx 8749',
      expiry: '24/2030',
    },
    {
      id: 3,
      imgSrc: mastercard,
      cardNumber: 'xxxx xxxx xxx 3641',
      expiry: '13/2028',
    },
  ]

  const handleSetDefaultCard = (cardId) => {
    setDefaultCard(defaultCard === cardId ? null : cardId)
  }

  const [modalState, setModalState] = useState({
    billingEditModal: false,
    addCardPaymentModal: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const applyMask = (inputValue) => {
    const digits = inputValue.replace(/\D/g, '')
    if (digits.startsWith('34') || digits.startsWith('37')) {
      return digits.replace(/(\d{4})(\d{0,6})(\d{0,5})/, '$1 $2 $3').trim()
    }
    return digits
      .replace(/(\d{4})(\d{0,4})(\d{0,4})(\d{0,4})/, '$1 $2 $3 $4')
      .trim()
  }

  const handleChange = (event) => {
    const inputValue = event.target.value
    setValue(applyMask(inputValue))
  }

  const [cvv, setCvv] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const formatCvv = (value) => {
    return value.replace(/\D/g, '').substring(0, 3)
  }

  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{0,4})$/)
    if (match) {
      return `${match[1]}/${match[2]}`.substring(0, 7)
    }
    return value
  }

  const handleCvvChange = (event) => {
    setCvv(formatCvv(event.target.value))
  }

  const handleExpiryDateChange = (event) => {
    setExpiryDate(formatExpiryDate(event.target.value))
  }

  // Table
  const columns = React.useMemo(
    () => [
      {
        header: 'Billing ID',
        accessorKey: 'statementsID',
        enableSorting: true,
        cell: (cell) => (
          <Link to="#!" className="link link-primary">
            {cell.row.original.statementsID}
          </Link>
        ),
      },
      {
        header: 'Payment Date',
        accessorKey: 'paymentDate',
        enableSorting: true,
      },
      {
        header: 'Plan',
        accessorKey: 'plan',
        enableSorting: true,
      },
      {
        header: 'Payment Type',
        accessorKey: 'paymentType',
        enableSorting: true,
      },
      {
        header: 'Amount',
        accessorKey: 'amount',
        enableSorting: true,
      },
      {
        header: 'Status',
        accessorKey: 'status',
        enableSorting: true,
        cell: (cell) => (
          <>
            {cell.row.original.status === 'Paid' ? (
              <span className="badge badge-green">
                {cell.row.original.status}
              </span>
            ) : cell.row.original.status === 'Unpaid' ? (
              <span className="badge badge-red">
                {cell.row.original.status}
              </span>
            ) : (
              <span className="badge badge-yellow">
                {cell.row.original.status}
              </span>
            )}
          </>
        ),
      },
      {
        header: 'Invoice',
        accessorKey: 'invoice',
        enableSorting: true,
        cell: () => (
          <>
            <Link to="#!" className="link link-primary">
              <i className="align-bottom ri-download-2-line"></i>
            </Link>
          </>
        ),
      },
    ],
    []
  )

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)

    // Filter data based on search query
    const filtered = accountBilling.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query)
      )
    )
    setFilteredData(filtered)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <React.Fragment>
      <CommonAccount />

      {/* tab section */}
      <Tabs
        ulProps="pb-2 overflow-x-auto tabs-pills lg:pb-0"
        activeTabClass="active"
        contentProps="mt-5"
        otherClass="nav-item text-gray-500 dark:text-dark-500 [&.active]:bg-primary-500 [&.active]:text-primary-50"
        spanProps="align-middle whitespace-nowrap">
        <Tab
          icon={<UserRound className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Account"
          path="/page/account-settings"></Tab>
        <Tab
          icon={
            <ShieldCheck className="inline-block size-4 ltr:mr-2 rtl:ml-2" />
          }
          label="Security"
          path="/page/account-security"></Tab>
        <Tab
          icon={<Gem className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Billing & Plans"
          path="/page/account-billing-plan">
          <>
            <div className="mt-4 card">
              <div className="card-header">
                <h6 className="mb-1 card-title">Billing Settings</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Take control of your billing and plan details here.
                </p>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <h6 className="mb-3">Current Plan:</h6>
                    <div className="mb-0 card">
                      <div className="card-body">
                        <div className="flex items-center">
                          <div className="grow">
                            <h6 className="mb-2">
                              Basic Plan
                              <span className="align-middle ltr:ml-1 rtl:mr-1 whitespace-nowrap badge badge-red">
                                Monthly
                              </span>
                            </h6>
                            <p className="text-gray-500 dark:text-dark-500">
                              Our most sought-after plan tailored for small
                              teams.
                            </p>
                          </div>
                          <h3>
                            $20{' '}
                            <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                              Per month
                            </small>
                          </h3>
                        </div>

                        <div className="mt-4">
                          <div className="flex items-center gap-3 mb-2">
                            <h6 className="text-xs grow">16 of 30 Users</h6>
                            <h6 className="text-xs font-semibold text-sky-500">
                              55.47%
                            </h6>
                          </div>
                          <div className="progress-bar progress-1">
                            <div className="w-1/2 text-white progress-bar-wrap bg-primary-500"></div>
                          </div>
                        </div>
                        <div className="mt-5 text-right">
                          <Link to="/page/pricing" className="btn btn-primary">
                            <span className="align-middle whitespace-nowrap">
                              Upgrade Plan
                            </span>
                            <ArrowUpRight
                              name="arrow-up-right"
                              className="ltr:inline-block rtl:hidden size-4"
                            />
                            <ArrowUpLeft
                              name="arrow-up-left"
                              className="ltr:hidden rtl:inline-block size-4"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3">Billing Information:</h6>
                    <div className="mb-0 card">
                      <div className="card-body">
                        <div className="flex items-center">
                          <div className="grow">
                            <h6 className="mb-2">Sophia Mia</h6>
                            <p className="mb-1 text-gray-500 dark:text-dark-500">
                              3011 E Semoran Blvd, Apopka, Florida,
                            </p>
                            <p className="mb-1 text-gray-500 dark:text-dark-500">
                              United States - 32703.
                            </p>
                            <p className="text-gray-500 dark:text-dark-500">
                              +(407) 774-3111
                            </p>
                          </div>
                        </div>
                        <div className="mt-5 ltr:text-right rtl:text-left">
                          <button
                            data-modal-target="billingEditModal"
                            type="button"
                            className="btn btn-sub-gray"
                            onClick={() => openModal('billingEditModal')}>
                            <Pencil
                              name="pencil"
                              className="inline-block ltr:mr-1 rtl:ml-1 size-4"
                            />{' '}
                            <span className="align-middle whitespace-nowrap">
                              Edit Billing
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* card */}
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Payment Methods</h6>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {cards.map((card) => (
                    <div key={card.id} className="mb-0 card">
                      <div className="card-body bg-gradient-to-b from-primary-500/10 via-red-500/5 backdrop-lg">
                        <img
                          src={card.imgSrc}
                          alt="cardImg"
                          className="h-10"
                          width={62}
                        />
                      </div>
                      <div className="pt-0 card-body">
                        <div className="flex items-center">
                          <div className="grow">
                            <h6 className="mb-1">{card.cardNumber}</h6>
                            <p className="text-gray-500 dark:text-dark-500">
                              Expiry on {card.expiry}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 mt-5">
                          <Link
                            to="#!"
                            className={`link link-green ${
                              defaultCard === card.id ? 'text-green-500' : ''
                            }`}
                            onClick={(e) => {
                              e.preventDefault()
                              handleSetDefaultCard(card.id)
                            }}>
                            <span>
                              {defaultCard === card.id
                                ? 'Default Set'
                                : 'Set as Default'}
                            </span>
                          </Link>
                          <Link
                            to="#!"
                            onClick={() => openModal('addCardPaymentModal')}
                            className="link link-primary">
                            <Pencil
                              name="pencil"
                              className="inline-block size-4"
                            />{' '}
                            Edit
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Link
                    to="#!"
                    onClick={() => openModal('addCardPaymentModal')}
                    className="flex items-center justify-center mb-0 border-dashed card">
                    <div className="card-body">
                      <div className="flex items-center justify-center">
                        <CirclePlus
                          name="circle-plus"
                          className="text-green-500 stroke-1 size-10 fill-green-500/10"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* table */}
            <div className="card">
              <div className="card-header">
                <div className="grid items-center grid-cols-12 gap-3">
                  <div className="col-span-3">
                    <h6 className="card-title">Billing History</h6>
                  </div>
                  <div className="col-span-3 col-start-10">
                    <div className="relative group/form">
                      <input
                        type="email"
                        className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                        placeholder="Search for ..."
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                      <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                        <Search className="size-4"></Search>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <TableContainer
                  columns={columns || []}
                  data={paginatedEvents || []}
                  divClassName="overflow-x-auto"
                  tableClassName="table"
                  thTrClassName="bg-gray-100 dark:bg-dark-850"
                  thClassName="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer whitespace-nowrap"
                  tdClassName="whitespace-nowrap"
                  PaginationClassName="grid grid-cols-12 gap-5 mt-5"
                  isPagination={false}
                  lastTrClass="ltr:text-right rtl:text-left"
                />

                <Pagination
                  totalItems={accountBilling.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </>
        </Tab>
        <Tab
          icon={<Bell className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Notification"
          path="/page/account-notification"></Tab>
        <Tab
          icon={<ListTree className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Statements"
          path="/page/account-statements"></Tab>
        <Tab
          icon={<LogOut className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Logs"
          path="/page/account-logs"></Tab>
      </Tabs>

      {/* billingEditModal */}
      <Modal
        isOpen={modalState.billingEditModal}
        onClose={() => closeModal('billingEditModal')}
        position="modal-center"
        title="Billing Information"
        id="billingEditModal"
        size="modal-lg"
        content={(onClose) => (
          <>
            <form action="#!">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <label htmlFor="namePersonalInput" className="form-label">
                    Personal / Company Name
                  </label>
                  <input
                    type="text"
                    id="namePersonalInput"
                    className="form-input"
                    placeholder="Enter your name"
                    value="Sophia Mia"
                    required
                  />
                </div>
                <div className="col-span-12">
                  <label htmlFor="addressInput" className="form-label">
                    Personal / Company Address
                  </label>
                  <input
                    type="text"
                    id="addressInput"
                    className="form-input"
                    placeholder="Your address"
                    value="3011 E Semoran Blvd"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="sampleSelect" className="form-label">
                    Country
                  </label>
                  <div id="sampleSelect"></div>
                </div>
                <div className="col-span-6">
                  <label htmlFor="stateInput" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    id="stateInput"
                    className="form-input"
                    placeholder="Your state"
                    value="Florida"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="cityInput" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    id="cityInput"
                    className="form-input"
                    placeholder="Your city"
                    value="Apopka"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="zipCodeInput" className="form-label">
                    Zip Code
                  </label>
                  <input
                    type="number"
                    id="zipCodeInput"
                    className="form-input"
                    placeholder="Zip code"
                    value="32703"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="phoneNumberInput" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumberInput"
                    className="form-input"
                    placeholder="Enter your phone number"
                    value="+(407) 774-3111"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="emailInput" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    className="form-input"
                    placeholder="Enter your email"
                    value="shopia@example.com"
                    required
                  />
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={onClose} className="btn btn-active-red">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      />

      <Modal
        isOpen={modalState.addCardPaymentModal}
        id="addCardPaymentModal"
        onClose={() => closeModal('addCardPaymentModal')}
        position="modal-center"
        title="Add Card"
        content={(onClose) => (
          <>
            <form action="#!">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <label htmlFor="cardNumberInput" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumberInput"
                    className="form-input"
                    value={value}
                    placeholder="0000 0000 0000 0000"
                    onChange={handleChange}
                    required
                    maxLength={19}
                  />
                </div>
                <div className="col-span-3">
                  <label htmlFor="cvvInput" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvvInput"
                    className="form-input"
                    value={cvv}
                    placeholder="000"
                    onChange={handleCvvChange}
                    required
                    maxLength={3}
                  />
                </div>
                <div className="col-span-3">
                  <label htmlFor="expiryDateInput" className="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDateInput"
                    className="form-input"
                    value={expiryDate}
                    placeholder="MM/YYYY"
                    onChange={handleExpiryDateChange}
                    required
                    maxLength={7}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="nameOnTheCardInput" className="form-label">
                    Name on th Card
                  </label>
                  <input
                    type="text"
                    id="nameOnTheCardInput"
                    className="form-input"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="col-span-12">
                  <div className="items-start input-check-group">
                    <input
                      id="checkboxBasic1"
                      className="mt-0.5 input-check input-check-primary shrink-0"
                      type="checkbox"
                    />
                    <label
                      htmlFor="checkboxBasic1"
                      className="input-check-label grow">
                      <span className="block mb-1.5 font-medium">
                        Set as Default
                      </span>
                      <span className="block text-gray-500 dark:text-dark-500">
                        Scheduled payment will be automatically deducted from
                        this card.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onClose()}
                      className="btn btn-active-red">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add Card
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}
export default AccountBillingPlan
