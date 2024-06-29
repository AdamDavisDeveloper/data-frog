import { useState, useRef, useEffect } from 'react'
import { useInView } from "framer-motion"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './sections/Header'
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

  useEffect(() => {
    console.log("Header is in view: ", headerIsInView);
  }, [headerIsInView]);

  useEffect(() => {
    console.log("App is in view", appIsInView);
  }, [appIsInView]);

  useEffect(() => {
    console.log("Section is in view", sectionIsInView);
  }, [sectionIsInView]);

  return (
    <div id="App" ref={appRef} style={{ overflow: "scroll" }}>
      <Header ref={headerRef} buildData={buildData}/>
      <section id="Introduction">
        <h1>Introduction</h1>
      </section>
      <section id="TestOne">
        <h1>Test Section</h1>
      </section>
    </div>
  )
}

export default App
