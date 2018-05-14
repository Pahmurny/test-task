import setCommonValue from 'actions/setCommonValue'

export default () => dispatch => {
  dispatch(setCommonValue('showUserProfile', null))
}