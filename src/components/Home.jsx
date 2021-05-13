import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js';

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
    <h3 className="intro">we could also have some backgroud story and introduction here.</h3>
    <div id="scene" ref={sceneEl}>
      <img className="coins" src="/images/coins1.png" alt="coins" data-depth="1.5"/>
      <img className="coins" src="/images/coins2.png" alt="coins" data-depth="0.4"/>
    </div>
      <h2 className="header-text">The fastest way to follow markets</h2>
  </div>
  )
}