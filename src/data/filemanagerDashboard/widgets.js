import {
  AudioLines,
  FileText,
  FolderOpen,
  ImageIcon,
  Video,
} from 'lucide-react'

const WidgetData = [
  {
    icon: ImageIcon,
    color: 'text-orange-500',
    label: 'Images',
    number: '245',
    cardColor:
      'bg-orange-100 border-orange-200 sm:col-span-6 md:col-span-4 xl:col-span-2 dark:bg-orange-500/15 dark:border-orange-500/20 card',
    iconRound: 'bg-orange-500/20',
  },
  {
    icon: ImageIcon,
    color: 'text-primary-500',
    label: 'Documents',
    number: '1472',
    cardColor:
      'sm:col-span-6 md:col-span-4 xl:col-span-2 bg-primary-100 border-primary-200 dark:bg-primary-500/15 dark:border-primary-500/20 card',
    iconRound: 'bg-primary-500/20',
  },
  {
    icon: FileText,
    color: 'text-yellow-500',
    label: 'PDF Files',
    number: '98',
    cardColor:
      'bg-yellow-100 border-yellow-200 sm:col-span-6 dark:bg-yellow-500/15 dark:border-yellow-500/20 md:col-span-4 xl:col-span-2 card',
    iconRound: 'bg-yellow-500/20',
  },
  {
    icon: Video,
    color: 'text-purple-500',
    label: 'Video',
    number: '159',
    cardColor:
      'bg-purple-100 border-purple-200 dark:border-purple-500/20 dark:bg-purple-500/15 sm:col-span-6 md:col-span-4 xl:col-span-2 card',
    iconRound: 'bg-purple-500/20',
  },
  {
    icon: AudioLines,
    color: 'text-sky-500',
    label: 'Audio',
    number: '208',
    cardColor:
      'sm:col-span-6 md:col-span-4 xl:col-span-2 bg-sky-100 border-sky-200 dark:bg-sky-500/15 dark:border-sky-500/20 card',
    iconRound: 'bg-sky-500/20',
  },
  {
    icon: FolderOpen,
    color: 'text-green-500',
    label: 'Others Files',
    number: '1569',
    cardColor:
      'bg-green-100 border-green-200 dark:bg-green-500/15 dark:border-green-500/20 sm:col-span-6 md:col-span-4 xl:col-span-2 card',
    iconRound: 'bg-green-500/20',
  },
]
export { WidgetData }
