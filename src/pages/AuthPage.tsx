import React from 'react';
import { Box, Center, Card } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Snowfall from 'react-snowfall';
// @ts-ignore
import { ReactComponent as AuthBg } from 'assets/icons/bg.svg';

const AuthPage = () => (
  <Box minH='100vh'>
    {/* <Stack position='absolute' width='100%'>
      <AuthBg />
    </Stack> */}

    <img
      style={{
        position: 'absolute',
        height: '100%',
        width: "100%",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage:
          "url('https://img4.goodfon.ru/original/1920x1080/a/8a/gorod-moskva-siti-moskva-rossiia-noch-ogni-dorogi-svet.jpg')",
      }}
      // bgImage="url('https://img4.goodfon.ru/original/1920x1080/a/8a/gorod-moskva-siti-moskva-rossiia-noch-ogni-dorogi-svet.jpg')"
      // bgPosition='center'
      // bgRepeat='no-repeat'
    />
    <Snowfall radius={[0.5, 1.5]} />
    <Center pt={20}>
      <Card minHeight={500} width='sm' p={8} backgroundColor='white' borderRadius='20px'>
        <Outlet />
      </Card>
    </Center>
  </Box>
);

export default AuthPage;
