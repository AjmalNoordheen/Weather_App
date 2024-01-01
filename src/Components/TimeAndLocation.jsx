import React from 'react';
import moment from 'moment';

function TimeAndLocation({ name }) {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='font-extralight text-xl text-white'>
          {moment().format('dddd')}, {moment().format('ll')} | {moment().format('LT')}
        </p>
      </div>
      <div className='flex items-center justify-center my-1'>
        <p className='text-white mt-3 text-3xl font-medium'>{name}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
