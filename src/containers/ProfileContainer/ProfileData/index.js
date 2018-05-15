import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DZ from 'react-dropzone'
import { Field, reduxForm } from 'redux-form'
import UserPic from 'components/Shared/UserPic'
import ProfileROField from 'containers/ProfileContainer/ProfileData/ProfileROField'
import { IsDev } from 'helpers/dev'
import FeedbackList from 'containers/ProfileContainer/FeedbackList'
import DefaultButton from 'components/Buttons/DefaultButton'
import './profiledata.scss'


class ProfileData extends Component {

  static propTypes = {
    editMode: PropTypes.bool,
  }

  render() {
    const {
      initialValues: {
        image, name, job_title, managerName,
        team_tags, email, start_date, phone_number,
      },
      editMode,
    } = this.props

    return <div className="profile-data">
      <div className="profile-data__side left">
        <div className="profile-data__user-pic">
          <UserPic image={image} className='user-image'/>
          {editMode && <DZ className="upload-zone">Upload</DZ>}
        </div>
        <div className="profile-data__username">{name}</div>
        <div className="profile-data__position">{job_title}</div>
        <ProfileROField label={'Manager'} value={IsDev() ? 'Richard Hendricks' : managerName}/>
        <ProfileROField label={'Team Tags'} value={team_tags.map(tag => tag.label).join(', ')}/>
        <ProfileROField label={'Email'} value={email}/>
        <ProfileROField label={'Start Date'} value={IsDev() ? '08/07/2014' : start_date}/>
        <ProfileROField
          label={'Phone'}
          value={!editMode ? phone_number : <Field
            component={'input'}
            name={'phone_number'}
            className={'profile-data__text-input'}
            type={'text'}/>}
          className={'phone'}
        />
      </div>
      <div className="profile-data__side right">
        <FeedbackList shorter={editMode}/>
      </div>
      {editMode && <div className="profile-data__actions">
        <DefaultButton>Save</DefaultButton>
      </div>}
    </div>
  }
}


export default reduxForm({ form: 'profileData' })(ProfileData)
