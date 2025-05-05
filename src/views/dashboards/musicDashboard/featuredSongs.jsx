import { useEffect, useRef, useState } from 'react'

import { Play, Shuffle } from 'lucide-react'
import { Link } from 'react-router-dom'

import musicData from '../../../data/music-list'

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [featuredSongs, setFeaturedSongs] = useState([])
  const [popularSingers, setPopularSingers] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const [previousVolume, setPreviousVolume] = useState(50)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)

  useEffect(() => {
    if (Array.isArray(musicData) && musicData.length > 0) {
      setFeaturedSongs(musicData[0].featuredSongs)
      setPopularSingers(musicData[0].popularSingers)
    }
  }, [])

  useEffect(() => {
    if (featuredSongs.length > 0 && !currentSong) {
      const firstSong = featuredSongs[0]
      setCurrentSong(firstSong)
      if (audioRef.current) {
        audioRef.current.src = `https://images.kcubeinfotech.com/domiex/images/dashboards/music/music.mp3` // Adjust the path as needed
        audioRef.current.load()
        audioRef.current.pause()
      }
    }
  }, [featuredSongs, currentSong])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
      audioRef.current.muted = isMuted
    }
  }, [volume, isMuted])

  const handlePlayPause = (song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current?.pause()
      } else {
        audioRef.current?.play()
      }
      setIsPlaying(!isPlaying)
    } else {
      setCurrentSong(song)
      setIsPlaying(true)
      setCurrentTime(0)
      if (audioRef.current) {
        audioRef.current.src = `https://images.kcubeinfotech.com/domiex/images/dashboards/music/music.mp3` // Adjust the path as needed
        audioRef.current.load()
        audioRef.current.play()
      }
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      setDuration(audioRef.current.duration || 0)
    }
  }

  const handleSeek = (e) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const newTime = (offsetX / rect.width) * duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
      setPreviousVolume(newVolume)
    }
  }

  const handleToggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
    if (isMuted) {
      setVolume(previousVolume)
    } else {
      setPreviousVolume(volume)
      setVolume(0)
    }
  }

  const handleSkip = (seconds) => {
    if (audioRef.current) {
      let newTime = audioRef.current.currentTime + seconds
      if (newTime < 0) newTime = 0
      if (newTime > duration) newTime = duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <>
      {/* Featured Songs */}
      <div className="col-span-12 row-span-2 md:col-span-6 2xl:col-span-4">
        <div className="mb-space">
          <h6 className="mb-4 text-15">Featured Songs</h6>
          <div className="space-y-3">
            {featuredSongs.map((song) => (
              <div key={song.id} className="flex items-center gap-3">
                <div className="relative group/items">
                  <img
                    src={song.image}
                    alt={song.title}
                    className="rounded-md size-12"
                    width={48}
                    height={48}
                  />
                  <Link
                    to="#!"
                    onClick={() => handlePlayPause(song)}
                    className="absolute inset-0 flex items-center justify-center text-white transition duration-300 ease-linear rounded-md opacity-0 group-hover/items:opacity-100 bg-gray-950/30">
                    <Play className="size-5" />
                  </Link>
                </div>
                <div className="grow">
                  <h6 className="mb-1.5">
                    <Link to="#!">{song.title}</Link>
                  </h6>
                  <div className="flex items-center">
                    <Link
                      to="#!"
                      className="flex px-2 link hover:underline link-purple">
                      {song.artist}
                    </Link>
                    <i className="ml-1 ri-time-line"></i>
                    <p className="px-1 text-gray-500 dark:text-dark-500">
                      {song.duration}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <Link
                    to="#!"
                    onClick={() => handlePlayPause(song)}
                    className="text-gray-500 dark:text-dark-500 hover:bg-white dark:hover:bg-dark-900 btn hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850 btn-icon">
                    <i
                      className={`ri-${isPlaying && currentSong?.id === song.id ? 'pause' : 'play'}-line`}
                      style={{ fontSize: '21px' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Singers */}
      <div className="col-span-12 row-span-2 md:col-span-6 2xl:col-span-4">
        <div className="mb-space">
          <h6 className="mb-4 text-15">Popular Singer</h6>
          <div className="space-y-3">
            {popularSingers.map((singer) => (
              <div key={singer.id} className="flex items-center gap-3">
                <div className="relative group/items shrink-0">
                  <img
                    src={singer.image}
                    alt={singer.name}
                    className="rounded-md size-11"
                    width={44}
                    height={44}
                  />
                  <Link
                    to="#!"
                    className="absolute inset-0 flex items-center justify-center text-white transition duration-300 ease-linear rounded-md opacity-0 group-hover/items:opacity-100 bg-gray-950/30">
                    <Play className="size-5" />
                  </Link>
                </div>
                <div className="grow">
                  <h6 className="mb-1">
                    <Link to="#!">{singer.name}</Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500 line-clamp-1">
                    {singer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Music Player */}
      {currentSong && (
        <div className="fixed ltr:right-0 rtl:left-0 ltr:left-sidebar rtl:right-sidebar group-data-[sidebar=small]:ltr:left-sidebar-small group-data-[sidebar=small]:rtl:right-sidebar-small group-data-[sidebar=medium]:ltr:left-sidebar-medium group-data-[sidebar=medium]:rtl:right-sidebar-medium bottom-0 bg-white/30 dark:bg-dark-900/50 backdrop-blur-lg border-t z-[1020] p-3 border-gray-200 dark:border-dark-800">
          <div className="flex items-center gap-3">
            <img
              src={currentSong.image}
              alt="Music"
              className="rounded-md size-10 shrink-0"
              width={40}
              height={40}
            />
            <div className="w-64 shrink-0">
              <h6 className="mb-1">{currentSong.title}</h6>
              <p className="text-gray-500 dark:text-dark-300">
                {currentSong.artist}
              </p>
            </div>
            <div className="flex items-center gap-2 mx-auto grow">
              <audio
                ref={audioRef}
                src={`https://images.kcubeinfotech.com/domiex/images/dashboards/music/music.mp3`} // Adjust the path as needed
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                preload="metadata"></audio>
              <Link
                to="#!"
                onClick={() => handleSkip(-10)}
                className="flex items-center justify-center text-xl size-10 link hover:text-gray-800 dark:hover:text-dark-50">
                <i className="ri-skip-back-line"></i>
                {/* <SkipBack /> */}
              </Link>
              <Link
                to="#!"
                onClick={() => {
                  if (isPlaying) {
                    audioRef.current?.pause()
                  } else {
                    audioRef.current?.play()
                  }
                  setIsPlaying(!isPlaying)
                }}
                className="flex items-center justify-center text-xl size-10 link hover:text-gray-800 dark:hover:text-dark-50">
                <i className={isPlaying ? 'ri-pause-line' : 'ri-play-line'}></i>
                {/* {isPlaying ? <Pause /> : <Play />} */}
              </Link>
              <Link
                to="#!"
                onClick={() => handleSkip(10)}
                className="flex items-center justify-center text-xl size-10 link hover:text-gray-800 dark:hover:text-dark-50">
                <i className="ri-skip-forward-line"></i>
                {/* <SkipForward /> */}
              </Link>

              {/* Seek Bar */}
              <div className="grow">
                <div className="relative flex items-center gap-3">
                  <div
                    className="w-full h-2 overflow-hidden bg-gray-200 rounded-full cursor-pointer dark:bg-dark-800"
                    onClick={handleSeek}>
                    <div
                      className="h-full bg-primary-500"
                      style={{
                        width: `${(currentTime / duration) * 100}%`,
                      }}></div>
                  </div>
                  <div className="flex justify-end text-sm">
                    <span>{formatTime(currentTime)}</span>
                    <span className="mx-1">/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-2">
                <Link
                  to="#!"
                  onClick={handleToggleMute}
                  className="flex items-center justify-center text-xl size-10 link hover:text-gray-800 dark:hover:text-dark-50">
                  <i
                    className={
                      isMuted || volume === 0
                        ? 'ri-volume-mute-line text-red-500'
                        : 'ri-volume-up-line'
                    }></i>
                </Link>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-dark-700"
                />
              </div>
            </div>
            <div className="shrink-0">
              <Link to="#!" title="Shuffle Icon">
                <Shuffle className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MusicPlayer
