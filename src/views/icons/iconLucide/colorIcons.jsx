import React from 'react'

import { Award, Bot, Box, Camera, ChefHat, FileText, Globe } from 'lucide-react'

const ColorIcons = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Color Icons</h6>
        </div>
        <div className="card-body">
          <div className="*:size-10 *:flex *:items-center *:justify-center flex items-center *:border *:border-gray-200 dark:*:border-dark-800 gap-2 *:rounded-md">
            <div>
              <Award className="text-gray-500 dark:text-dark-500 size-5" />
            </div>
            <div>
              <Box className="size-5 text-primary-500" />
            </div>
            <div>
              <Bot className="text-green-500 size-5" />
            </div>
            <div>
              <ChefHat className="text-yellow-500 size-5" />
            </div>
            <div>
              <Camera className="text-purple-500 size-5" />
            </div>
            <div>
              <FileText className="text-red-500 size-5" />
            </div>
            <div>
              <Globe className="text-sky-500 size-5" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ColorIcons
