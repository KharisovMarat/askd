import { Box, Flex, Grid } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { Button, Text } from 'shared';

import { wrapperStyle, menuItemStyle, menuWrapperStyle, selectedMenuStyle } from './style';

interface IProps {
  items?: {
    icon: JSX.Element;
    label: string;
  }[];
}

const menuList = ['Мои задачи', 'Извещения', 'План-график', 'Избранное'];

export const Sidebar: FC<IProps> = (props) => {
  const [selectedMenu, setSelectedMenu] = useState<string>(menuList[0]);

  const isSelected = (value: string) => value === selectedMenu;

  const getSelectedStyle = (value: string) => {
    if (isSelected(value)) {
      return selectedMenuStyle;
    }
    return {};
  };

  return (
    <Box {...wrapperStyle}>
      <Flex {...menuWrapperStyle}>
        {menuList.map((item) => (
          <Box
            key={item}
            {...getSelectedStyle(item)}
            style={{ ...menuItemStyle }}
            onClick={() => setSelectedMenu(item)}
          >
            <Text fontSize={16} fontWeight={600} color='black'>
              {item}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
