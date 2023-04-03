import React, { FC } from 'react';
import { Card as ChakraCard, CardProps } from '@chakra-ui/react';

export const Card: FC<CardProps> = (props) => (
  <ChakraCard bg='white' p={4} borderRadius='24px' {...props} />
);
