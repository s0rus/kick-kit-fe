import TitleLogo from '../title-logo/title-logo';
import TypographyLead from '../ui/typography-lead';

const Hero = () => {
  return (
    <>
      <div className='w-full h-full flex justify-between items-center container'>
        <div className='mesh-gradient absolute inset-0 opacity-10 w-screen h-screen -z-[1]'></div>
        <div className='flex flex-col items-start'>
          <TitleLogo />
          <TypographyLead>
            Enhance your{' '}
            <a
              href='https://kick.com'
              target='_blank'
              rel='noopener norefferer'
              className='underline-offset-4 hover:underline text-primary'
            >
              kick.com
            </a>{' '}
            experience.
          </TypographyLead>

          <p className='scroll-m-20 text-xl font-semibold tracking-tight mt-8'>coming soon-ish 👀</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
