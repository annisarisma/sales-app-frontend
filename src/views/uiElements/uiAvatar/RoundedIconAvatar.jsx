import { Home } from 'lucide-react'

const RoundedIconAvatar = () => {
  return (
    <div className="col-span-6 card">
      <div className="card-header">
        <h6 className="card-title">Rounded Icon Avatar</h6>
      </div>
      <div className="flex flex-wrap gap-3 card-body">
        <div className="flex items-center justify-center rounded-full size-5 bg-primary-100 text-primary-500 text-11">
          <Home className="size-2.5" />
        </div>
        <div className="flex items-center justify-center rounded-full size-6 bg-primary-100 text-primary-500 text-11">
          <Home className="size-3" />
        </div>
        <div className="flex items-center justify-center rounded-full size-7 bg-primary-100 text-primary-500 text-11">
          <Home className="size-3.5" />
        </div>
        <div className="flex items-center justify-center text-xs rounded-full size-8 bg-primary-100 text-primary-500">
          <Home className="size-3.5" />
        </div>
        <div className="flex items-center justify-center text-xs rounded-full size-9 bg-primary-100 text-primary-500">
          <Home className="size-3.5" />
        </div>
        <div className="flex items-center justify-center text-sm rounded-full size-10 bg-primary-100 text-primary-500">
          <Home className="size-4" />
        </div>
        <div className="flex items-center justify-center rounded-full text-15 size-12 bg-primary-100 text-primary-500">
          <Home className="size-4" />
        </div>
        <div className="flex items-center justify-center text-lg rounded-full size-14 bg-primary-100 text-primary-500">
          <Home className="size-5" />
        </div>
        <div className="flex items-center justify-center text-xl rounded-full size-16 bg-primary-100 text-primary-500">
          <Home className="size-5" />
        </div>
        <div className="flex items-center justify-center text-2xl rounded-full size-20 bg-primary-100 text-primary-500">
          <Home className="size-6" />
        </div>
        <div className="flex items-center justify-center text-3xl rounded-full size-24 bg-primary-100 text-primary-500">
          <Home className="size-7" />
        </div>
      </div>
    </div>
  )
}

export default RoundedIconAvatar
