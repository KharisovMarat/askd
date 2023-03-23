import React, { FC } from 'react';
import { FormLabel as ChakraFormLabel, FormLabelProps, StyleProps } from '@chakra-ui/react';

const customStyle: StyleProps = {
  fontSize: 'sm',
  color: 'blackAlpha.500',
};

export const FormLabel: FC<FormLabelProps> = (props) => <ChakraFormLabel {...customStyle} {...props} />;
