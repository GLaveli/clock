import React, { useEffect } from 'react';

import './style.css';

export default function Home() {

  useEffect(() => {
    Relegio();
  }, [])

  function Relegio() {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const min = document.querySelector("#min");
    const seg = document.querySelector("#seg");

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
      hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
      min.style.transform = `rotateZ(${mm}deg)`;
      seg.style.transform = `rotateZ(${ss}deg)`;

    })
  }


  return (
    <div className="clock">
      <div className="redDot"></div>

      <div className="hora">
        <div className="hr" id="hr"></div>
      </div>

      <div className="minuto">
        <div className="min" id="min"></div>
      </div>

      <div className="segundo">
        <div className="seg" id="seg"></div>

      </div>

    </div>
  )
}