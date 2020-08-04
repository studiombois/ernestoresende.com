import React from 'react';
import styled from 'styled-components';

import theme from '@styles/theme';
const { fontSizes } = theme;

const Main = styled.main `
  display: blockj ;
  justify-content: space-between;
`; 

const HeroTextContainer = styled.div `
`;
const Title = styled.h2 `
  font-size: ${fontSizes.xxlg};
  font-weight: 500;
  line-height: 38px;
  div {
    display: inline-block;
    h2 {
      color: var(--color-highlights);
    }
  }
`;
const Subtitle = styled.h3 `
  font-size: ${fontSizes.xmd};
  line-height: 25px;
  padding-top: 15px;
`;



export default function HeroBody () {
  return(
    <Main>
      <HeroTextContainer>
        <Title>Hi, my name is&nbsp;<div><h2>Ernesto Resende</h2></div>.</Title>
        <Subtitle>I’m a UI designer and front-end developer with a passion for building great web experiences.</Subtitle>
      </HeroTextContainer>
    </Main>
  )
}
