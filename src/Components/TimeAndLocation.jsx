import React from 'react';
import moment from 'moment';

function TimeAndLocation({ name }) {

  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='font-extralight text-xl text-white'>
          {moment().format('dddd')}, {moment().format('ll')} | {moment().format('LT')}  {/*Day and time using moment */}
        </p>
      </div>
      <div className='flex items-center justify-center my-1'>
        <div className={`${name =='' ? 'bg-white bg-opacity-40 animate-pulse w-1/2 h-8 rounded':'text-white mt-3 text-3xl font-medium'}`}>{name?name:''}</div>
      </div>
    </div>
  );
}

export default TimeAndLocation;
