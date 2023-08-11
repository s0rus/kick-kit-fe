export const AUTHOR_URL = 'https://github.com/s0rus' as const;
export const KICK_URL = 'https://kick.com' as const;
export const EXTENSION_CHROME_URL =
  'https://chrome.google.com/webstore/detail/kickkit/hbfobpefgbdlfgllfpdemkkfldejdkdk' as const;

export const REPO_URL = 'https://github.com/s0rus/kick-kit/tree/master' as const;
export const CHANGELOG_RAW_URL = 'https://raw.githubusercontent.com/s0rus/kick-kit/master/CHANGELOG.md' as const;
export const CHANGELOG_URL = 'https://github.com/s0rus/kick-kit/blob/master/CHANGELOG.md' as const;

export type KKFeature = {
  title: string;
  subtitle: string;
  url: string;
};

export const FEATURES: KKFeature[] = [
  {
    title: 'Video information',
    subtitle: 'Basic information about videos in the chat!',
    url: 'https://cdn.discordapp.com/attachments/1048729482627907624/1138513906097201323/kickkit-promo-videos.mp4#t=0.1',
  },
  {
    title: 'Images and gifs',
    subtitle: 'Images and gifs from safe platforms in the chat!',
    url: 'https://cdn.discordapp.com/attachments/1048729482627907624/1138513927727231097/kickkit-promo-images.mp4#t=0.1',
  },
  {
    title: 'Hide UI',
    subtitle: 'Hide UI elements to get free real estate in the chat!',
    url: 'https://cdn.discordapp.com/attachments/1048729482627907624/1138530691987013652/kickkit-promo-ui.mp4#t=0.1',
  },
];

export const SECTION_ID = {
  HERO: 'hero',
  FEATURES: 'features',
  CHANGELOG: 'changelog',
} as const;
