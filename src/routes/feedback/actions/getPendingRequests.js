import {
    END_GETTING_PENDING_FEEDBACKS, FAILED_GETTING_PENDING_FEEDBACKS,
    START_GETTING_PENDING_FEEDBACKS,
} from 'routes/feedback/feedbackReducer'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'


const getPendingRequests = async (dispatch) => {
    try {
        dispatch({ type: START_GETTING_PENDING_FEEDBACKS })
        const fakeFeedbacks = await GET(endpoint.pending())
        setTimeout(() => {
            dispatch({ type: END_GETTING_PENDING_FEEDBACKS, pendingFeedbacks: fakeFeedbacks.data })
        }, 1500)
    } catch (e) {
        dispatch({ type: FAILED_GETTING_PENDING_FEEDBACKS, error: e })
    }

}

export default () => (dispatch, getState) => getPendingRequests(dispatch, getState())