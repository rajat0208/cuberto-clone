import { useState } from 'react'
import Header from './components/header'
import './App.css'
import MainConttenet from './components/mainComponent'

function App() {

  return (
    <>
      <div className='min-h-screen bg-white'>

        {/*-----------HEADER----------------*/}
        <Header/>

        {/*-----------MainComponent----------*/}
        <MainConttenet/>
      </div>
    </>
  )
}

export default App
