import { Box } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

import { wrapperStyle } from './style';

interface IProps {
  items?: {
    icon: JSX.Element;
    label: string;
  }[];
}

export const Sidebar: FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(!isOpen);

  const tr = 0;
  return (
    <Box
      {...wrapperStyle}
      width={isOpen ? '324px' : '48px'}
      transition='width 0.2s, left 0.2s'
      onClick={handleOpen}
    >
      {tr}
    </Box>
  );
};
