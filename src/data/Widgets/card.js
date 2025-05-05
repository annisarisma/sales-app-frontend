import employee8 from '@assets/images/avatar/user-8.png'
import employee10 from '@assets/images/avatar/user-10.png'
import employee11 from '@assets/images/avatar/user-11.png'
import employee12 from '@assets/images/avatar/user-12.png'
import employee13 from '@assets/images/avatar/user-13.png'
import employee14 from '@assets/images/avatar/user-14.png'
import patients14 from '@assets/images/avatar/user-14.png'
import client15 from '@assets/images/avatar/user-15.png'
import internDoctor15 from '@assets/images/avatar/user-15.png'
import internDoctor16 from '@assets/images/avatar/user-16.png'
import patients16 from '@assets/images/avatar/user-16.png'
import internDoctor17 from '@assets/images/avatar/user-17.png'
import client18 from '@assets/images/avatar/user-18.png'
import internDoctor18 from '@assets/images/avatar/user-18.png'
import patients18 from '@assets/images/avatar/user-18.png'
import internDoctor20 from '@assets/images/avatar/user-20.png'
import internDoctor21 from '@assets/images/avatar/user-21.png'
import internDoctor22 from '@assets/images/avatar/user-22.png'
import { Dot, TrendingDown, TrendingUp } from 'lucide-react'

const information = [
  {
    title: 'Revenue',
    amount: 300.97,
    start: 50,
    currency: '$',
    singn: 'M',
    colorClass: 'before:bg-primary-500',
    hoverColorClass: 'bg-primary-600',
    badgeClass: 'badge-solid-primary',
    href: '#!',
  },
  {
    title: 'Orders',
    amount: 7000,
    start: 50,
    colorClass: 'before:bg-green-500',
    singn: '+',
    hoverColorClass: 'bg-green-600',
    badgeClass: 'badge-solid-green',
    href: '#!',
  },
  {
    title: 'Total Visitors',
    amount: 12496,
    start: 50,
    colorClass: 'before:bg-purple-500',
    hoverColorClass: 'bg-purple-600',
    badgeClass: 'badge-solid-purple',
    href: '#!',
  },
  {
    title: 'Total Customers',
    amount: 9831,
    start: 50,
    colorClass: 'before:bg-yellow-500',
    hoverColorClass: 'bg-yellow-600',
    badgeClass: 'badge-solid-yellow',
    href: '#!',
  },
  {
    title: 'Average Sales',
    amount: 3410,
    start: 50,
    colorClass: 'before:bg-sky-500',
    hoverColorClass: 'bg-sky-600',
    badgeClass: 'badge-solid-sky',
    href: '#!',
  },
  {
    title: 'Transaction',
    amount: 137.68,
    start: 50,
    currency: '$',
    singn: 'k',
    colorClass: 'before:bg-red-500',
    hoverColorClass: 'bg-red-600',
    badgeClass: 'badge-solid-red',
    href: '#!',
  },
]

const facility = [
  {
    title: 'Superfast Delivery',
    icon: 'truck',
    colorClass: 'fill-primary-500/10 text-primary-500',
    status: [
      {
        count: 2477,
        label: 'Pending',
      },
      {
        count: 6013,
        label: 'Successfully',
      },
    ],
  },
  {
    title: 'Flexible Payment',
    icon: 'gallery-vertical-end',
    colorClass: 'fill-primary-500/10 text-primary-500',
    status: [
      {
        count: 392,
        label: 'Pending',
      },
      {
        count: 5789,
        label: 'Successfully',
      },
    ],
  },
  {
    title: 'Premium Support',
    icon: 'headset',
    colorClass: 'fill-primary-500/10 text-primary-500',
    status: [
      {
        count: 1356,
        label: 'Pending',
      },
      {
        count: 3264,
        label: 'Success',
      },
    ],
  },
  {
    title: '14 Day Returns',
    icon: 'shuffle',
    colorClass: 'fill-primary-500/10 text-primary-500',
    status: [
      {
        count: 144,
        label: 'Pending',
      },
      {
        count: 231,
        label: 'Success',
      },
    ],
  },
]

const client = [
  {
    name: 'Martha Kingery',
    role: 'Web Designer',
    amount: '$469.99',
    status: {
      text: 'Pending',
      colorClass: 'badge-sub-yellow',
    },
    image: client15,
  },
  {
    name: 'Corina Rouse',
    role: 'ASP.Net Developer',
    amount: '$342.87',
    status: {
      text: 'Successfully',
      colorClass: 'badge-sub-green',
    },
    image: client18,
  },
]

const widgets = [
  {
    title: 'Today Orders',
    value: '9736',
    icon: 'shopping-bag',
    iconClasses: 'fill-primary-100/20 text-primary-50',
    bgClass: 'bg-primary-500',
    borderClass: 'outline-primary-500',
    textClasses: 'text-gray-500 dark:text-dark-500',
    valueClasses: '',
    cardColor: '',
  },
  {
    title: 'Total Customers',
    value: '9831',
    icon: 'user-round',
    iconClasses: 'fill-green-100/20 text-green-50',
    bgClass: 'bg-green-500',
    borderClass: 'outline-green-500',
    textClasses: 'text-gray-500 dark:text-dark-500',
    valueClasses: '',
    cardColor: '',
  },
  {
    title: 'Products',
    value: '297',
    icon: 'box',
    iconClasses: 'fill-indigo-100/20 text-indigo-50',
    bgClass: 'bg-indigo-500',
    borderClass: 'outline-indigo-500',
    textClasses: 'text-indigo-500',
    valueClasses: 'text-indigo-500',
    cardColor:
      'bg-indigo-100 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20',
  },
  {
    title: 'Total Revenue',
    value: '9831',
    icon: 'coins',
    iconClasses: 'fill-yellow-100/20 text-yellow-50',
    bgClass: 'bg-yellow-500',
    borderClass: 'outline-yellow-500',
    textClasses: 'text-gray-500 dark:text-dark-500',
    valueClasses: '',
    cardColor: '',
  },
]

const performance = [
  {
    title: 'Website Visitors',
    badge: {
      text: 'Last 30 Days',
      icon: Dot,
      iconSize: 'size-4',
      className: 'badge badge-sub-gray',
    },
    content: {
      subtitle: 'Today Orders',
      value: '9736',
      trendIcon: TrendingUp,
      trendIconColor: 'text-green-500',
      trendDescription: 'Increased by 30% compared to the previous period.',
    },
  },
  {
    title: 'SEO Unique Users',
    badge: {
      text: 'Last 30 Days',
      icon: Dot,
      iconSize: 'size-4',
      className: 'badge badge-sub-gray',
    },
    content: {
      subtitle: 'Today Orders',
      value: '419',
      trendIcon: TrendingDown,
      trendIconColor: 'text-red-500',
      trendDescription: 'Decreased by 2.8% compared to the previous period.',
    },
  },
]

const employee = [
  {
    image: employee8,
    name: 'Jennifer Kingston',
    role: 'Content Write',
    link: '#!',
  },
  {
    image: employee10,
    name: 'James Fallon',
    role: 'Marketing Lead',
    link: '#!',
  },
  {
    image: employee11,
    name: 'Thurman Northup',
    role: 'Sr. React Dev.',
    link: '#!',
  },
  {
    image: employee12,
    name: 'Marshall Oliver',
    role: 'Sr. PHP Dev.',
    link: '#!',
  },
  {
    image: employee13,
    name: 'Brenda Gibson',
    role: 'Product Manager',
    link: '#!',
  },
  {
    image: employee14,
    name: 'David Turner',
    role: 'Sr. Laravel Dev.',
    link: '#!',
  },
]

const internDoctors = [
  {
    src: internDoctor15,
    alt: '',
    href: '#!',
  },
  {
    src: internDoctor16,
    alt: '',
    href: '#!',
  },
  {
    src: internDoctor21,
    alt: '',
    href: '#!',
  },
  {
    src: internDoctor17,
    alt: '',
    href: '#!',
  },
  {
    src: internDoctor18,
    alt: '',
    href: '#!',
  },
  {
    src: internDoctor22,
    alt: '',
    href: '#!',
  },
  {
    src: internDoctor20,
    alt: '',
    href: '#!',
  },
]

const patients = [
  {
    image: patients14,
    alt: '',
    name: 'Colette R. Mejias',
    appointment: '20 May | 9 AM - 10 AM',
    button: {
      className: 'btn btn-outline-green btn-icon',
      icon: 'phone',
      iconSize: 'size-5',
    },
  },
  {
    image: patients16,
    alt: '',
    name: 'Danny S. Lacroix',
    appointment: '20 May | 10 AM - 11 AM',
    button: {
      className: 'btn btn-outline-green btn-icon',
      icon: 'phone',
      iconSize: 'size-5',
    },
  },
  {
    image: patients18,
    alt: '',
    name: 'Louis K. Jacks',
    appointment: '21 May | 2 PM - 3 PM',
    button: {
      className: 'btn btn-outline-green btn-icon',
      icon: 'phone',
      iconSize: 'size-5',
    },
  },
]

export {
  information,
  facility,
  client,
  widgets,
  performance,
  employee,
  internDoctors,
  patients,
}
