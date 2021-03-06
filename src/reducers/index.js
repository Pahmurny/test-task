import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer as router } from 'react-router-redux'
import common from './common'
import people from 'routes/adminPeople/reducer/peopleReducer'
import companyPeople from 'routes/companyPeople/companyPeopleReducer'
import feedbacks from 'routes/feedback/feedbackReducer'
import reviewReducer from 'routes/adminReviews/reviewReducer'

/**
 * Creates combined reducer
 * @param asyncReducers
 * @returns {Reducer<any>}
 */
const createReducer = (asyncReducers = {}) => combineReducers({
  router,
  common,
  people,
  companyPeople,
  reviews:reviewReducer,
  feedbacks, ...asyncReducers,
  form: formReducer,
})

export default createReducer

