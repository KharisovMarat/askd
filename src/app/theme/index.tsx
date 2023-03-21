import { theme, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import colors from './colors';

const layerStyles = {
  link: theme.components.Link,
};
const breakpoints = createBreakpoints({
  sm: '320px',
  md: '940px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1920px',
});

const zIndices = {
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1450,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};

export default extendTheme({
  ...theme,
  layerStyles,
  breakpoints,
  colors: {
    ...theme.colors,
    ...colors,
  },
  ...zIndices,
});
