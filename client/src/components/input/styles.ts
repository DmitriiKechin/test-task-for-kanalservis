import styled from 'styled-components';

export const Wrapper = styled.input`
  height: 2rem;
  width: 30%;
  padding: 0 0.5rem;

  border: 1px solid ${props => props.theme.colors.Secondary};
  border-radius: 10px;

  background-color: ${props => props.theme.colors.accent};

  font: inherit;
  line-height: 2rem;
  color: ${props => props.theme.colors.BottomGradient};

  &:focus {
    outline: 1px solid ${props => props.theme.colors.BottomGradient};
  }
`;
