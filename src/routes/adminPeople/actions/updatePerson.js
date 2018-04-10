import { PUT } from 'helpers/request'
import { endpoint } from 'helpers/url'
import { Notify } from 'components/Notification/NotificationComponent'
import updatePeopleValue from 'routes/adminPeople/actions/updatePeopleValue'
import getPeople from 'routes/adminPeople/actions/getPeople'

const updatePerson = async (values, dispatch) => {
    const { id } = values

    console.log(values)
    try {

       // await PUT(`${endpoint.people()}/${id}`, values)
        dispatch(updatePeopleValue('memberData', false))
        dispatch(getPeople())

    } catch (e) {
        Notify.error('Error updating person')
    }

}


export default (values) => dispatch => updatePerson(values, dispatch)