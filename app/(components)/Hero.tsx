"use client"

// import { useEffect } from "react";
// import GLOBE from "vanta/src/vanta.globe";

export default function Hero() {
  // useEffect(() => {
  //   GLOBE({
  //     el: "#selector",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.0,
  //     scaleMobile: 1.0,
  //     color: 0x48bffc,
  //     backgroundColor: 0x0,
  //   });
  // }, []);

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col box-border" id="selector">
      <div className="bg-bggcol-95 p-7 rounded-lg">
      <h1 className="bighdn text-center">GradGo</h1>
      <h2 className="subhdn text-center">
        Your all-in-one partner for business growth and innovation.
      </h2>
      </div>
    </div>
  );
}
