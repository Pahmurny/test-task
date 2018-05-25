import React  from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import CheckboxField from 'components/Form/Checkbox/CheckboxField'

const CheckboxFieldLabel = ({label, name, ...props}) => <div {...props}>
    <Field name={name} component={CheckboxField}/>
     <span>{label}</span>
</div>

CheckboxFieldLabel

export default CheckboxFieldLabel