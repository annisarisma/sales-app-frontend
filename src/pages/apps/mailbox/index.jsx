import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import {
  deleteMailData,
  getMailData,
  setCurrentEmailRecordData,
} from '@src/slices/thunk'
import AddComposeModal from '@src/views/apps/mailbox/addComposeModal'
import MailSection from '@src/views/apps/mailbox/mailSection'
import SideMail from '@src/views/apps/mailbox/sideMail'
import SliderBrand from '@src/views/apps/mailbox/sliderBrand'
import { Menu } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const MailBox = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)
  const sideMailRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMailRef.current && !sideMailRef.current.contains(event.target)) {
        setIsSideMail(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const [show, setShow] = useState(false)
  const [isOpenComposeModal, setIsOpenComposeModal] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isSideMail, setIsSideMail] = useState(true)

  const { currentEmail } = useSelector((state) => state.Mail)
  const [mobileView, setMobileView] = useState(false)
  const [isShowInMobile, setIsShowInMobile] = useState(false)

  useEffect(() => {
    document.title = 'Mailbox | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setMobileView(window.innerWidth <= 1024)
      }

      // Add event listener for window resize
      window.addEventListener('resize', handleResize)

      // Initial check on component mount
      handleResize()

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [show])

  useEffect(() => {
    if (show) {
      setIsShowInMobile(false)
    } else {
      setIsShowInMobile(true)
    }
  }, [show])

  const handleShowMail = (email) => {
    if (email) {
      // setSelectedMail(email); // Set the active email
      dispatch(setCurrentEmailRecordData(email))
    }
    setShow(!!email)
  }

  const handleComposeModal = () => {
    setIsOpenComposeModal(!isOpenComposeModal)
  }

  // get data
  const dispatch = useDispatch()

  const mailDates = createSelector(
    (state) => state.Mail,
    (mail) => mail.mail
  )
  const mail = useSelector(mailDates)

  const [mailList, setMailList] = useState([])

  const [email, setEmail] = useState(null)

  const [deleteShow, setDeleteShow] = useState(false)
  const toggleDelete = () => {
    setDeleteShow(false)
    setEmail(null)
  }

  const onClickEmailDelete = (mail) => {
    setEmail(mail)
    setDeleteShow(true)
  }

  const handleDeleteEmail = () => {
    if (email) {
      // Get the index of the email being deleted
      const currentIndex = mailList.findIndex((m) => m._id === email._id)

      // Dispatch action to delete the email

      // Update mailList to remove the deleted email
      const updatedMailList = mailList.filter((m) => m._id !== email._id)
      setMailList(updatedMailList)

      // Determine the next email to show
      const nextIndex =
        currentIndex < updatedMailList.length ? currentIndex : currentIndex - 1
      const nextEmail = updatedMailList[nextIndex] || null

      dispatch(deleteMailData([email._id]))
      dispatch(setCurrentEmailRecordData(nextEmail))

      // Set the new email to display
      // setSelectedMail(nextEmail);
      setShow(!!nextEmail) // Show or hide MailSection based on next email
      setDeleteShow(false)
      setEmail(null)
    }
  }
  const [filteredEmails, setFilteredEmails] = useState([])
  const [activeType, setActiveType] = useState('all')

  // use effect for get checkout shop cart data
  useEffect(() => {
    if (!mail) {
      dispatch(getMailData())
    } else {
      setMailList(mail)
      setFilteredEmails(mail)
    }
  }, [mail, dispatch])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const mobileWidth = window.innerWidth <= 1024
        setIsMobileView(mobileWidth)

        // Reset to chat list on small screens when switching from larger screens
        if (mobileWidth) {
          setShow(false)
          setIsSideMail(false)
        }
      }

      // Add event listener for window resize
      window.addEventListener('resize', handleResize)

      // Initial check on component mount
      handleResize()

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const toggleSideMail = () => {
    setIsSideMail(!isSideMail)
  }

  // filter data
  const filterEmails = (type, badge) => {
    let newFilteredEmails = mailList

    // set active type
    if (!badge) {
      setActiveType(type)
    } else {
      setActiveType(badge ? badge : 'all')
    }

    if (type !== 'all') {
      newFilteredEmails = newFilteredEmails.filter(
        (email) => email.type === type
      )
    }

    if (badge) {
      newFilteredEmails = newFilteredEmails.filter((email) =>
        email.badges.includes(badge)
      )
    }

    setFilteredEmails(newFilteredEmails)
  }

  const getBadgeCount = (type) => {
    return mailList.filter((email) => email.type === type).length
  }

  if (!mailList.length) {
    return <div>No emails available</div>
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Mailbox" subTitle="Apps" />
      <div className="flex flex-col xl:flex-row">
        <div className="mb-space xl:hidden">
          <button className="btn btn-primary" onClick={() => toggleSideMail()}>
            <Menu className="inline-block ltr:mr-1 rtl:ml-1 size-4"></Menu> Menu
          </button>
        </div>
        {/* side */}
        {isSideMail == true && (
           <div className='fixed inset-y-0 ltr:right-0 rtl:left-0 mb-0 xl:mb-space z-[1050] xl:z-0 xl:static ltr:xl:rounded-r-none rtl:xl:rounded-l-none w-80 card' ref={sideMailRef}>
            <SideMail
              filterEmails={filterEmails}
              activeType={activeType}
              getBadgeCount={getBadgeCount}
              handleComposeModal={handleComposeModal}
            />
         </div>
        )}
        {mobileView && isShowInMobile === true ? (
          <>
            <SliderBrand
              show={show}
              handleShowMail={handleShowMail}
              filteredEmails={filteredEmails}
            />
          </>
        ) : (
          <>
            {mobileView === true && (
              <MailSection
                show={show}
                handleShowMail={() => handleShowMail(null)}
                mail={currentEmail}
                filteredEmails={filteredEmails}
                onClickEmailDelete={onClickEmailDelete}
              />
            )}
          </>
        )}
        {mobileView ||
          (isMobileView == false && (
            <>
              <SliderBrand
                show={show}
                isSideMail={isSideMail}
                handleShowMail={handleShowMail}
                filteredEmails={filteredEmails}
              />

              {/* mail section */}
              <MailSection
                show={show}
                handleShowMail={() => handleShowMail(null)}
                mail={currentEmail}
                filteredEmails={filteredEmails}
                onClickEmailDelete={onClickEmailDelete}
              />
            </>
          ))}

        <DeleteModal
          show={deleteShow}
          handleHide={toggleDelete}
          deleteModalFunction={handleDeleteEmail}
        />
      </div>

      <AddComposeModal
        isModalOpen={isOpenComposeModal}
        onClose={() => handleComposeModal()}
        mailList={mailList}
      />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default MailBox
