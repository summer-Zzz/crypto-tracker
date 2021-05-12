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
    <div id="scene" ref={sceneEl}>
      <img className="coins" src="/images/coins1.png" alt="coins" data-depth="1.5"/>
      <img className="coins" src="/images/coins2.png" alt="coins" data-depth="0.4"/>
    </div>
  </div>
  )
}