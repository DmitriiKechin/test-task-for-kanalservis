import React from 'react';
import { Wrapper } from './styles';
import { IButton } from './types';

export const Button: React.FC<IButton> = ({ children, isActive }) => {
  return <Wrapper isActive={isActive}>{children}</Wrapper>;
};
