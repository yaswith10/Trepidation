import React from 'react'

export const Alert2 = () => {
    function closealert(){
        document.getElementById('alert').style.display = 'none';
        location.reload();
    }
  return (
    <div id='alert' className='flex flex-col justify-center items-center bg-black z-10 w-[50vw] mx-auto my-12 border-[2px] border-solid border-red-400 p-4 rounded-sm'>
        <div className='text-white'>
            YOU WON
        </div>
        <div className="closebutton p-4 text-center mx-auto text-white bg-red-500 hover:bg-red-700 transition-all cursor-pointer" onClick={closealert} >
            Close
        </div>
    </div>
  )
}
