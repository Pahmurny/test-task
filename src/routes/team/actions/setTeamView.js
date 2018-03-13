import setFilter from 'routes/feedback/actions/setFilter'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'

const setTeamView = (isTeamView, dispatch) => {
    const filter = {
        isTeamView
    }
    dispatch(setFilter(filter))
    dispatch(getFeedbacks())
}

export default (isTeamView = true) => dispatch => setTeamView(isTeamView, dispatch)