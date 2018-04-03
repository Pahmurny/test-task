import updatePeopleValue from 'routes/adminPeople/actions/updatePeopleValue'
import { GET } from 'helpers/request'
import { endpoint } from 'helpers/url'



const getPeople = async (dispatch) => {

    try {
        const { data } = await GET(endpoint.peoples())
        dispatch(updatePeopleValue('loadingPeople', true))
        dispatch(updatePeopleValue('people', data))
        dispatch(updatePeopleValue('loadingPeople', false))

    } catch (e) {
        dispatch(updatePeopleValue('loadingPeople', false))
    }
}



export default () => dispatch => getPeople(dispatch)