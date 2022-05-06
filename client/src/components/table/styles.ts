import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 850px;

  overflow: hidden;

  border: 3px solid ${props => props.theme.colors.TopGradient};
  border-radius: 10px;
`;
