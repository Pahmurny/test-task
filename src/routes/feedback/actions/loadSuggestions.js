import {
    END_GETTING_SUGGESTIONS_FEEDBACKS, FAILED_GETTING_SUGGESTIONS_FEEDBACKS,
    START_GETTING_SUGGESTIONS_FEEDBACKS,
} from 'routes/feedback/feedbackReducer'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import deb from 'lodash/debounce'

const loadSuggestions = async (dispatch) => {
    try {
        dispatch({ type: START_GETTING_SUGGESTIONS_FEEDBACKS })

        const { data: people } = await GET(endpoint.people())

        dispatch({ type: END_GETTING_SUGGESTIONS_FEEDBACKS, people })
    } catch (e) {
        dispatch({ type: FAILED_GETTING_SUGGESTIONS_FEEDBACKS, error: e })
    }


}

export default () => dispatch => loadSuggestions(dispatch)