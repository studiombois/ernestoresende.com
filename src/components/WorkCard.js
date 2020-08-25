import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Main = styled.a `
  padding: 32px;
  border-radius: 10px;
  background-color: var(--color-workCards);
  box-shadow: var(--color-cardsBoxShadow);
  transition: all 0.15s ease-in-out;
  :hover {
    box-shadow: var(--color-cardsBoxShadowHover);
  }
`
const CardContainer = styled.div `
  position: relative;
  display: block;
  color: var(--color-text);
  text-decoration: none;
  h4 {
    font-weight: 700;
    font-size: 22px;
    padding-bottom: 18px;
  }
  h6 {
    font-size: 16px;
    padding-bottom: 8px;
    color: var(--color-secondaryText);
  }
  p {
    font-size: 17px;
    padding-bottom: 18px;
    line-height: 1.5;
  }
  .read-more {
    font-size: 16px;
    font-weight: 700;
  }
` 

const WorkCard = ({ title, description, tech, href, projectLink }) => {
  return (
    <Main href={href} target='_blank'
    rel='nofollow noopener noreferer'>
      <CardContainer>
        <h6>{tech}</h6>
        <h4>{title}</h4>
        <p>{description}</p>
        <span className="read-more">{projectLink}</span>
      </CardContainer>
    </Main>
  )
}

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default WorkCard
