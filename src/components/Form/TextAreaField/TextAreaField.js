import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

const TextAreaField = (props) => <Field component={'textarea'} {...props}/>


export default TextAreaField