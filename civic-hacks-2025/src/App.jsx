import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getLocation from './geography/getCurrentLocation'

function App() {
  
  getLocation()

}

export default App
