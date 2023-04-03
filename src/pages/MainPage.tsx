import { Box, StyleProps } from '@chakra-ui/react';
import React from 'react';

import { Header } from 'widgets';
import { Sidebar } from 'shared';

const wrapperStyle: StyleProps = {
  height: 'calc(100vh - 64px)',
};

const MainPage = () => (
  <Box {...wrapperStyle}>
    <Header />
    <Sidebar />
  </Box>
);

export default MainPage;
