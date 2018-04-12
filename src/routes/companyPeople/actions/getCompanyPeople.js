import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'
import { Notify } from 'components/Notification/NotificationComponent'

const getCompanyPeople = async (dispatch, { common: { user: { companyId } } }) => {


    try {

        dispatch(updateCompanyPeopleValue('loadingPeople', true))
        const { data } = await GET(`${endpoint.companies()}/${companyId}/people`)
        dispatch(updateCompanyPeopleValue('people', data))
        dispatch(updateCompanyPeopleValue('loadingPeople', false))
    } catch (e) {
        Notify.error(`Can't load people list`)
        dispatch(updateCompanyPeopleValue('loadingPeople', false))
    }


}

export default () => (dispatch, getState) => getCompanyPeople(dispatch, getState())