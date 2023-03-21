import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from 'app/theme';
import Router from 'app/router';

const App = () => (
    <ChakraProvider resetCSS theme={theme}>
      <Router />
    </ChakraProvider>
  );

export default App;
