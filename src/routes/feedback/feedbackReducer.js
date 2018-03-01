import { createReducer } from 'redux-create-reducer'
import feedbacks from '_fake/feedbacks'
import { FEEDBACK_ANY_TYPE, FEEDBACK_REPLY_TYPE } from 'routes/feedback/feedbackTypes'
import { GIVE_FEEDBACK_TYPE } from 'routes/feedback/actions/addPeople'


export const OPEN_MODAL = 'Feedback.OPEN_MODAL'
export const CLOSE_MODAL = 'Feedback.CLOSE_MODAL'
export const FEEDBACK_TYPE = 'Feedback.FEEDBACK_TYPE'
export const SET_NOTE_PEOPLE = 'Feedback.SET_NOTE_PEOPLE'
export const SET_GIVE_PEOPLE = 'Feedback.SET_GIVE_PEOPLE'
export const CHANGE_NOTE_TEXT = 'Feedback.CHANGE_NOTE_TEXT'
export const CHANGE_FEEDBACK_CONTENT = 'Feedback.CHANGE_FEEDBACK_CONTENT'
export const SET_FEEDBACK_GIVE_TYPE = 'Feedback.SET_FEEDBACK_GIVE_TYPE'


export const START_GETTING_PENDING_FEEDBACKS = 'Feedback.START_GETTING_PENDING_FEEDBACK'
export const END_GETTING_PENDING_FEEDBACKS = 'Feedback.END_GETTING_PENDING_FEEDBACK'
export const FAILED_GETTING_PENDING_FEEDBACKS = 'Feedback.FAILED_GETTING_PENDING_FEEDBACK'


export const CLEAR_FEEDBACK = 'Feedback.CLEAR_FEEDBACK'
export const REPLY_FEEDBACK = 'Feedback.REPLY_FEEDBACK'


const defaultGiveFeedBack = {
    feedbackType: FEEDBACK_ANY_TYPE,
    people: [],
    pendingFeedbacks: [],
    content: '',
    pendingLoading: false,
}

const initialState = {
    feedbacks: feedbacks,
    modalWindow: false,
    feedback: {
        type: 0,
    },
    allPeople: [
        { id: 1, name: 'Apples' },
        { id: 2, name: 'Pears' },
        { id: 3, name: 'Bananas' },
        { id: 4, name: 'Mangos' },
        { id: 5, name: 'Lemons' },
        { id: 6, name: 'Apricots' },
    ],
    note: {
        people: [
            { id: 1, name: 'Apples' },
            { id: 2, name: 'Pears' },
            { id: 3, name: 'Bananas' },
            { id: 4, name: 'Mangos' },
            { id: 5, name: 'Lemons' },
            { id: 6, name: 'Apricots' },
        ],
        text: 'Some text',

    },
    give: { ...defaultGiveFeedBack },
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
    [SET_NOTE_PEOPLE](state, { people }) {
        return { ...state, note: { ...state.note, people } }
    },
    [SET_GIVE_PEOPLE](state, { people }) {
        return { ...state, give: { ...state.give, people } }
    },
    [CHANGE_NOTE_TEXT](state, { text }) {
        return { ...state, note: { ...state.note, text } }
    },
    [SET_FEEDBACK_GIVE_TYPE](state, { feedbackType }) {
        return { ...state, give: { ...state.give, feedbackType, replyTo: undefined } }
    },
    [START_GETTING_PENDING_FEEDBACKS](state) {
        return { ...state, give: { ...state.give, pendingLoading: true, pendingFeedbacks: [] } }
    },
    [END_GETTING_PENDING_FEEDBACKS](state, { pendingFeedbacks }) {
        return { ...state, give: { ...state.give, pendingLoading: false, pendingFeedbacks } }
    },
    [FAILED_GETTING_PENDING_FEEDBACKS](state, { error }) {
        return { ...state, give: { ...state.give, pendingLoading: false, pendingError: error } }
    },
    [CHANGE_FEEDBACK_CONTENT](state, { content, feedbackType = GIVE_FEEDBACK_TYPE }) {
        return { ...state, [feedbackType]: { ...state[feedbackType], content } }
    },
    [CLEAR_FEEDBACK](state, { feedbackType = GIVE_FEEDBACK_TYPE }) {
        return {
            ...state,
            [feedbackType]: { ...defaultGiveFeedBack, pendingFeedbacks: state[feedbackType].pendingFeedbacks },
        }
    },
    [REPLY_FEEDBACK](state, { feedback, feedbackType = GIVE_FEEDBACK_TYPE }) {
        return {
            ...state,
            [feedbackType]: {
                ...defaultGiveFeedBack,
                feedbackType: FEEDBACK_REPLY_TYPE,
                replyTo: feedback,
                pendingFeedbacks: state[feedbackType].pendingFeedbacks,
            },
        }
    },
})