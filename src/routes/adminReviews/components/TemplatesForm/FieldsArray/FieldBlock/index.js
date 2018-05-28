import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './fieldBlock.scss'
import CloseGreyIcon from 'components/Icons/CloseGreyIcon'
import { Field } from 'redux-form'

const FieldBlock = ({ left, field, onRemove, hasLeft = true, isRight = false }) => <div
  className={cn('field-container', { 'right-column': isRight })}>
  <div className="field-container__block">
    {hasLeft && <div
      className="field-container__left"
    >
      {left}
    </div>}
    <Field
      component={'input'}
      name={field}
      className="field-container__field"
    />
  </div>
  <CloseGreyIcon
    style={{ marginLeft: 'auto' }} onClick={() => onRemove && onRemove()}
    className="close-icon"
  />
</div>


FieldBlock.propTypes = {
  left: PropTypes.any,
  children: PropTypes.any,
  onRemove: PropTypes.func,
  field: PropTypes.any,
  hasLeft: PropTypes.bool,
  isRight: PropTypes.bool,
}

export default FieldBlock