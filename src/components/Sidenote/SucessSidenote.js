import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BaseWrapper = styled.aside `
  background: var(--color-sucessCardBackground);
  border-left-color: red;
  position: relative;
  padding: 24px 32px;
  font-size: 17px;
  margin-top: 48px;
  margin-bottom: 64px;
  border-left: 3px solid var(--color-sucessCardHighlight);
  border-radius: 6px 6px 6px 3px;
  .last-line {
    padding: 0px;
  }
`
const IconWrapper = styled.div `
  color: var(--color-sucessCardHighlight);
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(-50%, -50%);
  padding: 8px;
  border-radius: 50%;
  background-color: var(--color-background);
  .iconify {
    width: 3rem;
    height: 3rem;
  }
`
const Title = styled.strong `
  font-size: 20px;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
`

const SucessSidenote = ({title, children}) => {
  return (
    <BaseWrapper>
      <IconWrapper>
        <span class="iconify" data-icon="bi:check-all" data-inline="false"></span>
      </IconWrapper>
      <Title>{title}</Title>
      {children}
    </BaseWrapper>
  )
}

SucessSidenote.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SucessSidenote
