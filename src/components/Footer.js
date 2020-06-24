import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import FooterMask from '@icons/FooterMask';

import theme from '@styles/theme';
import mixins from '@styles/mixins';
import media from '@styles/media';
const { zIndex, fontSizes } = theme;


const MainContainer = styled.div `
  height: 300px;
  background: var(--color-footer);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.thone`height: 350px;`};
`;
const FooterWrapper = styled.div `
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;
const HeroMaskWrapper = styled.div `
  display: block;
  width: 100%;
  overflow: hidden;
  z-index: 3;
`;

const FooterLeft = styled.div `
  display: flex;
  flex-direction: column;
`;
const FooterRight = styled.div `
  display: flex;
  flex-direction: column;
`;

const NameContainer = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-highlights);
  text-decoration: none;
  padding-bottom: 20px;
  ${media.tablet`display:none;`};
`;
const Bold = styled.span`
  font-weight: 800;
`;
const Copyright = styled.p `
  font-size: 18px;
  color: var(--color-secondaryText);
`
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  font-size: ${fontSizes.xs};
  font-weight: 400;
  color: var(--color-text);
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.1s;
  text-decoration: none;
  padding-bottom: 10px;
  :hover {
    color: var(--color-highlights);
  }
  ${media.desktop`margin: 0 25px 0 0;`};
  ${media.tablet`
    font-size: ${fontSizes.xxs};
    margin: 0 25px 0 0;
  `};
`;

const Footer = () => {
  return (
    <MainContainer>
        <HeroMaskWrapper>
          <FooterMask />
        </HeroMaskWrapper>
        <FooterWrapper>
          <FooterLeft>
            <NameContainer to="/">ERNESTO<Bold>RESENDE</Bold></NameContainer>
            <Copyright>© 2020 - Built by Ernesto Resende. All rights reserved.</Copyright>
          </FooterLeft>
          <FooterRight>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </FooterRight>
        </FooterWrapper>
    </MainContainer>
  )
}

export default Footer;
