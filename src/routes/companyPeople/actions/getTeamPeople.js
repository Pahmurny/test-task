import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import updateTeamValue from 'routes/companyPeople/actions/updateTeamValue'


const getTeamPeople = async (id, dispatch, { companyPeople }) => {

    try {
        dispatch(updateTeamValue(id, 'loading', true))
        const { data } = await GET(`${endpoint.teams()}/${id}/tags`)
        dispatch(updateTeamValue(id, 'loading', false))
        dispatch(updateTeamValue(id, 'people', data))
    } catch (e) {
        dispatch(updateTeamValue(id, 'loading', false))
    }
}

export default (id) => (dispatch, getState) => getTeamPeople(id, dispatch, getState())