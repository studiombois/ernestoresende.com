import React from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/Seo'
import SmallHero from '@components/SmallHero'
import SectionCard from '@components/SectionCard'
import WorkCard from '@components/WorkCard'

import mixins from '@styles/mixins'
import media from '@styles/media'

const Main = styled.div `
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
`
const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 24px;
  padding-bottom: 128px;
`
const FlexGrid = styled.div `
  display: flex;
  padding-bottom: 128px;
  @media (max-width: 820px) {
      flex-direction: column;
    }
  img {
    border-radius: 5px;
    width: 100%;
  }
  .left-image {
    margin-right: 16px;
    @media (max-width: 820px) {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
  .right-image {
    margin-left: 16px;
    @media (max-width: 820px) {
      margin-left: 0;
      margin-bottom: 16px;
    }
  }
`
const SectionTitle = styled.h2 `
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
`


const WorkPage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Work - Ernesto Resende" />
      <Layout>
        
        <SmallHero />

        <Main>
          <div>
          <SectionCard 
            title="Work"
            description="Some of the UI Design and Front-End projects that I'm proud of."
          />
          </div>

          <SectionTitle>Featured Works</SectionTitle>

          <FlexGrid>
            <img className="left-image" src="https://res.cloudinary.com/ernestoresende/image/upload/v1596954990/work/SOWI_pxt7mk.webp"></img>
            <img className="right-image" src="https://res.cloudinary.com/ernestoresende/image/upload/v1596954990/work/Be_The_Hero_sczbhi.webp" alt=""/>
          </FlexGrid>

          <SectionTitle>Other minor projects</SectionTitle>

          <Grid>
            <WorkCard 
              tech="HTML • CSS • JavaScript"
              title="Kal-Calc"
              description="A calories calculator built with vanilla JavaScript, presents the user with Basal Metabolic Rate and required calories for weight loss, gain and maintenance."
              projectLink="See on Github"
              href="https://github.com"
            />
            <WorkCard 
              tech="React • Styled-Components"
              title="Indecision App"
              description="When you feel crunched about the amount of tasks you have ahead, put the hard decisions in the hands of your computer."
              projectLink="See on Github"
              href="https://github.com"
            />
          </Grid>

        </Main>

      </Layout>
    </React.Fragment>
  )
}


export default WorkPage
