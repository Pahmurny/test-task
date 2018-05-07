import React from 'react'
import PropTypes from 'prop-types'
import './deactivatewindow.scss'
import RedButton from 'components/Buttons/Redbutton'
import TransparentButton from 'components/Buttons/TransparentButton'

const DeactivateWindow = ({ onCancel, manager, onDeactivate }) => <div className={'deactivate-window'}>
  <div className="deactivate-window__text">
    By deactivating {manager.name}, they will no longer be able to sign in or to use CareerLark. You may choose to
    re-activate this account at any time if needed.
  </div>
  <div className="deactivate-window__actions">
    <TransparentButton
      className={'btn'}
      onClick={onCancel && onCancel}
    >Cancel</TransparentButton>
    <RedButton
      className={'btn'}
      onClick={onDeactivate && onDeactivate}
    >Deactivate</RedButton>
  </div>
</div>

DeactivateWindow.propTypes = {
  onCancel: PropTypes.func,
  onDeactivate: PropTypes.func,
  manager: PropTypes.object,
}

export default DeactivateWindow