import React from 'react';
import styled from 'styled-components';

import BlogItem from '@components/BlogItem';
// import BlogCategories from '@components/blogCategories';
// import BlogPopular from '@components/blogPopular';

import mixins from '@styles/mixins';
import media from '@styles/media';

const Grid = styled.div `
    max-width: 1100px;
    ${mixins.desktopAlignCenter}
    ${mixins.sidePadding}
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 1fr;
    padding-top: 64px;
    gap: 64px 96px;
    ${media.tablet`
      display: flex;
      flex-direction: column;
      padding-top: 64px;
    `};
`;

// First components nested inside Grid should be the Wrapper
// holding the Blog Items.
// Second component should be the popular posts curation.

const HomeGrid = (props) => {
  return (
    <React.Fragment>
      <Grid>
        {props.children}
      </Grid>
    </React.Fragment>
  )
}

export default HomeGrid;
