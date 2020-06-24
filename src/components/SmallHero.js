import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroMask from '@icons/HeroMask';

import mixins from '@styles/mixins';

const MainContainer = styled.div `
  height: 180px;
  background: var(--color-gradients);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const SmallHero = ({ children }) => {
  return (
    <MainContainer>
        <HeroWrapper>
          {children}
        </HeroWrapper>
        <HeroMaskWrapper>
          <HeroMask />
        </HeroMaskWrapper>
    </MainContainer>
  )
}

SmallHero.propTypes = {
  children: PropTypes.node.isRequired
};

export default SmallHero;
