import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import closeUserProfile from 'containers/ProfileContainer/actions/closeUserProfile'
import Modal from 'components/Shared/Modal'
import PopUp from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import { PopupTitle } from 'components/Shared/PopupTitle'
import './profileContainer.scss'
import ProfileData from 'containers/ProfileContainer/ProfileData'


class ProfileContainer extends Component {

  static propTypes = {
    closeUserProfile: PropTypes.func,
    showUserProfile: PropTypes.object,
    profileFeedbackList: PropTypes.array
  }

  render() {
    const { showUserProfile, closeUserProfile } = this.props

    if (!showUserProfile) {
      return null
    }

    return (
      <Modal closeForm={() => closeUserProfile()}>
        <PopUp
          onClose={() => closeUserProfile()}
          title={<PopupTitle>{showUserProfile.name}</PopupTitle>}
          style={{
            width: 864,
            height: 576,
          }}
        >
          <ProfileData
            {...showUserProfile}
          />
        </PopUp>
      </Modal>
    )
  }
}


export default connect(({ common }) => ({ ...common }), { closeUserProfile })(ProfileContainer)