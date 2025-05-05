import { toast } from 'react-hot-toast'

export const LoadingToast = () => {
  const loadingToastId = toast.loading('Updating record...', {
    style: {
      background: '#fffae6',
      color: '#856404',
      border: '1px solid #ffeeba',
    },
  })
  setTimeout(() => {
    toast.dismiss(loadingToastId)
  }, 2000)
  return loadingToastId
}
export default LoadingToast
