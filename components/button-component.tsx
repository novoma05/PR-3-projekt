import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  text: string;
  color?: string;
  href: string;
};

export const ButtonComp: FC<Props> = ({ text, color, href }) => {
  return (
    <Button href={href} sx={{ color }}>
      {text}
    </Button>
  );
};
