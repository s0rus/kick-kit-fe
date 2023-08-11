import { CHANGELOG_RAW_URL } from '@/constants';
import { marked } from 'marked';
import { useQuery } from 'react-query';
import { Icon } from '../ui/icon';
import { ScrollArea } from '../ui/scroll-area';
import TypographyLead from '../ui/typography-lead';

const ChangelogContent = () => {
  const { data, isLoading, isError } = useQuery('changelog', async () => {
    const changelogResponse = await fetch(CHANGELOG_RAW_URL);
    const changelogText = await changelogResponse.text();
    const changelogMarkdown = marked(changelogText, {
      mangle: false,
      headerIds: false,
    });
    return changelogMarkdown;
  });

  if (isLoading) {
    return <Icon.loading className='animate-spin w-10 h-10 m-auto' />;
  }

  if (isError) {
    return <TypographyLead>Here should be the changelog, but something went wrong :(</TypographyLead>;
  }

  return (
    <>
      {data && (
        <ScrollArea className='h-[500px] w-full flex gap-4 border border-muted rounded-md mt-2 px-4 py-2 shadow-2xl'>
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </ScrollArea>
      )}
    </>
  );
};

export default ChangelogContent;
