import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultButton from 'components/Buttons/DefaultButton'



const WhiteButton = styled(DefaultButton)`
        background: #FCFCFC;
        border: 1px solid #BBB9BD;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.50);
        border-radius: 3px;
        color: #BBB9BD;
        height: 30px;
        line-height: 30px;
        padding: 0 3px;
`


export default WhiteButton
