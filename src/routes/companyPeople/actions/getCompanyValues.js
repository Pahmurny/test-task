import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'

export default () => (dispatch, getState) => (async (dispatch, { common: { user: { companyId } }, companyPeople }) => {
    const { loadingCompany } = companyPeople

    if (loadingCompany) {
        return
    }

    try {
        dispatch(updateCompanyPeopleValue('loadingCompany', true))
        const { data } = await GET(`${endpoint.companies()}/${companyId}/values`)
        dispatch(updateCompanyPeopleValue('loadingCompany', false))
        dispatch(updateCompanyPeopleValue('companyValues', data))
    } catch (e) {
        dispatch(updateCompanyPeopleValue('loadingCompany', false))
    }

})(dispatch, getState())