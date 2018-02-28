import { NOTE_FEEDBACK_TYPE, setActions } from 'routes/feedback/actions/addPeople'

export default (person, feedbackType = NOTE_FEEDBACK_TYPE) => (dispatch, getState) => {
    const { feedbacks: { [feedbackType]: { people } } } = getState()
    people.splice(person, 1)
    const filteredPeople = [...people]
    dispatch(setActions[feedbackType](filteredPeople))
}