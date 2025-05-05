import {
  CircleCheckBig,
  LayoutList,
  PackageOpen,
  PanelsTopLeft,
} from 'lucide-react'

const WidgetsData = [
  {
    icon: PackageOpen,
    iconColor: 'text-purple-500 bg-purple-500/10',
    label: '6 Opened Tasks',
    Percent: '4.32%',
    arrowIcon: 'align-baseline ri-arrow-down-line',
    color: 'text-red-500',
  },
  {
    icon: CircleCheckBig,
    iconColor: 'text-sky-500 bg-sky-500/10',
    label: '15 Completed Tasks',
    Percent: '47.73%',
    arrowIcon: 'align-baseline ri-arrow-up-line',
    color: 'text-green-500',
  },
  ,
  {
    icon: LayoutList,
    iconColor: 'text-orange-500 bg-orange-500/10',
    label: '148 Total Tasks',
    Percent: '21.57%',
    arrowIcon: 'align-baseline ri-arrow-up-line',
    color: 'text-green-500',
  },
  {
    icon: PanelsTopLeft,
    iconColor: 'text-yellow-500 bg-yellow-500/10',
    label: '10 Projects',
    Percent: '3.91%',
    arrowIcon: 'align-baseline ri-arrow-up-line',
    color: 'text-green-500',
  },
]
export { WidgetsData }
