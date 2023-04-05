import { Box, Flex, Grid, Icon } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Avatar, Text } from 'shared';

import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg';
import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';
import { ReactComponent as NatureIcon } from 'assets/icons/nature.svg';
import { PurchaseStatus } from './ui/PurchaseStatus/PurchaseStatus';
import s from './style';
import { PurchaseValues } from './ui/PurchaseValues/PurchaseValues';

interface IProps {
  data: {};
}

export const SmallPurchaseCard: FC<IProps> = ({ data }) => {
  const tr = 0;

  return (
    <Box {...s.wrapper}>
      <Flex alignItems='center' justifyContent='space-between'>
        <Flex alignItems='center'>
          <Avatar name='Б И' width={'32px'} height={'32px'} />
          <Text {...s.purchaseNumber}>0373200558122000046</Text>
        </Flex>

        <Flex alignItems='center'>
          <Text {...s.dateFrom}>10.02.2023</Text>
          <ArrowRightIcon />
          <Text {...s.dateTo}>07.04.2023</Text>

          <Flex {...s.dayWrapper}>
            <ClockIcon />
            <Text {...s.dayText}>24 дн</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex align='center'>
        <Icon as={NatureIcon} />
        <PurchaseStatus status='work' ml={2} />
        <PurchaseStatus status='work2' ml={2} />
      </Flex>

      <Grid>
        <Text {...s.descriptionText}>Комитет общественных связей и молодежной политики города Москвы</Text>
        <Text {...s.descriptionText}>Выполнение работ по установке индивидуальных малых архитектурных форм</Text>
      </Grid>

      <Flex>
        <PurchaseValues />
      </Flex>
    </Box>
  );
};
