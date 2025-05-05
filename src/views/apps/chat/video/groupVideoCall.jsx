import React, { useEffect, useState } from 'react'

import { groupVideoCallUserList } from '@src/data'
import { Mic, MicOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const GroupVideoCall = () => {
  const [groupMemberList, setGroupMemberList] = useState([])

  useEffect(() => {
    if (groupVideoCallUserList) {
      setGroupMemberList(groupVideoCallUserList)
    }
  }, [])

  const handleActiveMember = (member) => {
    const updatedMemberList = groupMemberList.map((item) => {
      if (item.id === member.id) {
        item.isActive = !item.isActive
      }
      return item
    })
    setGroupMemberList(updatedMemberList)
  }

  return (
    <React.Fragment>
      <SimpleBar>
        <div className="flex items-center gap-x-space">
          {groupVideoCallUserList &&
            groupVideoCallUserList.length > 0 &&
            groupVideoCallUserList.map((member, index) => {
              return (
                <Link
                  to="#!"
                  className="relative block w-64 overflow-hidden card shrink-0"
                  key={index}>
                  <div className="absolute flex items-center gap-2 bottom-3 left-3">
                    <div
                      className={`rounded-full btn bg-gray-900/40 [&.active]:bg-red-500 text-white flex items-center justify-center p-0 size-9 ${member.isActive ? 'active' : ''}`}
                      onClick={() => handleActiveMember(member)}>
                      {member.isActive ? (
                        <MicOff className="size-4" />
                      ) : (
                        <Mic className="size-4" />
                      )}
                    </div>
                    <div className="px-3 py-2 text-xs leading-none text-white rounded-full bg-gray-900/40">
                      {member.name}
                    </div>
                  </div>
                  <img
                    src={member.image}
                    alt="grpVideoImg"
                    width={254}
                    height={169}
                  />
                </Link>
              )
            })}
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

export default GroupVideoCall
