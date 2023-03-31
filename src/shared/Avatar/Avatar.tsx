import React, { FC } from 'react';
import { Avatar as ChakraAvatar, AvatarProps, StyleProps } from '@chakra-ui/react';

const styles: StyleProps = {
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: 'gray.100',
  color: 'gray.500',
  fontSize: '16px',
  fontWeight: 700,
};

export const Avatar: FC<AvatarProps> = (props) => <ChakraAvatar {...styles} {...props} />;
