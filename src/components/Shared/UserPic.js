/* eslint-disable no-unused-vars */
import React  from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const UserPic = styled.div`
    background-image: url(${props => props.image});
    display: inline-block;
    width: ${props => props.width || '24px'};
    height: ${props => props.width || '24px'};
    background-repeat: no-repeat;
    background-size: ${props => props.width || '24px'} ${props => props.width || '24px'};
    border-radius: ${props => props.width || '24px'};
`

UserPic.propTypes = {
    image: PropTypes.string
}


export default UserPic
