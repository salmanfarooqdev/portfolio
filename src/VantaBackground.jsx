// // VantaBackground.js
// import React, { useEffect, useRef } from 'react';
// import NET from 'vanta/dist/vanta.net.min';

// export default function VantaBackground() {
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     // Load Vanta 3D background when the component mounts
//     if (!vantaRef.current) {
//         NET({
//             el: "#home-section",
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 150.00,
//             minWidth: 150.00,
//             scale: 1.00,
//             scaleMobile: 1.00,
//             color: 0x6c4298,
//             backgroundColor: 0xc050c,
//             maxDistance: 25.00,
            
//           });
//     }

//     // Clean up the Vanta instance when the component unmounts
//     return () => {
//       if (vantaRef.current) {
//         vantaRef.current.vanta.destroy();
//       }
//     };
//   }, []);

//   return null; // No need to render anything for the background element
// }
