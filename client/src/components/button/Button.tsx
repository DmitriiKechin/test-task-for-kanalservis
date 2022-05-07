import React from 'react';
import { Wrapper } from './styles';
import { IButton } from './types';

export const Button: React.FC<IButton> = ({
  children,
  isActive,
  onClick,
  disabled,
}) => {
  return (
    <Wrapper disabled={disabled} isActive={isActive} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
