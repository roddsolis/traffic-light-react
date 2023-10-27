import React from 'react'
import Light from './components/Light'
import { useState, useEffect } from'react'

const App = () => {

  const [red, setRed] = useState(false)
  const [yellow, setYellow] = useState(false)
  const [green, setGreen] = useState(false)


  function redClick(){

      setRed(true)
      setYellow(false)
      setGreen(false)    
  }
  function yellowClick(){
    
    setRed(false)
    setYellow(true)
    setGreen(false)  

  }
  function greenClick(){

    setRed(false)
    setYellow(false)
    setGreen(true)  
    
  }


  
  return (
    <div className="projectWrapper">
    <h1>Traffic Lights with React useState</h1>
    <div className='trafficLightWrapper'>
        <Light color='red'activeLight={red} lightOnClick={()=>{redClick()}}/>
        <Light color='yellow'activeLight={yellow} lightOnClick={()=>{yellowClick()}}/>
        <Light color='green'activeLight={green} lightOnClick={()=>{greenClick()}}/>
    </div>
    <p>Code by Rodd Solis</p>
    </div>
  )
}

export default App
