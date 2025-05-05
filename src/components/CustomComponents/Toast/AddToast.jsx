// toastHandler.ts
import { ShieldCheck } from 'lucide-react'
import { toast } from 'react-hot-toast'

const AddToast = (message) => {
  return toast(
    (t) => (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span role="img" style={{ marginRight: '10px', fontSize: '20px' }}>
          <ShieldCheck />
        </span>
        <span style={{ marginRight: '10px', paddingLeft: '5px' }}>
          {message || `Folder Added successfully`}
        </span>
        <button
          onClick={() => toast.dismiss(t.id)}
          style={{
            border: 'none',
            background: 'transparent',
            color: '#0f5132',
            cursor: 'pointer',
            padding: 0,
            fontSize: '16px',
          }}>
          ✖
        </button>
      </span>
    ),
    {
      style: {
        background: '#f0fdf4',
        color: '#22c55e',
        border: '1px solid #86efac',
      },
      duration: 3000,
    }
  )
}
export default AddToast
