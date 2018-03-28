import { VALUES_FIELD } from 'routes/adminSettings/components/SettingsForm/inputNames'
import setValue from 'routes/feedback/actions/setValue'
import { actionTypes } from 'redux-form'


const deleteValue = (idx, dispatch, state) => {
    const { feedbacks: { adminSettings } } = state
    const values = adminSettings[VALUES_FIELD].splice(idx, 1)

    dispatch(setValue('adminSettings', { ...state.adminSettings, [VALUES_FIELD]: values }))
}

export default idx => (dispatch, getState) => deleteValue(idx, dispatch, getState())