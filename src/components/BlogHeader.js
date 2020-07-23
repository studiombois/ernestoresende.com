import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from '@styles/media'
import mixins from '@styles/mixins';


const MainContainer = styled.div `
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const HeaderWrapper = styled.div `
  text-align: center;
  padding: 128px 0 64px 0;
  margin: 0 auto;
  ${mixins.sidePadding}
  ${media.tablet`
    text-align: left;
    padding-top: 64px;
    padding-bottom: 64px;
  `}
`;

const BlogHeader = ({ children }) => {
  return (
    <MainContainer>
        <HeaderWrapper>
          {children}
        </HeaderWrapper>
    </MainContainer>
  )
}

BlogHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlogHeader;
