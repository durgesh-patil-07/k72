// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // ✅ Import 11 images
// import img1 from "../Components/images/firstimage.jpg";
// import img2 from "../Components/images/secondimage.jpg";
// import img3 from "../Components/images/thirdimage.jpg";
// import img4 from "../Components/images/fourthimage.jpg";
// import img5 from "../Components/images/fifthimage.jpg";
// import img6 from "../Components/images/sixthimage.jpg";
// import img7 from "../Components/images/seventhimage.jpg";
// import img8 from "../Components/images/eightimage.jpg";
// import img9 from "../Components/images/ninthimage.jpg";
// import img10 from "../Components/images/tenthimage.jpg";
// import img11 from "../Components/images/eleventhimage.jpg";

// const images = [
//   img1, img2, img3, img4, img5,
//   img6, img7, img8, img9, img10, img11
// ];

// gsap.registerPlugin(ScrollTrigger);

// const Agence = () => {
//   const ImageDivRef = useRef(null);
//   const ImageRef = useRef(null); // ✅ Reference for <img>

//   useGSAP(() => {
//   gsap.to(ImageDivRef.current, {
//     scrollTrigger: {
//   trigger: ImageDivRef.current,
//   start: "top 20%",
//   end: "+=" + images.length * 100 + "px", // 💡 Reduced gap
//   pin: true,
//   markers:true,
//   scrub: true,
// //   markers: true,
//   onUpdate: (self) => {
//     const index = Math.floor(self.progress * (images.length - 1));
//     ImageRef.current.src = images[index];
//   },
// }
//   });
// });

//   return (
//     <>
//       <div className="section1 bg-fuchsia-300 h-full w-full">
//         <div
//           ref={ImageDivRef}
//           className="w-60 h-80 absolute top-[10%] left-[30%] bg-red-500 rounded-4xl overflow-hidden"
//         >
//           <img
//             ref={ImageRef}
//             className="w-full h-full object-cover"
//             src={img1} // ✅ Start with first image
//             alt="Agence visual"
//           />
//         </div>

//         <div className="font-[font-2] justify-center items-center flex flex-col gap-2 ml-40 mr-40 relative ">
//           <div className="mt-[55vh]">
//             <h1 className="text-[15vw] uppercase leading-[15vw]">
//               Soixan7e <br />
//               Douze
//             </h1>
//           </div>
//           <div className="pl-[50%] mt-20 bg-red-500 relative">
//             <p className="text-3xl w-full">
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on
//               dit non aux gros egos, même le vôtre. Une marque est vivante.
//               Elle a des valeurs, une personnalité, une histoire. Si on oublie
//               ça, on peut faire de bons chiffres à court terme, mais on la tue
//               à long terme. C’est pour ça qu’on s’engage à donner de la
//               perspective, pour bâtir des marques influentes.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="section2"></div>
//     </>
//   );
// };

// export default Agence;

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../Components/images/firstimage.jpg";
import img2 from "../Components/images/secondimage.jpg";
import img3 from "../Components/images/thirdimage.jpg";
import img4 from "../Components/images/fourthimage.jpg";
import img5 from "../Components/images/fifthimage.jpg";
import img6 from "../Components/images/sixthimage.jpg";
import img7 from "../Components/images/seventhimage.jpg";
import img8 from "../Components/images/eightimage.jpg";
import img9 from "../Components/images/ninthimage.jpg";
import img10 from "../Components/images/tenthimage.jpg";
import img11 from "../Components/images/eleventhimage.jpg";

const imageArray = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10, img11
];

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const ImageDivRef = useRef(null);
  const ImageRef = useRef(null);

  useGSAP(() => {
  gsap.to(ImageDivRef.current,{
    scrollTrigger:{
      trigger:ImageDivRef.current,
      // markers:true,
      start:'top 35%',
      end:'top -4%',
      pin:true,
      pinspacing:true,
      pinReparent:true,
      pinType:'transform',
      scrub:1,///smooth scrubbing effect
      anticipatePin:1,
      invalidateOnRefresh:true,
      onUpdate:(elem)=>{
        let imageIndex;
        if(elem.progress<1){

           imageIndex = Math.floor(elem.progress * imageArray.length)
        }
        else{
            imageIndex = imageArray.length-1
        }
        ImageRef.current.src = imageArray[imageIndex]
      }
    }
  })
});



 return (
  <div className="w-full min-h-screen bg-black absolute overflow-hidden ">

    <div className="section1 w-full min-h-screen  relative">

      <div
        ref={ImageDivRef}
        className="w-60 h-80 absolute top-[24%] left-[30%]  rounded-4xl overflow-hidden"
      >
        <img
          ref={ImageRef}
          className="w-full h-full object-cover"
          src={img1}
          alt="Agence visual"
        />
      </div>

      <div className="font-[font2] justify-center items-center flex flex-col gap-2 ml-40 mr-40 relative z-[10] absolute">
        <div className="mt-[22vh]">
          <h1 className="text-[10vw] text-center uppercase leading-[15vw]">
            Soixan7e <br /> Douze
          </h1>
        </div>

        <div className="pl-[50%] mt-20 relative">
          <p className="text-3xl w-full">
            &nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité.
            On reste humbles et on dit non aux gros egos, même le vôtre. Une
            marque est vivante. Elle a des valeurs, une personnalité, une
            histoire. Si on oublie ça, on peut faire de bons chiffres à court
            terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à
            donner de la perspective, pour bâtir des marques influentes.
          </p>
        </div>
      </div>

    </div>
  </div>
);
};

export default Agence;
