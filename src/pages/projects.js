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


const WorkPage = () => {
  return (
    <React.Fragment>
      <SEO title="Projects - Ernesto Resende" />
      <Layout>
        
        <SmallHero />

        <Main>
          <div>
          <SectionCard 
            title="Projects"
            description="Some of the previous and ongoing work that I'm proud of."
            pathname="/projects"
          />
          </div>

          {/* <SectionTitle>Featured Works</SectionTitle>

          <Grid>
            <GatsbyLink to="/sowi">
              <picture>
                <source srcSet="https://res.cloudinary.com/ernestoresende/image/upload/v1596954990/work/SOWI_pxt7mk.webp" type="image/webp" />
                <source srcSet="https://res.cloudinary.com/ernestoresende/image/upload/v1596954990/work/SOWI_pxt7mk.jpeg" type="image/jpeg" />
                <img src="https://res.cloudinary.com/ernestoresende/image/upload/v1596954990/work/SOWI_pxt7mk.jpeg" alt="Project SOWI"/>
              </picture>
            </GatsbyLink>
          </Grid>

          <SectionTitle>Other minor projects</SectionTitle> */}

          <Grid>
            <WorkCard 
              tech="Angular • Ionic"
              title="Oração Play"
              description="A praying and meditation mobile app available for Android and iOS users."
              projectLink="See the case study"
              href="/oracao-play"
            />
            <WorkCard 
              tech="React • Styled-Components • GraphQL"
              title="SOWI"
              description="A content production collective that aims to discuss the culture of entertainment in it's many formats in different mediums."
              projectLink="See the case study"
              href="/sowi"
            />
            <WorkCard 
              tech="HTML • CSS • JavaScript"
              title="Kal-Calc"
              description="A calories calculator built with vanilla JavaScript, presents the user with Basal Metabolic Rate and required calories for weight loss, gain and maintenance."
              projectLink="See on Github"
              href="https://github.com/thisisernesto/kal-calc"
            />
            <WorkCard 
              tech="React • Styled-Components"
              title="Indecision App"
              description="When you feel crunched about the amount of tasks you have ahead, put the hard decisions in the hands of your computer."
              projectLink="See on Github"
              href="https://github.com"
            />
            <WorkCard 
              tech="Ionic • Angular"
              title="Mobile Pókedex"
              description="A fun little Pokédex project built with Ionic and Angular, which I used to practice API consumption and smart search queries on Ionic"
              projectLink="See on Github"
              href="https://github.com/thisisernesto/ionic-pokedex"
            />
          </Grid>

        </Main>

      </Layout>
    </React.Fragment>
  )
}


export default WorkPage
