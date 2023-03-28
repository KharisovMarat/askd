import React, { useState } from 'react';
import { Box, Stack, Image, Checkbox, StyleProps } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import { Card } from 'shared';
import { observer } from 'mobx-react-lite';
import BgIcon from 'assets/authBg.svg';
import PhotoReports from '../entities/PhotoReports';


const AuthPage = observer(() => {
  const [isSecondBg, setIsSecondBg] = useState<boolean>(true);

  const secondBgPropertyes: StyleProps = {
    backgroundBlendMode: isSecondBg ? 'screen' : 'normal',
    backgroundColor: isSecondBg ? '#B41313' : 'opacity',
    opacity: isSecondBg ? 0.75 : 1,
  };

  return (
    <Box minH='100vh'>
      <Image
        position='absolute'
        height='100%'
        width='100%'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundImage={`url(${BgIcon})`}
        {...secondBgPropertyes}
      />
      <Checkbox isChecked={isSecondBg} onChange={() => setIsSecondBg(!isSecondBg)} />
      <Snowfall radius={[0.5, 1.5]} />
      <Stack position='absolute' width='100%' top='50%' transform='translate(0%, -50%)'>
        <Card minHeight='80vh' maxWidth='70vh' ml='5%' p='55px'>
          <Outlet />
        </Card>

        <PhotoReports position='absolute' bottom='0px' right='24px' />
      </Stack>
    </Box>
  );
});

export default AuthPage;
