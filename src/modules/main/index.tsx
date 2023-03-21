import React from 'react'
import { Text, Center } from '@chakra-ui/react'

import { Card, RouterLink } from 'shared'

const Main = () => (
    <Card>
      <Center flexDirection='column'>
        <Text>АСКД 2.0 Главная</Text>
        <RouterLink to='/auth'>Выход</RouterLink>
      </Center>
    </Card>
  )

export { Main }
