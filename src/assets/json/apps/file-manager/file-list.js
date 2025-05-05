import csvFile from '/assets/images/file-manager/icons/csv-file.png'
import document from '/assets/images/file-manager/icons/document.png'
import folderImg from '/assets/images/file-manager/icons/folder.png'
import mp3 from '/assets/images/file-manager/icons/mp3.png'
import office from '/assets/images/file-manager/icons/office.png'
import pdf from '/assets/images/file-manager/icons/pdf.png'
import picture from '/assets/images/file-manager/icons/picture.png'
import power from '/assets/images/file-manager/icons/power.png'

const files = [
  {
    image: document,
    type: 'txt',
    documentName: 'Domiex docs',
    size: '8.9 MB',
    lastEdit: '28 June, 2024',
  },
  {
    image: pdf,
    type: 'pdf',
    documentName: 'Company of Certificate',
    size: '2.7 MB',
    lastEdit: '29 June, 2024',
  },
  {
    image: power,
    type: 'ppt',
    documentName: 'Hospital Management',
    size: '154 MB',
    lastEdit: '21 June, 2024',
  },
  {
    image: picture,
    type: 'PNG',
    documentName: 'Preview Images',
    size: '983 KB',
    lastEdit: '14 June, 2024',
  },
  {
    image: mp3,
    type: 'MP3',
    documentName: 'Sound Effects',
    size: '14.9 MB',
    lastEdit: '24 May, 2024',
  },
  {
    image: csvFile,
    type: 'CSV',
    documentName: 'Contact-list',
    size: '651 KB',
    lastEdit: '18 May, 2024',
  },
  {
    image: office,
    type: 'Docs',
    documentName: 'Admin Bugs',
    size: '1.9 MB',
    lastEdit: '07 May, 2024',
  },
]

// Folders array
const folders = [
  {
    name: 'My Documents',
    description: '154 Files',
    image: folderImg,
  },
  {
    name: 'Images',
    description: '547 Images',
    image: folderImg,
  },
  {
    name: 'Design Templates File',
    description: '364 file',
    image: folderImg,
  },
  {
    name: 'Others Files',
    description: '21 Folder',
    image: folderImg,
  },
]
export { files, folders }
