import { StyleProps, SystemStyleObject } from '@chakra-ui/react';
import { border } from 'app/theme/constants';

const wrapper: StyleProps = {
  borderRight: border,
  padding: 6,
  minWidth: 'fit-content',
  height: 'calc( 100vh - 80px )',
  overflow: 'scroll',
};

const scrollStyle: SystemStyleObject = {
  '::-webkit-scrollbar': {
    display: 'none',
  },
};

export default {
  wrapper,
  scrollStyle,
};
