import { StyleProps } from '@chakra-ui/react';
import { border } from 'app/theme/constants';

export const wrapperStyle: StyleProps = {
  width: '48px',
  height: 'calc(100vh - 64px)',
  zIndex: 1,
  borderRight: border,
};

export const menuWrapperStyle: StyleProps = {
  display: 'flex',
  alignItems: 'center',
  pt: 2,
  flexDirection: 'column',
};

export const menuItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '40px',
  writingMode: 'vertical-lr',
  padding: '10px 0px',
  cursor: 'pointer',
  userSelect: 'none',
  transform: 'rotate(180deg)',
};

export const selectedMenuStyle: StyleProps = {
  backgroundColor: 'gray.100',
  borderRadius: '6px',
};
