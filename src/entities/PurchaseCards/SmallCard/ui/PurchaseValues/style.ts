import { StyleProps } from '@chakra-ui/react';

const wrapper: StyleProps = {
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
};

const purchaseType: StyleProps = {
  alignItems: 'center',
  backgroundColor: 'gray.200',
  px: 2,
  height: '24px',
  borderRadius: '6px',
};

const typeText: StyleProps = {
  color: 'gray.800',
  fontSize: '14px',
  ml: 2,
  fontWeight: 500,
};

const description: StyleProps = {
  color: 'gray.500',
  fontWeight: 400,
  fontSize: '14px',
};

const scoringValue: StyleProps = {
  color: 'black',
  ml: 2,
  fontWeight: 700,
  fontSize: '16px',
};

const remarkValue: StyleProps = {
  padding: '2px 7px',
  backgroundColor: 'gray.100',
  ml: 2,
  borderRadius: '100px',
  color: 'blue.500',
  fontWeight: 700,
  fontSize: '16px',
};

const costValue: StyleProps = {
  color: 'black',
  fontWeight: 700,
  fontSize: '16px',
};

const currency: StyleProps = {
  ...costValue,
  ml: 2,
  fontWeight: 400,
};

export default { wrapper, purchaseType, typeText, description, scoringValue, remarkValue, costValue, currency };
