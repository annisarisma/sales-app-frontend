import React from 'react'

const Location = () => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Location</h6>
        </div>
        <div className="card-body">
          <iframe
            className="w-full border-0 rounded-md aspect-4/3"
            title="video"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.7072578641!2d150.60233714782865!3d-33.847234937864414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1716460671830!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Location
