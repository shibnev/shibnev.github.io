import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Container } from '../Container';

export const StyledHeader = styled.header`
  position: sticky;
  height: 100px;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled(NavLink)`
  border-radius: 50%;
  background-color: #000;
  width: 3rem;
  height: 3rem;
  margin-right: auto;
  flex-shrink: 0;
  transition: ${(props) => props.theme.TRANSITION};

  &.active {
    background-color: ${(props) => props.theme.PRIMARY};
  }
`;
