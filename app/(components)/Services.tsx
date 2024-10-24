// // import VideoLogo from '/assets/logos/video_logo.png';  // Update with your logo paths
// // import MarketingLogo from '/assets/logos/marketing_logo.png';
// // import IoTLogo from '/assets/logos/iot_logo.png';
// // import MLLogo from '/assets/logos/ml_logo.png';
// // import WebDevLogo from '/assets/logos/webdev_logo.png';
// // import ARVRLogo from '/assets/logos/arvr_logo.png';

// export default function Services() {
//   const services = [
//     {
//       title: "Video Editor & Graphic Designer",
//       description: [
//         "At GradGo, our creative team delivers engaging visuals that captivate audiences and bring your brand to life.",
//         "We specialize in high-quality video production and graphic design that communicates your message effectively."
//       ],
//       logo: "✨",
//     },
//     {
//       title: "Marketing Interns",
//       description: [
//         "Join GradGo's growing marketing team, where you'll gain real-world experience in digital marketing, SEO, and content strategy.",
//         "As a marketing intern, you'll contribute to campaigns that drive growth for startups and businesses."
//       ],
//       // logo: MarketingLogo,
//     },
//     {
//       title: "IoT (Internet of Things)",
//       description: [
//         "GradGo helps businesses unlock the potential of connected devices, creating smart solutions that optimize processes and enhance user experiences.",
//         "Our IoT expertise spans automation, real-time monitoring, and integrating cutting-edge technology."
//       ],
//       // logo: IoTLogo,
//     },
//     {
//       title: "Machine Learning (ML)",
//       description: [
//         "With GradGo’s ML solutions, we empower businesses to leverage data for informed decision-making, predictions, and automated processes.",
//         "Our expertise ranges from training custom models to enhancing existing AI systems for superior performance."
//       ],
//       // logo: MLLogo,
//     },
//     {
//       title: "Web Development",
//       description: [
//         "GradGo’s developers create scalable, responsive websites that deliver seamless user experiences and help businesses thrive online.",
//         "We use the latest tech stacks to build both dynamic front-end interfaces and robust back-end systems."
//       ],
//       logo: ">_",
//     },
//     {
//       title: "AR/VR",
//       description: [
//         "GradGo brings innovation to life through immersive AR/VR experiences that engage users and offer cutting-edge solutions for training, marketing, and entertainment.",
//         "We focus on developing 3D environments and interactive simulations tailored to diverse industries."
//       ],
//       // logo: ARVRLogo,
//     }
//   ];

//   return (
//     <div className="w-full min-h-[100vh] flex flex-col p-8">
//       <h1 className="bighdn text-center mb-8">Services</h1>
//       <div className="flex flex-wrap justify-between">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center bg-gray-800 text-white rounded-lg shadow-lg m-2 p-5 w-[30%]"
//           >
//             {/* <img
//               src={service.logo}
//               alt={service.title}
//               className="w-[80px] h-[80px] object-cover mb-4"
//             /> */}
//             <div className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full mb-4">
//                <span className="text-2xl">{service.icon}</span>
//              </div>
//             <h2 className="font-bold text-xl text-center">{service.title}</h2>
//             <p className="text-center mt-2">{service.description[0]}</p>
//             <p className="text-center">{service.description[1]}</p>
//             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded ">Know more</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// -- Part 2 --
// // import VideoLogo from '/assets/logos/video_logo.png';  // Update with your logo paths
// // import MarketingLogo from '/assets/logos/marketing_logo.png';
// // import IoTLogo from '/assets/logos/iot_logo.png';
// // import MLLogo from '/assets/logos/ml_logo.png';
// // import WebDevLogo from '/assets/logos/webdev_logo.png';
// // import ARVRLogo from '/assets/logos/arvr_logo.png';

// export default function Services() {
//   const services = [
//     {
//       title: "Video Editor & Graphic Designer",
//       description: [
//         "At GradGo, our creative team delivers engaging visuals that captivate audiences and bring your brand to life.",
//         "We specialize in high-quality video production and graphic design that communicates your message effectively."
//       ],
//       // logo: VideoLogo,
//     },
//     {
//       title: "Marketing Interns",
//       description: [
//         "Join GradGo's growing marketing team, where you'll gain real-world experience in digital marketing, SEO, and content strategy.",
//         "As a marketing intern, you'll contribute to campaigns that drive growth for startups and businesses."
//       ],
//       // logo: MarketingLogo,

//     },
//     {
//       title: "IoT (Internet of Things)",
//       description: [
//         "GradGo helps businesses unlock the potential of connected devices, creating smart solutions that optimize processes and enhance user experiences.",
//         "Our IoT expertise spans automation, real-time monitoring, and integrating cutting-edge technology."
//       ],
//       // logo: IoTLogo,

//     },
//     {
//       title: "Machine Learning (ML)",
//       description: [
//         "With GradGo’s ML solutions, we empower businesses to leverage data for informed decision-making, predictions, and automated processes.",
//         "Our expertise ranges from training custom models to enhancing existing AI systems for superior performance."
//       ],
//       // logo: MLLogo,
//     },
//     {
//       title: "Web Development",
//       description: [
//         "GradGo’s developers create scalable, responsive websites that deliver seamless user experiences and help businesses thrive online.",
//         "We use the latest tech stacks to build both dynamic front-end interfaces and robust back-end systems."
//       ],
//       // logo: WebDevLogo,
//     },
//     {
//       title: "AR/VR",
//       description: [
//         "GradGo brings innovation to life through immersive AR/VR experiences that engage users and offer cutting-edge solutions for training, marketing, and entertainment.",
//         "We focus on developing 3D environments and interactive simulations tailored to diverse industries."
//       ],
//       // logo: ARVRLogo,
//     }
//   ];

//   return (
//     <div className="w-full min-h-[100vh] flex flex-col p-8">
//       <h1 className="bighdn text-center mb-8">Services</h1>
//       <div className="flex flex-wrap justify-between">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center bg-black-40 text-white rounded-lg border border-white-10 shadow-lg m-2 p-5 w-[30%] transition-transform transform hover:scale-105 hover:shadow-2xl"
//           >
//             <img
//               src={service.logo}
//               alt={service.title}
//               className="w-[80px] h-[80px] object-cover mb-4"
//             />
//             <h2 className="font-bold text-xl text-center">{service.title}</h2>
//             <p className="text-center mt-2">{service.description[0]}</p>
//             <p className="text-center">{service.description[1]}</p>
//             <button className="mt-4 px-4 py-2 bg-gray-600 text-gray rounded opacity-80 transition-opacity hover:bg-blue-500 hover:opacity-100">
//               Know More
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// --Part 3--
import React from "react";

export default function Services() {
  const services = [
    {
      title: "Video Editor & Graphic Designer",
      description:
        "Our creative team delivers engaging visuals that captivate audiences and bring your brand to life. We specialize in high-quality video production and graphic design that communicates your message effectively.",
      icon: "🎨",
    },
    {
      title: "Marketing ",
      description:
        "Join our growing marketing team, where you'll gain real-world experience in digital marketing, SEO, and content strategy. As a marketing intern, you'll contribute to campaigns that drive growth for startups and businesses.",
      icon: "📊",
    },
    {
      title: "IoT (Internet of Things)",
      description:
        "We help businesses unlock the potential of connected devices, creating smart solutions that optimize processes and enhance user experiences. Our IoT expertise spans automation, real-time monitoring, and integrating cutting-edge technology.",
      icon: "🌐",
    },
    {
      title: "Machine Learning (ML)",
      description:
        "With our ML solutions, we empower businesses to leverage data for informed decision-making, predictions, and automated processes. Our expertise ranges from training custom models to enhancing existing AI systems for superior performance.",
      icon: "🧠",
    },
    {
      title: "",
      description:
        "Our developers create scalable, responsive websites that deliver seamless user experiences and help businesses thrive online. We use the latest tech stacks to build both dynamic front-end interfaces and robust back-end systems.",
      icon: ">_",
    },
    {
      title: "Quality Service",
      description:
        "We bring innovation to life through immersive AR/VR experiences that engage users and offer cutting-edge solutions for training, marketing, and entertainment. We focus on developing 3D environments and interactive simulations tailored to diverse industries.",
      icon: "🥽",
    },
  ];

  return (
    <div className="w-[100vw] max-w-[100%] min-h-screen bg-black p-8 flex items-center flex-col">
      <h1 className="bighdn text-center">Our Services</h1>
      <div className="flex flex-wrap w-[98%] justify-around">
        {services.map((entry, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-pricol-30 to-bggcol-30 max-w-[500px] min-h-[300px] m-2 rounded-lg p-5 box-border flex flex-col justify-start transition-all duration-300 hover:from-seccol-70 hover:to-bggcol-70 hover:translate-x-[+8px]"
          >
            <div className="w-[80px] h-[80px] rounded-[50%] bg-black flex justify-center items-center m-5 mb-0 ml-1">
              {entry.icon}
            </div>
            <h2 className="subhdn uppercase font-[500] tracking-[0.05px] ml-2 mt-3 mb-5">
              {entry.title}
            </h2>
            <div className="bg-accol w-[200px] h-[2px] rounded-lg opacity-50 ml-3" />
            <p className="textt ml-[0.55rem] mt-5">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
