import React, { FC } from 'react';
import { IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react';

export const IconButton: FC<IconButtonProps> = (props) => (
  <ChakraIconButton {...props} />
);
