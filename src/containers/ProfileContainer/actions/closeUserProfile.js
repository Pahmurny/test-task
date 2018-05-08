import setCommonValue from 'actions/setCommonValue'

/**
 * Opens profile modal window
 *
 * @returns {Function}
 */
export default () => dispatch => {

  dispatch(setCommonValue('showUserProfile', null))


  /**
   * Disable edit mode for opened profile
   */
  dispatch(setCommonValue('profileEdit', false))
}