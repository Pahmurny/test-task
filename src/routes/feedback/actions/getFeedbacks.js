import debounce from 'lodash/debounce'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import {
    END_GETTING_FEEDBACKS, FAILED_GETTING_FEEDBACKS,
    START_GETTING_FEEDBACKS,
} from 'routes/feedback/feedbackReducer'

const getFeedbacks = debounce(async (dispatch, { feedbacks }) => {
    const { filter } = feedbacks
    dispatch({
        type: START_GETTING_FEEDBACKS,
    })
    try {
        const { data: feedbacks } = await GET(endpoint.feedbacks())
        setTimeout(() => {
            dispatch({
                type: END_GETTING_FEEDBACKS,
                feedbacks,
            })
        }, 500)
    } catch (e) {
        dispatch({ type: FAILED_GETTING_FEEDBACKS, error: e })
    }


}, 500)

export default () => (dispatch, getState) => getFeedbacks(dispatch, getState())