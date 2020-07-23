import React from 'react';
import styled from 'styled-components';

import HeroMask from '@icons/HeroMask';

const MainContainer = styled.div `
  height: 60px;
  background: var(--color-gradients);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const HeroMaskWrapper = styled.div `
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  bottom: -15px;
`;

const SmallHero = () => {
  return (
    <MainContainer>
        <HeroMaskWrapper>
          <HeroMask />
        </HeroMaskWrapper>
    </MainContainer>
  )
}

export default SmallHero;
