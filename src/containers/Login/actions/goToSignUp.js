import { push } from 'react-router-redux'
import { url } from 'helpers/url'

export default () => dispatch => {
  dispatch(push(url.signup()))
}