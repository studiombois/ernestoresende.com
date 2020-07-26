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
  font-weight: 900;
  text-transform: uppercase;
  width: 90vw;
  z-index: 1;
  padding-bottom: 30px;
  .hero-module-firstLine {
    color: var(--color-highlights);
    font-size: 143px;
    line-height: .90;
    ${media.tablet `font-size: 18.5vw;`}
  }
  .hero-module-box {
    background: var(--color-highlights);
    color: var(--color-gradients);
    font-size: 130px;
    padding: 0 2rem;
    ${media.tablet `font-size: 16.5vw;`}
    ${media.phablet `padding: 0 1.5rem;`}
  }
  .hero-module-lastLine {
    color: var(--color-highlights);
    font-size: 41.5px;
    line-height: 1.60;
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
          <span className="hero-module-firstLine">Ernesto</span><br/>
          <span className="hero-module-box">Resende</span><br/>
          <span className="hero-module-lastLine">Builds things for the web</span>
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
