import user3 from '@assets/images/avatar/user-3.png'
import user9 from '@assets/images/avatar/user-9.png'
import user10 from '@assets/images/avatar/user-10.png'
import user11 from '@assets/images/avatar/user-11.png'
import user13 from '@assets/images/avatar/user-13.png'
import user14 from '@assets/images/avatar/user-14.png'
import user15 from '@assets/images/avatar/user-15.png'
import user16 from '@assets/images/avatar/user-16.png'
import user17 from '@assets/images/avatar/user-17.png'
import upgrade from '@assets/images/dashboards/music/upgrade.png'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import SimpleBar from 'simplebar-react'

const MonthlyTopArtists = () => {
  const artists = [
    { id: '1', name: 'Shakira', img: user9 },
    { id: '2', name: 'Katy Perry', img: user10 },
    { id: '3', name: 'Harry Styles', img: user11 },
    { id: '4', name: 'Rihanna', img: user13 },
    { id: '5', name: 'Michael Jackson', img: user14 },
    { id: '6', name: 'Alicia Keys', img: user15 },
    { id: '7', name: 'Celine Dion', img: user16 },
    { id: '8', name: 'Britney Spears', img: user17 },
    { id: '9', name: 'Bob Dylan', img: user3 },
  ]

  return (
    <>
      <div className="col-span-12 xl:col-span-6 2xl:col-span-4 mb-space">
        <h6 className="mb-4 text-15">Monthly Top Artists</h6>
        <SimpleBar className="pb-3">
          <div className="flex gap-3 *:shrink-0">
            {artists.map((artist, index) => (
              <Link to="#!" key={index} className="relative inline-block">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="border-4 rounded-full shadow-lg border-white/10 shadow-gray-200 dark:shadow-dark-850 size-14"
                  width={56}
                  height={56}
                  data-tooltip-id={`${artist.id}`}
                />
                <Tooltip id={artist.id} place="top" className="z-50">
                  <span className="text-sm font-medium">{artist.name}</span>
                </Tooltip>
              </Link>
            ))}
          </div>
        </SimpleBar>
      </div>
      <div className="relative col-span-12 xl:col-span-6 2xl:col-span-4 card ltr:bg-gradient-to-tr rtl:bg-gradient-to-tl from-sky-500/15 via-purple-500/15 to-primary-500/15">
        <img
          src={upgrade}
          alt="upgradeImg"
          className="absolute top-0 opacity-75 ltr:right-5 rtl:left-5"
        />
        <div className="relative card-body">
          <div className="max-w-52">
            <h5 className="mb-2 capitalize">Check the power Of Domiex</h5>
            <p className="mb-3 text-gray-500 dark:text-dark-500">
              Immerse yourself in a world where music comes alive.
            </p>
          </div>
          <button type="button" className="btn btn-primary">
            Upgrade Now
          </button>
        </div>
      </div>
    </>
  )
}

export default MonthlyTopArtists
