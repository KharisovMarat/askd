import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Text, IconButton, Avatar } from 'shared';

import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
import { WrapperStyle, TitleStyle } from './style';

const AppHeader = () => (
  <Flex {...WrapperStyle}>
    <Flex>
      <Flex alignItems='center'>
        <LogoIcon width='90px' height='28px' />
        <Text {...TitleStyle}>
          Аналитическая система <br /> контроля деятельности
        </Text>

        <Box pl={8}>breadcrumbs</Box>
      </Flex>
    </Flex>

    <Flex>
      <IconButton aria-label='bell' icon={<BellIcon />} bgColor='transparent'/>
      <Avatar name='Marat Kharisov'/>
    </Flex>
  </Flex>
);

export default AppHeader;
