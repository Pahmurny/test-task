import setDateType from 'routes/feedback/actions/setDateType'
import deb from 'lodash/debounce'


export default (type = 0) => dispatch => dispatch(setDateType(type))