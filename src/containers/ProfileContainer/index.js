import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import closeUserProfile from 'containers/ProfileContainer/actions/closeUserProfile'
import Modal from 'components/Shared/Modal'
import PopUp from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import { PopupTitle } from 'components/Shared/PopupTitle'
import ProfileData from 'containers/ProfileContainer/ProfileData'
import PencilIcon from 'components/Icons/PencilIcon'
import './profileContainer.scss'
import { user } from 'helpers/user'
import editProfile from 'containers/ProfileContainer/actions/editProfile'


class ProfileContainer extends Component {

  static propTypes = {
    closeUserProfile: PropTypes.func,
    editProfile: PropTypes.func,
    showUserProfile: PropTypes.object,
    profileFeedbackList: PropTypes.array,
    profileEdit: PropTypes.bool,
  }

  render() {
    const { showUserProfile, closeUserProfile, profileEdit, editProfile } = this.props

    if (!showUserProfile) {
      return null
    }

    const { id: userId } = showUserProfile

    return (
      <Modal closeForm={() => closeUserProfile()}>
        <PopUp
          onClose={() => closeUserProfile()}
          title={<PopupTitle>{showUserProfile.name} {userId === user.getId() && <PencilIcon
            className={'edit-profile-ico'}
            onClick={() => editProfile(!profileEdit)}
          />}</PopupTitle>}
          style={{
            width: 864,
            minHeight: 576,
          }}
        >
          <ProfileData
            initialValues={showUserProfile}
            editMode={profileEdit}
          />
        </PopUp>
      </Modal>
    )
  }
}


export default connect(({ common }) => ({ ...common }), { closeUserProfile, editProfile })(ProfileContainer)