import React from 'react'
import PropTypes from 'prop-types'
import m from 'moment'
import GreyBlock from 'components/Shared/GreyBlock'
import LockIcon from 'components/Icons/LockIcon'
import UserPic from 'components/Shared/UserPic'
import HashButton from 'components/Buttons/HashButton'
import './feedback.scss'


const Feedback = ({ locked, date, user, content, children, tags }) => <GreyBlock className={'feedback-block'}>
    <div className="feedback-block__header">
        <div className="feedback-block__header-user">
            <UserPic image={user.image} style={{ marginRight: 10 }}/>
            {user.name}
        </div>
        <div className="feedback-block__date">
            {locked && <LockIcon style={{ marginRight: 6 }}/>}
            {locked && <span style={{ marginRight: 6 }}> Private | </span>}
            {m(date).format('MMM DD, YYYY')}
        </div>
    </div>
    <div className="feedback-block__content">
        {children || content}
    </div>
    <div className="feedback-block__tags">
        {tags.map((tag, key) => <HashButton className={'hash-item'} key={key}>#{tag}</HashButton>)}
    </div>
</GreyBlock>


Feedback.propTypes = {
    locked: PropTypes.bool,
    date: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    user: PropTypes.shape({
        image: PropTypes.string.isRequired,
    }),
    children: PropTypes.any,
    tags: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.string
}


Feedback.defaultProps = {
    locked: false,
    tags: []
}

export default Feedback