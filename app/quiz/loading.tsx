import React from 'react'

export default function Loading() {
  return (
      <div className='flex flex-col min-h-dvh justify-center items-center gap-7'>
          <div className="flex flex-col items-center max-w-xl gap-4 mt-20">
              <div className="h-5 bg-gray-400 rounded w-1/2"></div>
              <div className="h-5 bg-gray-400 rounded w-1/2"></div>
              <div className="h-5 bg-gray-400 rounded w-1/2"></div>
              <div className="h-5 bg-gray-400 rounded w-1/2"></div>
              <div className="h-5 bg-gray-400 rounded w-1/2"></div>
          </div>
    </div>
  )
}
