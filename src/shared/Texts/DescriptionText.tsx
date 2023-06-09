import React, { FC } from 'react';
import { Text, TextProps, StyleProps } from '@chakra-ui/react';

const customStyle: StyleProps = {
  fontSize: '12px',
  color: 'blackAlpha.500',
  lineHeight: 'shorter'
};

export const Description: FC<TextProps> = (props) => (
  <Text {...customStyle} {...props}>
    {props.children}
  </Text>
);
