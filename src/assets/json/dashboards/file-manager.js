import aiFileFormat from '/assets/images/file-manager/icons/ai-file-format.png'
import document from '/assets/images/file-manager/icons/document.png'
import pdf from '/assets/images/file-manager/icons/pdf.png'
import picture from '/assets/images/file-manager/icons/picture.png'
import video from '/assets/images/file-manager/icons/video.png'

const fileManagerData = [
  {
    name: 'Animation Project',
    size: '24 MB',
    date: '21 July, 2024',
    type: 'Document',
    image: document,
  },
  {
    name: 'UI Design',
    size: '154 MB',
    date: '28 May, 2024',
    type: 'Images',
    image: picture,
  },
  {
    name: 'Admin Tutorial',
    size: '149 MB',
    date: '02 Feb, 2024',
    type: 'Video',
    image: video,
  },
  {
    name: 'Brand Identity',
    size: '17 MB',
    date: '11 Feb, 2024',
    type: 'AI',
    image: aiFileFormat,
  },
  {
    name: 'Resume',
    size: '11 MB',
    date: '20 May, 2024',
    type: 'PDF',
    image: pdf,
  },
]
export default fileManagerData
