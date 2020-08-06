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
const GridMinorProjects = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;
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
            description="Some of the UI Design and Front-End projects that I'm proud of."
          />
          </div>

          <GridMinorProjects>
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
          </GridMinorProjects>

        </Main>

      </Layout>
    </React.Fragment>
  )
}

export default WorkPage
