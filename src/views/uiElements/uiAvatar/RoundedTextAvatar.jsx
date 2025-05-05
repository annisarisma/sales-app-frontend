const RoundedTextAvatar = () => {
  return (
    <div className="col-span-6 card">
      <div className="card-header">
        <h6 className="card-title">Rounded Text Avatar</h6>
      </div>
      <div className="flex flex-wrap gap-3 card-body">
        <div className="flex items-center justify-center rounded-xs size-5 bg-primary-100 text-primary-500 text-11">
          0
        </div>
        <div className="flex items-center justify-center rounded-xs size-6 bg-primary-100 text-primary-500 text-11">
          1
        </div>
        <div className="flex items-center justify-center rounded-xs size-7 bg-primary-100 text-primary-500 text-11">
          2
        </div>
        <div className="flex items-center justify-center text-xs rounded-xs size-8 bg-primary-100 text-primary-500">
          3
        </div>
        <div className="flex items-center justify-center text-xs rounded-xs size-9 bg-primary-100 text-primary-500">
          4
        </div>
        <div className="flex items-center justify-center text-sm rounded-xs size-10 bg-primary-100 text-primary-500">
          5
        </div>
        <div className="flex items-center justify-center rounded-xs text-15 size-12 bg-primary-100 text-primary-500">
          6
        </div>
        <div className="flex items-center justify-center text-lg rounded-xs size-14 bg-primary-100 text-primary-500">
          7
        </div>
        <div className="flex items-center justify-center text-xl rounded-xs size-16 bg-primary-100 text-primary-500">
          8
        </div>
        <div className="flex items-center justify-center text-2xl rounded-xs size-20 bg-primary-100 text-primary-500">
          9
        </div>
        <div className="flex items-center justify-center text-3xl rounded-xs size-24 bg-primary-100 text-primary-500">
          10
        </div>
      </div>
    </div>
  )
}

export default RoundedTextAvatar
