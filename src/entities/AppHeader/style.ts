import { StyleProps } from '@chakra-ui/react';
import { border } from 'app/theme/constants';

export const WrapperStyle: StyleProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px',
  width: '100%',
  px: '24px',
  borderBottom: border,
};

export const TitleStyle: StyleProps = {
  lineHeight: 'none',
  fontSize: '12px',
  fontWeight: 600,
};
