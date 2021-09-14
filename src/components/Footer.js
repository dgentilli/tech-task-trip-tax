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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <NavMenuItemsWrapper>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: `${theme.color.BG_LIGHT}`,
            fontSize: `0.9rem`,
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
          }}
        >
          Reports
        </Link>
      </NavMenuItemsWrapper>
    </FooterWrapper>
  );
};

export default Footer;
