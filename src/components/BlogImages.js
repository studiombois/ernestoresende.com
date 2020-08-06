import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImageWrapper = styled.figure `

`

const FigureCaption = styled.figcaption `
  font-size: 16px;
  text-align: center;
  color: var(--color-secondaryText);
  width: 100%;
  padding-bottom: 48px;
`

const ImageDivider = styled.div `
  margin: 32px auto 16px;
  padding: 10px;
  border: 1px solid var(--color-scrollbar);
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 5px;
    margin: auto;
  }
`

const BlogImages = ({ children, figcaption }) => {
  return (
    <React.Fragment>
      <ImageWrapper>
        <ImageDivider>{children}</ImageDivider>
      </ImageWrapper>
      <FigureCaption>{figcaption}</FigureCaption>
    </React.Fragment>
  )
}

BlogImages.propTypes = {
  children: PropTypes.string.isRequired,
  figcaption: PropTypes.string,
}

export default BlogImages
