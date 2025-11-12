import React from "react";
import Video from "./Video";
const HomeHeroText = () => {
  return (
    <div className="font-[font-1] pt-5 text-center ">
      <div className="text-[9.5vw] uppercase flex justify-center items-center leading-[8vw]"> L'étincelle</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex justify-center">qui <div className="h-[12vw] w-[12vw] mt-[15px] border-[10px] rounded-full overflow-hidden mx-2 inline-block hover:bg-yellow-300">
        <Video/></div>génère</div>
      <div className="text-[9.5vw] uppercase flex justify-center items-center leading-[8vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
