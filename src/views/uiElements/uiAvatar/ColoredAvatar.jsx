import {
  AlertTriangle,
  Badge,
  Dribbble,
  Facebook,
  Home,
  Twitch,
  Twitter,
} from 'lucide-react'

const ColoredAvatar = () => {
  return (
    <div className="col-span-12 card">
      <div className="card-header">
        <h6 className="card-title">Colored Avatar</h6>
      </div>
      <div className="flex flex-wrap gap-3 card-body">
        <div className="flex items-center justify-center text-xs rounded-md size-9 bg-primary-100 text-primary-500">
          <Home className="size-3.5 fill-primary-200" />
        </div>
        <div className="flex items-center justify-center text-xs text-green-500 bg-green-100 rounded-md size-9">
          <Badge className="size-3.5 fill-green-200" />
        </div>
        <div className="flex items-center justify-center text-xs text-pink-500 bg-pink-100 rounded-md size-9">
          <Dribbble className="size-3.5 fill-pink-200" />
        </div>
        <div className="flex items-center justify-center text-xs rounded-md text-primary-500 bg-primary-100 size-9">
          <Facebook className="size-3.5 fill-primary-200" />
        </div>
        <div className="flex items-center justify-center text-xs text-purple-500 bg-purple-100 rounded-md size-9">
          <Twitch className="size-3.5 fill-purple-200" />
        </div>
        <div className="flex items-center justify-center text-xs rounded-md text-sky-500 bg-sky-100 size-9">
          <Twitter className="size-3.5 fill-sky-200" />
        </div>
        <div className="flex items-center justify-center text-xs text-yellow-500 bg-yellow-100 rounded-md size-9">
          <AlertTriangle className="size-3.5 fill-yellow-200" />
        </div>
        <div className="flex items-center justify-center text-xs text-white rounded-md size-9 bg-primary-500">
          <Home className="size-3.5" />
        </div>
        <div className="flex items-center justify-center text-xs text-white bg-yellow-500 rounded-md size-9">
          <AlertTriangle className="size-3.5" />
        </div>
      </div>
    </div>
  )
}

export default ColoredAvatar
