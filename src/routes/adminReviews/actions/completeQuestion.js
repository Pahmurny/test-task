import setQuestionState from 'routes/adminReviews/actions/setQuestionState'

/**
 * Make a question complete
 * @param id
 * @param dispatch
 * @returns {Promise<void>}
 */
const completeQuestion = async (id, dispatch) => {
  dispatch(setQuestionState(id, false))
}


export default (id) => dispatch => completeQuestion(id, dispatch)