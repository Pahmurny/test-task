import setDateType from 'routes/feedback/actions/setDateType'


export default (type = 0) => dispatch => dispatch(setDateType(type))