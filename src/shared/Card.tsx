import React, { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const Card: FC<BoxProps> = (props) => <Box borderWidth={1} rounded="sm" bg="white" p={4} {...props} />;
