import setFilter from 'routes/feedback/actions/setFilter'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'
import { MODULE_VIEW_FEEDBACK } from 'routes/feedback/feedbackTypes'

const setTeamView = (moduleView, dispatch) => {
    const filter = {
        moduleView
    }
    dispatch(setFilter(filter))
    dispatch(getFeedbacks())
}

export default (moduleView = MODULE_VIEW_FEEDBACK) => dispatch => setTeamView(moduleView, dispatch)