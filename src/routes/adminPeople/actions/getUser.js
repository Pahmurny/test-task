import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import updatePeopleValue from 'routes/adminPeople/actions/updatePeopleValue'
import { Notify } from 'components/Notification/NotificationComponent'

const getUser = async (id, dispatch, { people: { loadingPerson } }) => {

    const url = `${endpoint.people()}/${id}`

    if (loadingPerson) {
        return
    }
    try {
        dispatch(updatePeopleValue('loadingPerson', true))

        const { data } = await GET(url)
        dispatch(updatePeopleValue('loadingPerson', false))
        dispatch(updatePeopleValue('memberData', data))
    } catch (e) {
        Notify.error(`Can't get member information`, 'API error', 0)
        dispatch(updatePeopleValue('loadingPerson', false))
    }
}

export default (id) => (dispatch, getState) => getUser(id, dispatch, getState())