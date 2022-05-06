import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.Primary};
  }
`;

export const Column = styled.div<{ width: string }>`
  height: 2rem;
  width: ${props => props.width};
  border-right: 1px solid ${props => props.theme.colors.Primary};

  color: ${props => props.theme.colors.BottomGradient};

  text-align: center;
  line-height: 2rem;
  vertical-align: middle;

  overflow: hidden;

  &:last-child {
    border: none;
  }
`;
