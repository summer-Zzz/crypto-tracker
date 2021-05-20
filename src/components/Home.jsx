import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js';
import {
  Link
} from "react-router-dom";

import "./Home.scss"

export default function Home(props) {
  const sceneEl = useRef(null);
  
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    })
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, [])

return (
  <div id="container">
    <div className="intro-container">
      <h3 className="intro">Track all of your crypto data in a single centralized location </h3>
    </div>

    <div id="scene" ref={sceneEl}>
      <img className="home-coins" src="/images/coins1.png" alt="coins" data-depth="1.5"/>
      <img className="home-coins" src="/images/coins2.png" alt="coins" data-depth="0.4"/>
    </div>
    <div className="header-container">
      <h2 className="header-text">The fastest way to follow markets</h2>
      <Link className="track-button" to="/login">Get Started
      </Link>
      </div>
  </div>
  )
}