import React, { FC } from 'react';
import { CardProps, Flex, Grid, Stack } from '@chakra-ui/react';
import { Card, Description } from 'shared';

import { ReactComponent as QrcodeIcon } from 'assets/icons/qr-code.svg';

const PhotoReports: FC<CardProps> = (props) => (
  <Card width='500px' height='140px' {...props}>
    <Flex alignItems='flex-end'>
      <Stack>
        <Description color='gray.600'>
          Чтобы ваши фотографии любимого города украшали главную страницу АСКД напишите нам:
        </Description>
        <Description color='blue.500' fontWeight={600}>
          ASKD-news@control.mos.ru
        </Description>
      </Stack>

      <Grid>
        <QrcodeIcon />
        <Description color='blue.500' fontWeight={600} pt={2}>
          @glavkontrol
        </Description>
      </Grid>
    </Flex>
  </Card>
);

export default PhotoReports;
