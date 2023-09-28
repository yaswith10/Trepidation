import React,{useState,useEffect} from 'react'
import '../index.css'
import { Alert2 } from './Alert2';

const Room4 = (props) => {
    const [curpo, setcurpo] = useState([0,0]);
    const [gamewon, setgamewon] = useState(false);

    function getCursorPo(event){
        let x = event.clientX;
        let y = event.clientY;
        setcurpo([x,y]);
    }
    function updateHeroPos(){
        let heroX = document.getElementById("hero").offsetLeft;
        let heroY = document.getElementById("hero").offsetTop;
        if(heroX > curpo[0]) document.getElementById('hero').style.left = heroX - 5 + 'px';
        if(heroX < curpo[0]) document.getElementById('hero').style.left = heroX + 5 + 'px';
        if(heroY > curpo[1]) document.getElementById('hero').style.left = heroY - 5 + 'px';
        if(heroY < curpo[1]) document.getElementById('hero').style.left = heroY + 5 + 'px';
        document.getElementById('hero').style.left = curpo[0]+'px';
        document.getElementById('hero').style.top = curpo[1]+'px';

        if(heroX > curpo[0] && heroY > curpo[1]) document.getElementById('hero').style.boxShadow = '-4rem -4rem 8rem 5rem white';
        if(heroX < curpo[0] && heroY < curpo[1]) document.getElementById('hero').style.boxShadow = '4rem 4rem 8rem 5rem white';
        if(heroX > curpo[0] && heroY < curpo[1]) document.getElementById('hero').style.boxShadow = '-4rem 4rem 8rem 5rem white';
        if(heroX < curpo[0] && heroY > curpo[1]) document.getElementById('hero').style.boxShadow = '4rem -4rem 8rem 5rem white';

        if(heroX > 1279-300) props.setroomNumber(1);
        if(heroY > 600-200) setgamewon(true);

        
    }
    function ghostAttack() {
        let ghost = document.createElement("div");
        ghost.classList.add("absolute");
        ghost.classList.add("monster");
      
        let rand1 = Math.floor(2 * Math.random());
        if (rand1 % 2 === 0) {
          let leftcord = Math.floor(600 * Math.random());
          let topcord = 0; 
         ghost.style.left = leftcord + 'px';
          ghost.style.top = topcord + 'px';
    
         document.body.appendChild(ghost);
         ghost.style.animation = "ghostbottomtoup 2s 1 ";
         setTimeout(() => {     
            ghost.style.display = 'none';
        }, 2000);
        }
        if (rand1 % 2 === 1) {
          let leftcord = Math.floor(600 * Math.random());
          let bottomcord = 0; 
         ghost.style.left = leftcord + 'px';
          ghost.style.bottom = bottomcord + 'px';
    
         document.body.appendChild(ghost);
         ghost.style.animation = "ghostuptobottom 2s 1 ";
         setTimeout(() => {     
             ghost.style.display = 'none';
         }, 2000);
        }
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          ghostAttack();
        }, 10000);
        return () => clearInterval(intervalId);
      }, []);
    
    
  return (
    
    <div onMouseMove={updateHeroPos} onClick={ghostAttack}>
      {
        gamewon ? 
        <Alert2/>
        :
        <>
          <div id='game-page' onMouseMove={getCursorPo}>
        <div id="hero" className='absolute top-0 left-0' ></div>
        <div id='green-arrow'></div>
        <div id="exit"></div>
        <div className="bloodstains absolute top-[128px] left-[980px]"></div>
        <div className="bloodstains absolute top-[312px] left-[450px]"></div>
        <div className="bloodstains absolute top-[45px] left-[350px]"></div>
        <div className="bloodstains absolute top-[189px] left-[820px]"></div>
        <div className="bloodstains absolute top-[376px] left-[200px]"></div>
        <div className="bloodstains absolute top-[34px] left-[196px]"></div>
        <div className="bloodstains absolute top-[489px] left-[1190px]"></div>
        <div className="bloodstains absolute top-[119px] left-[965px]"></div>
        <div className="bloodstains absolute top-[32px] left-[870px]"></div>
        <div className="bloodstains absolute top-[170px] left-[670px]"></div>
        <div className="bloodstains absolute top-[196px] left-[60px]"></div>
        <div className="bloodstains absolute top-[220px] left-[760px]"></div>
        <div className="bloodstains absolute top-[307px] left-[202px]"></div>
        <div className="bloodstains absolute top-[475px] left-[1041px]"></div>
        <div className="bloodstains absolute top-[31px] left-[202px]"></div>
        <div className="bloodstains absolute top-[279px] left-[827px]"></div>
        <div className="bloodstains absolute top-[290px] left-[123px]"></div>
        <div className="bloodstains absolute top-[272px] left-[260px]"></div>
        <div className="bloodstains absolute top-[309px] left-[1095px]"></div>
        <div className="bloodstains absolute top-[474px] left-[43px]"></div>
        <div className="bloodstains absolute top-[91px] left-[1150px]"></div>
        <div className="bloodstains absolute top-[238px] left-[335px]"></div>
        <div className="bloodstains absolute top-[98px] left-[637px]"></div>
        <div className="bloodstains absolute top-[231px] left-[817px]"></div>
        <div className="bloodstains absolute top-[92px] left-[340px]"></div>

    </div>
        </>
      }
    
    </div>
  )
}

export default Room4