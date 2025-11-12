import React from 'react';
import sampleVideo from '../videos/video1.mp4';

const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={sampleVideo}
      />
    </div>
  );
};

export default Video;
