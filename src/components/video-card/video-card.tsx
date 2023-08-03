import { useRef, useState } from 'react';

interface VideoCardProps {
  title: string;
  subtitle: string;
  videoSrc: string;
}

const VideoCard = ({ title, subtitle, videoSrc }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className='rounded-lg overflow-hidden relative w-72 h-48 cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src={videoSrc}
        autoPlay={false}
        loop
        muted={true}
        className='absolute top-0 left-0 w-full h-full object-cover filter grayscale'
        style={{
          filter: isHovered ? 'none' : 'grayscale(100%)',
          transition: 'filter 0.3s ease-in-out',
        }}
        ref={videoRef}
      />
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent' />
      <h2 className='absolute bottom-4 left-4 text-white font-semibold text-lg text-shadow z-[1]'>{title}</h2>
    </div>
  );
};

export default VideoCard;
