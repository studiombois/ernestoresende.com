import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import theme from '@styles/theme';
import mixins from '@styles/mixins';
import media from '@styles/media';
const { colors, zIndex, fontSizes } = theme;


const Main = styled.div `
  margin: 0 auto;
`;

const NameContainer = styled(props => <GatsbyLink {...props} />)`
  color: ${colors.highlightPink};
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
  background-color: ${colors.mainBackground};
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
  margin: 0 0 0 50px;
  color: ${colors.mainType};
  display: inline-block;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.1s;
  
  :hover {
    color: ${colors.highlightPink};
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
          </NavList>
        </Nav>
      </Main>
    )
  };
};

export default Navigation;
