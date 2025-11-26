import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MagicBento from './components/MagicBento'
import Exercise from './components/ExerciseTimetable'

// 🔥 Add Prism import
import Aurora from './components/Aurora'
import './components/Aurora.css'   // required

function App() {

  return (
    <>
      {/* 🔥 Prism full-page background (added without touching your existing code) */}
      <Aurora 
        colorStops={['#5227FF', '#7cff67', '#5227FF']} 
        amplitude={1.2}
        blend={0.6}
        speed={1.0}
      />

      {/* ⭐ Your existing content — untouched */}
      <div>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
      <div>
        <Exercise/>
      </div>
    </>
  )
}

export default App
