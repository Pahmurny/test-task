import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import ToggleButton from 'components/Buttons/ToggleButton'
import './toggleField.scss'


/**
 *  The Component to show toggle input
 * @param leftLabel any
 * @param rightLabel any
 * @param toggle bool Shows state of a toggle control
 * @param label any Label to be show close to the control
 * @param onClick func callback when toggle was changed
 * @param left bool show the label on left side or not
 * @param className string Dom element class name
 * @returns {ReactComponent}
 * @constructor
 */
const ToggleField = ({ leftLabel, rightLabel, toggle, label, onClick, left = false, className }) => <div
    className={cn(className, 'toggle-field', { left })}>
    {left && <span className={'toggle-field__label'}>{label}</span>}
    <ToggleButton
        className={'toggle-field__button toggle-field__left'}
        active={toggle === true}
        onClick={() => {
            if (onClick) {
                onClick(true)
            }
        }}
    >{leftLabel}</ToggleButton>
    <ToggleButton
        className={'toggle-field__button toggle-field__right'}
        active={toggle === false}
        onClick={() => {
            if (onClick) {
                onClick(false)
            }
        }}
    >{rightLabel}</ToggleButton>
    {!left && <span className={'toggle-field__label'}>{label}</span>}
</div>


ToggleField.propTypes = {
    leftLabel: PropTypes.any.isRequired,
    rightLabel: PropTypes.any.isRequired,
    toggle: PropTypes.bool,
    left: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}


ToggleField.defaultProps = {
    toggle: true,
}

export default ToggleField