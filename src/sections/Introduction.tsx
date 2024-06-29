import { useState, useRef, useEffect } from 'react'
import { useInView } from "framer-motion"
import '/styles/Main.scss'
import '/styles/Introduction.scss'

export default function Header(props) {
  const introductionRef = useRef(null);
  const introductionInView = useInView(introductionRef);

  useEffect(() => {
    console.log("heading content", introductionInView);
  }, [introductionInView]);

  return (
    <section> 
      <div 
        id="Introduction"
        ref={introductionRef}
        style={{
          transform: introductionInView ? "none" : "translateY(100px)",
          opacity: introductionInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
        <h1>Introduction</h1>
      </div>
    </section>
  )
}
