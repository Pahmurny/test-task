import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'components/Form/Checkbox/Checkbox'


const CheckboxField = ({ input: { value, onChange }, ...props }) => {
    return <Checkbox checked={!!value} onClick={() => onChange(!value)} {...props}/>
}

CheckboxField.propTypes ={
    name: PropTypes.string,
}

export default CheckboxField
