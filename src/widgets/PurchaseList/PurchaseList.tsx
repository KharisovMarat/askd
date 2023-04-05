import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import { SmallPurchaseCard } from '../../entities/PurchaseCards';

import s from './style';

export const PurchaseList: FC = () => {
  const tr = 0;
  return (
    <Box {...s.wrapper} sx={s.scrollStyle}>
      Filters and search
      <Box>
        <SmallPurchaseCard data={[]} />
        <SmallPurchaseCard data={[]} />
        <SmallPurchaseCard data={[]} />
        <SmallPurchaseCard data={[]} />
      </Box>
    </Box>
  );
};
