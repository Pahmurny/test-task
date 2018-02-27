import { createReducer } from 'redux-create-reducer'
import feedbacks from '_fake/feedbacks'


export const OPEN_MODAL = 'Feedback.OPEN_MODAL'
export const CLOSE_MODAL = 'Feedback.CLOSE_MODAL'
export const FEEDBACK_TYPE = 'Feedback.FEEDBACK_TYPE'


const initialState = {
    feedbacks: feedbacks,
    modalWindow: false,
    feedback: {
        type: 0,
    },
}


export default createReducer(initialState, {
    [OPEN_MODAL](state) {
        return { ...state, modalWindow: true }
    },
    [CLOSE_MODAL](state) {
        return { ...state, modalWindow: false }
    },
    [FEEDBACK_TYPE](state, { feedBackType }) {
        return { ...state, feedback: { ...state.feedback, type: feedBackType } }
    },
})