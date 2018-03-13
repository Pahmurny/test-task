import { all } from 'redux-saga/effects'
import { FetchFeedbacks } from 'routes/feedback/sagas/feedbacks'



export default function* rootSaga() {
    yield all([
        FetchFeedbacks()
    ])
}