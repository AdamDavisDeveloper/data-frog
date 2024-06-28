import { useState, useRef, useEffect } from 'react'
import { useInView } from "framer-motion"
import '/styles/Main.scss'
import '/styles/Header.scss'

export default function Header(props) {

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef);
  return (
    <header> 
      <h1>{props.buildData.occasion}, {props.buildData.recipient}!</h1>
      <p><i>{props.buildData.date}</i></p>
    </header>
  )
}
