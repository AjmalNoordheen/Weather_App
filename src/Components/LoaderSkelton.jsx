import React from 'react'

function LoaderSkelton({type,num}) {
  return (
    <div className="h-36 mt-10 pb-3  rounded">
      {type=='forecast' && <hr className='mb-3  bg-opacity-40  animate-pulse' />}
    <div className=" flex  flex-row items-center h-full justify-around  gap-y-3  w-full   text-white ">
     {Array.from({length:num}).map(()=>
     <div className='w-full h-full gap-y-2 flex flex-col justify-center mt-3 items-center'>
      <div className="h-[80%] w-8/12 rounded   sm:w-8/12  bg-white bg-opacity-40  animate-pulse"/>
      {type=='forecast' && <div className='h-8 w-8/12 rounded  bg-white bg-opacity-40  animate-pulse sm:w-8/12'/>}
      </div>
     )}
    </div>
  </div>
  )
}

export default LoaderSkelton