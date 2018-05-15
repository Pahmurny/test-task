import { push } from 'react-router-redux'
import { getFormValues } from 'redux-form'
import setCommonValue from 'actions/setCommonValue'
import { url } from 'helpers/url'

export default (toLogin = false) => (dispatch, getState) => {
  const resetFormValues = getFormValues('resetForm')(getState())
  dispatch(setCommonValue('resettingPassword', true))
  console.log(resetFormValues)
  if (toLogin) {
    dispatch(push(url.login()))
  }
}