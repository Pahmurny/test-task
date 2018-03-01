import { CHANGE_FEEDBACK_CONTENT } from 'routes/feedback/feedbackReducer'

export default (content, feedbackType) => ({type:CHANGE_FEEDBACK_CONTENT, content, feedbackType})