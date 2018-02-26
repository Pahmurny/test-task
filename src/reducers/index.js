import { combineReducers } from 'redux'
import common from './common'
import feedbacks from 'routes/feedback/feedbackReducer'


export default combineReducers({ common, feedbacks })