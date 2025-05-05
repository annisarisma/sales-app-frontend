import { Sparkles } from 'lucide-react'
import { toast } from 'react-hot-toast'

const UpdateToast = (message) => {
  return toast(
    (t) => (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span role="img" style={{ marginRight: '10px', fontSize: '22px' }}>
          <Sparkles />
        </span>
        <span
          style={{
            marginRight: '10px',
            paddingRight: '20px',
            paddingLeft: '5px',
          }}>
          {message || `Folder Updated successfully`}
        </span>
        <button
          onClick={() => toast.dismiss(t.id)}
          style={{
            border: 'none',
            background: 'transparent',
            color: '#358ffc',
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
        background: '#eef7ff',
        color: '#137eff',
        border: '1px solid #90cdff',
      },
    }
  )
}
export default UpdateToast
