import React, { useRef } from 'react'
import { UilSearch,UilMapMarkerAlt} from '@iconscout/react-unicons'

function Input({setCity,city}) {
  const cityRef = useRef('')

  const setInputCity = ()=>{
    try {
      if(city === cityRef.current.value || cityRef.current.value === "" ){
        return
      }
      setCity(cityRef.current.value)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-row justify-center mt-3 ml-8 w-full'>
        <div className='flex flex-row w-3/4 md:w-2/4 mt-2 items-center justify-center rounded space-x-2 md:space-x-1 '>
            <input ref={cityRef} placeholder='Search your Location' type="text" className='text-xl rounded font-light px-2 py-1 outline-none w-11/12 shadow-xl capitalize' />
            <div className='flex items-center justify-center gap-x-2'>
            <p className='cursor-pointer' onClick={setInputCity}><UilSearch  size={25} className='text-white  hover:transition hover:scale-125'/></p>
            <p><UilMapMarkerAlt size={25} className='text-white hover:transition hover:scale-125'/></p>
            </div>
        </div>
    </div>
  )
}

export default Input