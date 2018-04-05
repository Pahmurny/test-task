import React from 'react'
import Dp from 'react-datepicker'
import './datePIcker.scss'
import m from 'moment'
import styled from 'styled-components'

import { FormLabel } from 'components/Form/TextField/TextFieldLabel'


const SDp = styled(Dp)``

const DatePicker = ({ input: { value, onChange }, label, className }) => {
    let val = value
    if (Number.isInteger(value)) {
        val = m.unix(value)
    }

    if (typeof value === 'undefined') {
        val = m()
    }

    return <FormLabel>
        {label}
        <SDp
            selected={val}
            onChange={(value) => onChange(value)}
            className={className}
            shouldCloseOnSelect
        />
    </FormLabel>
}

export default DatePicker