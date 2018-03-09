import { DELETE } from 'helpers/request'
import { endpoint } from 'helpers/url'
import getPendingRequests from 'routes/feedback/actions/getPendingRequests'
import {
    END_DELETING_PENDING_FEEDBACKS, FAILED_DELETING_PENDING_FEEDBACKS,
    START_DELETING_PENDING_FEEDBACKS,
} from 'routes/feedback/feedbackReducer'

const deleteFeedback = async (feedback, dispatch) => {
    const { id } = feedback
    dispatch({ type: START_DELETING_PENDING_FEEDBACKS })
    try {

        const result = await DELETE(`${endpoint.pending()}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        dispatch(getPendingRequests())
        dispatch({ type: END_DELETING_PENDING_FEEDBACKS })
    } catch (e) {
        dispatch({ type: FAILED_DELETING_PENDING_FEEDBACKS })
    }
}

export default (feedback) => (dispatch) => deleteFeedback(feedback, dispatch)