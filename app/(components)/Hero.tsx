// import React, { useState, useEffect, useRef } from "react";
// import GLOBE from "../../node_modules/vanta/dist/vanta.globe.min";
// import * as THREE from "three";

// export const MyComponent = () => {
//   const [vantaEffect, setVantaEffect] = useState(0);
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         GLOBE({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 600.0,
//           minWidth: 600.0,
//           scale: 1.0,
//           scaleMobile: 1.0
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);
//   return (
//     <div ref={vantaRef}>
//       <p style={{ color: "#fff", paddingTop: "20px" }}>
//         Animated website backgrounds in a few lines of code.
//       </p>
//     </div>
//   );
// };



export default function Hero() {
    return (
      <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col">
        <h1 className="title">GradGo</h1>
        <h2 className="hdn">Your all-in-one partner for business growth and innovation.</h2>
      </div>
    );
} 