import { UPDATE_PEOPLE_VALUE } from 'routes/adminPeople/reducer/peopleReducer'



export default (key, value) => ({
    type: UPDATE_PEOPLE_VALUE,
    key,
    value
})