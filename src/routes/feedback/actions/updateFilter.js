import setFilter from 'routes/feedback/actions/setFilter'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'

const setFilterValue = (filterField, value, dispatch) => {
    const filter = { [filterField]: value }
    dispatch(setFilter(filter))
    dispatch(getFeedbacks())
}


export default (filterField, value) => dispatch => setFilterValue(filterField, value, dispatch)