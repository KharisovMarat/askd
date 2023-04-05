import { StyleProps } from '@chakra-ui/react';

const wrapper: StyleProps = {
  display: 'grid',
  gap: 2,
  width: '570px',
  height: '192px',
  overflow: 'hidden',
  border: '1px solid',
  borderLeft: '4px solid',
  borderColor: 'gray.200',
  borderRadius: '8px',
  mt: 4,
  padding: 4,
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
};

const purchaseNumber: StyleProps = {
  color: 'black',
  fontSize: '16px',
  pl: 2,
  fontWeight: 700,
  maxWidth: '250px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const dateFrom: StyleProps = {
  fontSize: '14px',
  fontWeight: 400,
  color: 'gray.500',
  px: 2,
};

const dateTo: StyleProps = {
  fontSize: '14px',
  fontWeight: 400,
  color: 'red.700',
  px: 2,
};

const dayWrapper: StyleProps = {
  height: '24px',
  alignItems: 'center',
  backgroundColor: 'gray.200',
  borderRadius: '6px',
  px: 2,
};

const dayText: StyleProps = {
  fontWeight: 500,
  fontSize: '14px',
  pl: 2,
  color: 'gray.800',
};

const descriptionText: StyleProps = {
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'black',
  maxWidth: '524px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

const styles = {
  wrapper,
  purchaseNumber,
  dateFrom,
  dateTo,
  dayWrapper,
  dayText,
  descriptionText,
};

export default styles;
