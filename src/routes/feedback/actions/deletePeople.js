import { GIVE_FEEDBACK_TYPE, NOTE_FEEDBACK_TYPE, setActions } from 'routes/feedback/actions/addPeople'
import giveType from 'routes/feedback/actions/giveType'
import { FEEDBACK_ANY_TYPE } from 'routes/feedback/feedbackTypes'

export default (person, feedbackType = NOTE_FEEDBACK_TYPE) => (dispatch, getState) => {
    const { feedbacks: { [feedbackType]: { people } } } = getState()
    people.splice(person, 1)
    const filteredPeople = [...people]

    if (filteredPeople.length < 1 && feedbackType === GIVE_FEEDBACK_TYPE) {
        dispatch(giveType(FEEDBACK_ANY_TYPE))
    }

    dispatch(setActions[feedbackType](filteredPeople))
}