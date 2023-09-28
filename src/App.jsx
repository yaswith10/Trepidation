import { useState } from 'react'
import './index.css'
import { Home } from './components/Home'
import { GamePage } from './components/GamePage'
import {BrowserRouter} from 'react-router-dom'

function App() {
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  return (
    <>
    <BrowserRouter>
    {
      isGamePlaying ? <GamePage/>: <Home isGamePlaying = {isGamePlaying} setIsGamePlaying = {setIsGamePlaying}/>
    }
    </BrowserRouter>
    </>
  )
}

export default App
