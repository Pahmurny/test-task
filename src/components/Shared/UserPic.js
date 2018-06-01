/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const UserPic = styled.div`
    background-image: url(${props => props.image});
    display: inline-block;
    width: ${props => props.width || '30px'};
    min-width: ${props => props.width || '30px'};
    height: ${props => props.width || '30px'};
    background-repeat: no-repeat;
    background-size: ${props => props.width || '30px'} ${props => props.width || '30px'};
    border-radius: ${props => props.width || '30px'};
`

UserPic.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
}

UserPic.displayName = 'UserPic'

export default UserPic
