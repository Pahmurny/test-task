import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BirdIcon from 'components/Icons/BirdIcon'

const PublicLogo = (props) => <div {...props}>
  <BirdIcon/>
</div>

const SPublicLogo = styled(PublicLogo)`
    background: #f8e71c;
    display: inline-flex;
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
`

SPublicLogo.displayName = 'StyledPublicLogo'
SPublicLogo.propTypes = {
  className: PropTypes.string,
}


export default SPublicLogo
