import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import setCommonValue from 'actions/setCommonValue'
import { Notify } from 'components/Notification/NotificationComponent'

const getTags = async (dispatch) => {

    const { data } = await GET(endpoint.tags())

    try {
        dispatch(setCommonValue('loadingTags', true))
        dispatch(setCommonValue('loadingTags', false))
        dispatch(setCommonValue('tags', data))
    } catch (e) {
        Notify.error('Error loading tags')
        dispatch(setCommonValue('loadingTags', false))
    }

}


export default () => dispatch => getTags(dispatch)