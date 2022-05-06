import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 3rem;
  width: 850px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 2px solid ${props => props.theme.colors.TopGradient};
  border-radius: 10px;
  background-color: ${props => props.theme.colors.Primary};
`;
