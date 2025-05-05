import React, { useEffect, useRef, useState } from 'react'

import user1 from '@assets/images/avatar/user-18.png'
import { LogOut, Pencil, Settings } from 'lucide-react'

const EditCards = () => {
  const [showSettings, setShowSettings] = useState(false)
  const [bgColor, setBgColor] = useState('bg-primary-500')
  const [fullname, setFullname] = useState('Frankie N. Mixon')
  const [username, setUsername] = useState('frankie_mixon')
  const [editing, setEditing] = useState(null)
  const fullnameInputRef = useRef(null)
  const usernameInputRef = useRef(null)

  const bgColors = [
    'bg-yellow-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-primary-800',
    'bg-primary-500',
  ]

  const selectColor = (color) => {
    setBgColor(color)
  }

  const edit = (field) => {
    setEditing(field)
  }

  const saveEdit = (field) => {
    if (field === 'fullname' && fullnameInputRef.current) {
      setFullname(fullnameInputRef.current.value)
    } else if (field === 'username' && usernameInputRef.current) {
      setUsername(usernameInputRef.current.value)
    }
    setEditing(null)
  }

  const discard = () => {
    setEditing(null)
  }

  useEffect(() => {
    if (editing === 'fullname' && fullnameInputRef.current) {
      fullnameInputRef.current.focus()
    } else if (editing === 'username' && usernameInputRef.current) {
      usernameInputRef.current.focus()
    }
  }, [editing])

  return (
    <React.Fragment>
      <h5 className="mt-2 mb-5 underline">Edit Cards</h5>
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 sm:col-span-6 xl:col-span-4">
          <div className="relative flex flex-col items-center justify-center w-full mb-5">
            <div
              className={`flex flex-col w-full p-4 transition-colors ease-in rounded-lg shadow-md ${bgColor}`}>
              <div
                className={`z-10 flex-col max-w-full p-5 text-center transition-all origin-top-left transform w-70 h-70 ${showSettings ? 'flex' : 'hidden'}`}>
                <span className="text-2xl font-bold text-white">Settings</span>
                <div className="flex flex-col flex-grow mt-3 space-y-2">
                  <span className="mb-2 font-bold text-white text-md">
                    Background color:
                  </span>
                  <div className="flex justify-center w-full space-x-2">
                    {bgColors.map((c) => (
                      <button
                        key={c}
                        className={`w-8 h-8 border-4 border-white rounded-full cursor-pointer ${c}`}
                        onClick={() => selectColor(c)}
                        disabled={bgColor === c}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center flex-shrink mt-4 align-end">
                  <button
                    className="text-lg font-bold text-white bg-transparent rounded"
                    onClick={() => setShowSettings(false)}>
                    Close
                  </button>
                </div>
              </div>
              {!showSettings && (
                <div>
                  <div className="flex justify-between w-full p-2">
                    <button
                      className="flex items-center space-x-1 font-semibold text-white bg-transparent cursor-pointer fill-current group/items"
                      onClick={() => setShowSettings(true)}>
                      <Settings />
                      <span className="text-lg transition-transform ease-in origin-left transform scale-x-0 select-none group-focus/items:scale-x-100 group-hover/items:scale-x-100">
                        settings
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 font-semibold text-white bg-transparent cursor-pointer fill-current group">
                      <span className="text-lg transition-transform ease-in origin-right transform scale-x-0 select-none group-focus/items:scale-x-100 group-hover/items:scale-x-100">
                        logout
                      </span>
                      <LogOut />
                    </button>
                  </div>
                  <div className="flex flex-col w-full h-full text-center">
                    <div className="flex flex-col items-center mb-3">
                      <img
                        src={user1}
                        alt="user1Img"
                        className="rounded-full select-none size-28"
                      />

                      {/* Full Name Section */}
                      <div className="relative mt-4 text-center group/items">
                        {editing !== 'fullname' ? (
                          <>
                            <span
                              className="p-0 px-2 m-0 font-sans text-xl font-semibold text-white break-words select-none"
                              onDoubleClick={() => edit('fullname')}
                              title="Double click to edit">
                              {fullname}
                            </span>
                            <Pencil
                              className="absolute inline w-4 h-4 transition-transform transform scale-0 cursor-pointer text-gray-50 right-2 -top-3 group-hover/items:scale-100"
                              onClick={() => edit('fullname')}
                            />
                          </>
                        ) : (
                          <input
                            type="text"
                            ref={fullnameInputRef}
                            className="w-full p-0 px-2 m-0 font-sans text-xl font-semibold text-center text-white bg-transparent focus:outline-hidden focus:animate-pulse"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            onKeyDown={(e) =>
                              e.key === 'Enter' && saveEdit('fullname')
                            }
                            onBlur={discard}
                            title="Enter to save, click outside to discard."
                            maxLength={20}
                          />
                        )}
                      </div>

                      {/* Username Section */}
                      <div className="relative mt-1 text-center group/items">
                        {editing !== 'username' ? (
                          <>
                            <span
                              className="p-0 m-0 font-sans text-sm font-semibold select-none text-white/75"
                              onDoubleClick={() => edit('username')}
                              title="Double click to edit">
                              {username}
                            </span>
                            <Pencil
                              className="absolute inline w-4 h-4 ml-1 transition-transform transform scale-0 cursor-pointer text-gray-50 -top-1 group-hover/items:scale-100"
                              onClick={() => edit('username')}
                            />
                          </>
                        ) : (
                          <input
                            type="text"
                            ref={usernameInputRef}
                            className="inline-block w-auto p-0 m-0 font-sans text-sm font-semibold text-center bg-transparent text-white/75 focus:outline-hidden focus:animate-pulse"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyDown={(e) =>
                              e.key === 'Enter' && saveEdit('username')
                            }
                            onBlur={discard}
                            title="Enter to save, click outside to discard."
                            maxLength={15}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row justify-evenly">
                      <div className="flex flex-col cursor-pointer hover:opacity-80">
                        <span className="text-lg font-bold text-white">11</span>
                        <span className="text-sm text-white/75">Followers</span>
                      </div>
                      <div className="flex flex-col cursor-pointer hover:opacity-80">
                        <span className="text-lg font-bold text-white">52</span>
                        <span className="text-sm text-white/75">Following</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditCards
