import { createReducer } from 'redux-create-reducer'

const initialState = {
    user: {
        id: 1,
        name: 'John Doe'
    }
}


export default createReducer(initialState, {})

