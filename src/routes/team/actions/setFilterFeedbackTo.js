import setFilter from 'routes/feedback/actions/setFilter'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'

const setTeamFeedbackTo = (feedbackTo, dispatch) => {
    const filter = { feedbackTo }
    dispatch(setFilter(filter))
    dispatch(getFeedbacks())
}


export default feedbackTo => dispatch => setTeamFeedbackTo(feedbackTo, dispatch)