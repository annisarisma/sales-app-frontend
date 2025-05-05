import React from 'react'

const IconButton = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Icon with Text</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary btn-icon-text">
              <i className="ri-facebook-fill text-[20px]"></i> Facebook
            </button>
            <button className="btn btn-pink btn-icon-text">
              <i className="ri-instagram-line text-[20px]"></i> Instagram
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Icon Overlay with Text</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-purple btn-icon-overlay">
              <span className="icon">
                <i className="ri-twitch-line text-[20px]"></i>
              </span>{' '}
              Twitch
            </button>
            <button className="btn btn-sky btn-icon-overlay">
              <span className="icon">
                <i className="ri-twitter-line text-[20px]"></i>
              </span>{' '}
              Twitter
            </button>
            <button className="btn btn-red btn-icon-overlay right">
              <span className="icon">
                <i className="ri-twitter-line text-[20px]"></i>
              </span>{' '}
              Twitter
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default IconButton
