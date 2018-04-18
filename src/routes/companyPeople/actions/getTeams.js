import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'

const getTeams = async (dispatch, { common: { user } }) => {

    const { companyId } = user
    try {
        dispatch(updateCompanyPeopleValue('loadingTeams', true))
        const { data } = await GET(`${endpoint.companies()}/${companyId}/teams`)
        dispatch(updateCompanyPeopleValue('loadingTeams', false))
        dispatch(updateCompanyPeopleValue('company', data))

    } catch (e) {
        dispatch(updateCompanyPeopleValue('loadingTeams', false))
    }


}

export default () => (dispatch, getState) => getTeams(dispatch, getState())