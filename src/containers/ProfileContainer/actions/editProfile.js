import setCommonValue from 'actions/setCommonValue'

export default (value = true) => dispatch => {
  dispatch(setCommonValue('profileEdit', value))
}