import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import MusicPlayer from '@views/dashboards/musicDashboard/featuredSongs'
import HomeSection from '@views/dashboards/musicDashboard/homeSection'
import MonthlyTopArtists from '@views/dashboards/musicDashboard/monthlyTopArtists'
import TopTrack from '@views/dashboards/musicDashboard/topTrack'

const Music = () => {
  useEffect(() => {
    document.title = 'Music | Domiex - React JS Admin & Dashboard Template'
  }, [])
  return (
    <React.Fragment>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-yellow-500/15 to-green-500/15"></div>
      <div className="relative">
        <BreadCrumb title="Music" subTitle="Dashboards" />
        <div className="grid grid-cols-12 gap-x-space">
          <HomeSection />
          <TopTrack />
          <MusicPlayer />
          <MonthlyTopArtists />
        </div>
      </div>
    </React.Fragment>
  )
}
export default Music
