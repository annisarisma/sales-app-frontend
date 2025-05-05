import React from 'react'

import { Airplay, MessageCircleMore, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HoverCard = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl">
          <div className="card-body">
            <span className="absolute z-0 size-20 transition-all duration-500 rounded-full top-5 bg-primary-500 group-hover/item:scale-[10]"></span>
            <div className="relative z-10 max-w-md mx-auto">
              <div className="grid text-white transition-all duration-500 rounded-full size-20 place-items-center bg-primary-500 group-hover/item:bg-primary-400/30">
                <MessageCircleMore className="size-8" />
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500 group-hover/item:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  to="#"
                  className="font-medium transition-all duration-500 text-primary-500 group-hover/item:text-white">
                  Read the docs{' '}
                  <MoveRight className="inline-block ml-1 size-4" />{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl">
          <div className="card-body">
            <span className="absolute z-0 size-20 transition-all duration-500 rounded-full top-5 bg-green-500 group-hover/item:scale-[10]"></span>
            <div className="relative z-10 max-w-md mx-auto">
              <div className="grid text-white transition-all duration-500 bg-green-500 rounded-full size-20 place-items-center group-hover/item:bg-green-400/30">
                <MessageCircleMore className="size-8" />
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500 group-hover/item:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  to="#"
                  className="font-medium text-green-500 transition-all duration-500 group-hover/item:text-white">
                  Read the docs{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl hover:border-primary-500 hover:border-opacity-30">
          <div className="card-body">
            <span className="absolute z-0 size-20 transition-all duration-500 rounded-full top-5 bg-primary-500/10 group-hover/item:scale-[10]"></span>
            <div className="relative z-10 max-w-md mx-auto">
              <div className="grid transition-all duration-500 rounded-full size-20 text-primary-500 bg-primary-500/10 place-items-center">
                <MessageCircleMore className="size-8" />
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500 group-hover/item:text-primary-500">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  to="#"
                  className="font-medium transition-all duration-500 text-primary-500 group-hover/item:text-primary-500">
                  Read the docs{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl hover:border-purple-500 hover:border-opacity-30">
          <div className="card-body">
            <span className="absolute z-0 size-20 transition-all duration-500 rounded-full top-5 bg-purple-500 bg-opacity-10 group-hover/item:scale-[10]"></span>
            <div className="relative z-10 max-w-md mx-auto">
              <div className="grid text-purple-500 transition-all duration-500 bg-purple-500 rounded-full size-20 place-items-center bg-opacity-10">
                <MessageCircleMore className="size-8" />
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500 group-hover/item:text-purple-500">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  to="#"
                  className="font-medium text-purple-500 transition-all duration-500 group-hover/item:text-purple-500">
                  Read the docs{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl">
          <div className="card-body">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="grid transition-all duration-500 rounded-full text-primary-500 size-20 place-items-center bg-primary-500/15">
                <Airplay className="size-8" />
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  to="#"
                  className="font-medium transition-all duration-500 text-primary-500">
                  Read the docs{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl">
          <div className="card-body">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="grid text-purple-500 transition-all duration-500 rounded-full size-20 place-items-center bg-purple-500/15">
                <Airplay className="size-8" />
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  to="#"
                  className="font-medium text-purple-500 transition-all duration-500">
                  Read the docs{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl">
          <div className="card-body">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="grid text-orange-500 transition-all duration-500 rounded-full size-20 place-items-center bg-orange-500/15">
                <Airplay className="size-8" />
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  to="#"
                  className="font-medium text-orange-500 transition-all duration-500">
                  Read the docs{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <div className="relative overflow-hidden transition-all duration-500 card group/item hover:-translate-y-1 hover:shadow-2xl">
          <div className="card-body">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="grid text-green-500 transition-all duration-500 rounded-full size-20 place-items-center bg-green-500/15">
                <Airplay className="size-8" />
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-500 transition-all duration-500 dark:text-dark-500">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  to="#"
                  className="font-medium text-green-500 transition-all duration-500">
                  Read the docs{' '}
                  <MoveRight className="inline-block ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HoverCard
