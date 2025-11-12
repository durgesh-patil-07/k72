import React from 'react';
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
  return (
    <div className='font-[font-2] flex justify-center items-center gap-6 '>
        <Link className='border-2 text-[5vw] border-white rounded-full leading-[6vw] px-14 pt-5 py-5 hover:border-green-500  hover:text-green-400 uppercase' to="/project">Project</Link>
        <Link className='border-2 text-[5vw] border-white rounded-full leading-[6vw] px-14 pt-5 py-5 hover:border-green-500  hover:text-green-400 uppercase' to="/agence">Agence</Link>
    </div> 
  );
};

export default HomeBottomText;