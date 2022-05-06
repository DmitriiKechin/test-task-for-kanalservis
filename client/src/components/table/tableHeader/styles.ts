import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  background: linear-gradient(
    ${props => props.theme.colors.TopGradient},
    ${props => props.theme.colors.BottomGradient}
  );
  background-color: ${props => props.theme.colors.TopGradient};
`;

export const Column = styled.div<{ width: string }>`
  height: 2rem;
  width: ${props => props.width};
  border-right: 1px solid ${props => props.theme.colors.Secondary};

  color: ${props => props.theme.colors.accent};

  text-align: center;
  line-height: 2rem;
  vertical-align: middle;

  overflow: hidden;

  &:last-child {
    border: none;
  }
`;
