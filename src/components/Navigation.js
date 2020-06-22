import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import DarkToggle from '@components/DarkToggle';
import { ThemeContext } from '@components/ThemeContext';

import theme from '@styles/theme';
import mixins from '@styles/mixins';
import media from '@styles/media';
const { zIndex, fontSizes } = theme;


const Main = styled.div `
  margin: 0 auto;
  background-color: var(--color-navBackground);
`;

const NameContainer = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-highlights);
  text-decoration: none;

  ${media.tablet`display:none;`};
  bold {
    font-weight: 900;
  }
`;
const Nav = styled.nav`
  ${mixins.desktopAlignCenter}
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 85px;
  z-index: ${zIndex.header};
  ${mixins.sidePadding}
`;
const NavList = styled.ul`
  display: flex;
  list-style: none;
`;
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  font-size: ${fontSizes.xs};
  font-weight: 400;
  margin: 0 0 0 30px;
  color: var(--color-text);
  display: inline-block;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.1s;
  text-decoration: none;
  
  :hover {
    color: var(--color-highlights);
  }
  ${media.desktop`margin: 0 25px 0 0;`};
  ${media.tablet`
    font-size: ${fontSizes.xxs};
    margin: 0 25px 0 0;
  `};
`;
const Bold = styled.span`
  font-weight: 800;
`;

class Navigation extends React.Component {
  render () {
    return (
      <Main>
        <Nav>
          <NameContainer to="/">ERNESTO<Bold>RESENDE</Bold></NameContainer>
          <NavList>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <DarkToggle />
          </NavList>
        </Nav>
      </Main>
    )
  };
};

export default Navigation;
