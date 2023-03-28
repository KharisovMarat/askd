import React, { FC } from 'react';
import { Text as ChakraText, TextProps, StyleProps } from '@chakra-ui/react';

const customStyle: StyleProps = {
  fontSize: '14px',
};

export const Text: FC<TextProps> = (props) => (
  <ChakraText {...customStyle} {...props}>
    {props.children}
  </ChakraText>
);
