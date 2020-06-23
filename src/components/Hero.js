import React from 'react';
import styled from 'styled-components';

import HeroMask from '@icons/HeroMask';
import HeroBody from '@components/HeroBody';

import media from '@styles/media'
import mixins from '@styles/mixins';


const MainContainer = styled.div `
  height: 300px;
  background: var(--color-gradients);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.thone`height: 350px;`};
`;
const HeroWrapper = styled.div `
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
`;
const HeroMaskWrapper = styled.div `
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  bottom: -20px;
`;

export default function Hero() {
  return (
    <MainContainer>
        <HeroWrapper>
          <HeroBody />
        </HeroWrapper>
        <HeroMaskWrapper>
          <HeroMask />
        </HeroMaskWrapper>
    </MainContainer>
  )
}
