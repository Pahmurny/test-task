import React from 'react'
import Checkbox from 'components/Form/Checkbox/Checkbox'


const CheckboxField = ({ input: { value, onChange }, ...props }) => {
    return <Checkbox checked={!!value} onClick={() => onChange(!value)} {...props}/>
}


export default CheckboxField
