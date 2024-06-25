import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/styles/Main.scss'

function App() {

  const occasion: string = "";
  const recipient: string = "Tanya";

  const userInformation = {
    name: "Adam"
  }

  const buildData = {
    recipient: "Tanya",
    occasion: "Happy Birthday", 
    messageData: {}
  }

  return (
    <>
      <header>
        <h1>{buildData.occasion}, {buildData.recipient}!</h1>
        <p><i>07-30-24</i></p>
      </header>
    </>
  )
}

export default App
