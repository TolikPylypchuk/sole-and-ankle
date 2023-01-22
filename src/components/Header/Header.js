import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <CustomLogo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding-inline: 32px;
  padding-block: 24px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
`;

const CustomLogo = styled(Logo)`
  position: absolute;
  bottom: 20px;
  left: 32px;
`;

const Nav = styled.nav`
  margin-inline: auto;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  margin: 24px;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
