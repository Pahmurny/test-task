import { push } from 'react-router-redux'
import closeUserProfile from 'containers/ProfileContainer/actions/closeUserProfile'
import updateFilter from 'routes/feedback/actions/updateFilter'
import { url } from 'helpers/url'


export default () => (dispatch, getState) => {
  const { common: { showUserProfile } } = getState()
  dispatch(closeUserProfile())
  dispatch(updateFilter('searchPeople', [showUserProfile]))
  dispatch(push(url.company()))
}