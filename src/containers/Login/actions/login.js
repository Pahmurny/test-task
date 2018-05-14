import { getFormValues } from 'redux-form'
import { user } from 'helpers/user'
import setCommonValue from 'actions/setCommonValue'


const fakeUser = {
  id: 1,
}


export default () => (dispatch, getState) => {
  const values = getFormValues('loginForm')(getState())
  user.logIn({ ...fakeUser, ...values })
  dispatch(setCommonValue('isLogged', true))
}