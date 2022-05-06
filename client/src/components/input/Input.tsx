import React from 'react';
import { Wrapper } from './styles';
import { IInput } from './types';

export const Input: React.FC<IInput> = ({ onChange, value }) => {
  return <Wrapper value={value} onChange={onChange} />;
};
