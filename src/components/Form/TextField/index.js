import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styled from 'styled-components'
import { Field } from 'redux-form'
import './inputstyles.scss'
import {textPrimary, subBG, borderPrimary} from 'styles/colors.scss'
import { fontLatoRegular } from 'styles/constants.scss'


const Label = styled.div`
    display: block;
    font-family: Lato-Bold, sans-serif;
    font-size: 18px;
    color: ${textPrimary};
`


const StyledField = styled(Field)`
    background: ${subBG};
    border: 1px solid ${borderPrimary};
    border-radius: 3px;
    height: 36px;
    line-height: 36px;
    width: 240px;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    font-family: ${fontLatoRegular}, sans-serif;
    padding: 0px 6px;
    
`
/**
 * Input Component for Redux Form
 * @param value
 * @param asyncValidating
 * @param touched
 * @param error
 * @param className
 * @param tabIndex
 * @param type
 * @returns {*}
 * @constructor
 */
const Input = ({ input, meta: { asyncValidating, touched, error }, className, tabIndex, type = 'text' }) => {
  return <input
    {...input}
    type={type}
    className={cn(className, { error: (touched && error) })}
    tabIndex={tabIndex}
  />
}


/**
 * Wrapped styled Field from redux form
 * @param label
 * @param name
 * @param fieldProps
 * @param props
 * @returns {*}
 * @constructor
 */
const TextField = ({ label, name, fieldProps, ...props }) => {
  const { tabIndex } = props
  delete props.tabIndex
  return (<div {...props}>
    <Label>{label}</Label>
    <StyledField name={name} component={Input} tabIndex={tabIndex} {...fieldProps}/>
  </div>)
}


const styledField = styled(TextField)`
  display: block;
  width: 240px;
  
  ${StyledField} {
      margin-top: 12px;
  }
`

styledField.propTypes = {
  fieldProps: PropTypes.object,
  label: PropTypes.any,
  name: PropTypes.string,
}


export default styledField