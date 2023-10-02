import React, { useState } from 'react'
import './Child.css'
const Child = ({ bgcolor }) => {
    // const background = {bgcolor};
    const [temp,setTemp] = useState(25);
const [color, setColor] = useState('skyblue');


// if(temp<25){
//     setColor(bgcolor);
// }
    // const bgChange =()=>{
    //     setColor(color);
    // }

    const Inc = ()=>{
      setTemp(temp+1);
    }
    const Dec = ()=>{
      setTemp(temp-1);
    }

  return (
    <div className='container' style={{backgroundColor:color}}>
      <h1>Current Temperature</h1>
      <h2>{temp + ` C`}</h2>
      <button style={{backgroundColor:'red'}} onClick={()=>{Inc(); setColor('red')}}>Hot</button>
      <button style={{backgroundColor:'blue'}} onClick={()=>{Dec(); setColor('blue')}} >Cool</button>
    </div>

  )
}

export default Child;
