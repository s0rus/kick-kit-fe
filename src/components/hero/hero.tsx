import { EXTENSION_CHROME_URL, KICK_URL, REPO_URL } from '@/constants';
import { scrollToElement } from '@/lib/scrollIntoView';
import TitleLogo from '../title-logo/title-logo';
import { buttonVariants } from '../ui/button';
import { Icon } from '../ui/icon';
import TypographyLead from '../ui/typography-lead';

const Hero = () => {
  return (
    <>
      <div className='w-fit h-screen flex flex-col justify-center'>
        <div className='mesh-gradient absolute inset-0 opacity-10 -z-[1]'></div>
        <div className='flex flex-col items-start justify-center flex-1'>
          <TitleLogo />
          <TypographyLead>
            Enhance your{' '}
            <a
              href={KICK_URL}
              target='_blank'
              rel='noopener norefferer'
              className='underline-offset-4 hover:underline text-primary'
            >
              kick.com
            </a>{' '}
            experience.
          </TypographyLead>

          <p className='scroll-m-20 text-xl font-semibold tracking-tight mt-8'>Get it here:</p>

          <div className='flex gap-4 border border-muted rounded-md mt-2 px-4 py-2 shadow-2xl'>
            <a
              href={EXTENSION_CHROME_URL}
              target='_blank'
              rel='noopener norefferer'
              className={buttonVariants({
                variant: 'ghost',
                size: 'lg',
              })}
            >
              <Icon.chrome className='w-9 h-9' />
            </a>
            <p className='flex flex-row items-center'>
              <Icon.info /> <span className='mx-2'>Firefox coming soon!</span>{' '}
            </p>
            {/* <a
              href='#'
              className={buttonVariants({
                variant: 'ghost',
                size: 'lg',
              })}
            >
              <Icon.firefox className='w-9 h-9' />
            </a> */}
          </div>

          <p className='scroll-m-20 text-xl font-semibold tracking-tight mt-8'>
            <a
              href={REPO_URL}
              target='_blank'
              rel='noopener norefferer'
              className={buttonVariants({
                variant: 'ghost',
              })}
            >
              <Icon.github className='w-6 h-6' />
            </a>
          </p>
        </div>
        <div className='mt-auto pb-6'>
          <Icon.arrowDown
            className='text-muted h-12 w-12 hover:text-foreground cursor-pointer transition-colors animate-pulse rounded-full p-2 hover:animate-none'
            onClick={() => scrollToElement('changelog')}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
