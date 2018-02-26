import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import Feedback from 'components/Feedback/Feedback'
import './feedbacksLists.scss'

const FeedbacksList = ({ feedbacks, scrollOptions, className }) => <ScrollBlock
    className={cn('feedback-list', className)}
    style={scrollOptions}
>
    {
        feedbacks.map((feedback, key) => <Feedback key={key} {...feedback}/>)
    }
</ScrollBlock>


FeedbacksList.propTypes = {
    feedbacks: PropTypes.arrayOf(PropTypes.shape({
        locked: PropTypes.bool,
        date: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.instanceOf(Date),
            PropTypes.string
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
}


FeedbacksList.defaultProps = {
    feedbacks: []
}

export default FeedbacksList