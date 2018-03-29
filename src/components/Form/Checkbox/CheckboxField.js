import React from 'react'
import Checkbox from 'components/Form/Checkbox/Checkbox'


const CheckboxField = ({ input: { value, onChange } }) => {
    return <Checkbox checked={!!value} onClick={() => onChange(!value)}/>
}


export default CheckboxField