import setFilter from 'routes/feedback/actions/setFilter'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'

const setFilterFeedbackType = (feedbackType, dispatch) => {
    dispatch(setFilter({ feedbackType }))
    dispatch(getFeedbacks())
}

export default feedbackType => dispatch => setFilterFeedbackType(feedbackType, dispatch)