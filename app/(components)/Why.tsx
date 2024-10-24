import React from "react";

export default function WhyUs() {
  const whyUs = [
    {
      title: "Extensive Network",
      description:
        "We focus on finding the right talent that aligns with your company’s culture and long-term goals. Through our extensive network, we connect you with top candidates from various fields, ensuring a perfect match for your needs",
      icon: "🌐",
    },
    {
      title: "A Team of Goal-Oriented People",
      description:
        "Our team is composed of individuals who are not just experts in their fields, but are also deeply committed to achieving your business goals.",
      icon: "👨‍💻",
    },
    {
      title: "AI and Creativity",
      description:
        "Harness the power of AI to streamline processes and enhance productivity while maintaining a creative, human touch in everything we do",
      icon: "💡",
    },
    {
      title: "Expertise Across Various Fields",
      description:
        "Our team has an expertise across a variety of fields, including design, development, marketing, ML, business strategy and many more.",
      icon: ">_",
    },
    {
      title: "69 Clients",
      description:
        "We have successfully managed projects for 69 clients across different sectors, delivering high-quality work that speaks for itself.",
      icon: ">_",
    },
    // {
    //   title: "",
    //   description: "We bring innovation to life through immersive AR/VR experiences that engage users and offer cutting-edge solutions for training, marketing, and entertainment. We focus on developing 3D environments and interactive simulations tailored to diverse industries.",
    //   icon: "🥽"
    // }
  ];

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <h1 className="bighdn text-center">Why Us</h1>
      <div className="flex flex-wrap w-[98%] justify-around">
        {whyUs.map((entry, index) => (
          <div key={index} className="flex flex-col items-center m-2">
            <div className="mb-[-25px] z-10 w-[70px] h-[70px] bg-bggcol rounded-[50%] flex justify-center items-center">{entry.icon}</div>
            <div
              className="bg-seccol-30 max-w-[500px] min-h-[250px] max-h-[450px] m-2 rounded-lg box-border flex flex-col justify-start transition-all duration-300 hover:bg-pricol-30 hover:translate-x-[+8px] "
              key={index}
            >
              {/* <div className="bg-bgcol w-[100%] rounded-t-md h-[280px] opacity-50"></div> */}
              <h2 className="subhdn uppercase font-[500] tracking-[0.05px] ml-5 mt-10 mb-3">
                {entry.title}
              </h2>
              <div className="bg-accol w-[200px] h-[2px] rounded-lg opacity-50 ml-4 m-1" />
              <p className="textt ml-5 mt-3 mb-5 mr-4">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function whyUs() {
//   const whyUs = [
//     {
//       title: "Extensive Network",
//       description: "We focus on finding the right talent that aligns with your company’s culture and long-term goals. Through our extensive network, we connect you with top candidates from various fields, ensuring a perfect match for your needs",
//       icon: "🌐"
//     },
//     {
//       title: "A Team of Goal-Oriented People",
//       description: "Our team is composed of individuals who are not just experts in their fields, but are also deeply committed to achieving your business goals.",
//       icon: "👨‍💻"
//     },
//     {
//       title: "AI and Creativity",
//       description: "Harness the power of AI to streamline processes and enhance productivity while maintaining a creative, human touch in everything we do",
//       icon: "💡"
//     },
//     {
//       title: "Expertise Across Various Fields",
//       description: "Our team has an expertise across a variety of fields, including design, development, marketing, ML, business strategy and many more.",
//       icon: ">_"
//     },
//     {
//       title: "69 Clients",
//       description: "We have successfully managed projects for 69 clients across different sectors, delivering high-quality work that speaks for itself.",
//       icon: ">_"
//     }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//   };

//   return (
//     <div className="w-full min-h-screen bg-black p-8">
//       <h1 className="text-4xl font-bold text-white text-center mb-8">Why Us</h1>
//       <Slider {...settings}>
//         {whyUs.map((service, index) => (
//           <div key={index} className="p-6">
//             <div className="flex flex-col bg-zinc-900 rounded-lg border border-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-700/30 hover:translate-y-[-8px] hover:bg-zinc-800">
//               <div className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full mb-4">
//                 <span className="text-2xl">{service.icon}</span>
//               </div>
//               <h2 className="text-xl font-semibold text-white mb-2">{service.title}</h2>
//               <p className="text-zinc-400 mb-4 flex-grow">{service.description}</p>
//               <div className="flex items-center justify-end mt-auto">
//                 <button className="px-4 py-2 bg-zinc-700 text-white rounded transition-colors duration-300 hover:bg-blue-600">
//                   Know More
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
