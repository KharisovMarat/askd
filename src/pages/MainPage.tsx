import { Box, Flex, StyleProps } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer, Sidebar } from 'widgets';

const wrapperStyle: StyleProps = {
  height: '100vh',
};

const MainPage = () => (
  <Box {...wrapperStyle}>
    <Header />
    <Flex>
      <Sidebar />
      <Outlet />
    </Flex>
    <Footer />
  </Box>
);

export default MainPage;
