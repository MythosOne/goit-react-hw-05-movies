import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  color: #ffffff;
`;

export const Link = styled(NavLink)`
  color: #000000;
  font-size: 18px;
  line-height: 1.3;
  text-decoration: none;
  &:hover,
  &focus {
    color: #3f51b5;
    font-weight: 600;
  }
`;
