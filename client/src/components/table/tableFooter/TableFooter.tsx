import React from 'react';
import { Button } from '../../button/Button';
import { Wrapper } from './styles';

export const TableFooter: React.FC = () => {
  return (
    <Wrapper>
      <Button>Prev</Button>
      <Button isActive>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>Next</Button>
    </Wrapper>
  );
};
