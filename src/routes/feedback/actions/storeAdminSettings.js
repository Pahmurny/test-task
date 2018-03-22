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
    // TODO to show the progress
    setTimeout(()=>{
      dispatch(setValue('savingAdminSettings', false))
    }, 1000)
  } catch (e) {
    dispatch(setValue('savingAdminSettings', false))
  }

}


export default (key, value) => (dispatch, getState) => storeAdminSettings(key, value, dispatch, getState())