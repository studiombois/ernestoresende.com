import React from 'react';
import styled from 'styled-components';

import HeroMask from '@icons/HeroMask';
import HeroBody from '@components/HeroBody';

import theme from '@styles/theme';
import media from '@styles/media'
import mixins from '@styles/mixins';
const { colors } = theme;


const MainContainer = styled.div `
  height: 400px;
  background-image: ${colors.heroGradient};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.tablet`
    height: 450px;
  `};
`;
const HeroWrapper = styled.div `
  ${mixins.sidePadding}
`;

export default function Hero() {
  return (
    <MainContainer>
    <HeroWrapper>
      <HeroBody />
    </HeroWrapper>
    <HeroMask />
    </MainContainer>
  )
}
