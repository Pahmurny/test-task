import { createReducer } from 'redux-create-reducer'
import feedbacks from '_fake/feedbacks'


const initialState = {
    feedbacks: feedbacks
}


export default createReducer(initialState, {})