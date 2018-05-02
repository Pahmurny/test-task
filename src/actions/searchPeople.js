import uue from 'urlencode'
import debounce from 'lodash/debounce'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import { Notify } from 'components/Notification/NotificationComponent'
import setCommonValue from 'actions/setCommonValue'


const searchValue = debounce(async (value = '', dispatch, { common }) => {
  const { searching } = common
  dispatch(setCommonValue('foundPeople', undefined))
  if (value.trim().length < 1) {
    return null
  }
  try {
    dispatch(setCommonValue('searching', true))
    const sValue = uue(value)
    const { data } = await GET(`${endpoint.searchPeople()}/${sValue}`)
    dispatch(setCommonValue('foundPeople', data))
    dispatch(setCommonValue('searching', false))
  } catch (e) {
    Notify.error('Bad Request')
    dispatch(setCommonValue('searching', false))
  }
}, 500)


export default (value) => (dispatch, getState) => searchValue(value, dispatch, getState())