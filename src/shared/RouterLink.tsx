import React, { FC } from 'react';
import {
  Link as RouterLinkComponent,
  LinkProps as RouterLinkComponentProps,
} from 'react-router-dom';
import { Button, ButtonProps } from '@chakra-ui/react';

export const RouterLink: FC<ButtonProps & RouterLinkComponentProps> = ({
  children,
  ...props
}) => {
  const pointerEvents = React.useMemo(
    () => (props.isDisabled ? 'none' : 'all'),
    [props.isDisabled]
  );

  return (
    <Button
      variant="link"
      as={RouterLinkComponent}
      display="inline-block"
      whiteSpace="break-spaces"
      fontWeight="normal"
      {...props}
      pointerEvents={pointerEvents}
    >
      {children}
    </Button>
  );
};
