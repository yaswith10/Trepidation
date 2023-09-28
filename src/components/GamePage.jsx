import React,{useState,useEffect} from 'react'
import '../index.css'
import Room1 from './Room1.jsx'
import Room2 from './Room2.jsx'
import Room3 from './Room3.jsx'
import Room4 from './Room4.jsx'
import { Alert } from './Alert.jsx'

export const GamePage = () => {
  const [roomNumber, setroomNumber] = useState(1);
  const [time, setTime] = useState(0);
  const [gameover, setGameover] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <>
    {
        time >= 60 ? <Alert /> : ""
    }
    {
       time <= 300 ?
        <div>
<div className='absolute text-red-700 text-3xl font-bold top-[20px] right-[20px]'>
      {(Math.floor(time/60).toString().padStart(2, '0'))} : {((time%60).toString().padStart(2, '0'))}
    </div>
      {
        roomNumber === 1 ? <Room1  roomNumber = {roomNumber} setroomNumber={setroomNumber}/> :<></>
      }
      {
        roomNumber === 2 ? <Room2 roomNumber = {roomNumber} setroomNumber={setroomNumber}/> :<></>
      }
      {
        roomNumber === 3 ? <Room3 roomNumber = {roomNumber} setroomNumber={setroomNumber}/> :<></>
      }
      {
        roomNumber === 4 ? <Room4 roomNumber = {roomNumber} setroomNumber={setroomNumber}/> :<></>
      }
        </div>
       :
       <div className="box" onClick={()=>{location.reload();}}>
          Play Again
       </div>
    }
    
    
    </>
  )
}
