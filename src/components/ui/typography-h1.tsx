import type { PropsWithChildren } from 'react';

const TypographyH1 = (props: PropsWithChildren) => {
  return <h1 className='scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl'>{props.children}</h1>;
};

export default TypographyH1;
