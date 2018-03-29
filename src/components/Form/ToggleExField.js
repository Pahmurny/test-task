import React from 'react'
import ToggleExButton from 'components/Buttons/ToggleExButton'

const ToggleExField = ({input:{ value, onChange}}) => {
    return <ToggleExButton active={!!value} onClick={()=> onChange(!value)}/>
}

export default ToggleExField