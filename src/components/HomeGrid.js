import React from 'react'
import styled from 'styled-components'

import SectionCard from '@components/SectionCard'

import { Link as GatsbyLink } from 'gatsby'

import mixins from '@styles/mixins'

const Main = styled.div`
  max-width: 780px;
  margin: 0 auto;
  ${mixins.sidePadding}
`
const Recent = styled.h2`
  font-size: 18px;
  font-weight: 600;
  padding: 30px 0 50px;
  color: var(--color-sectionTitleHighlights);
`
const Archive = styled(props => <GatsbyLink {...props} />)`
  ${mixins.styledLink}
`
const ContactSection = styled.div`
  padding-top: 100px;
`
const SocialWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`
const StyledIcon = styled.a`
  align-items: center;
  padding: 10px 0 10px 0;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  font-size: 0.875rem;
  line-height: 1;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  text-align: center;
  text-decoration: none;
  .iconify {
    color: var(--color-text);
    width: 5rem;
    height: 5rem;
    padding-right: 20px;
  }
`

const HomeGrid = ({ children }) => {
  return (
    <Main>
      <SectionCard
        title='Writing.'
        description='I love to write in detail about the stuff I work on.'
        descriptionSecondLine="This is where I'll write about front-end development, design, and general tech related stuff."
      />
      <div>
        <Recent>RECENTLY PUBLISHED</Recent>

        {children}

        <Archive to='/blog'>See all blog posts</Archive>
      </div>

      <ContactSection id='connect'>
        <SectionCard
          title='Hey there!'
          description="As of now, I'm actually looking for a job opportunity in front-end development and/or UI design roles. If you like what you see here, consider sending me a mail or reaching out in any of my socials:"
          contactEmail='ernestoresende@hotmail.com'
        >
          <SocialWrapper>
            <StyledIcon
              href='https://www.linkedin.com/in/ernesto-resende/'
              target='_blank'
              rel='nofollow noopener noreferer'
            >
              <span
                class='iconify'
                data-icon='ant-design:linkedin-filled'
                data-inline='false'
              ></span>
            </StyledIcon>
            <StyledIcon
              href='https://github.com/thisisernesto'
              target='_blank'
              rel='nofollow noopener noreferer'
            >
              <span
                class='iconify'
                data-icon='ant-design:github-filled'
                data-inline='false'
              ></span>
            </StyledIcon>
            <StyledIcon
              href='https://twitter.com/ErnestoResende'
              target='_blank'
              rel='nofollow noopener noreferer'
            >
              <span
                class='iconify'
                data-icon='ant-design:twitter-outlined'
                data-inline='false'
              ></span>
            </StyledIcon>
          </SocialWrapper>
        </SectionCard>
      </ContactSection>
    </Main>
  )
}

export default HomeGrid
