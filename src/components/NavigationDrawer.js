import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import DarkToggle from '@components/DarkToggle';

import media from '@styles/media';

const DrawerWrapper = styled.div `
  align-items: center;
  background-color: var(--color-cards);
  border-color: var(--color-cards);
  border-top-style: solid;
  border-top-width: 1px;
  bottom: 0rem;
  display: none;
  justify-content: space-around;
  left: 0rem;
  position: sticky;
  right: 0rem;
  z-index: 5;
  ${media.tablet`display:flex;`}
`
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  align-items: center;
  padding: 10px 0 10px 0;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    font-size: 0.875rem;
    line-height: 1;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    text-align: center;
    text-decoration: none;
    .iconify {
      color: var(--color-text);
      width: 3rem;
      height: 3rem;
      padding-bottom: 5px;
    }
`
const StyledLinkCaption = styled.div `
  font-size: 14px;
  color: var(--color-secondaryText);
`

const NavigationDrawer = () => {
  return (
    <DrawerWrapper>
      <StyledLink to="/portfolio">
        <span class="iconify" data-icon="mdi:palette-swatch-outline" data-inline="false"></span>
        <StyledLinkCaption>Portfolio</StyledLinkCaption>
      </StyledLink>

      <StyledLink to="/about">
        <span class="iconify" data-icon="mdi:emoticon-happy-outline" data-inline="false"></span>
        <StyledLinkCaption>About</StyledLinkCaption>
      </StyledLink>

      <StyledLink to="/blog">
        <span class="iconify" data-icon="mdi:pencil-outline" data-inline="false"></span>
        <StyledLinkCaption>Blog</StyledLinkCaption>
      </StyledLink>

      <StyledLink to="/contact">
        <span class="iconify" data-icon="mdi:contacts-outline" data-inline="false"></span>
        <StyledLinkCaption>Contact</StyledLinkCaption>
      </StyledLink>

      <DarkToggle/>

    </DrawerWrapper>
  )
};

export default NavigationDrawer;
