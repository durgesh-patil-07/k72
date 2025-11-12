// import React, { Children, useRef } from 'react';
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useLocation } from 'react-router-dom';

// const Stair = (props) => {
//     const currentpath =useLocation().pathname;
//   const stairparentref = useRef(null);
//   const pageref=useRef(null)
//   useGSAP(() => {
//     const tl = gsap.timeline();

//     // ✅ Show Loader
//     tl.set(stairparentref.current, { display: "block" });

//     // ✅ Grow animation (your stagger kept exact)
//     tl.from(".stair", {
//       height: 0,
//       stagger: { amount: -0.25 },
//     });

//     // ✅ Slide downward (your stagger kept exact)
//     tl.to(".stair", {
//       y: "100%",
//       stagger: { amount: -0.25 },
//     });

//     // ✅ Hide loader
//     tl.set(stairparentref.current, { display: "none" });

//     // ✅ Reset positions so it can animate again next time
//     tl.set(".stair", { y: "0%" });

//     gsap.from(pageref.current,{
//         opacity:0,
//         delay:1.3,
//         scale:1.2
//     })

//   }, [currentpath]);

//   return (
//    <div>
//      <div ref={stairparentref} className="h-screen w-full fixed z-20 top-0 left-0 pointer-events-none">
//       <div className="h-full w-full flex">
//         <div className="stair h-full w-1/5 bg-black"></div>
//         <div className="stair h-full w-1/5 bg-black"></div>
//         <div className="stair h-full w-1/5 bg-black"></div>
//         <div className="stair h-full w-1/5 bg-black"></div>
//         <div className="stair h-full w-1/5 bg-black"></div>
//       </div>
//     </div>
//    <div> {props.Children}</div>
//    </div>
   
//   );
// };
// //animation loader before start 
// export default Stair;



import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(() => {
        const stairs = stairParentRef.current.querySelectorAll('.stair')

        const tl = gsap.timeline()
        tl.set(stairParentRef.current, { display: 'block' })
        tl.from(stairs, {
            height: 0,
            stagger: { amount: -0.2 }
        })
        tl.to(stairs, {
            y: '100%',
            stagger: { amount: -0.25 }
        })
       tl.set(stairParentRef.current, { display: 'none' })

tl.set(stairs, { y: '0%' })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.2
        })
    }, { dependencies: [currentPath], scope: stairParentRef })   // ✅ SAFE SCOPE

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0 pointer-events-none'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs
