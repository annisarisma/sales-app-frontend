import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import {
  Ambulance,
  BriefcaseMedical,
  Building2,
  Gem,
  Mail,
  Pencil,
  Phone,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const OverviewModal = ({ show, handleHide, patient }) => {
  if (!patient) return null

  return (
    <Modal
      isOpen={show}
      onClose={handleHide}
      position="modal-center"
      size="modal-md"
      contentClass="p-2 modal-content"
      content={(onClose) => (
        <>
          <div className="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20"></div>
          <div className="p-4">
            <div className="flex">
              <div className="relative inline-block -mt-16 rounded-md ltr:mr-auto rtl:ml-auto shrink-0">
                <img
                  src={patient.image}
                  alt="patientImg"
                  className="rounded-md size-24"
                  height={96}
                  width={96}
                />
              </div>
              <div className="shrink-0">
                <button type="button" className="btn btn-red">
                  Book Appointment
                </button>
              </div>
            </div>
            <h6 className="mt-3 mb-1">{patient.name}</h6>
            <p className="mb-3 text-gray-500">
              Appointment Date: <span>{patient.date}</span>
            </p>
            <p className="mb-3 text-gray-500">Overview</p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BriefcaseMedical className="inline-block text-gray-500 dark:text-dark-500 size-4" />{' '}
                <span className="w-48 font-medium shrink-0">Doctor Name</span>
                <p>{patient.doctorName}</p>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="inline-block text-gray-500 dark:text-dark-500 size-4" />{' '}
                <span className="w-48 font-medium shrink-0">
                  Treatment Type
                </span>
                <p>Cardiology</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="inline-block text-gray-500 dark:text-dark-500 size-4" />
                <span className="w-48 font-medium shrink-0">Email</span>
                <p>
                  <Link to={`mailto:${patient.email}`}>{patient.email}</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="inline-block text-gray-500 dark:text-dark-500 size-4" />{' '}
                <span className="w-48 font-medium shrink-0">Phone Number</span>
                <p>
                  <Link to="#!">{patient.phoneNumber}</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Ambulance className="inline-block text-gray-500 dark:text-dark-500 size-4" />
                <span className="w-48 font-medium shrink-0">Insurance</span>
                <p>
                  <Link to="#!">{patient.insurance ? 'Yes' : 'No'}</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="inline-block text-gray-500 dark:text-dark-500 size-4" />
                <span className="w-48 font-medium shrink-0">Status</span>
                <p className="badge badge-primary">old</p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                type="button"
                className="btn btn-active-red"
                onClick={onClose}>
                <X className="inline-block size-4" /> <span>Close</span>
              </button>
              <Link to={`/edit/${patient.id}`} className="btn btn-primary">
                <Pencil className="inline-block mr-1 size-4" /> Edit Patient
              </Link>
            </div>
          </div>
        </>
      )}
    />
  )
}

export default OverviewModal
