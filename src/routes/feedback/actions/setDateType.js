import { SET_FEEDBACK_FILTER } from 'routes/feedback/feedbackReducer'
import { MonthlyDates, Quarters, TwoWeeksDates, WeeklyDates } from 'helpers/dates'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'

const DatesHelpers = [
    WeeklyDates,
    TwoWeeksDates,
    MonthlyDates,
    Quarters,
]

const setDateType = (dateType, dispatch) => {
    const dates = DatesHelpers[dateType]()
    const filter = { dateType, dates, selectedDate: dates[0] }

    dispatch({ type: SET_FEEDBACK_FILTER, filter })
    dispatch(getFeedbacks())
}

export default (type = 0) => dispatch => setDateType(type, dispatch)