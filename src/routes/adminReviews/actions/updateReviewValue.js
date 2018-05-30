import { UPDATE_REVIEW_VALUE } from 'routes/adminReviews/reviewReducer'


export default (key, value) => (dispatch) => {
  dispatch({ type: UPDATE_REVIEW_VALUE, key, value })
}