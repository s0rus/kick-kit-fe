import { CHANGELOG_URL, SECTION_ID } from '@/constants';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Icon } from '../ui/icon';
import TypographyH1 from '../ui/typography-h1';
import ChangelogContent from './changelog-content';

const queryClient = new QueryClient();

const Changelog = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='prose dark:prose-invert pb-12 max-w-full' id={SECTION_ID.CHANGELOG}>
        <TypographyH1>And for the boring stuff...</TypographyH1>
        <p className='flex flex-row items-center'>
          <Icon.info /> <span className='mx-2'>This file is fetched from</span>{' '}
          <a
            href={CHANGELOG_URL}
            target='_blank'
            rel='noopener norefferer'
            className='underline-offset-4 underline text-primary'
          >
            here
          </a>
          .
        </p>
        <ChangelogContent />
      </div>
    </QueryClientProvider>
  );
};

export default Changelog;
