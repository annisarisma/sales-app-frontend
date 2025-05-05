import React from 'react'

const VideoGallery = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Aspect Auto </h6>
          </div>
          <div className="card-body">
            <iframe
              className="w-full rounded-xl aspect-video"
              src="https://www.youtube.com/embed/DxcJbrs6rKk?si=r9xt6eHRj0kayf8d"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Aspect Video (16 / 9) </h6>
          </div>
          <div className="card-body">
            <iframe
              className="w-full rounded-xl aspect-video"
              src="https://www.youtube.com/embed/Tmkr2kKUEgU?si=g6q_jn3gzqxK_CMj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Aspect Video (21 / 9) </h6>
          </div>
          <div className="card-body">
            <iframe
              className="w-full rounded-xl aspect-21/9"
              src="https://www.youtube.com/embed/eSzNNYk7nVU?si=EHJjJ8BjAsp6yMgx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Aspect Square (1 / 1)</h6>
          </div>
          <div className="card-body">
            <iframe
              className="w-full rounded-xl aspect-square"
              src="https://www.youtube.com/embed/MAtaT8BZEAo?si=iyOi2lREUWB35ct6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Aspect 4 / 3</h6>
          </div>
          <div className="card-body">
            <iframe
              className="w-full rounded-xl aspect-4/3"
              src="https://www.youtube.com/embed/WJDw1J7FZnE?si=K3rzRikfvdzhJjI_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default VideoGallery
