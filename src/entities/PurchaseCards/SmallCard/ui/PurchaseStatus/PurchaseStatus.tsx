import { Flex, Icon, StyleProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Text } from 'shared';

import { ReactComponent as PlayIcon } from 'assets/icons/play.svg';
import { ReactComponent as CheckedIcon } from 'assets/icons/checked.svg';
import s from './style';

interface IProps {
  status: string;
}

export const PurchaseStatus: FC<IProps & StyleProps> = (props) => {
  const { status } = props;

  const renderStatusText = (value: string) => {
    switch (value) {
      case 'work':
        return (
          <>
            <Icon as={PlayIcon} fill='cyan.800' width='8px' />
            <Text {...s.getStatusStyle(status)}>В работе</Text>
          </>
        );

      default:
        return (
          <>
            <Icon as={CheckedIcon} fill='cyan.800' width='11px' />
            <Text {...s.getStatusStyle(status)}>Извещение опубликовано</Text>
          </>
        );
    }
  };

  return (
    <Flex {...s.getWrapper(status)} {...props}>
      {renderStatusText(status)}
    </Flex>
  );
};
