import { Icon } from '../ui/icon';
import TypographyH1 from '../ui/typography-h1';

const TitleLogo = () => {
  return (
    <div className='flex items-baseline justify-center flex-row'>
      <Icon.kickKit className='w-10 h-10 lg:w-12 lg:h-12' />
      <TypographyH1>ickKit</TypographyH1>
    </div>
  );
};

export default TitleLogo;
