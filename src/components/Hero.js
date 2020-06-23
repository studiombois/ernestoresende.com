import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroMask from '@icons/HeroMask';

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

const Hero = ({ children }) => {
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

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hero;
