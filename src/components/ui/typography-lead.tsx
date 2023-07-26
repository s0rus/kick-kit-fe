import type { PropsWithChildren } from 'react';

const TypographyLead = (props: PropsWithChildren) => {
  return <p className='text-xl text-muted-foreground'>{props.children}</p>;
};

export default TypographyLead;
