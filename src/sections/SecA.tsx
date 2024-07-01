import { useRef, useEffect } from 'react'
import { useInView } from "framer-motion"
import MessagesPerDayChart from '../components/charts/MsgPerDay'

import '/styles/Main.scss'
import '/styles/SecA.scss'

export default function SecA() {
  const SecARef = useRef(null);
  const SecAInView = useInView(SecARef);

  useEffect(() => {
    console.log("heading content", SecAInView);
  }, [SecAInView]);

  return (
    <section> 
      <div 
        id="SecA"
        ref={SecARef}
        style={{
          transform: SecAInView ? "none" : "translateY(100px)",
          opacity: SecAInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
        <h1>Section A</h1>
        <p>This is a playground test area</p>
      </div>
        <MessagesPerDayChart />

    </section>
  )
}
