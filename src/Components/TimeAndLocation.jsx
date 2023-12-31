import React from 'react'
import moment from 'moment'

function TimeAndLocation({allData}) {
  return (
   <div>
     <div className='flex items-center   justify-center my-6'>
        <p className='font-extralight text-xl text-white'>
          {moment().format('dddd')}, {moment().format('ll') } | {moment().format('LT')}
        </p>
    </div>
    <div className='flex items-center p-2 justify-center my-3'> 
      <p className='text-white text-3xl font-medium'>
      {allData.name}
      </p>
    </div>
   </div>
  )
}

export default TimeAndLocation