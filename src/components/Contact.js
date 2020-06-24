import React from 'react';
import styled from 'styled-components';

import mixins from '@styles/mixins';

const MainContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
`;
const TextWrapper = styled.div`
  max-width: 580px;
`;
const Header = styled.h1`
  font-size: 36px;
  font-weight: 700;
  padding: 55px 0 35px 0;
`;
const Content = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 0 0 30px 0;
`;
const Email = styled.p`
  font-size: 22px;
  color: var(--color-secondaryText);
  font-weight: 700;
  padding: 0 0 10px 0;
`
const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  justify-content: flex-start;
  padding: 40px 0 0 0;
`;
const StyledLink = styled.a`
  font-size: 18px;
  ${mixins.styledLink}
`;

const Contact = () => {
  return (
    <MainContainer>
      <TextWrapper>
        <Header>Got a project?</Header>
        <Content>If you are interested in my work, I’m always open to discussing new project ideas and professional opportunities. Send me a mail, or get in touch with me in any of my social medias.</Content>
        <Email>ernestoresende@hotmail.com</Email>
        <LinksWrapper>
            <StyledLink target="_blank" rel="noopener" href="https://www.linkedin.com/in/ernesto-resende/">LinkedIn</StyledLink>
            <StyledLink target="_blank" rel="noopener" href="https://www.instagram.com/ernestoresende/?hl=pt-br">Instagram</StyledLink>
            <StyledLink target="_blank" rel="noopener" href="https://twitter.com/ErnestoResende">Twitter</StyledLink>
            <StyledLink target="_blank" rel="noopener" href="https://github.com/thisisernesto">Github</StyledLink>
          </LinksWrapper>
      </TextWrapper>
    </MainContainer>
  )
}

export default Contact;
