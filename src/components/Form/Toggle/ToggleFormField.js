import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToggleField from 'components/Form/Toggle/ToggleField'

const ToggleFormField = ({ input: { value, onChange }, leftLabel, rightLabel,
                             left = false,
                         className }) => {

    return <ToggleField
        leftLabel={leftLabel}
        rightLabel={rightLabel}
        toggle={!!value}
        left={left}
        className={className}
        onClick={onChange}
    />
}


export default ToggleFormField