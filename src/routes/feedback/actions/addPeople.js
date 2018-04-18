import setNotePeople from 'routes/feedback/actions/setNotePeople'
import setGivePeople from 'routes/feedback/actions/setGivePeople'
import setRequestPeople from 'routes/feedback/actions/setRequestPeople'


export const setActions = {
    note: setNotePeople,
    give: setGivePeople,
    request: setRequestPeople
}


export const GIVE_FEEDBACK_TYPE = 'give'
export const NOTE_FEEDBACK_TYPE = 'note'
export const REQUEST_FEEDBACK_TYPE = 'request'


export default (person, feedbackType = NOTE_FEEDBACK_TYPE)=> (dispatch, getState) =>{
    const { feedbacks: { [feedbackType]: { people } } } = getState()

    delete person.component

    const updatedPeople = [...people, person]
    dispatch(setActions[feedbackType](updatedPeople))
}