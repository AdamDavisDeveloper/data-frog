import { useState, useRef } from 'react'
import { useInView } from "framer-motion"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/styles/Main.scss'

function App() {

  // app
  const appRef = useRef(null);
  const appIsInView = useInView({ root: appRef })
  // header
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef);

  const userInformation = {
    name: "Adam"
  }

  const buildData = {
    recipient: "Tanya",
    occasion: "Happy Birthday", 
    messageData: {}
  }

  return (
    <div id="App" ref={appRef} style={{ overflow: "scroll" }}>
      <header ref={headerRef}>
        <h1>{buildData.occasion}, {buildData.recipient}!</h1>
        <p><i>07-30-24</i></p>
      </header>
      <div id="Introduction">
        <h1>Introduction</h1>
      </div>
    </div>
  )
}

export default App
