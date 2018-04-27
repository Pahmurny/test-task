import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import Feedback from 'components/Feedback/Feedback'
import './feedbacksLists.scss'
import { MODULE_VIEW_COMPANY } from 'routes/feedback/feedbackTypes'
import UserPic from 'components/Shared/UserPic'


const defaultView = ({ user }) => <Fragment>
    <UserPic className="user-pic" image={user.image}/>
    {user.name}
</Fragment>

const feedbackHeader = {
    [MODULE_VIEW_COMPANY]: ({ user, to }) => {
        return (
            <Fragment>
                <UserPic className="user-pic" image={user.image}/>
                {user.name}
                <span className="from__you">(you)</span>
                <span className="to__arrow">►</span>
                <UserPic className="user-pic" image={to.user.image}/>
                {to.user.name}
            </Fragment>
        )
    },
}


const FeedbacksList = ({ feedbacks, scrollOptions, className, moduleView }) => <ScrollBlock
    className={cn('feedback-list', className)}
    style={scrollOptions}
>
    {
        feedbacks.map((feedback, key) => <Feedback
            key={key} {...feedback}
            render={feedbackHeader[moduleView] || defaultView}
        />)
    }
</ScrollBlock>


FeedbacksList.propTypes = {
    feedbacks: PropTypes.arrayOf(PropTypes.shape({
        locked: PropTypes.bool,
        date: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.instanceOf(Date),
            PropTypes.string,
        ]).isRequired,
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        }),
        content: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
    })),
    scrollOptions: PropTypes.object,
    className: PropTypes.string,
    moduleView: PropTypes.string,
}


FeedbacksList.defaultProps = {
    feedbacks: [],
}

export default connect(({ common: { moduleView } }) => ({ moduleView }))(FeedbacksList)