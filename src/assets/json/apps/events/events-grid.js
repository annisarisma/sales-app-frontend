import user5 from '/assets/images/avatar/user-5.png'
import user10 from '/assets/images/avatar/user-10.png'
import user13 from '/assets/images/avatar/user-13.png'
import user15 from '/assets/images/avatar/user-15.png'
import user20 from '/assets/images/avatar/user-20.png'
import user25 from '/assets/images/avatar/user-25.png'
import user30 from '/assets/images/avatar/user-30.png'
import user35 from '/assets/images/avatar/user-35.png'
import user40 from '/assets/images/avatar/user-40.png'
import user45 from '/assets/images/avatar/user-45.png'
import user50 from '/assets/images/avatar/user-50.png'
import user55 from '/assets/images/avatar/user-55.png'
import user60 from '/assets/images/avatar/user-60.png'
// Main event images
import eventImg1 from '/assets/images/event/img-01.jpg'
import eventImg2 from '/assets/images/event/img-02.jpg'
import eventImg3 from '/assets/images/event/img-03.jpg'
import eventImg4 from '/assets/images/event/img-04.jpg'
import eventImg5 from '/assets/images/event/img-05.jpg'
import eventImg6 from '/assets/images/event/img-06.jpg'
import eventImg7 from '/assets/images/event/img-07.jpg'
import eventImg8 from '/assets/images/event/img-08.jpg'

const eventGridData = [
  {
    name: 'Tech Innovations Summit',
    username: 'Declan Grieve',
    price: '$499.00',
    date: '2024-05-19',
    time: '10:00',
    location: 'San Francisco, CA',
    image: user5,
    mainImage: eventImg1,
    contributors: [
      { image: user5, name: 'Declan Grieve' },
      { image: user20, name: 'Callum Burston' },
      { image: user13, name: 'Liam White' },
    ],
    peopleSize: '1200',
    eventType: 'Offline',
    status: 'Expired',
  },
  {
    name: 'Health and Wellness Expo',
    username: 'Callum Burston',
    price: '$290.00',
    date: '2024-06-24',
    time: '09:00',
    location: 'New York, NY',
    image: user20,
    mainImage: eventImg2,
    contributors: [
      { image: user20, name: 'Callum Burston' },
      { image: user5, name: 'Declan Grieve' },
    ],
    peopleSize: '800',
    eventType: 'Offline',
    status: 'Published',
  },
  {
    name: 'Marketing Conference',
    username: 'Sophia Adams',
    price: '$379.00',
    date: '2024-07-15',
    time: '13:30',
    location: 'Los Angeles, CA',
    image: user10,
    mainImage: eventImg3,
    contributors: [
      { image: user10, name: 'Sophia Adams' },
      { image: user15, name: 'Ethan Thompson' },
    ],
    peopleSize: '1500',
    eventType: 'Online',
    status: 'Coming Soon',
  },
  {
    name: 'Product Launch Event',
    username: 'Ethan Thompson',
    price: '$199.00',
    date: '2024-08-03',
    time: '11:00',
    location: 'Chicago, IL',
    image: user15,
    mainImage: eventImg4,
    contributors: [
      { image: user10, name: 'Sophia Adams' },
      { image: user15, name: 'Ethan Thompson' },
      { image: user25, name: 'Ava Wilson' },
    ],
    peopleSize: '500',
    eventType: 'Offline',
    status: 'Published',
  },
  {
    name: 'Business Networking Summit',
    username: 'Ava Wilson',
    price: '$187.00',
    date: '2024-09-08',
    time: '10:30',
    location: 'Houston, TX',
    image: user25,
    mainImage: eventImg5,
    contributors: [
      { image: user20, name: 'Callum Burston' },
      { image: user25, name: 'Ava Wilson' },
    ],
    peopleSize: '2000',
    eventType: 'Online',
    status: 'Coming Soon',
  },
  {
    name: 'Art Exhibition',
    username: 'Olivia Roberts',
    price: '$449.00',
    date: '2024-10-12',
    time: '15:00',
    location: 'London, UK',
    image: user30,
    mainImage: eventImg6,
    contributors: [
      { image: user30, name: 'Olivia Roberts' },
      { image: user35, name: 'Liam White' },
      { image: user40, name: 'Mia Turner' },
    ],
    peopleSize: '750',
    eventType: 'Offline',
    status: 'Published',
  },
  {
    name: 'Technology Forum',
    username: 'Liam White',
    price: '$369.00',
    date: '2024-11-05',
    time: '14:30',
    location: 'Tokyo, Japan',
    image: user35,
    mainImage: eventImg7,
    contributors: [
      { image: user30, name: 'Olivia Roberts' },
      { image: user35, name: 'Liam White' },
      { image: user45, name: 'Noah Harris' },
    ],
    peopleSize: '1000',
    eventType: 'Online',
    status: 'Coming Soon',
  },
  {
    name: 'Music Festival',
    username: 'Mia Turner',
    price: '$349.00',
    date: '2024-12-20',
    time: '17:00',
    location: 'Sydney, Australia',
    image: user40,
    mainImage: eventImg8,
    contributors: [
      { image: user40, name: 'Mia Turner' },
      { image: user45, name: 'Noah Harris' },
      { image: user50, name: 'Emma Clark' },
    ],
    peopleSize: '5000',
    eventType: 'Offline',
    status: 'Coming Soon',
  },
  {
    name: 'Startup Pitch Competition',
    username: 'Noah Harris',
    price: '$254.00',
    date: '2025-01-10',
    time: '12:00',
    location: 'Berlin, Germany',
    image: user45,
    mainImage: eventImg7,
    contributors: [
      { image: user45, name: 'Noah Harris' },
      { image: user50, name: 'Emma Clark' },
      { image: user55, name: 'Olivia Roberts' },
    ],
    peopleSize: '400',
    eventType: 'Online',
    status: 'Published',
  },
  {
    name: 'Fashion Show',
    username: 'Emma Clark',
    price: '$478.00',
    date: '2025-02-28',
    time: '16:30',
    location: 'Paris, France',
    image: user50,
    mainImage: eventImg6,
    contributors: [
      { image: user50, name: 'Emma Clark' },
      { image: user55, name: 'Olivia Roberts' },
      { image: user60, name: 'Mia Turner' },
    ],
    peopleSize: '1200',
    eventType: 'Offline',
    status: 'Coming Soon',
  },
]

export default eventGridData
