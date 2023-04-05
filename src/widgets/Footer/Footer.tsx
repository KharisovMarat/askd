import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

import { IconButton, Text } from 'shared';

import { ReactComponent as CloudIcon } from 'assets/icons/cloud.svg';
import { ReactComponent as WindowTypeOneIcon } from 'assets/icons/window-display-type1.svg';
import { ReactComponent as WindowTypeTwoIcon } from 'assets/icons/window-display-type2.svg';
import { ReactComponent as WindowTypeThreeIcon } from 'assets/icons/window-display-type3.svg';
import { wrapperStyle } from './style';

export const Footer: FC = () => {
  const tr = 0;
  return (
    <Flex {...wrapperStyle}>
      <Flex>
        <CloudIcon />
        <Text pl={2}>Автосохранение</Text>
        <Text pl={2}>27.03.2023 09:50:12</Text>
      </Flex>

      <Flex>
        <WindowTypeOneIcon width='40px'/>
        <WindowTypeTwoIcon width='40px'/>
        <WindowTypeThreeIcon width='40px'/>
      </Flex>
    </Flex>
  );
};
