import setValue from 'routes/feedback/actions/setValue'
import { PUT } from 'helpers/request'
import { endpoint } from 'helpers/url'

const storeAdminSettings = async (key, value, dispatch, { feedbacks }) => {
  const { savingAdminSettings } = feedbacks
  if (savingAdminSettings) {
    return
  }

  try {
    dispatch(setValue('savingAdminSettings', true))
    dispatch(setValue(key, value))
    await PUT(endpoint.admin(), value)
    dispatch(setValue('savingAdminSettings', false))
  } catch (e) {
    dispatch(setValue('savingAdminSettings', false))
  }

}


export default (key, value) => (dispatch, getState) => storeAdminSettings(key, value, dispatch, getState())