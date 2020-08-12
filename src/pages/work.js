import React from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/Seo'
import SmallHero from '@components/SmallHero'
import SectionCard from '@components/SectionCard'
import WorkCard from '@components/WorkCard'

import mixins from '@styles/mixins'

const Main = styled.div `
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
`
const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 24px;
  padding-bottom: 128px;
  img {
    border-radius: 5px;
    width: 100%;
  }
`
const SectionTitle = styled.h2 `
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
`


const WorkPage = () => {
  return (
    <React.Fragment>
      <SEO title="Work - Ernesto Resende" />
      <Layout>
        
        <SmallHero />

        <Main>
          <div>
          <SectionCard 
            title="Work"
            description="Some of the previous and ongoing work that I'm proud of"
            pathname="/work"
          />
          </div>

          <SectionTitle>Featured Works</SectionTitle>

          <Grid>
            <img src="https://res.cloudinary.com/ernestoresende/image/upload/v1596954990/work/SOWI_pxt7mk.webp" 
            alt="Project SOWI"
            width="488" height="295"></img>
            <img src="https://res.cloudinary.com/ernestoresende/image/upload/v1596954990/work/Be_The_Hero_sczbhi.webp"
            width="488" height="295" 
            alt="Be The Hero"/>
          </Grid>

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
