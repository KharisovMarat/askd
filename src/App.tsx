import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import theme from 'app/theme';
import Router from 'app/router';
import { themeStore } from 'app/store/ThemeStore';
import { useScreenSize } from 'app/hooks/useMediaQuery';

const App = observer(() => {
  const { screenSize } = useScreenSize();

  useEffect(() => {
    themeStore.setScreenSize(screenSize);
  }, [screenSize]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router />
    </ChakraProvider>
  );
});

export default App;
