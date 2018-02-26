import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'styles/fonts.scss'

const DefaultButton = styled.div`
  background-color: #5f5864;
  color: #fcfcfc;
  font-family: LatoBold, sans-serif;
  font-size: 14px;
  min-width: 10px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 20px;
  cursor: pointer;
`

DefaultButton.propTypes = {
    onClick: PropTypes.func,
}

export default DefaultButton
