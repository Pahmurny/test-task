import { getFormValues } from 'redux-form'
import qs from 'query-string'
import db from 'lodash/debounce'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'
import { Notify } from 'components/Notification/NotificationComponent'

const getCompanyPeople = db(async (dispatch, { common: { user: { companyId } }, ...state }, page) => {


    try {
        const values = getFormValues('companyPeople')(state)
        const params = {...values, page}
        dispatch(updateCompanyPeopleValue('loadingPeople', true))
        const { data } = await GET(`${endpoint.companies()}/${companyId}/people?${qs.stringify(params)}`)
        dispatch(updateCompanyPeopleValue('people', data))
        dispatch(updateCompanyPeopleValue('loadingPeople', false))
    } catch (e) {
        Notify.error(`Can't load people list`)
        dispatch(updateCompanyPeopleValue('loadingPeople', false))
    }


}, 500)

export default (page = 1) => (dispatch, getState) => getCompanyPeople(dispatch, getState(), page)