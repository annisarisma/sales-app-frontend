// toastHandler.ts
import { ShieldBan } from 'lucide-react'
import { toast } from 'react-hot-toast'

const ErrorToast = (message) => {
  return toast(
    (t) => (
      <span
        style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
        <ShieldBan />
        <span
          style={{ marginRight: '10px', fontWeight: 200, paddingLeft: '5px' }}>
          <b>{message || '  Operation completed successfully '}</b>
        </span>
        <button
          onClick={() => toast.dismiss(t.id)}
          style={{
            border: 'none',
            background: 'transparent',
            color: '#ef4444',
            cursor: 'pointer',
            padding: 0,
            fontSize: '16px',
          }}>
          ✖
        </button>
      </span>
    ),
    {
      duration: 3000,
      style: {
        background: '#fef2f2',
        color: '#ef4444',
        border: '1px solid #fca5a5',
      },
    }
  )
}
export default ErrorToast
