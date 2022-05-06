import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${props => props.theme.colors.TopGradient};

  padding: 0.3rem;

  background-color: ${props => props.theme.colors.Primary};

  & button {
    margin: 0 0.5rem;
  }
`;
