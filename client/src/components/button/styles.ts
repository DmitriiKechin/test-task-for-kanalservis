import styled, { css } from 'styled-components';

export const Wrapper = styled.button<{ isActive?: boolean }>`
  height: 2rem;
  padding: 0 0.7rem;

  border-radius: 7px;

  background: linear-gradient(
    ${props => props.theme.colors.TopGradient},
    ${props => props.theme.colors.BottomGradient}
  );

  line-height: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.accent};

  cursor: pointer;

  &:hover {
    outline: 1px solid ${props => props.theme.colors.BottomGradient};
  }

  &:disabled {
    background: ${props => props.theme.colors.Primary};
    outline: 1px solid ${props => props.theme.colors.Secondary};
  }

  ${props =>
    props.isActive &&
    css`
      background: ${props => props.theme.colors.TopGradient};
      box-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.37);
    `}
`;
