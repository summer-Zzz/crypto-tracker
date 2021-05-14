import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Home.scss"
import DisplayChart from "./Candlestick/DisplayChart";
export default function Home(props) {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    })
    
    parallaxInstance.enable();

    return () => parallaxInstance.disable();

  }, [])

  function handleScroll() {
    
    window.scroll({
      top: document.getElementById("chart-dashboard-container").scrollIntoView(),
      left: 0, 
      behavior: 'smooth',
    });
  }

return (
  <div id="container">
    <div className="intro-container">
      <h3 className="intro">we could also have some backgroud story and introduction here.</h3>
      <button className="track-button" onClick={handleScroll}>Track Your Coin
      <FontAwesomeIcon icon={faAngleDoubleDown} className="icon"/>
      </button>
    </div>

    <div id="scene" ref={sceneEl}>
      <img className="home-coins" src="/images/coins1.png" alt="coins" data-depth="1.5"/>
      <img className="home-coins" src="/images/coins2.png" alt="coins" data-depth="0.4"/>
    </div>
      <h2 className="header-text">The fastest way to follow markets</h2>
  </div>
  )
}