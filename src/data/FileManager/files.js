import folder from '@assets/images/file-manager/icons/folder-03.png'
import folder4 from '@assets/images/file-manager/icons/folder-04.png'
import mp3 from '@assets/images/file-manager/icons/mp3.png'
import picture from '@assets/images/file-manager/icons/picture.png'
import video from '@assets/images/file-manager/icons/video.png'

const documents = [
  {
    id: 1,
    type: 'Images',
    count: 547,
    size: '24.8 GB',
    percentage: '24.7%',
    icon: picture,
  },
  {
    id: 2,
    type: 'My Documents',
    count: 154,
    size: '13.8 GB',
    percentage: '12.9%',
    icon: folder,
  },
  {
    id: 3,
    type: 'Videos',
    count: 29,
    size: '19 GB',
    percentage: '16.4%',
    icon: video,
  },
  {
    id: 4,
    type: 'Audio',
    count: 86,
    size: '5.9 GB',
    percentage: '6.7%',
    icon: mp3,
  },
  {
    id: 5,
    type: 'Design Templates File',
    count: 364,
    size: '6 GB',
    percentage: '7.3%',
    icon: folder4,
  },
]

export { documents }
