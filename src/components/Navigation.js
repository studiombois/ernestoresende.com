import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import DarkToggle from '@components/DarkToggle';

import theme from '@styles/theme';
import mixins from '@styles/mixins';
import media from '@styles/media';
const { fontSizes } = theme;


const Main = styled.div `
  margin: 0 auto;
  top: 0;
  position: sticky;
  background-color: var(--color-navBackground);
  z-index: 15;
  ${media.tablet`display:none;`}
`;

const NameContainer = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-highlights);
  text-decoration: none;
  padding-right: 64px;
  font-size: 20px;
  letter-spacing: -.1rem;
`;
const Nav = styled.nav`
  ${mixins.desktopAlignCenter}
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 65px;
  ${mixins.sidePadding}
  ${media.tablet`min-height: 50px;`}
`;
const LeftBlock = styled.div `
  display: flex;
  flex-direction: row;
`
const NavList = styled.ul`
  display: flex;
  list-style: none;
`;
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 0 25px;
  color: var(--color-text);
  display: inline-block;
  top: 2px;
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
  font-weight: 700;
`;

class Navigation extends React.Component {
  render () {
    return (
      <Main>
          <Nav>
          <LeftBlock>
            <NameContainer to="/">ERNESTO<Bold>RESENDE</Bold></NameContainer>
            <NavList>
              <StyledLink to="/portfolio">portfolio</StyledLink>
              <StyledLink to="/about">about</StyledLink>
              <StyledLink to="/blog">blog</StyledLink>
              <StyledLink to="/contact">connect</StyledLink>
            </NavList>
          </LeftBlock>
          <DarkToggle />
          </Nav>
      </Main>
    )
  };
};

export default Navigation;
