import React from 'react'
import '../index.css'

export const Home = (props) => {
  function playbutton(){
    moveanimation();
    setInterval(()=>props.setIsGamePlaying(true),3000);
  }
  function moveanimation(){
    document.getElementById('home').style.opacity = '0';
  }
  return (
    <>
    <div className='ghost-bg'></div>
    <div className='h-[100vh] w-[100vw] bg-neutral-900' id='home'>
        <div className='melted-monster animation-1 text-red-700 text-[4rem] flex justify-center items-center h-[70vh]'>
        Trepidation - The Lone Specter
        </div>
        <div className='  h-8 flex justify-center items-center'>
            <div className='inline-block bg-red-500 text-black melted-monster p-4 shadow-xl rounded-sm  transition-1 cursor-pointer' id='play-button' onClick={playbutton}>
                Press to Begin the Adventure
            </div>
        </div>
    </div>
    </>
  )
}
