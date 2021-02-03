import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledContainer = styled.div`
  margin: 0 auto;
  @media only screen and (max-width: 687px) {
    width: 230px;
  }

  @media only screen and (min-width: 688px) and (max-width: 991px) {
    width: 672px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1311px) {
    width: 893px;
  }

  @media only screen and (min-width: 1312px) {
    width: 1114px;
  }
`

const ContentContainer = ({ component }) => (
  <StyledContainer>
    {component}
  </StyledContainer>
)

ContentContainer.propTypes = {
  component: PropTypes.element
}

export default ContentContainer
