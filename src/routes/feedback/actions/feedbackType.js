import { FEEDBACK_TYPE } from 'routes/feedback/feedbackReducer'

export default (feedBackType) => ({ type: FEEDBACK_TYPE, feedBackType })