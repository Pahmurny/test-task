import React from 'react'
import PropTypes from 'prop-types'
import ToggleButton from 'components/Buttons/ToggleButton'
import './toggleField.scss'

const ToggleField = ({ leftLabel, rightLabel, toggle, label, onClick }) => <div className="toggle-field">
    <ToggleButton
        className={'toggle-field__left'}
        active={toggle === true}
        onClick={() => {
            if (onClick) {
                onClick(true)
            }
        }}
    >{leftLabel}</ToggleButton>
    <ToggleButton
        className={'toggle-field__right'}
        active={toggle === false}
        onClick={() => {
            if (onClick) {
                onClick(false)
            }
        }}
    >{rightLabel}</ToggleButton>
    <span className={'toggle-field__label'}>{label}</span>
</div>


ToggleField.propTypes = {
    leftLabel: PropTypes.string.isRequired,
    rightLabel: PropTypes.string.isRequired,
    toggle: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func
}


ToggleField.defaultProps = {
    toggle: true,
}

export default ToggleField