import TypographyLead from '@/components/ui/typography-lead';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface VideoCardProps {
  title: string;
  subtitle: string;
  src: string;
}

const VideoCard = ({ title, subtitle, src }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', () => {
        if (videoRef.current) {
          if (videoRef.current.currentTime >= videoRef.current.duration - 2) {
            videoRef.current.pause();
          }
        }
      });
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
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
      className='aspect-video rounded-lg overflow-hidden relative w-full cursor-pointer border-primary border-2 shadow-lg'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        playsInline
        preload='metadata'
        className={cn(
          'absolute top-0 left-0 w-full h-full object-cover scale-[1.15] transition-[filter] ease-in-out pointer-events-none',
          isHovered ? 'filter-none' : 'filter grayscale'
        )}
      >
        <source src={src} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />
      <div className='absolute bottom-4 left-4 z-[1]'>
        <h2 className='text-white font-bold text-4xl text-shadow z-[1]'>{title}</h2>
        <TypographyLead>{subtitle}</TypographyLead>
      </div>
    </div>
  );
};

export default VideoCard;
