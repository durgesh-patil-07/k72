// import React, { useRef } from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Agence from "./pages/agence";
// import Projects from "./pages/projects";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap"; // ✅ Import gsap

// const App = () => {
//   const stairparentref = useRef(null);
//   useGSAP(function(){
//     const tl=gsap.timeline()
//     tl.to(".stairparentref.current",{
//       display:block
//     })
//     tl.from('.stair',{
//       height:0,
//       stagger:{
//         amount:-0.25
//       }
//     })

//     tl.to(".stair",{
//       y:'100%',
//       stagger:{
//         amount:-0.25
//       }
//     })
//     tl.to('stairparentref.current',{
//       display:'none'
//     })

//     tl.to(".stair",{
//       y:'0%'
//     })
//   }
//      ///loader first upper code                
//   )
//   return (
//     <div  className="h-screen w-screen  text-white">
//      <div ref={stairparentref} className="h-screen w-full fixed z-20 top-0">
//        <div className="h-full w-full flex ">
//           <div className="stair h-full w-1/5 bg-black"></div>
//           <div className="stair h-full w-1/5 bg-black"></div>
//           <div className="stair h-full w-1/5 bg-black"></div>
//           <div className="stair h-full w-1/5 bg-black"></div>
//           <div className="stair h-full w-1/5 bg-black"></div>

//       </div>
//      </div>
//       <div>
//         <Link  className="text-blue-400 text-sm" to="/">Home</Link>
//         <Link  className="text-blue-400 text-sm" to="/agence">Agence</Link>
//         <Link  className="text-blue-400 text-sm" to="/projects">Projects</Link>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/agence" element={<Agence/>}/>
//         <Route path="/projects" element={<Projects/>}/>
//       </Routes>
//     </div>
//   );
// };

// export default App;
 


import React, { useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/agence";
import Projects from "./pages/projects";
import Navbar from "./Components/Navigation/Navbar";
import FullScreenNav from "./Components/Navigation/FullScreenNav";
const App = () => {
  
  return (
    <div className="h-screen w-screen text-white overflow-hidden">
        <Navbar/>

      {/* <div className="relative z-30 p-4">
        <Link className="text-blue-400 text-sm mr-4" to="/">Home</Link>
        <Link className="text-blue-400 text-sm mr-4" to="/agence">Agence</Link>
        <Link className="text-blue-400 text-sm" to="/projects">Projects</Link>
      </div> */}
        <FullScreenNav/>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agence" element={<Agence/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes> */}
    </div>
  );
};

export default App;

