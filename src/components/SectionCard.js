import React, { Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import media from '@styles/media'

const MainWrapper = styled.div `
    background-color: var(--color-background);
    color: var(--color-text);
    border: solid 3px var(--color-text);
    box-shadow: 1.2rem 1.2rem 0 var(--color-text);
    padding: 32px;
    margin: 0 auto 45px;
    ${media.phablet`
      margin: 0 5px 45px 5px;
      border: solid 2px var(--color-text);
      box-shadow: 0.8rem 0.8rem 0 var(--color-text);
    `}
`
const TextWrapper = styled.div `
  .card-header-wrapper {
    margin-bottom: 28px;
  }
  h1 {
    font-size: 36px;
    font-weight: 900;
    letter-spacing: .2rem;
    display: inline;
    background-image: linear-gradient(transparent 0,transparent 55%,var(--color-cardUnderline) 55%,var(--color-cardUnderline) 90%,transparent 90%,transparent 100%);
    background-repeat: no-repeat;
    background-size: 90% 100%;
    background-position: 0%;
  }
  p {
    padding-bottom: 20px;
    line-height: 26px;
  }
  .reset-padding {
    padding: 0px;
  }
  a {
    font-size: 26px;
    font-weight: 700;
    color: var(--color-secondaryText);
    padding-bottom: 20px;
    ${media.thone`font-size: 20px;`}
    ${media.phablet`font-size: 16px;`}
  }
  .social-media {
    padding-top: 20px;
  }
`

const SectionCard = ( {title, description, descriptionSecondLine, contactEmail, children} ) => {
  return (
    <React.Fragment>
      <MainWrapper>
        <TextWrapper>
          <div className="card-header-wrapper">
            <h1>{title}</h1>
          </div>
          <p>{description}</p>
          <p className="reset-padding">{descriptionSecondLine}</p>
          <a href="#">{contactEmail}</a>
          <div className="social-media">{children}</div>
        </TextWrapper>
      </MainWrapper>
    </React.Fragment>
  )
}

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionSecondLine: PropTypes.string,
  contactEmail: PropTypes.string,
}

export default SectionCard
