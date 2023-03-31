import React from 'react'
import { Heading, Text, Center } from '@chakra-ui/react'

import { Card, RouterLink } from 'shared'

const NotFound = () => (
    <Card>
      <Center flexDirection='column'>
        <Heading mb={4}>404</Heading>
        <Text>Страница не найдена</Text>
        <RouterLink to='/'>На главную .</RouterLink>
      </Center>
    </Card>
  )

export default NotFound
