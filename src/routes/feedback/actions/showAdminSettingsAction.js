import setValue from 'routes/feedback/actions/setValue'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'

const showAdminSettings = async (dispatch, { feedbacks }) => {
  const { loadingAdminSettings } = feedbacks
  if (loadingAdminSettings) {
    return
  }

  try {
    dispatch(setValue('loadingAdminSettings', true))

    const { data } = await GET(endpoint.admin())

    dispatch(setValue('loadingAdminSettings', false))

    dispatch(setValue('adminSettings', data))

    dispatch(setValue('showAdminSettings', true))

  } catch (e) {
    dispatch(setValue('loadingAdminSettings', false))
  }


}

export default () => (dispatch, getState) => showAdminSettings(dispatch, getState())