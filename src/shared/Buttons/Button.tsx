import React, { FC } from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export const Button: FC<ButtonProps> = (props) => (
  <ChakraButton {...props} />
);
