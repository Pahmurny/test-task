import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import updateTeamValue from 'routes/companyPeople/actions/updateTeamValue'


const getTagsData = async (id, dispatch, { companyPeople }) => {

    try {
        dispatch(updateTeamValue(id, 'loading', true))
        const { data } = await GET(`${endpoint.tags()}/${id}/data`)
        dispatch(updateTeamValue(id, 'loading', false))
        dispatch(updateTeamValue(id, 'blocks', data[0].data))
    } catch (e) {
        dispatch(updateTeamValue(id, 'loading', false))
    }
}

export default (id) => (dispatch, getState) => getTagsData(id, dispatch, getState())