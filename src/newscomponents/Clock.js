import React, { useState } from 'react';

export default function Clock() {
    const time=new Date().toLocaleTimeString();

    const [ctime,setTime]=useState(time);
    const updateTime=()=>
    {
        let time=new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(updateTime,1000);

  return (
    <div className='main'>
        <div className='container1'>
            <span>{ctime}</span>
        </div>
    </div>
  )
}
