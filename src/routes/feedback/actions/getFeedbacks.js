import {
    START_GETTING_FEEDBACKS,
} from 'routes/feedback/feedbackReducer'

const getFeedbacks = async (dispatch) => {
    dispatch({
        type: START_GETTING_FEEDBACKS,
    })
}

export default () => (dispatch) => getFeedbacks(dispatch)