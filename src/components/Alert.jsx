import React from 'react'

export const Alert = () => {
    function closealert(){
        document.getElementById('alert').style.display = 'none';
    }
  return (
    <div id='alert' className='flex flex-col justify-center items-center bg-black z-10 w-[50vw] mx-auto my-12 border-[2px] border-solid border-red-400 p-4 rounded-sm'>
        <div className='text-white'>
        As you wander through the dark, decrepit hallway, a bone-chilling sensation creeps down your spine. Your heart races, and a cold sweat drips from your forehead. Suddenly, an otherworldly presence materializes before your eyes – a ghostly figure with hollow eyes and outstretched arms. Its unearthly moans echo through the haunted corridors, sending shivers down your spine. <br />

        Your instincts scream at you to run, to hide, to escape the clutches of this malevolent spirit. The air grows frigid, and the walls seem to close in as the ghost draws nearer, its ghastly form oozing dread and despair. <br />

        There is no time to waste. Your only chance of survival lies in finding a way to break free from the ghost's relentless pursuit. Will you overcome your fear and find a means to escape, or will you become another lost soul trapped in this nightmarish realm? 

        </div>
        <div className="closebutton p-4 text-center mx-auto text-white bg-red-500 hover:bg-red-700 transition-all cursor-pointer" onClick={closealert}>
            Close
        </div>
    </div>
  )
}
