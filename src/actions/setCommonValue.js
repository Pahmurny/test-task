import { SET_COMMON_VALUE } from 'reducers/common'


const setCommonValue = (key, value, dispatch) => {
    dispatch({
        type: SET_COMMON_VALUE,
        key,
        value,
    })
}

export default (key, value) => (dispatch) => setCommonValue(key, value, dispatch)