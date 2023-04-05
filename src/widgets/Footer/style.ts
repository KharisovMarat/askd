import { StyleProps } from '@chakra-ui/react';
import { border } from 'app/theme/constants';

export const wrapperStyle: StyleProps = {
  position: 'absolute',
  bottom: 0,
  height: '32px',
  px: '24px',
  width: '100%',
  borderTop: border,
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
  backgroundColor: 'white',
};
