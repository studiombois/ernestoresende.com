import React from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/Seo'
import SmallHero from '@components/SmallHero'

import projectSowi from '../content/images/Project_Sowi.jpg'
import SowiIcon from '@icons/SowiIcon'

import mixins from '@styles/mixins'
import media from '@styles/media'

const HeroWrapper = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 128px 0;
  margin: 0 auto;
  max-width: 800px;
  ${mixins.sidePadding}

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 0.9;
    padding-bottom: 36px; 
    ${media.tablet`font-size: 36px;`};
  }
  h2 {
    font-size: 18px;
    max-width: 400px;
    line-height: 1.4;
    padding-bottom: 36px;
  }
`
const ProjectSection = styled.div `
  img {
    ${mixins.sidePadding}
    position: relative;
    bottom: 100px;
    max-width: 800px;
    margin: 0 auto;
    z-index: 5;
    filter: drop-shadow(var(--color-cardsBoxShadow));
  }
  .project-overview {
    ${mixins.sidePadding}
    ${mixins.desktopAlignCenter}
    text-align: center;
    max-width: 800px;
    padding-bottom: 128px;
    h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 1;
      padding-bottom: 8px;
      ${media.tablet`font-size: 36px;`};
    }
    h4 {
      font-size: 16px;
      color: var(--color-secondaryText);
      padding-bottom: 36px;
    }
    p {
      line-height: 1.4;
    }
  }
  .goals {
    ${mixins.sidePadding}
    background-color: var(--color-workCards);
    text-align: center;
    padding-top: 80px;
    padding-bottom: 80px;
    h1 {
      font-size: 36px;
      font-weight: 600;
      padding-bottom: 60px;
    }
    .flex-container {
      display: flex;
      justify-content: center;
      ${media.tablet`
        flex-direction: column;
        align-items: center;
      `};
      
      .flex-item {
        padding: 0 50px;
        max-width: 400px;
        ${media.tablet`
          padding: 30px 0;
      `};
      }
      .flex-item h2 {
        font-size: 22px;
        font-weight: 700;
        display: inline;
        background-image: linear-gradient(
          transparent 0,
          transparent 55%,
          var(--color-cardUnderline) 55%,
          var(--color-cardUnderline) 90%,
          transparent 90%,
          transparent 100%
        );
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0%;
      }
      .flex-item p {
        font-size: 16px;
        padding-top: 28px;
        line-height: 1.4;
      }
    }
  }
`

const ProjectSowi = () => {
  return (
    <React.Fragment>
      <SEO title="Project SOWI - Ernesto Resende" />
      <Layout>
        <SmallHero>
          <HeroWrapper>
            <h1>Empowering the discussions around media culture</h1>
            <h2>The project aimed at creating a scalable and consistent user interface, along with it's development and long-run maintenance.</h2>
            <SowiIcon />
          </HeroWrapper>
        </SmallHero>
        
        <ProjectSection>
          <img src={projectSowi} 
            alt="Project SOWI landing page."
            height="452"
            width="800"
          />

          <section className="project-overview">
            <h1>Project Overview</h1>
            <h4>Made by people who love culture and art.</h4>
            <p>Project SOWI is one bold attempt at creating a content production collective able to discuss the culture of entertainment that surrounds us. The project’s main medium is hosted on YouTube, where we focus on producing high-quality research driven video-essays. But eventually, as the project grew in scope, we saw the need to have different content mediums like articles and podcasts. My main objective was to design, develop and deploy a website that would be the home for everything related to the project.</p>
          </section>

          <section className="goals">
            <h1>Goals</h1>
            <div className="flex-container">
              <div className="flex-item">
                <h2>Design Consistency</h2>
                <p>The website needed to have consistent modules and design choices across all sections. It was my job to make sure every page across the site would follow the same brand guidelines.</p>
              </div>
              <div className="flex-item">
                <h2>Scalable Structure</h2>
                <p>As SOWI is a project in constant evolution, I needed to make sure it was going to be scalable in the long-run, allowing easy content management for all my team members.</p>
              </div>
            </div>
          </section>
        </ProjectSection>
      </Layout>
    </React.Fragment>
  )
}

export default ProjectSowi
