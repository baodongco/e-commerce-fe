import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledError = styled.span`
  color: red;
`

const Error = ({ errorMessage }) => (<StyledError>{errorMessage}</StyledError>)

Error.propTypes = {
  errorMessage: PropTypes.string
}

export default Error
