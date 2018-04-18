import React from 'react'
import PropTypes from 'prop-types'
import './personblock.scss'
import UserPic from 'components/Shared/UserPic'
import FeedbackIcon from 'components/Icons/FeedbackIcon'


const PersonRow = props => {
    const { image, first_name, last_name, job_title, team_tags, onClick } = props
    return (<div className="person-row">
        <div className="col">
            <UserPic
                width={'45px'}
                className="person-row__image"
                image={image}
            />
            <div className="person-row__name">
                <div className="person-row__name-name">{`${first_name} ${last_name}`}</div>
                <div className="person-row__name-title">{job_title}</div>
            </div>
        </div>
        <div className="col person-row__tags">
            {team_tags.map(tag => tag.label).join(', ')}
        </div>
        <div className="col" style={{ justifyContent: 'flex-end' }}>
            <FeedbackIcon onClick={onClick}/>
        </div>
    </div>)
}


export default PersonRow