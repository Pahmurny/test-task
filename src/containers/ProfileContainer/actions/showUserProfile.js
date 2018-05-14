import setCommonValue from 'actions/setCommonValue'

export default (user) => dispatch => {
  dispatch(setCommonValue('showUserProfile', user))
}