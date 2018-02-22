/* eslint-disable no-unused-vars */
import React  from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const UserPic = styled.div`
    background-image: url(${props => props.image});
    display: inline-block;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    border-radius: 24px;
`

UserPic.propTypes = {
    image: PropTypes.string.isRequired
}


export default UserPic
