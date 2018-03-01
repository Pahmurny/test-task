import { REPLY_FEEDBACK } from 'routes/feedback/feedbackReducer'
import giveType from 'routes/feedback/actions/giveType'
import { FEEDBACK_REPLY_TYPE } from 'routes/feedback/feedbackTypes'

export default feedback => (dispatch) => {
    dispatch(giveType(FEEDBACK_REPLY_TYPE))
    dispatch({ type: REPLY_FEEDBACK, feedback })
}