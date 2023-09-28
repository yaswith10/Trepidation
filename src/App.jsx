import { useState } from 'react'
import './index.css'
import { Home } from './components/Home'
import { GamePage } from './components/GamePage'

function App() {
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  return (
    <>
    {
      isGamePlaying ? <GamePage/>: <Home isGamePlaying = {isGamePlaying} setIsGamePlaying = {setIsGamePlaying}/>
    }
    </>
  )
}

export default App
