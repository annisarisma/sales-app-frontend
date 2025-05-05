import user5 from '@assets/images/avatar/user-5.png'
import user11 from '@assets/images/avatar/user-11.png'
import user17 from '@assets/images/avatar/user-17.png'

const clientData = [
  {
    id: 1,
    name: 'Imelda Dach',
    email: 'imelda@example.com',
    image: user5,
    badges: [
      { label: 'Finance Web', class: 'badge-outline-green' },
      { label: 'Business', class: 'badge-outline-purple' },
    ],
    dateCreated: '20 July, 2024',
  },
  {
    id: 2,
    name: 'Adella Hauck',
    email: 'adella@example.com',
    image: user11,
    badges: [
      { label: 'Web Site', class: 'badge-outline-sky' },
      { label: 'UI / UX', class: 'badge-outline-orange' },
    ],
    dateCreated: '10 July, 2024',
  },
  {
    id: 3,
    name: 'Shanny Kirlin',
    email: 'shanny@example.com',
    image: user17,
    badges: [
      { label: 'Development', class: 'badge-outline-primary' },
      { label: 'API', class: 'badge-outline-gray' },
    ],
    dateCreated: '27 May, 2024',
  },
]
export { clientData }
