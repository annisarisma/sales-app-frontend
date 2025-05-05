// src/HoverEffectButtons.js
import React from 'react'

const HoverEffectButtons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Hover Effect Buttons</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            <button className="relative text-white group/effect bg-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600 btn">
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover/effect:opacity-100"></span>
              </span>
              <span>Lets get started</span>
            </button>
            <button className="relative text-white bg-gray-700 border-gray-700 group/effect hover:bg-gray-800 hover:text-white hover:border-gray-800 focus:bg-gray-800 focus:text-white focus:border-gray-800 btn">
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover/effect:opacity-100"></span>
              </span>
              <span>Lets get started</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HoverEffectButtons
