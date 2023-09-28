import React,{useState,useEffect} from 'react'
import '../index.css'

const Room3 = (props) => {
    const [curpo, setcurpo] = useState([0,0]);

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

        if(heroX > 1279-300) props.setroomNumber(4);

        
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
    <div id='game-page' onMouseMove={getCursorPo}>
        <div id="hero" className='absolute top-0 left-0' ></div>
        <div id='green-arrow'></div>
        <div className="bloodstains absolute top-[346px] left-[720px]"></div>
        <div className="bloodstains absolute top-[508px] left-[559px]"></div>
        <div className="bloodstains absolute top-[243px] left-[804px]"></div>
        <div className="bloodstains absolute top-[323px] left-[303px]"></div>
        <div className="bloodstains absolute top-[385px] left-[79px]"></div>
        <div className="bloodstains absolute top-[13px] left-[966px]"></div>
        <div className="bloodstains absolute top-[587px] left-[117px]"></div>
        <div className="bloodstains absolute top-[573px] left-[549px]"></div>
        <div className="bloodstains absolute top-[100px] left-[270px]"></div>
        <div className="bloodstains absolute top-[586px] left-[1140px]"></div>
    </div>
    </div>
  )
}

export default Room3