import gallery1 from '@assets/images/gallery/img-01.jpg'
import gallery2 from '@assets/images/gallery/img-02.jpg'
import gallery3 from '@assets/images/gallery/img-03.jpg'

// media data
const userDocumentsMediaData = [
  {
    type: 'image',
    ima: gallery1,
    title: 'Adventure is a form of self care',
    size: '15.6 KB',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/eSzNNYk7nVU?si=EHJjJ8BjAsp6yMgx',
    title: 'Rebuilding iOS 15 with Tailwind CSS',
    size: '23.98 MB',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/Tmkr2kKUEgU?si=g6q_jn3gzqxK_CMj',
    title: 'Building Blurry, Animated Background Shapes with Tailwind CSS',
    size: '46.32 MB',
  },
  {
    type: 'image',
    ima: gallery2,
    title: 'Cuteness in every bloom',
    size: '1.97 KB',
  },
  {
    type: 'image',
    ima: gallery3,
    title: 'Finding paradise wherever I go',
    size: '0.587 KB',
  },
]

// file data
const userDocumentsFileData = [
  {
    color: 'text-sky-500 fill-sky-500/10',
    title: 'tailwind.config.js',
    size: '4 KB',
  },
  {
    color: 'text-sky-500 fill-sky-500/10',
    title: 'package.json',
    size: '2 KB',
  },
  {
    color: 'text-sky-500 fill-sky-500/10',
    title: 'vite.config.js',
    size: '5 KB',
  },
  {
    color: 'text-sky-500 fill-sky-500/10',
    title: 'tailwind.scss',
    size: '5 KB',
  },
  {
    color: 'text-sky-500 fill-sky-500/10',
    title: 'index.html',
    size: '129 KB',
  },
]

// folder data
const userDocumentsFolderData = [
  {
    name: 'Projects 2024',
    details: '23 Files - 128 MB',
  },
  {
    name: 'All Contact',
    details: '49 Files - 27 MB',
  },
  {
    name: 'Marketing Analysis',
    details: '3 Files - 5.65 MB',
  },
  {
    name: 'Images & Video',
    details: '163 Files - 0.9 GB',
  },
  {
    name: 'Application',
    details: '149 Files - 68.83 GB',
  },
]

export {
  userDocumentsMediaData,
  userDocumentsFileData,
  userDocumentsFolderData,
}
