import React  from 'react'
import { Field } from 'redux-form'
import CheckboxField from 'components/Form/Checkbox/CheckboxField'

const CheckboxFieldLabel = ({label, name, ...props}) => <div {...props}>
    <Field name={name} component={CheckboxField}/>
     <span>{label}</span>
</div>

export default CheckboxFieldLabel