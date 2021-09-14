import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '../theme';
import { NavMenuItemsWrapper } from '../globalStyles/navigationStyles';

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${theme.color.SKY_BLUE};
  height: 5rem;
  width: 100%;
  z-index: 3;
`;

function Navbar() {
  return (
    <NavWrapper>
      <NavMenuItemsWrapper>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: `${theme.color.TEXT_LIGHT}`,
            fontSize: `1.5rem`,
          }}
        >
          TripTax
        </Link>
        <Link
          to='/reports'
          style={{
            textDecoration: 'none',
            color: `${theme.color.TEXT_LIGHT}`,
            fontSize: `0.9rem`,
          }}
        >
          Reports
        </Link>
      </NavMenuItemsWrapper>
    </NavWrapper>
  );
}

export default Navbar;
