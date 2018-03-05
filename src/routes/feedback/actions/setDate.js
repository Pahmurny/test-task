import { SET_FEEDBACK_FILTER } from 'routes/feedback/feedbackReducer'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'

const setDate = (selectedDate, dispatch) => {
    const filter = { selectedDate }
    dispatch({ type: SET_FEEDBACK_FILTER, filter })
    dispatch(getFeedbacks())
}

export default (selectedDate) => (dispatch) => setDate(selectedDate, dispatch)