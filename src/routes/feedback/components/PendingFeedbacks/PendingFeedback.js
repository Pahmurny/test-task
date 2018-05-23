import React from 'react'
import PropTypes from 'prop-types'
import m from 'moment'
import YellowBlock from 'components/Shared/YelowBlock'
import UserPic from 'components/Shared/UserPic'
import CloseGreyIcon from 'components/Icons/CloseGreyIcon'
import './pendingFeedbacks.scss'


const PendingFeedback = ({ feedback, onClose, onSelect }) => <YellowBlock
    className={'pending-feedback'}
    onClick={(e) => {

        if (onSelect) {
            onSelect(feedback)
        }
    }}
>
    <div className="pending-feedback__header">
        <UserPic className={'pending-feedback__header-pic'} image={feedback.user.image}/>
        <div className="pending-feedback__header-date">
            <div className="pending-feedback__header-name">{feedback.user.name}</div>
            <div className="pending-feedback__header-date-text">{m(feedback.date).format('MMM DD, YYYY')}</div>
        </div>
        <CloseGreyIcon
            className={'pending-feedback__header-close'}
            onClick={(e) => {
                e.stopPropagation()
                if (onClose) {
                    onClose(feedback)
                }
            }}/>
    </div>
    <div className="pending-feedback__content">
        {feedback.content}
    </div>
</YellowBlock>


PendingFeedback.propTypes = {
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
    feedback: PropTypes.shape({
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        }),
        date: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
    }),
}


export default PendingFeedback