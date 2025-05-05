import userImg from '@assets/images/avatar/user-44.png'

const avatarSizes = [5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24]
const sizes = {
  5: 'size-5',
  6: 'size-6',
  7: 'size-7',
  8: 'size-8',
  9: 'size-9',
  10: 'size-10',
  12: 'size-12',
  14: 'size-14',
  16: 'size-16',
  20: 'size-20',
  24: 'size-24',
}

const BasicAvatar = () => {
  return (
    <div className="col-span-6 card">
      <div className="card-header">
        <h6 className="card-title">Avatar Images</h6>
      </div>
      <div className="flex flex-wrap gap-3 card-body">
        {avatarSizes.map((size) => (
          <img
            key={size}
            src={userImg}
            alt="User Avatar"
            className={`rounded-full ${sizes[size]}`}
          />
        ))}
      </div>
    </div>
  )
}

export default BasicAvatar
