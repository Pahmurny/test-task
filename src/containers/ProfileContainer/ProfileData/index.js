import React, { Component } from 'react'
import './profiledata.scss'
import UserPic from 'components/Shared/UserPic'
import ProfileROField from 'containers/ProfileContainer/ProfileData/ProfileROField'
import { IsDev } from 'helpers/dev'
import FeedbackList from 'containers/ProfileContainer/FeedbackList'


class ProfileData extends Component {


  render() {
    const { image, name, job_title, managerName,
      team_tags, email, start_date, phone_number } = this.props

    return <div className="profile-data">
      <div className="profile-data__side left">
        <UserPic image={image} className={'profile-data__user-pic'}/>
        <div className="profile-data__username">{name}</div>
        <div className="profile-data__position">{job_title}</div>
        <ProfileROField label={'Manager'} value={IsDev() ? 'Richard Hendricks' : managerName}/>
        <ProfileROField label={'Team Tags'} value={team_tags.map(tag => tag.label).join(', ')}/>
        <ProfileROField label={'Email'} value={email}/>
        <ProfileROField label={'Start Date'} value={IsDev() ? '08/07/2014': start_date}/>
        <ProfileROField label={'Phone'} value={phone_number}/>
      </div>
      <div className="profile-data__side right">
        <FeedbackList/>
      </div>
    </div>
  }
}


export default ProfileData
