import user1 from '@assets/images/avatar/user-1.png'
import user2 from '@assets/images/avatar/user-2.png'
import user3 from '@assets/images/avatar/user-3.png'
import user4 from '@assets/images/avatar/user-4.png'
import user5 from '@assets/images/avatar/user-5.png'
import user6 from '@assets/images/avatar/user-6.png'
import user7 from '@assets/images/avatar/user-7.png'
import user8 from '@assets/images/avatar/user-8.png'
import user9 from '@assets/images/avatar/user-9.png'
import user10 from '@assets/images/avatar/user-10.png'
import user15 from '@assets/images/avatar/user-15.png'
import user16 from '@assets/images/avatar/user-16.png'
import user17 from '@assets/images/avatar/user-17.png'
import user18 from '@assets/images/avatar/user-18.png'
import user19 from '@assets/images/avatar/user-19.png'

// Grouped Avatar Lists
export const groupAvatars = [user1, user2, user3, user4]
export const linkedAvatars = [user5, user6, user7]
export const extraAvatars = [user8, user9, user10]
export const heroAvatars = [user15, user16, user17, user18, user19]

const GroupAvatar = () => {
  return (
    <>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Group Avatar</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-2 gap-5">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-2">
              {groupAvatars.map((src, index) => (
                <img
                  key={index}
                  className="z-40 inline-block rounded-full size-9 ring-2 ring-white"
                  src={src}
                  alt={`User ${index + 1}`}
                  width={36}
                  height={36}
                />
              ))}
            </div>

            {/* Linked Avatars */}
            <div className="flex -space-x-2">
              {linkedAvatars.map((src, index) => (
                <a key={index} href="#!" className="z-40">
                  <img
                    className="inline-block rounded-full size-9 ring-2 ring-white"
                    src={src}
                    alt={`User ${index + 5}`}
                    width={36}
                    height={36}
                  />
                </a>
              ))}
              <a href="#!" className="z-20">
                <span className="flex items-center justify-center font-semibold text-white bg-green-500 border-2 border-white rounded-full text-11 size-9">
                  UT
                </span>
              </a>
            </div>

            {/* More Avatars with Counter */}
            <div className="flex -space-x-4">
              {extraAvatars.map((src, index) => (
                <img
                  key={index}
                  className="border-2 border-white rounded-full size-9"
                  src={src}
                  alt={`User ${index + 8}`}
                  width={36}
                  height={36}
                />
              ))}
              <span className="flex items-center justify-center font-semibold text-white border-2 border-white rounded-full bg-primary-500 text-11 size-9">
                +999
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by Section */}
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Trusted by</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-2 gap-5">
            {/* Animated Avatars */}
            <div className="flex items-center space-x-2 duration-200 delay-300 animate-out zoom-in">
              <div>
                <h6 className="text-center md:text-left">Trusted by</h6>
                <div className="flex flex-col items-center gap-3 md:flex-row">
                  <div className="flex p-2 -space-x-2 overflow-hidden">
                    {groupAvatars.concat(linkedAvatars).map((src, index) => (
                      <img
                        key={index}
                        className="inline-block duration-100 rounded-full size-9 ring-2 ring-white hover:scale-105 transform"
                        src={src}
                        alt={`User ${index + 1}`}
                        width={36}
                        height={36}
                      />
                    ))}
                  </div>
                  <h6>Join 5,000+ other members</h6>
                </div>
              </div>
            </div>

            {/* Hero Avatars */}
            <div>
              <div className="relative inline-flex items-end justify-center w-full mx-auto text-center">
                {heroAvatars.map((src, index) => {
                  const positionClasses = [
                    'absolute ml-6 transform translate-x-24',
                    'absolute -ml-6 transform -translate-x-24',
                    'absolute transform -translate-x-16',
                    'absolute transform translate-x-16',
                    'relative',
                  ]
                  const sizeClasses = [
                    'size-12 md:w-16 md:h-16',
                    'size-12 md:w-16 md:h-16',
                    'size-16 md:w-20 md:h-20',
                    'size-16 md:w-20 md:h-20',
                    'size-20 md:w-24 md:h-24',
                  ]

                  return (
                    <img
                      key={index}
                      className={`border-4 border-white rounded-full ${positionClasses[index]} ${sizeClasses[index]}`}
                      src={src}
                      alt={`Hero User ${index + 15}`}
                      width={80}
                      height={80}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupAvatar
