import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeedbackIcon from 'components/Icons/FeedbackIcon'
import './peoplelistrow.scss'
import UserPic from 'components/Shared/UserPic'

const PeopleListRow = ({ first_name, last_name, job_title, team_tags, image }) => <div className="people-list-row">
    <div className="people-list-row__col">
        <UserPic image={image} className="people-list-row__user-image"/>
        {`${first_name} ${last_name}`}
    </div>
    <div className="people-list-row__col">{job_title}</div>
    <div className="people-list-row__col">{team_tags.map(tag => tag.label).join(', ')}</div>
    <div className="people-list-row__col"><FeedbackIcon/></div>
</div>

export default PeopleListRow