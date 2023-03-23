import React from 'react';
import { Text, Center } from '@chakra-ui/react';

import { Card, RouterLink } from 'shared';
import { Path } from 'app/constants/routerPaths';

const Main = () => (
  <Card>
    <Center flexDirection='column'>
      <Text>АСКД 2.0 Главная</Text>
      <RouterLink to={Path.LOGIN}>Выход</RouterLink>
    </Center>
  </Card>
);

export { Main };
