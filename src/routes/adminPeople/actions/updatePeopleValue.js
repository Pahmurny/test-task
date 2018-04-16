import { UPDATE_PEOPLE_VALUE } from 'routes/adminPeople/reducer/peopleReducer'


/**
 * Helper to change reducer value
 * @param key
 * @param value
 * @returns {{type: string, key: *, value: *}}
 */
export default (key, value) => ({
    type: UPDATE_PEOPLE_VALUE,
    key,
    value
})