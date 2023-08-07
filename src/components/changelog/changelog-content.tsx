import { CHANGELOG_RAW_URL } from '@/constants';
import { marked } from 'marked';
import { useQuery } from 'react-query';
import { Icon } from '../ui/icon';
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

  return <>{data && <div dangerouslySetInnerHTML={{ __html: data }} />}</>;
};

export default ChangelogContent;
