import React from 'react';
import styled from 'styled-components';

import HeroMask from '@icons/HeroMask';

import media from '@styles/media'

const MainContainer = styled.main `
  display: flex;
  flex-direction: column;
  z-index: 9;
`;
const BlockModule = styled.div `
  background: var(--color-gradients);
  padding: 5rem 5vw;
  position: relative;
`;
const HeroModuleCanvas = styled.canvas`
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  background: 0% 0% / contain transparent;
  z-index: -1;
`
const HeroModuleText = styled.h1 `
  margin: 0 auto;
  max-width: 680px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 90vw;
  z-index: 1;
  padding: 0 0 30px;
  .hero-module-firstLine {
    color: var(--color-highlights);
    font-size: 71px;
    letter-spacing: -1.5px;
    line-height: .90;
    font-weight: 900;
    text-transform: uppercase;
    ${media.tablet `font-size: 18.5vw;`}
  }
  .hero-module-lastLine {
    color: var(--color-text);
    font-size: 32px;
    font-weight: 600;
    line-height: 1.5;
    ${media.tablet `font-size: 5.5vw;`}
  }
`

const HeroMaskWrapper = styled.div `
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  bottom: 43px;
`;

const Hero = () => {
  return (
    <MainContainer>
     {/* Main Wrapper for the text and canvas */}
      <BlockModule>
        <HeroModuleCanvas/>
        <HeroModuleText>
          <span className="hero-module-firstLine">Ernesto Resende</span><br/>
          <span className="hero-module-lastLine">builds stuff for the web</span>
        </HeroModuleText>
      </BlockModule>

        {/* Wave mask from the hero component */}
        <HeroMaskWrapper>
          <HeroMask />
        </HeroMaskWrapper>
    </MainContainer>
  )
}

export default Hero;
