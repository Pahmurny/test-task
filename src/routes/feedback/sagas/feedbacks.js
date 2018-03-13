import { takeLatest, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
    END_GETTING_FEEDBACKS, FAILED_GETTING_FEEDBACKS,
    START_GETTING_FEEDBACKS,
} from 'routes/feedback/feedbackReducer'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'


export function* fetchFeedbacks() {

    try {
        const { data: feedbacks } = yield GET(endpoint.feedbacks())

        yield delay(1500)

        yield put({
            type: END_GETTING_FEEDBACKS,
            feedbacks,
        })

    } catch (e) {
        yield put({
            type: FAILED_GETTING_FEEDBACKS,
            error: e,
        })
    }
}


export function* FetchFeedbacks() {
    yield takeLatest(START_GETTING_FEEDBACKS, fetchFeedbacks)
}