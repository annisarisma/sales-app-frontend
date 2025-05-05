import user2 from '@assets/images/avatar/user-2.png'
import user3 from '@assets/images/avatar/user-3.png'
import user5 from '@assets/images/avatar/user-5.png'
import user10 from '@assets/images/avatar/user-10.png'
import user13 from '@assets/images/avatar/user-13.png'
import user14 from '@assets/images/avatar/user-14.png'
import user15 from '@assets/images/avatar/user-15.png'
import user16 from '@assets/images/avatar/user-16.png'
import user17 from '@assets/images/avatar/user-17.png'
import user18 from '@assets/images/avatar/user-18.png'
import user20 from '@assets/images/avatar/user-20.png'
import user22 from '@assets/images/avatar/user-22.png'
import user23 from '@assets/images/avatar/user-23.png'
import { color } from 'echarts'

const userProjectsData = [
  {
    title: 'Chat App Templates',
    link: '#!',
    description:
      'Chat applications typically run on centralized networks that are served by platform operator servers as opposed to peer-to-peer protocols such as XMPP. This allows two people to talk to each other in real time.',
    icon: 'messages-square',
    iconColor: 'sky',
    color: 'text-sky-500 fill-sky-500/10',
    tag: '#Features',
    views: 148,
    avatars: [user2, user3],
  },
  {
    title: 'Domiex - Admin & Dashboards Templates',
    link: '#!',
    description:
      'An admin dashboard template is a powerful tool that streamlines the process of building a robust and user-friendly admin panel for web applications. Image by ThemeMakker. It provides a pre-designed interface with various components and features to manage and monitor the backend of an application.',
    icon: 'box',
    iconColor: 'pink',
    color: 'text-pink-500 fill-pink-500/10',
    tag: '#Admin',
    views: 74,
    avatars: [user5, user20, user13],
  },
  {
    title: 'Employee Management System',
    link: '#!',
    description:
      'Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.',
    icon: 'users',
    iconColor: 'green',
    color: 'text-green-500 fill-green-500/10',
    tag: '#Management',
    views: 179,
    avatars: [user15, user16, user17, user18, user22],
  },
  {
    title: 'Create Business Website',
    link: '#!',
    description:
      'If all you need is a basic one-page website with an email address, phone number and maybe your business address, you can absolutely do that yourself. There are many website builders and one-page templates you can use to get up and running quickly.',
    icon: 'globe',
    iconColor: 'purple',
    color: 'text-purple-500 fill-purple-500/10',
    tag: '#Design',
    views: 132,
    avatars: [user10],
  },
  {
    title: 'Contact Page Prototype',
    link: '#!',
    description:
      'A contact page prototype is a draft of a contact page. It can be used to test the design and functionality of the page before it is launched. There are many different ways to create a contact page prototype. Some popular methods include using a wireframe tool, a prototyping tool, or a content management system.',
    icon: 'square-user',
    iconColor: 'primary',
    color: 'text-primary-500 fill-primary-500/10',
    tag: '#Figma',
    views: 163,
    avatars: [user20, user18, user22, user23],
  },
  {
    title: 'Design System - Create Components',
    link: '#!',
    description:
      'A design system defines reusable components and their usage, and explains why and when designers should choose a component. This helps designers and developers learn design concepts and best practices for different components.',
    icon: 'ruler',
    iconColor: 'red',
    color: 'text-red-500 fill-red-500/10',
    tag: '#Components',
    views: 245,
    avatars: [user10, user14],
  },
]

export { userProjectsData }
