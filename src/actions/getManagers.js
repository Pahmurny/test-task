import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import setCommonValue from 'actions/setCommonValue'
import { Notify } from 'components/Notification/NotificationComponent'

const getManagers = async (dispatch) => {

    try {
        dispatch(setCommonValue('loadingManagers', true))
        const { data } = await GET(endpoint.managers())
        dispatch(setCommonValue('managers', data))
        dispatch(setCommonValue('loadingManagers', false))

    } catch (e) {
        Notify.error('Error loading Managers list', 'API Error')
        dispatch(setCommonValue('loadingManagers', false))
    }


}

export default () => dispatch => getManagers(dispatch)