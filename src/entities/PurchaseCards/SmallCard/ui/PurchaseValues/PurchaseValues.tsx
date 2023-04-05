import { Flex, Icon } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ReactComponent as GavelIcon } from 'assets/icons/gavel.svg';
import { Text } from 'shared';
import s from './style';

export const PurchaseValues: FC = () => (
  <Flex {...s.wrapper}>
    <Flex alignItems='center'>
      <Flex {...s.purchaseType}>
        <Icon as={GavelIcon} fill='black' />
        <Text {...s.typeText}>44-ФЗ</Text>
      </Flex>

      <Flex alignItems='center' ml={4}>
        <Text {...s.description}>Скорринг</Text>
        <Text {...s.scoringValue}>85</Text>
      </Flex>

      <Flex alignItems='center' ml={4}>
        <Text {...s.description}>Замечаний</Text>
        <Text {...s.remarkValue}>5/0</Text>
      </Flex>
    </Flex>

    <Flex>
      <Text {...s.costValue}>30 790 877.11</Text>
      <Text {...s.currency}>руб.</Text>
    </Flex>
  </Flex>
);
