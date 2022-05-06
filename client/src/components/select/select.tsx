import React from 'react';
import { Wrapper } from './style';
import { ISelect } from './types';

export const Select: React.FC<ISelect> = ({
  options,
  width,
  isTextCenter,
  onChange,
}) => {
  return (
    <Wrapper onChange={onChange} isTextCenter={isTextCenter} width={width}>
      {options.map(option => (
        <option key={option.name} value={option.name}>
          {option.value}
        </option>
      ))}
    </Wrapper>
  );
};
