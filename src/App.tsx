import { useState, useRef, useEffect } from 'react'
import { useInView } from "framer-motion"
import Header from './sections/Header'
import Introduction from './sections/Introduction.tsx'
import SecA from './sections/SecA.tsx'
import '/styles/Main.scss'

function App() {
  // app
  const appRef = useRef(null);
  const appIsInView = useInView(appRef)
  // header
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef);
  // section test one
  const sectionRef = useRef(null);
  const sectionIsInView = useInView(sectionRef);

  const userInformation = {
    name: "Adam"
  }

  const buildData = {
    recipient: "Tanya",
    occasion: "Happy Birthday", 
    messageData: {},
    date: "07-30-24" 
  }

  return (
    <div id="App" ref={appRef} style={{ overflow: "scroll" }}>
      <div ref={headerRef}>
        <Header buildData={buildData}/>
      </div>
      <Introduction />
      <SecA />
    </div>
  )
}

export default App