import { SET_FEEDBACK_FILTER } from 'routes/feedback/feedbackReducer'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'
import setFilter from 'routes/feedback/actions/setFilter'

const setDate = (selectedDate, dispatch) => {
    dispatch(setFilter({ selectedDate }))
    dispatch(getFeedbacks())
}

export default (selectedDate) => (dispatch) => setDate(selectedDate, dispatch)