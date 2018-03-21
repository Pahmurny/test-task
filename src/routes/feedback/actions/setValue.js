import { SET_FEEDBACK_REDUCER_VALUE } from 'routes/feedback/feedbackReducer'

const setValue = (key, value, dispatch, { feedbacks }) => {
  const updatedState = { ...feedbacks, [key]: value }

  dispatch({
    type: SET_FEEDBACK_REDUCER_VALUE,
    updatedState,
  })
}


export default (key, value) => (dispatch, getState) => setValue(key, value, dispatch, getState())