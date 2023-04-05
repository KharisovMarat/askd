import { Flex, StyleProps } from '@chakra-ui/react';

const getWrapper = (status: string): StyleProps => {
  const commonStyles: StyleProps = {
    display: 'flex',
    alignItems: 'center',
    px: 2,
    height: '24px',
    borderRadius: '6px',
  };

  switch (status) {
    case 'work':
      return {
        ...commonStyles,
        backgroundColor: 'cyan.100',
      };
    case 'start':
      return {
        ...commonStyles,
        backgroundColor: 'gray.200',
      };

    default:
      return {
        ...commonStyles,
        backgroundColor: 'gray.200',
      };
  }
};

const getStatusStyle = (status: string): StyleProps => {
  const commonStyles: StyleProps = {
    fontWeight: 500,
    fontSize: '14px',
    pl: 2,
  };

  switch (status) {
    case 'work':
      return {
        ...commonStyles,
        color: 'cyan.800',
      };
    case 'start':
      return {
        ...commonStyles,
        color: 'black',
      };

    default:
      return {
        ...commonStyles,
        color: 'black',
      };
  }
};

export default {
  getWrapper,
  getStatusStyle,
};
