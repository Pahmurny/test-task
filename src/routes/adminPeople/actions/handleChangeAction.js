import { submit, getFormValues } from 'redux-form'
import d from 'lodash/debounce'
import getPeople from 'routes/adminPeople/actions/getPeople'

const handleChangeAction = d((dispatch, state) => {
    const form = getFormValues('peoplelist')(state)
    dispatch(getPeople(form))

}, 500)

export default () => (dispatch, getState) => handleChangeAction(dispatch, getState())