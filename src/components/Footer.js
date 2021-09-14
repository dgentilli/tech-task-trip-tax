import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '../theme';
import { NavMenuItemsWrapper } from '../globalStyles/navigationStyles';

const FooterWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${theme.color.BG_DARK};
  color: ${theme.color.TEXT_LIGHT}
  margin-top: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <NavMenuItemsWrapper footer>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: `${theme.color.BG_LIGHT}`,
            fontSize: `0.9rem`,
            margin: '1rem',
          }}
        >
          Dashboard
        </Link>
        <Link
          to='/reports'
          style={{
            textDecoration: 'none',
            color: `${theme.color.BG_LIGHT}`,
            fontSize: `0.9rem`,
            margin: '1rem',
          }}
        >
          Reports
        </Link>
      </NavMenuItemsWrapper>
    </FooterWrapper>
  );
};

export default Footer;
