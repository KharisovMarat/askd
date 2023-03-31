import { Box, StyleProps } from '@chakra-ui/react';
import React from 'react';
import { Sidebar } from 'shared';
import { AppHeader } from '../entities/AppHeader';

const wrapperStyle: StyleProps = {
  height: 'calc(100vh - 64px)'
}

const MainPage = () => (
  <Box {...wrapperStyle}>
    <AppHeader />
    <Sidebar />
  </Box>
);

export default MainPage;
