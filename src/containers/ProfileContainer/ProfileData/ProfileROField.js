import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './profilerofield.scss'

const ProfileROField = ({ label, value, className }) => <div className={cn('profile-ro-filed', className)}>
  <div className="profile-ro-filed__label">{label}</div>
  <div className="profile-ro-filed__value">{value}</div>
</div>

ProfileROField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  className: PropTypes.string
}
ProfileROField.displayName = 'ProfileROField'

export default ProfileROField