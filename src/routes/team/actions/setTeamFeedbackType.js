import setFilter from 'routes/feedback/actions/setFilter'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'

const setTeamFeedbackType = (teamType, dispatch) => {
    const filter = { teamType }
    dispatch(setFilter(filter))
    dispatch(getFeedbacks())
}
export default teamType => dispatch => setTeamFeedbackType(teamType, dispatch)