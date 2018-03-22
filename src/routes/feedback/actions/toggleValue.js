import setValue from 'routes/feedback/actions/setValue'


const toggleValue = (key, dispatch, { feedbacks }) => {
  dispatch(setValue(key, !feedbacks[key]))
}


export default (key) => (dispatch, getState) => toggleValue(key, dispatch, getState())