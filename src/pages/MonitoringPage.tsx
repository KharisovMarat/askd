import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { PurchaseList } from 'widgets';

const MonitoringPage = () => (
  <Flex width='100%'>
    <PurchaseList />

    <Box width='100%' height='calc(100vh - 70px)' backgroundColor={'gray.100'}>
      
    </Box>
  </Flex>
);

export default MonitoringPage;
