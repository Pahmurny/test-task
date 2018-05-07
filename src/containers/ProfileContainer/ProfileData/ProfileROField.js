import React from 'react'
import PropTypes from 'prop-types'
import './profilerofield.scss'

const ProfileROField = ({ label, value }) => <div className="profile-ro-filed">
  <div className="profile-ro-filed__label">{label}</div>
  <div className="profile-ro-filed__value">{value}</div>
</div>

ProfileROField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
}
ProfileROField.displayName = 'ProfileROField'

export default ProfileROField