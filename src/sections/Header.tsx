

import { useState, useRef, useEffect } from 'react'
import { useInView } from "framer-motion"
import '/styles/Main.scss'
import '/styles/Header.scss'

export default function Header(props) {
  const headingContentRef = useRef(null);
  const headingContentInView = useInView(headingContentRef);

  useEffect(() => {
    console.log("heading content", headingContentInView);
  }, [headingContentInView]);

  return (
    <header> 
      <div 
        id="HeadingContent"
        ref={headingContentRef}
        style={{
          transform: headingContentInView ? "none" : "translateY(100px)",
          opacity: headingContentInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
        <h1>{props.buildData.occasion}, {props.buildData.recipient}!</h1>
        <p><i>{props.buildData.date}</i></p>
      </div>
    </header>
  )
}
