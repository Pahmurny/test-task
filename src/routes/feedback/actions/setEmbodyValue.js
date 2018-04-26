import { SET_EMBODY_VALUE } from 'routes/feedback/feedbackReducer'

const setEmbodyValue = (idx, dispatch, { feedbacks: { give: { embodyValue } } }) => {
    let newValues = [...embodyValue]
    if (newValues.includes(idx)) {
        newValues = newValues.filter(i => i !== idx)
    } else {
        newValues.push(idx)
    }
    dispatch(({ type: SET_EMBODY_VALUE, embodyValue: newValues }))
}

export default idx => (dispatch, getState) => setEmbodyValue(idx, dispatch, getState())