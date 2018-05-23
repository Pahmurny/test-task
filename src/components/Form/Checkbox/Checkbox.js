import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import CheckMarkIcon from 'components/Icons/CheckMarkIcon'
import './checkbox.scss'

const Checkbox = ({checked, children, className, onClick, ...rest }) => <div
    className={cn('checkbox', className)}
    onClick={onClick && onClick}
    {...rest}
>
  <div className="checkbox__mark">
    {checked && <CheckMarkIcon className={'ischecked'}/>}
  </div>
  {children &&<div className="checkbox__label">{children}</div>}
</div>


Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Checkbox