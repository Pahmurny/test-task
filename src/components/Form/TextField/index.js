import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'redux-form'


const Label = styled.div`
    display: block;
    font-family: Lato-Bold, sans-serif;
    font-size: 18px;
    color: #23182d;
`


const StyledField = styled(Field)`
    background: #FCFCFC;
    border: 1px solid #9F9BA2;
    border-radius: 3px;
    height: 36px;
    line-height: 36px;
    width: 240px;
    outline: none;
    box-sizing: border-box;
    
`

const TextField = ({ label, name, ...props }) => {
    const { tabIndex } = props
    delete props.tabIndex
    return (<div {...props}>
        <Label>{label}</Label>
        <StyledField name={name} component={'input'} type={'text'} tabIndex={tabIndex}/>
    </div>)
}


const styledField = styled(TextField)`
  display: block;
  width: 240px;
  
  ${StyledField} {
      margin-top: 18px;
  }
`


export default styledField