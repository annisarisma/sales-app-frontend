import React from 'react'

import main from '@assets/images/dashboards/music/main.png'
import { Play } from 'lucide-react'

const HomeSection = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 border-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-sky-400 via-purple-300 card to-pink-400">
        <div className="grid items-center grid-cols-12 px-10">
          <div className="col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-9">
            <div className="lg:max-w-[400px] xl:max-w-[500px] py-10">
              <h1 className="mb-3 text-white">
                Dream Top <span className="text-pink-400">10</span> Tracks
              </h1>
              <p className="mb-6 text-primary-50">
                On March 24, 2025, Dream released his second song, entitled
                "Mask", which garnered over 24.7 million views on YouTube.
              </p>
              <button
                type="button"
                className="text-white rounded-lg rounded-tl-3xl rounded-br-3xl py-2.5 hover:-translate-y-1.5 -tracking-tighter btn bg-white/20 backdrop-blur-sm-xl">
                <Play className="inline-block ltr:mr-1 rtl:ml-1 size-4"></Play>{' '}
                Play All
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-5 xl:col-span-3">
            <div className="mt-6 lg:-mt-8">
              <img src={main} alt="mainImg" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default HomeSection
