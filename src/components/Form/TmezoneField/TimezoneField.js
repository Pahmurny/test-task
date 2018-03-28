import React  from 'react'
import TimezonePicker from 'react-timezone'


const TimezoneField = ({input:{value, onChange}}) => {
    return (
        <TimezonePicker
            value={value}
            onChange={timezone => onChange(timezone)}
        />
    )
}



export default TimezoneField
