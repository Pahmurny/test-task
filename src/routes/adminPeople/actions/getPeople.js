import qs from 'query-string'
import updatePeopleValue from 'routes/adminPeople/actions/updatePeopleValue'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import { Notify } from 'components/Notification/NotificationComponent'

/**
 * Get People from the API
 * @param dispatch
 * @param form
 * @returns {Promise<void>}
 */
const getPeople = async (dispatch, form) => {

    try {
        let url = endpoint.people()

        if (form) {
            if (form.active === false) {
                delete form.active
            }

            url = `${url}?${qs.stringify(form)}`
        }

        const { data } = await GET(`${url}`)
        dispatch(updatePeopleValue('loadingPeople', true))
        dispatch(updatePeopleValue('people', data))
        dispatch(updatePeopleValue('loadingPeople', false))

    } catch (e) {
        Notify.error('Error in API call', 'API ERROR', 0)
        dispatch(updatePeopleValue('loadingPeople', false))
    }
}


export default (form = false) => dispatch => getPeople(dispatch, form)