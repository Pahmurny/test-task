import { createReducer } from 'redux-create-reducer'
import {
  FEEDBACK_ANY_TYPE, FEEDBACK_FROM_ME, FEEDBACK_NOTE, FEEDBACK_REPLY_TYPE,
  FEEDBACK_TO_ME, MODULE_VIEW_FEEDBACK, TEAM_TYPE_GIVEN, TEAM_TYPE_NOTE, TEAM_TYPE_RECEIVED,
} from 'routes/feedback/feedbackTypes'
import { GIVE_FEEDBACK_TYPE } from 'routes/feedback/actions/addPeople'


export const OPEN_MODAL = 'Feedback.OPEN_MODAL'
export const CLOSE_MODAL = 'Feedback.CLOSE_MODAL'
export const FEEDBACK_TYPE = 'Feedback.FEEDBACK_TYPE'

export const SET_FEEDBACK_FILTER = 'Feedback.SET_FEEDBACK_FILTER'

export const SET_NOTE_PEOPLE = 'Feedback.SET_NOTE_PEOPLE'
export const SET_GIVE_PEOPLE = 'Feedback.SET_GIVE_PEOPLE'
export const SET_REQUEST_PEOPLE = 'Feedback.SET_REQUEST_PEOPLE'

export const SET_EMBODY_VALUE = 'Feedback.SET_EMBODY_VALUE'

export const CHANGE_NOTE_TEXT = 'Feedback.CHANGE_NOTE_TEXT'
export const CHANGE_FEEDBACK_CONTENT = 'Feedback.CHANGE_FEEDBACK_CONTENT'
export const SET_FEEDBACK_GIVE_TYPE = 'Feedback.SET_FEEDBACK_GIVE_TYPE'
export const TOGGLE_PUBLIC_GIVE_TYPE = 'Feedback.TOGGLE_PUBLIC_GIVE_TYPE'
export const TOGGLE_ANONYMOUS_GIVE_TYPE = 'Feedback.TOGGLE_ANONYMOUS_GIVE_TYPE'
export const SET_WHAT_REQUEST = 'Feedback.SET_WHAT_REQUEST'


export const START_GETTING_PENDING_FEEDBACKS = 'Feedback.START_GETTING_PENDING_FEEDBACK'
export const END_GETTING_PENDING_FEEDBACKS = 'Feedback.END_GETTING_PENDING_FEEDBACK'
export const FAILED_GETTING_PENDING_FEEDBACKS = 'Feedback.FAILED_GETTING_PENDING_FEEDBACK'

export const START_DELETING_PENDING_FEEDBACKS = 'Feedback.START_DELETING_PENDING_FEEDBACKS'
export const END_DELETING_PENDING_FEEDBACKS = 'Feedback.END_DELETING_PENDING_FEEDBACKS'
export const FAILED_DELETING_PENDING_FEEDBACKS = 'Feedback.FAILED_DELETING_PENDING_FEEDBACKS'

export const START_GETTING_SUGGESTIONS_FEEDBACKS = 'Feedback.START_GETTING_SUGGESTIONS_FEEDBACK'
export const END_GETTING_SUGGESTIONS_FEEDBACKS = 'Feedback.END_GETTING_SUGGESTIONS_FEEDBACK'
export const FAILED_GETTING_SUGGESTIONS_FEEDBACKS = 'Feedback.FAILED_GETTING_SUGGESTIONS_FEEDBACK'


export const START_GETTING_FEEDBACKS = 'Feedback.START_GETTING_FEEDBACKS'
export const END_GETTING_FEEDBACKS = 'Feedback.END_GETTING_FEEDBACKS'
export const FAILED_GETTING_FEEDBACKS = 'Feedback.FAILED_GETTING_FEEDBACKS'


export const CLEAR_FEEDBACK = 'Feedback.CLEAR_FEEDBACK'
export const REPLY_FEEDBACK = 'Feedback.REPLY_FEEDBACK'


export const SET_FEEDBACK_REDUCER_VALUE = 'Feedback.SET_FEEDBACK_REDUCER_VALUE'

const defaultGiveFeedBack = {
  feedbackType: FEEDBACK_ANY_TYPE,
  people: [],
  pendingFeedbacks: [],
  content: '',
  pendingLoading: false,
  isPublic: true,
  isAnonymous: false,
  embodyValues: [
    'Go to extra mile',
    'Team player',
    'Be an owner',
    'Some other value',
  ],
  embodyValue: 0,
}

const initialState = {
  feedbacks: [],
  feedbackLoading: false,
  filter: {
    dateType: 0,
    dates: [],
    teamType: { id: TEAM_TYPE_RECEIVED },
    teamTypes: [
      {
        id: TEAM_TYPE_RECEIVED,
        title: `Team member received`,
      },
      {
        id: TEAM_TYPE_GIVEN,
        title: `Team member given`,
      },
      {
        id: TEAM_TYPE_NOTE,
        title: `Note to self`,
      },
    ],
    feedbackType: { id: FEEDBACK_TO_ME },
    feedbackTypes: [
      {
        id: FEEDBACK_TO_ME,
        title: `You've received`,
      },
      {
        id: FEEDBACK_FROM_ME,
        title: `You've given`,
      },
      {
        id: FEEDBACK_NOTE,
        title: `Note to self`,
      },
    ],
    feedbackTo: { id: 0 },
    feedbackToItems: [
      {
        id: 0,
        title: 'Everyone reporting to me',
      },
      {
        id: 1,
        title: 'All my direct reports',
      },
      {
        id: 2,
        title: 'Monica Hall',
      },
      {
        id: 3,
        title: 'Russ Hanneman',
      },
      {
        id: 4,
        title: 'Carla Walton',
      },
    ],
    fulltextSearch: '',
    searchPeople: [],
    moduleView: MODULE_VIEW_FEEDBACK,
  },
  modalWindow: false,
  feedback: {
    type: 0,
  },
  allPeople: [],
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
  request: {
    people: [],
    content: '',
    what: 0,
  },
  feedbackInfo: false,
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
  [SET_REQUEST_PEOPLE](state, { people }) {
    return { ...state, request: { ...state.request, people } }
  },
  [SET_WHAT_REQUEST](state, { what }) {
    return { ...state, request: { ...state.request, what } }
  },
  [START_GETTING_FEEDBACKS](state) {
    return { ...state, feedbackLoading: true, feedbacks: [] }
  },
  [END_GETTING_FEEDBACKS](state, { feedbacks }) {
    return { ...state, feedbackLoading: false, feedbacks }
  },
  [FAILED_GETTING_FEEDBACKS](state, { error }) {
    return { ...state, feedbackError: error }
  },
  [TOGGLE_PUBLIC_GIVE_TYPE](state, { isPublic }) {
    return { ...state, give: { ...state.give, isPublic } }
  },
  [TOGGLE_ANONYMOUS_GIVE_TYPE](state, { isAnonymous }) {
    return { ...state, give: { ...state.give, isAnonymous } }
  },
  [SET_FEEDBACK_FILTER](state, { filter }) {
    return { ...state, filter: { ...state.filter, ...filter } }
  },
  [START_GETTING_SUGGESTIONS_FEEDBACKS](state) {
    return { ...state, suggestionPending: true, suggestionPendingError: undefined }
  },
  [END_GETTING_SUGGESTIONS_FEEDBACKS](state, { people: allPeople }) {
    return { ...state, suggestionPending: false, allPeople }
  },
  [FAILED_GETTING_SUGGESTIONS_FEEDBACKS](state, { error }) {
    return { ...state, suggestionPending: false, suggestionPendingError: error }
  },
  [SET_EMBODY_VALUE](state, { embodyValue }) {
    return { ...state, give: { ...state.give, embodyValue } }
  },
  [SET_FEEDBACK_REDUCER_VALUE](state, { updatedState }) {
    return updatedState
  },
})