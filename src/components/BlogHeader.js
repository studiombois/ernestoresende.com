import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroMask from '@icons/HeroMask';

import media from '@styles/media'
import mixins from '@styles/mixins';


const MainContainer = styled.div `
  height: 350px;
  background: var(--color-gradients);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.tablet`height: 400px;`};
  ${media.thone`height: 450px;`};
  ${media.phablet`height: 500px;`};
  ${media.phone`height: 550px;`};
`;
const HeaderWrapper = styled.div `
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
`;
const HeaderMaskWrapper = styled.div `
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  bottom: -20px;
`;

const BlogHeader = ({ children }) => {
  return (
    <MainContainer>
        <HeaderWrapper>
          {children}
        </HeaderWrapper>
        <HeaderMaskWrapper>
          <HeroMask />
        </HeaderMaskWrapper>
    </MainContainer>
  )
}

BlogHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlogHeader;
