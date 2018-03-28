import { actionTypes } from 'redux-form'
import setValue from 'routes/feedback/actions/setValue'
import { VALUES_FIELD } from 'routes/adminSettings/components/SettingsForm/inputNames'

const addValue = (dispatch, state) => {
    const { feedbacks: { adminSettings } } = state

    const values = adminSettings[VALUES_FIELD]
    values.push({
        name: '',
        description:''
    })

    dispatch(setValue('adminSettings', {...state.adminSettings, [VALUES_FIELD]: values}))

}

export default () => (dispatch, getState) => addValue(dispatch, getState())