// import images
// clients images
import user3 from '@assets/images/avatar/user-3.png'
import user9 from '@assets/images/avatar/user-9.png'
import user10 from '@assets/images/avatar/user-10.png'
import user11 from '@assets/images/avatar/user-11.png'
import user17 from '@assets/images/avatar/user-17.png'
import user20 from '@assets/images/avatar/user-20.png'
import user21 from '@assets/images/avatar/user-21.png'
import doctor1 from '@assets/images/hospital/landing/doctors/img-01.jpg'
import doctor2 from '@assets/images/hospital/landing/doctors/img-02.jpg'
import doctor3 from '@assets/images/hospital/landing/doctors/img-03.jpg'
import doctor4 from '@assets/images/hospital/landing/doctors/img-04.jpg'
import doctor5 from '@assets/images/hospital/landing/doctors/img-05.jpg'
import doctor6 from '@assets/images/hospital/landing/doctors/img-06.jpg'
import doctor7 from '@assets/images/hospital/landing/doctors/img-07.jpg'
import doctor8 from '@assets/images/hospital/landing/doctors/img-08.jpg'

const healthServiceData = [
  {
    id: 1,
    icon: 'heart-pulse',
    iconColor: 'text-red-500',
    iconBg: 'fill-red-500/20',
    iconBgColor: 'bg-red-500/15',
    title: 'Cardiology',
    desc: 'Cardiology, medical specialty dealing with the diagnosis and treatment of diseases and abnormalities involving the heart and blood vessels.',
  },
  {
    id: 2,
    icon: 'syringe',
    iconColor: 'text-yellow-500',
    iconBg: 'fill-yellow-500/20',
    iconBgColor: 'bg-yellow-500/15',
    title: 'Ophthalmology',
    desc: 'Ophthalmology is a clinical and surgical specialty within medicine that deals with the diagnosis and treatment of eye disorders. A former term is oculism.',
  },
  {
    id: 3,
    icon: 'brain',
    iconColor: 'text-green-500',
    iconBg: 'fill-green-500/20',
    iconBgColor: 'bg-green-500/15',
    title: 'Neurology',
    desc: 'Medical specialty concerned with the nervous system and its functional or organic disorders the brain, spinal cord, and nerves.',
  },
  {
    id: 4,
    icon: 'activity',
    iconColor: 'text-sky-500',
    iconBg: 'fill-sky-500/20',
    iconBgColor: 'bg-sky-500/15',
    title: 'Psychiatrist',
    desc: 'Psychiatry is the branch of medicine focused on the diagnosis, treatment and prevention of mental, emotional and behavioral disorders.',
  },
  {
    id: 5,
    icon: 'stethoscope',
    iconColor: 'text-purple-500',
    iconBg: 'fill-purple-500/20',
    iconBgColor: 'bg-purple-500/15',
    title: 'Surgeon',
    desc: 'A surgeon is a doctor who specializes in evaluating and treating conditions that may require surgery, or physically changing the human body.',
  },
  {
    id: 6,
    icon: 'microscope',
    iconColor: 'text-primary-500',
    iconBg: 'fill-primary-500/20',
    iconBgColor: 'bg-primary-500/15',
    title: 'Hematologist',
    desc: 'A doctor who specializes in the treatment of bones that have not grown correctly or that have been damaged about his knee pain.',
  },
]

// expert doctors
const ourExpertDoctorsData = [
  {
    id: 1,
    rating: '4.9',
    image: doctor1,
    name: 'Dr. Clyde Hillmer',
    dutyPlace: 'Budapest, Hungary',
    specialist: 'Neurologists',
  },
  {
    id: 2,
    rating: '4.4',
    image: doctor2,
    name: 'Dr. Walker Dantonio',
    dutyPlace: 'Damascus, Syria',
    specialist: 'Orthopaedist',
  },
  {
    id: 3,
    rating: '4.5',
    image: doctor3,
    name: 'Dr. Archie Hylands',
    dutyPlace: 'Wellington, New Zealand',
    specialist: 'Radiologist',
  },
  {
    id: 4,
    rating: '4.7',
    image: doctor5,
    name: 'Dr. Marshall Genova',
    dutyPlace: 'Nairobi, Kenya',
    specialist: 'Cardiologist',
  },
  {
    id: 5,
    rating: '4.0',
    image: doctor4,
    name: 'Dr. Charlie Cornelia',
    dutyPlace: 'Warsaw, Poland',
    specialist: 'Nephrologist',
  },
  {
    id: 6,
    rating: '4.8',
    image: doctor6,
    name: 'Dr. Sophia Hara',
    dutyPlace: 'Berlin, Germany',
    specialist: 'Hematologist',
  },
  {
    id: 7,
    rating: '4.4',
    image: doctor7,
    name: 'Dr. Jason Locklin',
    dutyPlace: 'Bogota, Colombia',
    specialist: 'Physician',
  },
  {
    id: 8,
    rating: '4.9',
    image: doctor8,
    name: 'Dr. Corbin Beason',
    dutyPlace: 'Canberra, Australia',
    specialist: 'Psychiatrist',
  },
]

// guenon clients

const ourPatientData = [
  {
    id: 1,
    name: 'Matthew Dittman',
    home: 'Vienna, Austria',
    image: user3,
    comment:
      'The staff at the hospital were incredibly attentive and kind. Dr. Sophia explained my condition thoroughly and answered all my questions. The nurses checked on me regularly and made sure I was comfortable. The facility was clean and well-organized. Overall, a very positive experience.',
  },
  {
    id: 2,
    name: 'John Doe',
    home: 'Brussels, Belgium',
    image: user9,
    comment:
      'I had to visit the ER for a sudden pain in my abdomen. The wait time was a bit long, but once I was seen, the care I received was excellent. The doctors quickly diagnosed my issue and started treatment right away.',
  },
  {
    id: 3,
    name: 'Lisa',
    home: 'Beijing, China',
    image: user17,
    comment:
      'My experience at the hospital was mixed. The medical care was top-notch, and the doctors were very knowledgeable. However, the administrative process was slow, and I had to wait a long time to get my paperwork sorted out.',
  },
  {
    id: 4,
    name: 'Glen Walker',
    home: 'Havana, Cuba',
    image: user20,
    comment:
      'I recently had surgery at the hospital, and I was very impressed with the level of care. The surgical team was professional and made me feel at ease throughout the process.',
  },
  {
    id: 5,
    name: 'William Hoyle',
    home: 'Bogota, Colombia',
    image: user21,
    comment:
      'The maternity ward at the hospital was wonderful. The midwives and nurses were extremely supportive throughout my labor and delivery. The postnatal care was excellent, with plenty of resources and support for new mothers.',
  },
  {
    id: 6,
    name: 'James Lewis',
    home: 'Helsinki, Finland',
    image: user11,
    comment:
      'I came in for a routine check-up and was impressed by how smoothly everything went. The check-in process was efficient, and I didn’t have to wait long to see the doctor.',
  },
  {
    id: 7,
    name: 'Theresa Rice',
    home: 'Copenhagen, Denmark',
    image: user10,
    comment:
      'I had a very positive experience during my physical therapy sessions. The therapists were knowledgeable and encouraging, helping me regain my strength after my knee surgery. They tailored the exercises to my needs and monitored my progress closely.',
  },
]

export { healthServiceData, ourExpertDoctorsData, ourPatientData }
