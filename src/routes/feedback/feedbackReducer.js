import { createReducer } from 'redux-create-reducer'
import feedbacks from '_fake/feedbacks'


export const OPEN_MODAL = 'Feedback.OPEN_MODAL'
export const CLOSE_MODAL = 'Feedback.CLOSE_MODAL'
export const FEEDBACK_TYPE = 'Feedback.FEEDBACK_TYPE'
export const SET_NOTE_PEOPLE = 'Feedback.SET_NOTE_PEOPLE'
export const SET_GIVE_PEOPLE = 'Feedback.SET_GIVE_PEOPLE'
export const CHANGE_NOTE_TEXT = 'Feedback.CHANGE_NOTE_TEXT'


const initialState = {
    feedbacks: feedbacks,
    modalWindow: false,
    feedback: {
        type: 2,
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
    give: {
        people: [],
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
    [SET_NOTE_PEOPLE](state, { people }) {
        return { ...state, note: { ...state.note, people } }
    },
    [SET_GIVE_PEOPLE](state, { people }) {
        return { ...state, give: { ...state.give, people } }
    },
    [CHANGE_NOTE_TEXT](state, { text }) {
        return { ...state, note: { ...state.note, text } }
    },
})